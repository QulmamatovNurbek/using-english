import { useState, useEffect, useCallback, useRef } from "react";
import { block1Lessons } from "./data/lessonsBlock1";
import { block2Lessons } from "./data/lessonsBlock2";
import { block2bLessons } from "./data/lessonsBlock2b";
import { block3Lessons } from "./data/lessonsBlock3";
import { block4Lessons } from "./data/lessonsBlock4";
import { block5and6Lessons } from "./data/lessonsBlock5and6";

// ─── ALL LESSONS ─────────────────────────────────────────────────────────────
const ALL_LESSONS = [
  ...block1Lessons,
  ...block2Lessons,
  ...block2bLessons,
  ...block3Lessons,
  ...block4Lessons,
  ...block5and6Lessons,
];

// ─── CONSTANTS ───────────────────────────────────────────────────────────────
const PASS_SCORE = 80;
const XP_PER_LESSON = 50;
const XP_PER_PERFECT = 100;
const STORAGE_KEY = "englishApp_v2";

// ─── INITIAL STATE ────────────────────────────────────────────────────────────
const initialState = {
  unlockedLessons: [1],
  completedLessons: [],
  quizScores: {},
  xp: 0,
  streak: 0,
  lastStudyDate: null,
  hearts: 5,
  level: 1,
};

// ─── STORAGE ─────────────────────────────────────────────────────────────────
const loadState = () => {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    return s ? { ...initialState, ...JSON.parse(s) } : initialState;
  } catch {
    return initialState;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const getLevelFromXP = (xp) => Math.floor(xp / 500) + 1;

// ─── BLOCK COLORS MAP ─────────────────────────────────────────────────────────
const BLOCK_BG = {
  "#22c55e": { bg: "from-green-500 to-green-700", badge: "bg-green-500" },
  "#eab308": { bg: "from-yellow-500 to-yellow-700", badge: "bg-yellow-500" },
  "#f97316": { bg: "from-orange-500 to-orange-700", badge: "bg-orange-500" },
  "#ef4444": { bg: "from-red-500 to-red-700", badge: "bg-red-500" },
  "#8b5cf6": { bg: "from-purple-500 to-purple-700", badge: "bg-purple-500" },
};

// ══════════════════════════════════════════════════════════════════════════════
// MAIN APP
// ══════════════════════════════════════════════════════════════════════════════
export default function App() {
  const [state, setState] = useState(loadState);
  const [screen, setScreen] = useState("home"); // home | lesson | quiz | result
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeSection, setActiveSection] = useState("explanation"); // explanation | vocab | exercises | quiz
  const [quizState, setQuizState] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [resultData, setResultData] = useState(null);

  // persist
  useEffect(() => {
    saveState(state);
  }, [state]);

  // streak management
  useEffect(() => {
    const today = new Date().toDateString();
    if (state.lastStudyDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      setState((prev) => ({
        ...prev,
        streak: prev.lastStudyDate === yesterday.toDateString() ? prev.streak : prev.streak > 0 ? prev.streak - 1 : 0,
        lastStudyDate: today,
      }));
    }
  }, []);

  const openLesson = (lesson) => {
    if (!state.unlockedLessons.includes(lesson.id)) return;
    setActiveLesson(lesson);
    setActiveSection("explanation");
    setScreen("lesson");
  };

  const startQuiz = () => {
    const lesson = activeLesson;
    const questions = shuffle(lesson.quiz).slice(0, 10);
    setQuizState({
      questions,
      current: 0,
      answers: [],
      selected: null,
      showFeedback: false,
      score: 0,
    });
    setActiveSection("quiz");
  };

  const answerQuiz = (optionIndex) => {
    if (quizState.showFeedback) return;
    setQuizState((prev) => ({ ...prev, selected: optionIndex, showFeedback: true }));
  };

  const nextQuizQuestion = () => {
    const { questions, current, answers, selected, score } = quizState;
    const correct = questions[current].answer === selected;
    const newAnswers = [...answers, { selected, correct }];
    const newScore = correct ? score + 1 : score;

    if (current + 1 >= questions.length) {
      // Quiz done
      const pct = Math.round((newScore / questions.length) * 100);
      const passed = pct >= PASS_SCORE;
      const isPerfect = pct === 100;
      const lessonId = activeLesson.id;
      const xpGained = isPerfect ? XP_PER_PERFECT : passed ? XP_PER_LESSON : Math.floor(XP_PER_LESSON * 0.3);

      setState((prev) => {
        const newUnlocked = passed && lessonId < ALL_LESSONS.length
          ? [...new Set([...prev.unlockedLessons, lessonId + 1])]
          : prev.unlockedLessons;
        const newCompleted = passed
          ? [...new Set([...prev.completedLessons, lessonId])]
          : prev.completedLessons;
        const newXP = prev.xp + xpGained;
        return {
          ...prev,
          unlockedLessons: newUnlocked,
          completedLessons: newCompleted,
          quizScores: { ...prev.quizScores, [lessonId]: Math.max(prev.quizScores[lessonId] || 0, pct) },
          xp: newXP,
          level: getLevelFromXP(newXP),
          streak: prev.streak + (passed ? 1 : 0),
          lastStudyDate: new Date().toDateString(),
        };
      });

      setResultData({ score: newScore, total: questions.length, pct, passed, xpGained, isPerfect, answers: newAnswers, questions });
      setScreen("result");
      if (passed) setShowCelebration(true);
    } else {
      setQuizState((prev) => ({
        ...prev,
        current: prev.current + 1,
        answers: newAnswers,
        score: newScore,
        selected: null,
        showFeedback: false,
      }));
    }
  };

  const goHome = () => {
    setScreen("home");
    setActiveLesson(null);
    setQuizState(null);
    setResultData(null);
    setShowCelebration(false);
  };

  return (
    <div className="app-root">
      {showCelebration && <ConfettiOverlay onDone={() => setShowCelebration(false)} />}
      {screen === "home" && (
        <HomeScreen state={state} onOpenLesson={openLesson} />
      )}
      {screen === "lesson" && activeLesson && (
        <LessonScreen
          lesson={activeLesson}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          quizState={quizState}
          onStartQuiz={startQuiz}
          onAnswerQuiz={answerQuiz}
          onNextQuizQuestion={nextQuizQuestion}
          onGoHome={goHome}
          state={state}
        />
      )}
      {screen === "result" && resultData && (
        <ResultScreen
          result={resultData}
          lesson={activeLesson}
          onGoHome={goHome}
          onRetry={startQuiz}
          state={state}
        />
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// HOME SCREEN
// ══════════════════════════════════════════════════════════════════════════════
function HomeScreen({ state, onOpenLesson }) {
  const { unlockedLessons, completedLessons, xp, streak, level, quizScores } = state;
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = searchQuery
    ? ALL_LESSONS.filter(
        (l) =>
          l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          l.block.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : ALL_LESSONS;

  // Group by block
  const blocks = [];
  const seen = new Set();
  for (const l of filtered) {
    if (!seen.has(l.block)) {
      seen.add(l.block);
      blocks.push({ name: l.block, color: l.blockColor, lessons: filtered.filter((x) => x.block === l.block) });
    }
  }

  const totalLessons = ALL_LESSONS.length;
  const completedCount = completedLessons.length;
  const progressPct = Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="home-screen">
      {/* Header */}
      <header className="home-header">
        <div className="header-logo">
          <span className="logo-icon">🎓</span>
          <div>
            <h1 className="logo-title">English Grammar</h1>
            <p className="logo-sub">Cambridge Intermediate</p>
          </div>
        </div>
        <div className="header-stats">
          <StatBadge icon="⚡" value={xp} label="XP" color="#fbbf24" />
          <StatBadge icon="🔥" value={streak} label="Streak" color="#f97316" />
          <StatBadge icon="⭐" value={level} label="Daraja" color="#a78bfa" />
        </div>
      </header>

      {/* Progress bar */}
      <div className="progress-section">
        <div className="progress-info">
          <span className="progress-text">Umumiy progress</span>
          <span className="progress-count">{completedCount}/{totalLessons} dars</span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <p className="progress-sub">{progressPct}% tugallangan · Keyingi daraja uchun {500 - (xp % 500)} XP</p>
      </div>

      {/* Search */}
      <div className="search-wrap">
        <span className="search-icon">🔍</span>
        <input
          className="search-input"
          placeholder="Dars yoki mavzu qidiring..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button className="search-clear" onClick={() => setSearchQuery("")}>✕</button>
        )}
      </div>

      {/* Lesson blocks */}
      <div className="blocks-container">
        {blocks.map((block) => (
          <BlockSection
            key={block.name}
            block={block}
            unlockedLessons={unlockedLessons}
            completedLessons={completedLessons}
            quizScores={quizScores}
            onOpenLesson={onOpenLesson}
          />
        ))}
      </div>
    </div>
  );
}

function StatBadge({ icon, value, label, color }) {
  return (
    <div className="stat-badge">
      <span className="stat-icon">{icon}</span>
      <div>
        <div className="stat-value" style={{ color }}>{value}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
}

function BlockSection({ block, unlockedLessons, completedLessons, quizScores, onOpenLesson }) {
  const [collapsed, setCollapsed] = useState(false);
  const completedInBlock = block.lessons.filter((l) => completedLessons.includes(l.id)).length;
  const blockPct = Math.round((completedInBlock / block.lessons.length) * 100);

  return (
    <div className="block-section">
      <button className="block-header" onClick={() => setCollapsed((v) => !v)}>
        <div className="block-header-left">
          <div className="block-color-dot" style={{ background: block.color }} />
          <div>
            <h2 className="block-title">{block.name}</h2>
            <p className="block-sub">{completedInBlock}/{block.lessons.length} dars · {blockPct}%</p>
          </div>
        </div>
        <span className="block-chevron">{collapsed ? "▶" : "▼"}</span>
      </button>
      {!collapsed && (
        <div className="block-lessons-grid">
          {block.lessons.map((lesson) => {
            const unlocked = unlockedLessons.includes(lesson.id);
            const completed = completedLessons.includes(lesson.id);
            const score = quizScores[lesson.id];
            return (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                unlocked={unlocked}
                completed={completed}
                score={score}
                onClick={() => onOpenLesson(lesson)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

function LessonCard({ lesson, unlocked, completed, score, onClick }) {
  const locked = !unlocked;
  return (
    <button
      className={`lesson-card ${locked ? "lesson-card--locked" : ""} ${completed ? "lesson-card--completed" : ""}`}
      onClick={onClick}
      disabled={locked}
      title={locked ? "Oldingi darsni tugatib oching" : lesson.title}
    >
      <div className="lesson-card-num">
        {completed ? "✅" : locked ? "🔒" : "📖"}
        <span>#{lesson.id}</span>
      </div>
      <div className="lesson-card-title">{lesson.title}</div>
      {score !== undefined && (
        <div className={`lesson-score ${score >= 80 ? "lesson-score--good" : "lesson-score--bad"}`}>
          {score}%
        </div>
      )}
      {!locked && !completed && (
        <div className="lesson-card-start">Boshlash →</div>
      )}
    </button>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// LESSON SCREEN
// ══════════════════════════════════════════════════════════════════════════════
function LessonScreen({ lesson, activeSection, setActiveSection, quizState, onStartQuiz, onAnswerQuiz, onNextQuizQuestion, onGoHome, state }) {
  const tabs = [
    { id: "explanation", label: "📚 Darslik", icon: "📚" },
    { id: "vocab", label: "📝 Lug'at", icon: "📝" },
    { id: "exercises", label: "✍️ Mashqlar", icon: "✍️" },
    { id: "quiz", label: "🎯 Test", icon: "🎯" },
  ];

  return (
    <div className="lesson-screen">
      {/* Lesson Header */}
      <div className="lesson-header" style={{ background: `linear-gradient(135deg, ${lesson.blockColor}dd, ${lesson.blockColor}88)` }}>
        <button className="back-btn" onClick={onGoHome}>← Bosh sahifa</button>
        <div className="lesson-header-content">
          <span className="lesson-block-badge">{lesson.block}</span>
          <h1 className="lesson-main-title">{lesson.title}</h1>
          <p className="lesson-num">Dars #{lesson.id} · 50 darsdan</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="lesson-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`lesson-tab ${activeSection === tab.id ? "lesson-tab--active" : ""}`}
            onClick={() => {
              if (tab.id === "quiz" && !quizState) onStartQuiz();
              else setActiveSection(tab.id);
            }}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label.split(" ").slice(1).join(" ")}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="lesson-content">
        {activeSection === "explanation" && <ExplanationSection lesson={lesson} />}
        {activeSection === "vocab" && <VocabSection lesson={lesson} />}
        {activeSection === "exercises" && <ExercisesSection lesson={lesson} />}
        {activeSection === "quiz" && quizState && (
          <QuizSection
            quizState={quizState}
            onAnswer={onAnswerQuiz}
            onNext={onNextQuizQuestion}
          />
        )}
        {activeSection === "quiz" && !quizState && (
          <div className="quiz-start-prompt">
            <div className="quiz-prompt-icon">🎯</div>
            <h3>Testga tayyor bo'ldingizmi?</h3>
            <p>10 ta savol · ≥80% o'tish uchun. Navbatdagi darsni ochish uchun shu testdan o'tishingiz kerak.</p>
            <button className="btn-primary" onClick={onStartQuiz}>Testni boshlash</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ── EXPLANATION SECTION ───────────────────────────────────────────────────────
function ExplanationSection({ lesson }) {
  return (
    <div className="explanation-section">
      {lesson.explanation.map((block, i) => (
        <div className="explanation-block" key={i}>
          <h3 className="exp-heading">{block.heading}</h3>
          <p className="exp-text">{block.text}</p>
          <div className="exp-examples">
            {block.examples.map((ex, j) => (
              <div key={j} className="exp-example">
                <span className="ex-bullet">▶</span>
                <span>{ex}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── VOCAB SECTION ─────────────────────────────────────────────────────────────
function VocabSection({ lesson }) {
  const [flipped, setFlipped] = useState({});
  const [search, setSearch] = useState("");

  const filtered = lesson.vocabulary.filter(
    (v) =>
      v.word.toLowerCase().includes(search.toLowerCase()) ||
      v.translation.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="vocab-section">
      <div className="vocab-search-wrap">
        <input
          className="search-input"
          placeholder="So'z qidirish..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <p className="vocab-count">{filtered.length} ta so'z</p>
      <div className="vocab-grid">
        {filtered.map((item, i) => (
          <div
            key={i}
            className={`vocab-card ${flipped[i] ? "vocab-card--flipped" : ""}`}
            onClick={() => setFlipped((prev) => ({ ...prev, [i]: !prev[i] }))}
          >
            <div className="vocab-card-inner">
              <div className="vocab-card-front">
                <div className="vocab-word">{item.word}</div>
                <div className="vocab-pos">{item.partOfSpeech}</div>
                <div className="vocab-flip-hint">Tarjimani ko'rish uchun bosing</div>
              </div>
              <div className="vocab-card-back">
                <div className="vocab-translation">{item.translation}</div>
                <div className="vocab-example">{item.exampleSentence}</div>
                <div className="vocab-example-uz">{item.exampleTranslation}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── EXERCISES SECTION ─────────────────────────────────────────────────────────
function ExercisesSection({ lesson }) {
  const [exIdx, setExIdx] = useState(0);
  const exercises = lesson.exercises || [];
  if (!exercises.length) return <div className="no-content">Mashqlar mavjud emas.</div>;
  const ex = exercises[exIdx];

  return (
    <div className="exercises-section">
      <div className="exercise-nav">
        {exercises.map((e, i) => (
          <button
            key={i}
            className={`ex-nav-btn ${i === exIdx ? "ex-nav-btn--active" : ""}`}
            onClick={() => setExIdx(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div className="exercise-wrapper">
        <ExerciseBlock exercise={ex} key={exIdx} />
      </div>
    </div>
  );
}

function ExerciseBlock({ exercise }) {
  if (exercise.type === "fillBlank") return <FillBlankExercise exercise={exercise} />;
  if (exercise.type === "multipleChoice") return <MCExercise exercise={exercise} />;
  if (exercise.type === "wordOrder") return <WordOrderExercise exercise={exercise} />;
  if (exercise.type === "matchPairs") return <MatchPairsExercise exercise={exercise} />;
  if (exercise.type === "errorCorrection") return <ErrorCorrectionExercise exercise={exercise} />;
  return <div>Noma'lum mashq turi</div>;
}

function FillBlankExercise({ exercise }) {
  const [answers, setAnswers] = useState(Array(exercise.items.length).fill(""));
  const [checked, setChecked] = useState(false);

  const check = () => setChecked(true);
  const reset = () => { setAnswers(Array(exercise.items.length).fill("")); setChecked(false); };

  return (
    <div className="ex-block">
      <h4 className="ex-title">{exercise.title}</h4>
      {exercise.items.map((item, i) => {
        const correct = checked && answers[i].trim().toLowerCase() === item.answer.toLowerCase();
        const wrong = checked && answers[i].trim().toLowerCase() !== item.answer.toLowerCase();
        return (
          <div key={i} className={`fill-item ${correct ? "fill-item--correct" : ""} ${wrong ? "fill-item--wrong" : ""}`}>
            <span className="fill-sentence">{item.sentence.replace("___", "____")}</span>
            <div className="fill-input-row">
              <input
                className="fill-input"
                value={answers[i]}
                onChange={(e) => { const a = [...answers]; a[i] = e.target.value; setAnswers(a); }}
                disabled={checked}
                placeholder="Javob..."
              />
              {checked && (
                <span className={`fill-status ${correct ? "fill-status--ok" : "fill-status--err"}`}>
                  {correct ? "✅" : `❌ → ${item.answer}`}
                </span>
              )}
            </div>
          </div>
        );
      })}
      <div className="ex-btns">
        {!checked ? (
          <button className="btn-primary" onClick={check}>Tekshirish</button>
        ) : (
          <button className="btn-secondary" onClick={reset}>Qayta urinish</button>
        )}
      </div>
    </div>
  );
}

function MCExercise({ exercise }) {
  const [answers, setAnswers] = useState(Array(exercise.items.length).fill(null));
  const [checked, setChecked] = useState(false);

  const select = (qi, oi) => {
    if (checked) return;
    const a = [...answers]; a[qi] = oi; setAnswers(a);
  };

  const check = () => setChecked(true);
  const reset = () => { setAnswers(Array(exercise.items.length).fill(null)); setChecked(false); };

  return (
    <div className="ex-block">
      <h4 className="ex-title">{exercise.title}</h4>
      {exercise.items.map((item, qi) => (
        <div key={qi} className="mc-item">
          <p className="mc-question">{qi + 1}. {item.question}</p>
          <div className="mc-options">
            {item.options.map((opt, oi) => {
              const selected = answers[qi] === oi;
              const correct = checked && oi === item.answer;
              const wrong = checked && selected && oi !== item.answer;
              return (
                <button
                  key={oi}
                  className={`mc-option ${selected ? "mc-option--selected" : ""} ${correct ? "mc-option--correct" : ""} ${wrong ? "mc-option--wrong" : ""}`}
                  onClick={() => select(qi, oi)}
                >
                  <span className="mc-opt-letter">{["A","B","C","D"][oi]}</span>
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      <div className="ex-btns">
        {!checked ? (
          <button className="btn-primary" onClick={check}>Tekshirish</button>
        ) : (
          <button className="btn-secondary" onClick={reset}>Qayta urinish</button>
        )}
      </div>
    </div>
  );
}

function WordOrderExercise({ exercise }) {
  const [itemStates, setItemStates] = useState(() =>
    exercise.items.map((item) => ({ pool: shuffle([...item.words]), chosen: [] }))
  );
  const [checked, setChecked] = useState(false);

  const pickWord = (ii, word, fromPool) => {
    if (checked) return;
    setItemStates((prev) =>
      prev.map((s, i) => {
        if (i !== ii) return s;
        if (fromPool) {
          return { pool: s.pool.filter((_, j) => s.pool.indexOf(word) !== j ? true : (s.pool.splice(s.pool.indexOf(word), 1), false)), chosen: [...s.chosen, word] };
        } else {
          const idx = s.chosen.indexOf(word);
          const newChosen = [...s.chosen]; newChosen.splice(idx, 1);
          return { pool: [...s.pool, word], chosen: newChosen };
        }
      })
    );
  };

  const addWord = (ii, word) => {
    if (checked) return;
    setItemStates((prev) =>
      prev.map((s, i) => {
        if (i !== ii) return s;
        const idx = s.pool.findIndex((w) => w === word);
        if (idx === -1) return s;
        const newPool = [...s.pool]; newPool.splice(idx, 1);
        return { pool: newPool, chosen: [...s.chosen, word] };
      })
    );
  };

  const removeWord = (ii, idx) => {
    if (checked) return;
    setItemStates((prev) =>
      prev.map((s, i) => {
        if (i !== ii) return s;
        const word = s.chosen[idx];
        const newChosen = [...s.chosen]; newChosen.splice(idx, 1);
        return { pool: [...s.pool, word], chosen: newChosen };
      })
    );
  };

  const check = () => setChecked(true);
  const reset = () => {
    setItemStates(exercise.items.map((item) => ({ pool: shuffle([...item.words]), chosen: [] })));
    setChecked(false);
  };

  return (
    <div className="ex-block">
      <h4 className="ex-title">{exercise.title}</h4>
      {exercise.items.map((item, ii) => {
        const answer = itemStates[ii].chosen.join(" ").toLowerCase().replace(/[.!?]/g, "");
        const expected = item.answer.toLowerCase().replace(/[.!?]/g, "");
        const correct = checked && answer === expected;
        const wrong = checked && answer !== expected;
        return (
          <div key={ii} className={`wo-item ${correct ? "wo-item--correct" : ""} ${wrong ? "wo-item--wrong" : ""}`}>
            <p className="wo-num">{ii + 1}.</p>
            <div className="wo-chosen">
              {itemStates[ii].chosen.map((word, wi) => (
                <button key={wi} className="wo-chip wo-chip--chosen" onClick={() => removeWord(ii, wi)}>{word}</button>
              ))}
              {itemStates[ii].chosen.length === 0 && <span className="wo-placeholder">So'zlarni shu yerga bosing...</span>}
            </div>
            <div className="wo-pool">
              {itemStates[ii].pool.map((word, wi) => (
                <button key={wi} className="wo-chip wo-chip--pool" onClick={() => addWord(ii, word)}>{word}</button>
              ))}
            </div>
            {checked && (
              <p className={`wo-feedback ${correct ? "wo-fb--ok" : "wo-fb--err"}`}>
                {correct ? "✅ To'g'ri!" : `❌ To'g'ri: "${item.answer}"`}
              </p>
            )}
          </div>
        );
      })}
      <div className="ex-btns">
        {!checked ? (
          <button className="btn-primary" onClick={check}>Tekshirish</button>
        ) : (
          <button className="btn-secondary" onClick={reset}>Qayta urinish</button>
        )}
      </div>
    </div>
  );
}

function MatchPairsExercise({ exercise }) {
  const [pairs] = useState(() => shuffle(exercise.pairs));
  const [rightSide] = useState(() => shuffle(exercise.pairs.map((p) => p.uzbek)));
  const [selected, setSelected] = useState({ left: null, right: null });
  const [matched, setMatched] = useState([]);
  const [wrong, setWrong] = useState([]);

  const selectLeft = (idx) => {
    if (matched.includes(idx)) return;
    setSelected((prev) => ({ ...prev, left: idx }));
    if (selected.right !== null) tryMatch(idx, selected.right);
  };

  const selectRight = (uzbek) => {
    if (matched.map((m) => pairs[m].uzbek).includes(uzbek)) return;
    setSelected((prev) => ({ ...prev, right: uzbek }));
    if (selected.left !== null) tryMatch(selected.left, uzbek);
  };

  const tryMatch = (leftIdx, rightUzbek) => {
    if (pairs[leftIdx].uzbek === rightUzbek) {
      setMatched((prev) => [...prev, leftIdx]);
      setWrong([]);
    } else {
      setWrong([leftIdx, rightUzbek]);
      setTimeout(() => setWrong([]), 800);
    }
    setSelected({ left: null, right: null });
  };

  const allMatched = matched.length === pairs.length;

  return (
    <div className="ex-block">
      <h4 className="ex-title">{exercise.title}</h4>
      {allMatched && <div className="match-success">🎉 Hammasi to'g'ri!</div>}
      <div className="match-grid">
        <div className="match-col">
          {pairs.map((p, i) => (
            <button
              key={i}
              className={`match-chip match-chip--left ${matched.includes(i) ? "match-chip--matched" : ""} ${selected.left === i ? "match-chip--sel" : ""} ${wrong.includes(i) ? "match-chip--wrong" : ""}`}
              onClick={() => selectLeft(i)}
              disabled={matched.includes(i)}
            >
              {p.english}
            </button>
          ))}
        </div>
        <div className="match-col">
          {rightSide.map((uzbek, i) => {
            const parentIdx = pairs.findIndex((p) => p.uzbek === uzbek);
            const isMatched = matched.includes(parentIdx);
            return (
              <button
                key={i}
                className={`match-chip match-chip--right ${isMatched ? "match-chip--matched" : ""} ${selected.right === uzbek ? "match-chip--sel" : ""} ${wrong.includes(uzbek) ? "match-chip--wrong" : ""}`}
                onClick={() => selectRight(uzbek)}
                disabled={isMatched}
              >
                {uzbek}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ErrorCorrectionExercise({ exercise }) {
  const [answers, setAnswers] = useState(Array(exercise.items.length).fill(""));
  const [checked, setChecked] = useState(false);

  const check = () => setChecked(true);
  const reset = () => { setAnswers(Array(exercise.items.length).fill("")); setChecked(false); };

  return (
    <div className="ex-block">
      <h4 className="ex-title">{exercise.title}</h4>
      {exercise.items.map((item, i) => {
        const userAns = answers[i].trim().toLowerCase();
        const expectedAns = item.correction.toLowerCase();
        const correct = checked && userAns === expectedAns;
        const wrong = checked && userAns !== expectedAns;
        return (
          <div key={i} className={`errfix-item ${correct ? "errfix-item--correct" : ""} ${wrong ? "errfix-item--wrong" : ""}`}>
            <p className="errfix-sentence">
              📝 <em>{item.sentence}</em>
            </p>
            <p className="errfix-error">
              ❌ Xato so'z: <strong className="err-word">{item.errorWord}</strong>
            </p>
            <div className="fill-input-row">
              <input
                className="fill-input"
                value={answers[i]}
                onChange={(e) => { const a = [...answers]; a[i] = e.target.value; setAnswers(a); }}
                disabled={checked}
                placeholder="To'g'ri javob..."
              />
              {checked && (
                <span className={`fill-status ${correct ? "fill-status--ok" : "fill-status--err"}`}>
                  {correct ? "✅" : `❌ → ${item.correction}`}
                </span>
              )}
            </div>
          </div>
        );
      })}
      <div className="ex-btns">
        {!checked ? (
          <button className="btn-primary" onClick={check}>Tekshirish</button>
        ) : (
          <button className="btn-secondary" onClick={reset}>Qayta urinish</button>
        )}
      </div>
    </div>
  );
}

// ── QUIZ SECTION ──────────────────────────────────────────────────────────────
function QuizSection({ quizState, onAnswer, onNext }) {
  const { questions, current, selected, showFeedback, score } = quizState;
  const q = questions[current];
  const progressPct = Math.round(((current) / questions.length) * 100);

  return (
    <div className="quiz-section">
      <div className="quiz-progress-row">
        <span className="quiz-progress-text">{current + 1} / {questions.length}</span>
        <div className="quiz-progress-bar-bg">
          <div className="quiz-progress-bar-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <span className="quiz-score-live">⚡ {score}</span>
      </div>

      <div className="quiz-card">
        <p className="quiz-question">{q.question}</p>
        <div className="quiz-options">
          {q.options.map((opt, oi) => {
            const sel = selected === oi;
            const correct = showFeedback && oi === q.answer;
            const wrong = showFeedback && sel && oi !== q.answer;
            return (
              <button
                key={oi}
                className={`quiz-option ${sel ? "quiz-option--selected" : ""} ${correct ? "quiz-option--correct" : ""} ${wrong ? "quiz-option--wrong" : ""}`}
                onClick={() => onAnswer(oi)}
                disabled={showFeedback}
              >
                <span className="quiz-opt-letter">{["A","B","C","D"][oi]}</span>
                {opt}
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className={`quiz-feedback ${selected === q.answer ? "quiz-feedback--correct" : "quiz-feedback--wrong"}`}>
            <p className="qf-status">{selected === q.answer ? "✅ To'g'ri!" : "❌ Noto'g'ri"}</p>
            <p className="qf-explanation">{q.explanation}</p>
            <button className="btn-primary" onClick={onNext} style={{ marginTop: "1rem" }}>
              {current + 1 < questions.length ? "Keyingisi →" : "Natijalarni ko'rish"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// RESULT SCREEN
// ══════════════════════════════════════════════════════════════════════════════
function ResultScreen({ result, lesson, onGoHome, onRetry }) {
  const { score, total, pct, passed, xpGained, isPerfect, questions, answers } = result;

  return (
    <div className="result-screen">
      <div className="result-card">
        <div className="result-emoji">{isPerfect ? "🏆" : passed ? "🎉" : "💪"}</div>
        <h2 className="result-title">{isPerfect ? "Mukammal!" : passed ? "Tabriklaymiz!" : "Ko'proq mashq kerak"}</h2>
        <div className="result-score-circle">
          <svg viewBox="0 0 100 100" className="score-svg">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="8" />
            <circle
              cx="50" cy="50" r="40" fill="none"
              stroke={pct >= 80 ? "#22c55e" : "#ef4444"}
              strokeWidth="8"
              strokeDasharray={`${(pct / 100) * 251.2} 251.2`}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
              style={{ transition: "stroke-dasharray 1s ease" }}
            />
          </svg>
          <div className="score-text">
            <div className="score-pct">{pct}%</div>
            <div className="score-fraction">{score}/{total}</div>
          </div>
        </div>

        <div className="result-stats">
          <div className="result-stat">
            <div className="rs-val" style={{ color: "#fbbf24" }}>+{xpGained}</div>
            <div className="rs-label">XP qo'shildi</div>
          </div>
          <div className="result-stat">
            <div className="rs-val" style={{ color: passed ? "#22c55e" : "#ef4444" }}>
              {passed ? "O'tdi ✅" : "O'tmadi ❌"}
            </div>
            <div className="rs-label">Natija ({PASS_SCORE}% kerak)</div>
          </div>
        </div>

        {passed && (
          <div className="result-unlocked">
            🔓 Keyingi dars ochildi!
          </div>
        )}

        {/* Review */}
        <div className="result-review">
          <h3 className="review-title">Javoblar tahlili</h3>
          {questions.map((q, i) => {
            const userAns = answers[i];
            const correct = userAns?.correct;
            return (
              <div key={i} className={`review-item ${correct ? "review-item--ok" : "review-item--err"}`}>
                <span className="review-icon">{correct ? "✅" : "❌"}</span>
                <div className="review-content">
                  <p className="review-q">{q.question}</p>
                  {!correct && (
                    <>
                      <p className="review-user">Siz: {q.options[userAns?.selected] || "Javob yo'q"}</p>
                      <p className="review-correct">To'g'ri: {q.options[q.answer]}</p>
                    </>
                  )}
                  <p className="review-exp">{q.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="result-btns">
          <button className="btn-secondary" onClick={onRetry}>Qayta urinish</button>
          <button className="btn-primary" onClick={onGoHome}>Bosh sahifa</button>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// CONFETTI
// ══════════════════════════════════════════════════════════════════════════════
function ConfettiOverlay({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3000);
    return () => clearTimeout(t);
  }, [onDone]);

  const pieces = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    color: ["#22c55e", "#fbbf24", "#f97316", "#8b5cf6", "#ef4444", "#1CB0F6"][Math.floor(Math.random() * 6)],
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 2,
  }));

  return (
    <div className="confetti-overlay" onClick={onDone}>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
