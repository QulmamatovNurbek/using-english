export const block2Lessons = [
  // ─── LESSON 7 ───────────────────────────────────────────────────────────────
  {
    id: 7,
    title: "Present Perfect 1 (have done)",
    block: "Present Perfect & Past",
    blockColor: "#3b82f6",
    explanation: [
      {
        heading: "Present Perfect nima?",
        text: "Present Perfect (O'tgan-hozirgi zamon) — o'tmishda sodir bo'lgan, ammo hozirgi payt bilan bog'liq voqealarni ifodalaydi. Hayot davomida tajriba, yaqinda bo'lgan ish yoki natijasi hozirga ta'sir qiladigan voqealar uchun ishlatiladi.",
        examples: ["I have visited Paris. (hayotimda bir marta)", "She has just finished the report. (yaqinda tugatdi)", "They have lost the keys. (hozir yo'q — natijasi ko'rinmoqda)"]
      },
      {
        heading: "Tuzilishi",
        text: "Subject + have/has + V3 (past participle). Have → I/You/We/They; Has → He/She/It. Past participle: to'g'ri fe'llarda -ed; noto'g'ri fe'llarda o'ziga xos shakl (gone, done, seen, taken).",
        examples: ["I have finished.", "She has seen that film.", "We have tried everything."]
      },
      {
        heading: "Inkor va so'roq",
        text: "Inkor: haven't / hasn't + V3. So'roq: Have/Has + Subject + V3?",
        examples: ["I haven't eaten lunch yet.", "He hasn't called me.", "Have you ever been to London?"]
      },
      {
        heading: "Past Simple bilan farqi",
        text: "Past Simple — aniq vaqt (yesterday, in 2020). Present Perfect — aniq vaqt yo'q yoki hozirgi bilan bog'liq. 'I saw him yesterday' (Past) vs 'I have seen him' (hozirgi bog'liqlik).",
        examples: ["I went to Japan in 2019. (aniq vaqt — Past Simple)", "I have been to Japan. (tajriba — Present Perfect)", "She lost her key (Past) — She has lost her key (hozir ham topilmagan)"]
      },
      {
        heading: "Ever va never bilan",
        text: "'Ever' so'roq gaplarda, 'never' inkor ma'noda — hayot davomida bir marta ham... bo'lmagan/bo'lgan tajribalarni so'rashda ishlatiladi.",
        examples: ["Have you ever eaten sushi?", "I have never smoked.", "This is the best film I have ever seen."]
      },
    ],
    vocabulary: [
      { word: "experience", translation: "tajriba", partOfSpeech: "ot", exampleSentence: "I have a lot of experience.", exampleTranslation: "Menda ko'p tajriba bor." },
      { word: "achieve", translation: "erishmoq", partOfSpeech: "fe'l", exampleSentence: "She has achieved her goal.", exampleTranslation: "U maqsadigaiga erishdi." },
      { word: "complete", translation: "tugatmoq, to'liq", partOfSpeech: "fe'l/sifat", exampleSentence: "Have you completed the form?", exampleTranslation: "Siz blankani to'ldirdingizmi?" },
      { word: "result", translation: "natija", partOfSpeech: "ot", exampleSentence: "The result is positive.", exampleTranslation: "Natija ijobiy." },
      { word: "recent", translation: "yaqindagi", partOfSpeech: "sifat", exampleSentence: "Have you seen her recently?", exampleTranslation: "Siz uni yaqinda ko'rdingizmi?" },
      { word: "ever", translation: "hech qachon (so'roqda)", partOfSpeech: "ravish", exampleSentence: "Have you ever been abroad?", exampleTranslation: "Siz hech chet elda bo'lganmisiz?" },
      { word: "never", translation: "hech qachon (inkorida)", partOfSpeech: "ravish", exampleSentence: "I have never tried this food.", exampleTranslation: "Men bu taomni hech qachon tatib ko'rganim yo'q." },
      { word: "manage", translation: "uddalash, boshqarmoq", partOfSpeech: "fe'l", exampleSentence: "Have you managed to fix it?", exampleTranslation: "Uni tuzatishga muvaffaq bo'ldingizmi?" },
      { word: "increase", translation: "oshirmoq, ko'paymoq", partOfSpeech: "fe'l", exampleSentence: "Prices have increased.", exampleTranslation: "Narxlar oshdi." },
      { word: "change", translation: "o'zgartirmoq", partOfSpeech: "fe'l", exampleSentence: "The world has changed a lot.", exampleTranslation: "Dunyo ko'p o'zgardi." },
      { word: "announce", translation: "e'lon qilmoq", partOfSpeech: "fe'l", exampleSentence: "They have announced the winner.", exampleTranslation: "Ular g'olibni e'lon qilishdi." },
      { word: "prove", translation: "isbotlamoq", partOfSpeech: "fe'l", exampleSentence: "She has proved her point.", exampleTranslation: "U o'z fikrini isbotladi." },
      { word: "discover", translation: "kashf etmoq", partOfSpeech: "fe'l", exampleSentence: "Scientists have discovered a new planet.", exampleTranslation: "Olimlar yangi sayyora kashf qilishdi." },
      { word: "publish", translation: "nashr etmoq", partOfSpeech: "fe'l", exampleSentence: "She has published three books.", exampleTranslation: "U uch kitob nashr qildi." },
      { word: "break", translation: "sindirmoq (rekord, qoida)", partOfSpeech: "fe'l", exampleSentence: "He has broken the world record.", exampleTranslation: "U jahon rekordini sindirdi." },
    ],
    exercises: [
      {
        type: "fillBlank",
        title: "Bo'sh joylarni to'ldiring",
        items: [
          { sentence: "She ___ (achieve) her goal.", answer: "has achieved" },
          { sentence: "I ___ (never/try) sushi.", answer: "have never tried" },
          { sentence: "___ you ever ___ (be) to London?", answer: "Have / been" },
          { sentence: "Prices ___ (increase) a lot this year.", answer: "have increased" },
          { sentence: "They ___ (not/announce) the results yet.", answer: "haven't announced" },
        ]
      },
      {
        type: "multipleChoice",
        title: "To'g'ri tarjimani tanlang",
        items: [
          { question: "U hech qachon chekmagan.", options: ["She never smoked.", "She has never smoked.", "She didn't ever smoke.", "She haven't smoked."], answer: 1 },
          { question: "Olimlar yangi sayyora kashf qilishdi.", options: ["Scientists discovered a new planet.", "Scientists have discovered a new planet.", "Scientists were discovering a new planet.", "Scientists discover a new planet."], answer: 1 },
          { question: "Biz hammasi sinab ko'rdik.", options: ["We tried everything.", "We try everything.", "We have tried everything.", "We are trying everything."], answer: 2 },
          { question: "U uch kitob nashr qildimi?", options: ["Did she publish three books?", "Has she published three books?", "Does she publish three books?", "Is she publishing three books?"], answer: 1 },
        ]
      },
      {
        type: "wordOrder",
        title: "So'zlarni joylashtiring",
        items: [
          { words: ["ever", "you", "sushi?", "Have", "tried"], answer: "Have you ever tried sushi?" },
          { words: ["record.", "broken", "world", "has", "the", "He"], answer: "He has broken the world record." },
          { words: ["never", "I", "been", "have", "abroad."], answer: "I have never been abroad." },
          { words: ["the", "They", "announced", "winner.", "have"], answer: "They have announced the winner." },
        ]
      },
      {
        type: "matchPairs",
        title: "Juftliklarni moslashtiring",
        pairs: [
          { english: "achieve", uzbek: "erishmoq" },
          { english: "discover", uzbek: "kashf etmoq" },
          { english: "publish", uzbek: "nashr etmoq" },
          { english: "prove", uzbek: "isbotlamoq" },
          { english: "increase", uzbek: "oshmoq" },
          { english: "experience", uzbek: "tajriba" },
        ]
      },
      {
        type: "errorCorrection",
        title: "Xatoni toping",
        items: [
          { sentence: "She have finished the report.", errorWord: "have", correction: "has" },
          { sentence: "Have you ever went to Paris?", errorWord: "went", correction: "been" },
          { sentence: "I has never seen that.", errorWord: "has", correction: "have" },
          { sentence: "They haven't announced yet the winner.", errorWord: "yet the winner", correction: "the winner yet" },
        ]
      }
    ],
    quiz: [
      { question: "Present Perfect qachon ishlatiladi?", options: ["Aniq o'tgan vaqt uchun", "Hozirgi bilan bog'liq o'tgan tajriba uchun", "Hozirgi davomli ish uchun", "Kelajak rejasi uchun"], answer: 1, explanation: "Present Perfect — o'tmishda bo'lgan, hozirga ta'sir qiladigan voqealar uchun." },
      { question: "'She' bilan qaysi ko'makchi fe'l?", options: ["have", "had", "has", "is"], answer: 2, explanation: "He/She/It bilan 'has' ishlatiladi." },
      { question: "'Ever' qaysi gaplarda ishlatiladi?", options: ["Inkor gaplarda", "So'roq gaplarda", "Ijobiy gaplarda", "Barchasi"], answer: 1, explanation: "'Ever' asosan so'roq gaplarda: Have you ever...?" },
      { question: "'Discover' fe'lining V3 shakli?", options: ["discovered", "discover", "discoverd", "discovering"], answer: 0, explanation: "'Discover' — to'g'ri fe'l: discovered." },
      { question: "Qaysi gap Present Perfect da to'g'ri?", options: ["She has went to Paris.", "She has gone to Paris.", "She have gone to Paris.", "She went to Paris has."], answer: 1, explanation: "'go' V3 = gone: She has gone." },
      { question: "'Achieve' ma'nosi?", options: ["Yo'qotmoq", "Erishmoq", "Oshirmoq", "Kashf etmoq"], answer: 1, explanation: "'Achieve' — maqsadga erishmoq." },
      { question: "Inkor shaklini tanlang:", options: ["I hasn't eaten.", "I haven't eaten.", "I have not eaten yet.", "Both b and c"], answer: 3, explanation: "haven't = have not — ikkalasi ham to'g'ri." },
      { question: "'Prove' ma'nosi?", options: ["Sinab ko'rmoq", "Isbotlamoq", "Taklif qilmoq", "Ko'rsatmoq"], answer: 1, explanation: "'Prove' — isbotlamoq, dalillash." },
      { question: "'Prices ___ (increase) a lot this year.' — to'g'ri shakl?", options: ["increased", "were increasing", "have increased", "are increasing"], answer: 2, explanation: "Hozirgi yil natijasi ko'rinmoqda — Present Perfect." },
      { question: "'Never' qaysi gaplarda ishlatiladi?", options: ["So'roqlarda", "Inkor ma'nosini beruvchi ijobiy shaklda", "Faqat Past Simple bilan", "Faqat Future bilan"], answer: 1, explanation: "'Never' — inkor ma'noga ega ijobiy shakl: I have never been." },
    ]
  },

  // ─── LESSON 8 ───────────────────────────────────────────────────────────────
  {
    id: 8,
    title: "Present Perfect 2 (just, already, yet, ever, never)",
    block: "Present Perfect & Past",
    blockColor: "#3b82f6",
    explanation: [
      {
        heading: "just — yaqinda",
        text: "'Just' — yaqinda, hozirgina sodir bo'lgan ish uchun. Ko'makchi fe'l va asosiy fe'l orasiga qo'yiladi.",
        examples: ["I have just eaten. (hozirgina edim)", "She has just arrived. (hozirgina keldi)", "They have just left. (hozirgina ketdi)"]
      },
      {
        heading: "already — allaqachon",
        text: "'Already' — kutilganidan erta yoki oldindagi tasdiqlovchi ma'noda. Odatda ijobiy gaplarda ishlatiladi.",
        examples: ["I have already finished my homework.", "She has already seen this film.", "He has already left."]
      },
      {
        heading: "yet — hali",
        text: "'Yet' — hali qilinmagan yoki kutilayotgan ish. Inkor va so'roq gaplarda, gapning oxirida ishlatiladi.",
        examples: ["I haven't finished yet.", "Have you eaten yet?", "She hasn't called yet."]
      },
      {
        heading: "still — hali ham (inkor bilan)",
        text: "'Still' — kutilganidan ancha o'tsayam hali davom etayotgan holat. Inkor gaplarda: still + haven't.",
        examples: ["I still haven't received his reply.", "She still hasn't changed her mind.", "They still haven't decided."]
      },
      {
        heading: "ever va never — hayot davomida",
        text: "'Ever' — so'roqda, hayot davomida. 'Never' — hech qachon bo'lmagan tajriba. Ikkisi ham hayot tajribasini ifodalaydi.",
        examples: ["Have you ever tried sky-diving?", "I have never eaten snails.", "It's the most beautiful thing I have ever seen."]
      },
    ],
    vocabulary: [
      { word: "just", translation: "hozirgina, endigina", partOfSpeech: "ravish", exampleSentence: "I have just arrived.", exampleTranslation: "Men hozirgina keldim." },
      { word: "already", translation: "allaqachon", partOfSpeech: "ravish", exampleSentence: "She has already eaten.", exampleTranslation: "U allaqachon yedi." },
      { word: "yet", translation: "hali (inkor/so'roqda)", partOfSpeech: "ravish", exampleSentence: "Have you finished yet?", exampleTranslation: "Siz hali ham tugatdingizmi?" },
      { word: "still", translation: "hali ham", partOfSpeech: "ravish", exampleSentence: "She still hasn't called.", exampleTranslation: "U hali ham qo'ng'iroq qilmagan." },
      { word: "recently", translation: "yaqinda", partOfSpeech: "ravish", exampleSentence: "I have recently started a new job.", exampleTranslation: "Men yaqinda yangi ish boshladim." },
      { word: "reply", translation: "javob bermoq / javob", partOfSpeech: "fe'l/ot", exampleSentence: "He hasn't replied to my message.", exampleTranslation: "U xablarimga javob bermadi." },
      { word: "receive", translation: "olmoq", partOfSpeech: "fe'l", exampleSentence: "Have you received my email?", exampleTranslation: "Siz mening elektron xatimni oldingizmi?" },
      { word: "submit", translation: "topshirmoq", partOfSpeech: "fe'l", exampleSentence: "I have already submitted the report.", exampleTranslation: "Men hisobotni allaqachon topshirdim." },
      { word: "decide", translation: "qaror qilmoq", partOfSpeech: "fe'l", exampleSentence: "Have you decided yet?", exampleTranslation: "Siz hali qaror qildingizmi?" },
      { word: "inform", translation: "xabar bermoq", partOfSpeech: "fe'l", exampleSentence: "I have just informed the team.", exampleTranslation: "Men jamoaga hozirgina xabar berdim." },
      { word: "confirm", translation: "tasdiqlash", partOfSpeech: "fe'l", exampleSentence: "She hasn't confirmed yet.", exampleTranslation: "U hali tasdiqlamagan." },
      { word: "apply", translation: "ariza bermoq", partOfSpeech: "fe'l", exampleSentence: "Have you applied for the job yet?", exampleTranslation: "Siz ishga hali ariza berdingizmi?" },
      { word: "pack", translation: "qadoqlash, yig'ishtirish", partOfSpeech: "fe'l", exampleSentence: "I haven't packed my bag yet.", exampleTranslation: "Men sumkamni hali yig'ishtirmadim." },
      { word: "cancel", translation: "bekor qilmoq", partOfSpeech: "fe'l", exampleSentence: "They have just cancelled the meeting.", exampleTranslation: "Ular yig'ilishni hozirgina bekor qilishdi." },
      { word: "update", translation: "yangilash", partOfSpeech: "fe'l", exampleSentence: "I have already updated the file.", exampleTranslation: "Men faylni allaqachon yangiladim." },
    ],
    exercises: [
      {
        type: "fillBlank",
        title: "Kerakli so'zni qo'ying (just/already/yet/still/ever/never)",
        items: [
          { sentence: "I have ___ finished my homework. (hozirgina)", answer: "just" },
          { sentence: "Have you seen this film ___? (hali, so'roq)", answer: "yet" },
          { sentence: "She has ___ eaten, so she's not hungry. (allaqachon)", answer: "already" },
          { sentence: "I ___ haven't decided. (hali ham)", answer: "still" },
          { sentence: "Have you ___ been to Japan? (hech qachon so'rash)", answer: "ever" },
        ]
      },
      {
        type: "multipleChoice",
        title: "To'g'ri variantni tanlang",
        items: [
          { question: "'Hali qilmadim' — qaysi so'z?", options: ["just", "already", "yet", "ever"], answer: 2 },
          { question: "'Allaqachon qilganman' — qaysi so'z?", options: ["yet", "already", "just", "still"], answer: 1 },
          { question: "'Have you ___ tried this?' (hayot tajribasi so'roq)", options: ["yet", "already", "just", "ever"], answer: 3 },
          { question: "'I ___ haven't replied.' — qaysi so'z?", options: ["already", "just", "still", "ever"], answer: 2 },
        ]
      },
      {
        type: "wordOrder",
        title: "So'zlarni joylashtiring",
        items: [
          { words: ["finished", "have", "homework.", "just", "I", "my"], answer: "I have just finished my homework." },
          { words: ["applied", "yet?", "you", "Have"], answer: "Have you applied yet?" },
          { words: ["never", "I", "tried", "have", "skydiving."], answer: "I have never tried skydiving." },
          { words: ["already", "She", "submitted", "has", "report.", "the"], answer: "She has already submitted the report." },
        ]
      },
      {
        type: "matchPairs",
        title: "Juftliklarni moslashtiring",
        pairs: [
          { english: "just", uzbek: "hozirgina" },
          { english: "already", uzbek: "allaqachon" },
          { english: "yet", uzbek: "hali (so'roq/inkorida)" },
          { english: "still", uzbek: "hali ham" },
          { english: "ever", uzbek: "hech qachon (so'roqda)" },
          { english: "never", uzbek: "hech qachon (inkorida)" },
        ]
      },
      {
        type: "errorCorrection",
        title: "Xatoni toping",
        items: [
          { sentence: "Have you finished already?", errorWord: "already", correction: "yet (inkor/so'roqda 'yet' to'g'riroq)" },
          { sentence: "I have yet submitted the form.", errorWord: "yet", correction: "already" },
          { sentence: "She still has confirmed.", errorWord: "still has confirmed", correction: "still hasn't confirmed" },
          { sentence: "I haven't eaten just.", errorWord: "just", correction: "just → 'I have just eaten' (ijobiyda, o'rni to'g'ri emas)" },
        ]
      }
    ],
    quiz: [
      { question: "'just' qaysi ma'noda ishlatiladi?", options: ["Hali ham", "Allaqachon", "Hozirgina", "Hech qachon"], answer: 2, explanation: "'Just' — hozirgina, yaqinda sodir bo'lgan ish." },
      { question: "'yet' qaysi gaplarda ishlatiladi?", options: ["Faqat ijobiy gaplarda", "Faqat inkor va so'roq gaplarda", "Faqat so'roqlarda", "Barcha gaplarda"], answer: 1, explanation: "'Yet' — inkor va so'roq gaplarda." },
      { question: "Qaysi gap to'g'ri?", options: ["Have you finished yet?", "Have you finished already?", "Have you finished still?", "Have you finished just?"], answer: 0, explanation: "So'roq gaplarda 'yet' ishlatiladi." },
      { question: "'still' qaysi ma'noda ishlatiladi?", options: ["Hozirgina", "Allaqachon", "Hali ham (kutilganidan ko'prog'i)", "Ba'zan"], answer: 2, explanation: "'Still' — hali ham (kutish davom etmoqda)." },
      { question: "To'g'ri gapni tanlang:", options: ["I have yet finished.", "I have already finished.", "I have still finished.", "I have never finished yet."], answer: 1, explanation: "Ijobiy gaplarda 'already' ishlatiladi." },
      { question: "'Reply' ma'nosi?", options: ["So'ramoq", "Javob bermoq", "Topshirmoq", "Tasdiqlash"], answer: 1, explanation: "'Reply' — javob bermoq, qaytarmoq." },
      { question: "'I have ___ been to America.' (hech qachon bo'lmagan)", options: ["just", "yet", "never", "already"], answer: 2, explanation: "'Never' — hech qachon bo'lmagan tajriba." },
      { question: "'submit' ma'nosi?", options: ["Olmoq", "Yubormoq", "Topshirmoq", "Bekor qilmoq"], answer: 2, explanation: "'Submit' — topshirmoq, taqdim etmoq." },
      { question: "'She ___ hasn't called.' — to'g'ri so'z?", options: ["just", "already", "yet", "still"], answer: 3, explanation: "'Still' + inkor — hali ham kutilmoqda." },
      { question: "'Cancel' ma'nosi?", options: ["Tasdiqlash", "Bekor qilmoq", "Rejalashtirmoq", "Kechiktirmoq"], answer: 1, explanation: "'Cancel' — bekor qilmoq, qaytarmoq." },
    ]
  },

  // ─── LESSON 9 ───────────────────────────────────────────────────────────────
  {
    id: 9,
    title: "Present Perfect Continuous (I have been doing)",
    block: "Present Perfect & Past",
    blockColor: "#3b82f6",
    explanation: [
      {
        heading: "Present Perfect Continuous nima?",
        text: "Present Perfect Continuous — o'tmishda boshlanib hozirga qadar davom etayotgan yoki yaqinda tugagan (natijasi ko'rinadigan) harakatni ifodalaydi. Ko'pincha 'for' va 'since' bilan ishlatiladi.",
        examples: ["I have been studying for 3 hours.", "She has been working here since 2020.", "They have been waiting for a long time."]
      },
      {
        heading: "Tuzilishi",
        text: "Subject + have/has + been + V-ing. Have → I/You/We/They; Has → He/She/It.",
        examples: ["I have been reading.", "He has been running.", "We have been discussing."]
      },
      {
        heading: "for va since",
        text: "'For' — davom etgan muddatni bildiradi (for 2 hours, for months). 'Since' — boshlanish nuqtasini bildiradi (since Monday, since 2018).",
        examples: ["I have been learning English for two years.", "She has been living here since 2019.", "They have been arguing since morning."]
      },
      {
        heading: "Inkor va so'roq",
        text: "Inkor: haven't/hasn't been + V-ing. So'roq: Have/Has + Subject + been + V-ing?",
        examples: ["I haven't been sleeping well.", "Has she been working hard?", "How long have you been waiting?"]
      },
      {
        heading: "PP Simple vs PP Continuous",
        text: "Present Perfect Simple — tugallangan ish, nechta/qanchasi muhim. Present Perfect Continuous — davomiylik, jarayon muhim. Ba'zan ikaovi ishlatilishi mumkin, ammo farq bor: 'I've read 50 pages' (miqqdor) vs 'I've been reading all day' (davomiylik).",
        examples: ["I've written three emails. (count)", "I've been writing emails all morning. (process)", "She has run 5km. (result) vs She has been running. (ongoing)"]
      },
    ],
    vocabulary: [
      { word: "for", translation: "... davomida (muddat)", partOfSpeech: "old ko'makchi", exampleSentence: "I have been waiting for an hour.", exampleTranslation: "Men bir soat kutmoqdaman." },
      { word: "since", translation: "... dan beri", partOfSpeech: "old ko'makchi", exampleSentence: "She has lived here since 2015.", exampleTranslation: "U 2015-yildan beri bu yerda yashaydi." },
      { word: "duration", translation: "davomiylik, muddat", partOfSpeech: "ot", exampleSentence: "The duration of the course is 6 months.", exampleTranslation: "Kursning davomiyligi 6 oy." },
      { word: "lately", translation: "yaqinda, so'nggi paytda", partOfSpeech: "ravish", exampleSentence: "Have you been feeling well lately?", exampleTranslation: "So'nggi paytda o'zingizni yaxshi his qilyapsizmi?" },
      { word: "exhausted", translation: "charchagan", partOfSpeech: "sifat", exampleSentence: "I'm exhausted — I've been working all day.", exampleTranslation: "Men charchadim — butun kun ishladim." },
      { word: "recently", translation: "yaqinda", partOfSpeech: "ravish", exampleSentence: "I've been thinking about this recently.", exampleTranslation: "Men yaqinda bu haqda o'ylamoqdaman." },
      { word: "continuous", translation: "davomiy, uzluksiz", partOfSpeech: "sifat", exampleSentence: "This is a continuous process.", exampleTranslation: "Bu uzluksiz jarayondir." },
      { word: "throughout", translation: "davomida, butun", partOfSpeech: "old ko'makchi", exampleSentence: "She worked throughout the night.", exampleTranslation: "U butun tun boyiga ishladi." },
      { word: "persist", translation: "davom etmoq, isorar qilmoq", partOfSpeech: "fe'l", exampleSentence: "The problem has been persisting.", exampleTranslation: "Muammo davom etib kelmoqda." },
      { word: "struggle", translation: "kurashmoq, qiyinchilik bilan bajarimoq", partOfSpeech: "fe'l", exampleSentence: "She has been struggling with the exam.", exampleTranslation: "U imtihon bilan qiynalmoqda." },
      { word: "practice", translation: "mashq qilmoq", partOfSpeech: "fe'l/ot", exampleSentence: "He has been practising piano.", exampleTranslation: "U pianino chalishni mashq qilmoqda." },
      { word: "prepare", translation: "tayyorlanmoq", partOfSpeech: "fe'l", exampleSentence: "We have been preparing for the exam.", exampleTranslation: "Biz imtihonga tayyorlanmoqdamiz." },
      { word: "argue", translation: "bahslashmoq", partOfSpeech: "fe'l", exampleSentence: "They have been arguing all day.", exampleTranslation: "Ular butun kun bahslashmoqda." },
      { word: "leak", translation: "oqmoq (suv suyuq)", partOfSpeech: "fe'l", exampleSentence: "The pipe has been leaking for days.", exampleTranslation: "Quvur bir necha kundan beri oqmoqda." },
      { word: "improve", translation: "yaxshilanmoq", partOfSpeech: "fe'l", exampleSentence: "Her health has been improving.", exampleTranslation: "Uning sog'lig'i yaxshilanmoqda." },
    ],
    exercises: [
      {
        type: "fillBlank",
        title: "To'g'ri shaklni qo'ying",
        items: [
          { sentence: "I ___ (study) for three hours.", answer: "have been studying" },
          { sentence: "She ___ (work) here ___ 2020.", answer: "has been working / since" },
          { sentence: "How long ___ you ___ (wait)?", answer: "have / been waiting" },
          { sentence: "They ___ (argue) all day.", answer: "have been arguing" },
          { sentence: "The pipe ___ (leak) for days.", answer: "has been leaking" },
        ]
      },
      {
        type: "multipleChoice",
        title: "To'g'ri variantni tanlang",
        items: [
          { question: "'for' yoki 'since' — '2019'?", options: ["for", "since", "during", "from"], answer: 1 },
          { question: "'for' yoki 'since' — 'two years'?", options: ["for", "since", "from", "in"], answer: 0 },
          { question: "'I'm tired because I ___ all day.'", options: ["have worked", "have been working", "worked", "work"], answer: 1 },
          { question: "'How long ___ you been here?'", options: ["did", "do", "have", "are"], answer: 2 },
        ]
      },
      {
        type: "wordOrder",
        title: "So'zlarni joylashtiring",
        items: [
          { words: ["been", "have", "studying", "I", "hours.", "three", "for"], answer: "I have been studying for three hours." },
          { words: ["long", "have", "How", "waiting?", "been", "you"], answer: "How long have you been waiting?" },
          { words: ["raining", "It", "been", "has", "morning.", "since"], answer: "It has been raining since morning." },
          { words: ["been", "She", "piano.", "has", "practising"], answer: "She has been practising piano." },
        ]
      },
      {
        type: "matchPairs",
        title: "Juftliklarni moslashtiring",
        pairs: [
          { english: "for", uzbek: "muddat (2 soat davomida)" },
          { english: "since", uzbek: "boshlanish nuqtasi (2020-yildan)" },
          { english: "exhausted", uzbek: "charchagan" },
          { english: "struggle", uzbek: "qiyinchilik bilan kurashmoq" },
          { english: "persist", uzbek: "davom etmoq" },
          { english: "duration", uzbek: "davomiylik" },
        ]
      },
      {
        type: "errorCorrection",
        title: "Xatoni toping",
        items: [
          { sentence: "She has been working here for 2018.", errorWord: "for", correction: "since" },
          { sentence: "I have been wait for an hour.", errorWord: "wait", correction: "waiting" },
          { sentence: "He have been studying all day.", errorWord: "have", correction: "has" },
          { sentence: "They been working since morning.", errorWord: "been working", correction: "have been working" },
        ]
      }
    ],
    quiz: [
      { question: "Present Perfect Continuous tuzilishi?", options: ["have/has + V3", "have/has + been + V-ing", "was/were + V-ing", "had + V3"], answer: 1, explanation: "PP Continuous: have/has + been + V-ing." },
      { question: "'for two years' — 'for' yoki 'since'?", options: ["since", "for", "in", "during"], answer: 1, explanation: "'For' muddat bilan: for two years." },
      { question: "'since 2018' — 'for' yoki 'since'?", options: ["for", "since", "from", "in"], answer: 1, explanation: "'Since' boshlanish nuqtasi bilan: since 2018." },
      { question: "To'g'ri shaklni tanlang: 'She ___ here for 5 years.'", options: ["has been living", "have been living", "has lived", "Both a and c"], answer: 3, explanation: "PP Continuous va PP Simple ikkalasi ham mumkin bu yerda." },
      { question: "'How long ___ you been waiting?'", options: ["did", "do", "have", "are"], answer: 2, explanation: "PP Continuous so'rog'ida 'have' ishlatiladi." },
      { question: "'Exhausted' ma'nosi?", options: ["Kuchli", "Baxtli", "Charchagan", "Shoshilinch"], answer: 2, explanation: "'Exhausted' — juda charchagan, holdan toygan." },
      { question: "'Struggle' ma'nosi?", options: ["Muvaffaqiyat qozonmoq", "Qiyinchilik bilan kurashmoq", "Gaplashmoq", "O'qimoq"], answer: 1, explanation: "'Struggle' — qiynalmoq, kurashmoq." },
      { question: "Qaysi gap PP Continuous da to'g'ri?", options: ["I have been work.", "I been working.", "I have been working.", "I has been working."], answer: 2, explanation: "I + have + been + V-ing." },
      { question: "'Persist' ma'nosi?", options: ["To'xtatmoq", "Davom etmoq", "O'zgartirmoq", "Boshlash"], answer: 1, explanation: "'Persist' — davom etmoq, isorar qilmoq." },
      { question: "'I'm tired because I ___ all day.' — to'g'ri shakl?", options: ["worked", "was working", "have been working", "am working"], answer: 2, explanation: "Sabab sifatida PP Continuous: tired natijasi ko'rinmoqda." },
    ]
  },

  // ─── LESSON 10 ──────────────────────────────────────────────────────────────
  {
    id: 10,
    title: "Present Perfect Simple vs Continuous (farq)",
    block: "Present Perfect & Past",
    blockColor: "#3b82f6",
    explanation: [
      {
        heading: "Asosiy farq",
        text: "PP Simple — tugallangan ish, natija, miqdor muhim. PP Continuous — davom etayotgan jarayon, davomiylik muhim. Ko'p holatlarda ikkalasi ham ishlatilishi mumkin, farq nuance(nozik ma'no)da.",
        examples: ["I've written 3 emails. (son muhim — Simple)", "I've been writing emails all morning. (jarayon muhim — Continuous)", "She's run 5km. (natija) / She's been running for an hour. (davomiylik)"]
      },
      {
        heading: "Stative verblar — faqat Simple",
        text: "Know, understand, believe, love, hate, want, need, own, belong — bu fe'llar faqat PP Simple da ishlatiladi, PP Continuous da emas.",
        examples: ["I have known her for years. (NOT: I've been knowing)", "How long have you wanted this? (NOT: have you been wanting)", "She has owned this car since 2020."]
      },
      {
        heading: "Natija vs jarayon",
        text: "PP Simple — aniq natija ko'rinmoqda. PP Continuous — jarayon natijasi ko'rinmoqda (terlab, charchagan holda).",
        examples: ["I've cleaned the house. (uy tozalanib bo'ldi — natija)", "I've been cleaning — I'm exhausted. (jarayon natijasi)", "He has painted the room. (tugadi) / He has been painting all day. (uzoq ishladi)"]
      },
      {
        heading: "How long bilan",
        text: "'How long' bilan odatda PP Continuous ishlatiladi (davomiylik uchun), ammo stative verblar bilan Simple.",
        examples: ["How long have you been learning English?", "How long have you known her? (know — stative)", "How long has he been running?"]
      },
      {
        heading: "Ba'zi fe'llar ikkala shaklda ham",
        text: "Ba'zi fe'llar ikkala shaklda ham ishlatiladi, lekin ma'no farq qiladi: 'I've lived here' (hali ham yashayman) vs 'I've been living here' (vaqtincha bo'lsa-da davom etmoqda).",
        examples: ["I've worked here for 5 years. (hali ham)", "I've been working here for 5 years. (davom etmoqda — birozroq vaqtinchalik ohang)", "She's read the book. (tugardi) vs She's been reading. (jarayonda)"]
      },
    ],
    vocabulary: [
      { word: "nuance", translation: "nozik farq, nyuans", partOfSpeech: "ot", exampleSentence: "There is a nuance between the two forms.", exampleTranslation: "Ikki shakl orasida nozik farq bor." },
      { word: "emphasis", translation: "urg'u, ta'kid", partOfSpeech: "ot", exampleSentence: "The emphasis is on the result.", exampleTranslation: "Urg'u natijaga berilgan." },
      { word: "quantity", translation: "miqdor", partOfSpeech: "ot", exampleSentence: "Quantity is more important here.", exampleTranslation: "Bu yerda miqdor muhimroq." },
      { word: "process", translation: "jarayon", partOfSpeech: "ot", exampleSentence: "Focus on the process, not the result.", exampleTranslation: "Natijardan ko'ra jarayonga e'tibor bering." },
      { word: "ongoing", translation: "davom etayotgan", partOfSpeech: "sifat", exampleSentence: "This is an ongoing discussion.", exampleTranslation: "Bu davom etayotgan muhokama." },
      { word: "completed", translation: "tugallangan", partOfSpeech: "sifat", exampleSentence: "The task is completed.", exampleTranslation: "Vazifa bajarildi." },
      { word: "temporary", translation: "vaqtincha", partOfSpeech: "sifat", exampleSentence: "It's a temporary arrangement.", exampleTranslation: "Bu vaqtinchalik tartib." },
      { word: "contrast", translation: "zidlash", partOfSpeech: "ot/fe'l", exampleSentence: "Let's contrast the two sentences.", exampleTranslation: "Keling, ikkita gapni solishtiramiz." },
      { word: "relevant", translation: "tegishli, mos keladigan", partOfSpeech: "sifat", exampleSentence: "Is this information relevant?", exampleTranslation: "Bu ma'lumot tegishlimi?" },
      { word: "distinguish", translation: "ajratmoq, farqlash", partOfSpeech: "fe'l", exampleSentence: "Can you distinguish the two?", exampleTranslation: "Ikkisini farqlay olasizmi?" },
      { word: "sweaty", translation: "terlagan", partOfSpeech: "sifat", exampleSentence: "He's sweaty — he's been running.", exampleTranslation: "U terlagan — yugurmoqda edi." },
      { word: "indicate", translation: "ko'rsatmoq, bildirmoq", partOfSpeech: "fe'l", exampleSentence: "This indicates the result.", exampleTranslation: "Bu natijani ko'rsatadi." },
      { word: "belong", translation: "tegishli bo'lmoq", partOfSpeech: "fe'l", exampleSentence: "This book belongs to me.", exampleTranslation: "Bu kitob menga tegishli." },
      { word: "own", translation: "egalik qilmoq", partOfSpeech: "fe'l", exampleSentence: "She has owned the car for years.", exampleTranslation: "U mashinaga yillardan beri ega." },
      { word: "complete", translation: "tugatmoq", partOfSpeech: "fe'l", exampleSentence: "I have just completed the task.", exampleTranslation: "Men hozirgina vazifani tugatdim." },
    ],
    exercises: [
      {
        type: "fillBlank",
        title: "Simple yoki Continuous — kerakligini tanlang",
        items: [
          { sentence: "I ___ (write) 10 pages today.", answer: "have written" },
          { sentence: "She ___ (write) all morning — she's tired.", answer: "has been writing" },
          { sentence: "How long ___ you ___ (know) her?", answer: "have / known" },
          { sentence: "He ___ (paint) three rooms today.", answer: "has painted" },
          { sentence: "We ___ (wait) for 2 hours — where is she?", answer: "have been waiting" },
        ]
      },
      {
        type: "multipleChoice",
        title: "To'g'ri variantni tanlang",
        items: [
          { question: "Miqdor muhim — qaysi shakl?", options: ["PP Continuous", "PP Simple", "Past Simple", "Past Continuous"], answer: 1 },
          { question: "Jarayon muhim (charchamish) — qaysi shakl?", options: ["PP Simple", "PP Continuous", "Past Simple", "Present Simple"], answer: 1 },
          { question: "'know' bilan qaysi shakl?", options: ["I've been knowing", "I've known", "I know — faqat shu", "Both a and b"], answer: 1 },
          { question: "'I've ___ 5 emails.' — Simple yoki Continuous?", options: ["been writing", "written", "write", "writing"], answer: 1 },
        ]
      },
      {
        type: "wordOrder",
        title: "So'zlarni joylashtiring",
        items: [
          { words: ["long", "you", "known", "How", "have", "her?"], answer: "How long have you known her?" },
          { words: ["been", "all", "She", "writing", "has", "morning."], answer: "She has been writing all morning." },
          { words: ["painted", "rooms.", "He", "has", "three"], answer: "He has painted three rooms." },
          { words: ["distinguish", "Can", "two?", "the", "you"], answer: "Can you distinguish the two?" },
        ]
      },
      {
        type: "matchPairs",
        title: "Juftliklarni moslashtiring",
        pairs: [
          { english: "PP Simple", uzbek: "natija / miqdor muhim" },
          { english: "PP Continuous", uzbek: "jarayon / davomiylik muhim" },
          { english: "stative verb", uzbek: "faqat Simple shaklida" },
          { english: "sweaty/tired", uzbek: "PP Continuous natijasi" },
          { english: "distinguish", uzbek: "farqlash" },
          { english: "nuance", uzbek: "nozik farq" },
        ]
      },
      {
        type: "errorCorrection",
        title: "Xatoni toping",
        items: [
          { sentence: "How long have you been knowing her?", errorWord: "been knowing", correction: "known (stative verb)" },
          { sentence: "I've been written 5 emails.", errorWord: "been written", correction: "written (Simple — miqdor)" },
          { sentence: "She have been tired — she has working all day.", errorWord: "has working", correction: "has been working" },
          { sentence: "He has been paint 3 rooms.", errorWord: "been paint", correction: "painted (Simple)" },
        ]
      }
    ],
    quiz: [
      { question: "Miqdor muhim bo'lsa qaysi shakl?", options: ["PP Continuous", "PP Simple", "Past Continuous", "Present Simple"], answer: 1, explanation: "Miqdor (nechta, qancha) muhim bo'lsa — PP Simple." },
      { question: "Jarayon muhim bo'lsa qaysi shakl?", options: ["PP Simple", "PP Continuous", "Past Simple", "Past Continuous"], answer: 1, explanation: "Jarayon, davomiylik muhim bo'lsa — PP Continuous." },
      { question: "Stative verblar qaysi shaklda ishlatiladi?", options: ["PP Continuous", "PP Simple", "Ikkisida ham", "Hech birida"], answer: 1, explanation: "Stative verblar (know, love, want) faqat PP Simple da." },
      { question: "'She's been running' — nima anglatadi?", options: ["U tugatdi", "U hozirgina yugurdi", "U uzoq vaqt yugurdi (jarayon)", "U yugurdi (miqqdor)"], answer: 2, explanation: "PP Continuous — jarayon, davomiylik." },
      { question: "'Nuance' ma'nosi?", options: ["Katta farq", "Nozik farq", "E'tibor", "Ma'no"], answer: 1, explanation: "'Nuance' — nozik, kichik farq." },
      { question: "To'g'ri gapni tanlang:", options: ["I've been knowing her for years.", "I've known her for years.", "I know her since years.", "I known her for years."], answer: 1, explanation: "'Know' — stative verb: PP Simple." },
      { question: "'Distinguish' ma'nosi?", options: ["Birlashtirmoq", "Farqlash, ajratmoq", "Aniqlash", "Ko'rsatmoq"], answer: 1, explanation: "'Distinguish' — farqlash, birini ikkinchisidan ajratmoq." },
      { question: "'I've ___ 3 rooms.' (tugallangan ish)", options: ["been painting", "painted", "paint", "painting"], answer: 1, explanation: "Tugallangan, natijali ish — PP Simple: painted." },
      { question: "'Emphasis' ma'nosi?", options: ["Ma'no", "Urg'u, ta'kid", "Farq", "Jarayon"], answer: 1, explanation: "'Emphasis' — urg'u, biror narsaga ta'kid berish." },
      { question: "'Own' bilan to'g'ri shakl?", options: ["I've been owning this for years.", "I've owned this for years.", "I am owning this.", "I own this since years."], answer: 1, explanation: "'Own' — stative verb, PP Simple: I've owned." },
    ]
  },
];
