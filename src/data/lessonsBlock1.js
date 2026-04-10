export const block1Lessons = [
  // ─── LESSON 1 ───────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Present Simple (I do)",
    block: "Present & Past",
    blockColor: "#22c55e",
    explanation: [
      {
        heading: "Present Simple nima va qachon ishlatiladi?",
        text: "Present Simple (Hozirgi oddiy zamon) — odatiy harakatlar, umumiy haqiqatlar, takroriy ishlar va doimiy holatlarni ifodalash uchun ishlatiladi. Masalan, har kuni bajariladigan ishlar yoki ilmiy faktlar bu zamon bilan aytiladi.",
        examples: ["I wake up at 7 every morning.", "The sun rises in the east.", "She works at a hospital."]
      },
      {
        heading: "Tuzilishi (Structure)",
        text: "Ijobiy gapda: Subject + V1 (agar u/she/it bo'lsa, fe'lga -s/-es qo'shiladi). Masalan: I/You/We/They + go | He/She/It + goes.",
        examples: ["I play football on weekends.", "He plays football on weekends.", "Water boils at 100°C."]
      },
      {
        heading: "Inkor shakli (Negative)",
        text: "Subject + do not (don't) / does not (doesn't) + V1. He/She/It bilan 'doesn't' ishlatiladi va asosiy fe'l o'zgarmaydi.",
        examples: ["I don't drink coffee.", "She doesn't like loud music.", "They don't understand the question."]
      },
      {
        heading: "So'roq shakli (Question)",
        text: "Do/Does + Subject + V1 + ? He/She/It uchun 'Does' ishlatiladi.",
        examples: ["Do you speak English?", "Does he live near here?", "Do they work on Saturdays?"]
      },
      {
        heading: "O'zbek tili bilan farqi",
        text: "O'zbek tilida hozirgi zamon va odatiy zamon ko'pincha bir xil shaklda bo'ladi. Ingliz tilida esa aniq farq bor: 'I am eating' (hozir) vs 'I eat' (odatda). Present Simple odatiy ish uchun, Present Continuous esa ayni daqiqadagi ish uchun.",
        examples: ["I eat rice every day. (odatda)", "I am eating rice now. (hozir)", "She reads books regularly."]
      },
    ],
    vocabulary: [
      { word: "wake up", translation: "uyg'onmoq", partOfSpeech: "fe'l", exampleSentence: "I wake up at 6 AM.", exampleTranslation: "Men ertalab soat 6 da uyg'onaman." },
      { word: "routine", translation: "kundalik tartib", partOfSpeech: "ot", exampleSentence: "My morning routine takes 30 minutes.", exampleTranslation: "Mening ertalabki tartibim 30 daqiqa oladi." },
      { word: "habit", translation: "odat", partOfSpeech: "ot", exampleSentence: "Reading is a good habit.", exampleTranslation: "O'qish yaxshi odatdir." },
      { word: "always", translation: "doim", partOfSpeech: "ravish", exampleSentence: "She always arrives on time.", exampleTranslation: "U doim o'z vaqtida keladi." },
      { word: "usually", translation: "odatda", partOfSpeech: "ravish", exampleSentence: "I usually have tea in the morning.", exampleTranslation: "Men odatda ertalab choy ichaman." },
      { word: "sometimes", translation: "ba'zan", partOfSpeech: "ravish", exampleSentence: "He sometimes forgets his keys.", exampleTranslation: "U ba'zan kalitlarini unutadi." },
      { word: "never", translation: "hech qachon", partOfSpeech: "ravish", exampleSentence: "They never eat fast food.", exampleTranslation: "Ular hech qachon tez taom yemaydi." },
      { word: "fact", translation: "fakt, haqiqat", partOfSpeech: "ot", exampleSentence: "It is a fact that the Earth is round.", exampleTranslation: "Yer yumaloqligi faktdir." },
      { word: "commute", translation: "ishga borish-kelish", partOfSpeech: "fe'l/ot", exampleSentence: "She commutes by bus every day.", exampleTranslation: "U har kuni avtobus bilan ishga boradi." },
      { word: "prefer", translation: "afzal ko'rmoq", partOfSpeech: "fe'l", exampleSentence: "I prefer coffee to tea.", exampleTranslation: "Men choydan ko'ra qahva ichishni afzal ko'raman." },
      { word: "work", translation: "ishlash / ish", partOfSpeech: "fe'l/ot", exampleSentence: "He works at a bank.", exampleTranslation: "U bankda ishlaydi." },
      { word: "study", translation: "o'qimoq", partOfSpeech: "fe'l", exampleSentence: "She studies medicine.", exampleTranslation: "U tibbiyot o'qiydi." },
      { word: "live", translation: "yashash", partOfSpeech: "fe'l", exampleSentence: "We live in Tashkent.", exampleTranslation: "Biz Toshkentda yashaymiz." },
      { word: "speak", translation: "gapirmoq", partOfSpeech: "fe'l", exampleSentence: "Do you speak French?", exampleTranslation: "Siz fransuzcha gapirasizmi?" },
      { word: "believe", translation: "ishonmoq", partOfSpeech: "fe'l", exampleSentence: "I believe in hard work.", exampleTranslation: "Men qattiq mehnatga ishonaman." },
    ],
    exercises: [
      {
        type: "fillBlank",
        title: "Bo'sh joylarni to'ldiring",
        items: [
          { sentence: "She ___ (work) at a hospital.", answer: "works" },
          { sentence: "They ___ (not/eat) meat.", answer: "don't eat" },
          { sentence: "___ he ___ (speak) English?", answer: "Does / speak" },
          { sentence: "I ___ (wake up) at 7 every morning.", answer: "wake up" },
          { sentence: "Water ___ (boil) at 100 degrees.", answer: "boils" },
        ]
      },
      {
        type: "multipleChoice",
        title: "To'g'ri tarjimani tanlang",
        items: [
          { question: "U hech qachon go'sht yemaydi.", options: ["She sometimes eats meat.", "She never eats meat.", "She doesn't eat meat always.", "She not eat meat."], answer: 1 },
          { question: "Ular shanba kunlari ishlamaydi.", options: ["They don't work on Saturdays.", "They aren't work on Saturdays.", "They doesn't work on Saturdays.", "They not works on Saturdays."], answer: 0 },
          { question: "U odatda avtobus bilan boradimi?", options: ["Does she usually go by bus?", "Is she usually going by bus?", "Do she usually goes by bus?", "She usually goes by bus?"], answer: 0 },
          { question: "Men qahvani afzal ko'raman.", options: ["I am preferring coffee.", "I prefer coffee.", "I prefers coffee.", "I am prefer coffee."], answer: 1 },
        ]
      },
      {
        type: "wordOrder",
        title: "So'zlarni to'g'ri tartibda joylashtiring",
        items: [
          { words: ["always", "She", "on", "arrives", "time"], answer: "She always arrives on time" },
          { words: ["drink", "I", "coffee", "don't"], answer: "I don't drink coffee" },
          { words: ["he", "Does", "French?", "speak"], answer: "Does he speak French?" },
          { words: ["every", "English", "studies", "She", "day"], answer: "She studies English every day" },
        ]
      },
      {
        type: "matchPairs",
        title: "Juftliklarni moslashtiring",
        pairs: [
          { english: "wake up", uzbek: "uyg'onmoq" },
          { english: "habit", uzbek: "odat" },
          { english: "prefer", uzbek: "afzal ko'rmoq" },
          { english: "believe", uzbek: "ishonmoq" },
          { english: "commute", uzbek: "ishga borish-kelish" },
          { english: "routine", uzbek: "kundalik tartib" },
        ]
      },
      {
        type: "errorCorrection",
        title: "Xatoni toping",
        items: [
          { sentence: "She don't like loud music.", errorWord: "don't", correction: "doesn't" },
          { sentence: "Do he speak English?", errorWord: "Do", correction: "Does" },
          { sentence: "I always am late.", errorWord: "am", correction: "am → tartibi: I am always late" },
          { sentence: "He work at a bank.", errorWord: "work", correction: "works" },
        ]
      }
    ],
    quiz: [
      { question: "Qaysi gap Present Simple'da to'g'ri?", options: ["She don't work here.", "She doesn't works here.", "She doesn't work here.", "She not work here."], answer: 2, explanation: "He/She/It bilan 'doesn't' ishlatiladi va asosiy fe'l o'zgarmaydi." },
      { question: "'Does' qaysi olmoshlar bilan ishlatiladi?", options: ["I, you, we, they", "He, she, it", "All pronouns", "Only 'he'"], answer: 1, explanation: "Does faqat uchinchi shaxs birlik (he/she/it) bilan ishlatiladi." },
      { question: "'Habit' so'zining ma'nosi nima?", options: ["Ish", "Odat", "Tartib", "Haqiqat"], answer: 1, explanation: "'Habit' — odat degan ma'noni anglatadi." },
      { question: "To'g'ri gapni tanlang: 'They ___ (not/work) on Sundays.'", options: ["doesn't work", "don't works", "don't work", "not work"], answer: 2, explanation: "They bilan 'don't' ishlatiladi va fe'l o'zgarmaydi." },
      { question: "'Always' so'zi qayerga qo'yiladi?", options: ["Gapning oxiriga", "Fe'ldan keyin (to be bo'lsa, oldin)", "Gapning boshiga", "Istalgan joyga"], answer: 1, explanation: "Chastota ravishlar (always, usually) fe'ldan oldin, to be dan keyin keladi." },
      { question: "'Commute' so'zining ma'nosi nima?", options: ["Sayohat qilish", "Ishga borish-kelish", "Ko'chmoq", "Yugurmoq"], answer: 1, explanation: "'Commute' — har kuni ishga borib-kelishni anglatadi." },
      { question: "Qaysi gap to'g'ri?", options: ["Water boil at 100°C.", "Water boils at 100°C.", "Water is boil at 100°C.", "Water boiling at 100°C."], answer: 1, explanation: "'Water' — uchinchi shaxs birlik, shuning uchun 'boils'." },
      { question: "'Prefer' so'zining ma'nosi nima?", options: ["Yoqtirmoq", "Afzal ko'rmoq", "Ishonmoq", "Bilmoq"], answer: 1, explanation: "'Prefer' — biror narsani boshqasidan ko'ra afzal ko'rmoq." },
      { question: "Qaysi gap Present Simple'da inkor shaklida to'g'ri?", options: ["I not drink coffee.", "I am not drink coffee.", "I don't drink coffee.", "I doesn't drink coffee."], answer: 2, explanation: "I bilan 'don't' ishlatiladi." },
      { question: "'She ___ English every day.' — bo'sh joyga nima kerak?", options: ["study", "is studying", "studies", "studied"], answer: 2, explanation: "She (uchinchi shaxs birlik) bilan fe'lga -s qo'shiladi: studies." },
    ]
  },

  // ─── LESSON 2 ───────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "Present Continuous (I am doing)",
    block: "Present & Past",
    blockColor: "#22c55e",
    explanation: [
      {
        heading: "Present Continuous nima?",
        text: "Present Continuous (Hozirgi davomli zamon) — ayni shu daqiqada yoki so'zlashilayotgan vaqtda sodir bo'layotgan harakatlarni ifodalaydi. Shuningdek, vaqtincha bo'layotgan holatlar uchun ham ishlatiladi.",
        examples: ["I am reading a book right now.", "She is talking on the phone.", "They are building a new house this month."]
      },
      {
        heading: "Tuzilishi (Structure)",
        text: "Subject + am/is/are + V-ing. Am → I bilan; Is → He/She/It bilan; Are → You/We/They bilan.",
        examples: ["I am working.", "He is studying.", "We are playing."]
      },
      {
        heading: "Inkor shakli (Negative)",
        text: "Subject + am not / isn't / aren't + V-ing.",
        examples: ["I am not sleeping.", "She isn't watching TV.", "They aren't listening."]
      },
      {
        heading: "So'roq shakli (Question)",
        text: "Am/Is/Are + Subject + V-ing + ?",
        examples: ["Are you listening?", "Is he coming?", "Am I doing this correctly?"]
      },
      {
        heading: "Stative verbs — ishlatilmaydigan fe'llar",
        text: "Ba'zi fe'llar (his-tuyg'u, fikrlash, egalik bildiruvchi) odatda Continuous shaklida ishlatilmaydi: know, believe, love, hate, want, need, own, understand.",
        examples: ["I know the answer. (NOT: I am knowing)", "She loves music. (NOT: She is loving)", "He wants coffee. (NOT: He is wanting)"]
      },
    ],
    vocabulary: [
      { word: "right now", translation: "hozir, ayni daqiqada", partOfSpeech: "ravish", exampleSentence: "I am studying right now.", exampleTranslation: "Men hozir o'qiyapman." },
      { word: "currently", translation: "hozircha, hozirgi vaqtda", partOfSpeech: "ravish", exampleSentence: "She is currently working on a project.", exampleTranslation: "U hozircha bitta loyiha ustida ishlamoqda." },
      { word: "listen", translation: "tinglash", partOfSpeech: "fe'l", exampleSentence: "Are you listening to me?", exampleTranslation: "Meni tinglayapsizmi?" },
      { word: "watch", translation: "tomosha qilmoq", partOfSpeech: "fe'l", exampleSentence: "They are watching a film.", exampleTranslation: "Ular film tomosha qilishmoqda." },
      { word: "cook", translation: "pishirmoq", partOfSpeech: "fe'l", exampleSentence: "Mum is cooking dinner.", exampleTranslation: "Onam kechki ovqat pishirmoqda." },
      { word: "rain", translation: "yomg'ir yog'moq", partOfSpeech: "fe'l", exampleSentence: "It is raining outside.", exampleTranslation: "Tashqarida yomg'ir yog'moqda." },
      { word: "temporary", translation: "vaqtincha", partOfSpeech: "sifat", exampleSentence: "This is a temporary job.", exampleTranslation: "Bu vaqtincha ish." },
      { word: "happen", translation: "sodir bo'lmoq", partOfSpeech: "fe'l", exampleSentence: "What is happening?", exampleTranslation: "Nima bo'lmoqda?" },
      { word: "try", translation: "urinmoq", partOfSpeech: "fe'l", exampleSentence: "She is trying her best.", exampleTranslation: "U qo'lidan kelganini qilmoqda." },
      { word: "run", translation: "yugurmoq", partOfSpeech: "fe'l", exampleSentence: "He is running in the park.", exampleTranslation: "U parkda yugurmoqda." },
      { word: "improve", translation: "yaxshilanmoq", partOfSpeech: "fe'l", exampleSentence: "My English is improving.", exampleTranslation: "Mening inglizim yaxshilanmoqda." },
      { word: "wait", translation: "kutmoq", partOfSpeech: "fe'l", exampleSentence: "I am waiting for the bus.", exampleTranslation: "Men avtobusni kutmoqdaman." },
      { word: "wear", translation: "kiymoq", partOfSpeech: "fe'l", exampleSentence: "She is wearing a red dress.", exampleTranslation: "U qizil ko'ylak kiygan." },
      { word: "move", translation: "ko'chmoq, harakat qilmoq", partOfSpeech: "fe'l", exampleSentence: "They are moving to a new city.", exampleTranslation: "Ular yangi shaharga ko'chmoqda." },
      { word: "talk", translation: "gaplashmoq", partOfSpeech: "fe'l", exampleSentence: "Who are you talking to?", exampleTranslation: "Siz kim bilan gaplashmoqdasiz?" },
    ],
    exercises: [
      {
        type: "fillBlank",
        title: "Bo'sh joylarni to'ldiring",
        items: [
          { sentence: "She ___ (cook) dinner right now.", answer: "is cooking" },
          { sentence: "I ___ (not/watch) TV, I ___ (study).", answer: "am not watching / am studying" },
          { sentence: "___ it ___ (rain) outside?", answer: "Is / raining" },
          { sentence: "They ___ (move) to a new city this month.", answer: "are moving" },
          { sentence: "My English ___ (improve) every day.", answer: "is improving" },
        ]
      },
      {
        type: "multipleChoice",
        title: "To'g'ri tarjimani tanlang",
        items: [
          { question: "U hozir film tomosha qilmoqda.", options: ["She watches a film.", "She is watching a film.", "She was watching a film.", "She watch a film."], answer: 1 },
          { question: "Ular nima qilishmoqda?", options: ["What they are doing?", "What are they doing?", "What do they doing?", "What they do?"], answer: 1 },
          { question: "Men seni kutmoqdaman.", options: ["I wait for you.", "I was waiting for you.", "I am waiting for you.", "I waiting for you."], answer: 2 },
          { question: "U hozir telefonda gaplashmoqda.", options: ["She talks on the phone.", "She is talking on the phone.", "She talked on the phone.", "She talk on phone."], answer: 1 },
        ]
      },
      {
        type: "wordOrder",
        title: "So'zlarni to'g'ri tartibda joylashtiring",
        items: [
          { words: ["studying", "am", "I", "now", "right"], answer: "I am studying right now" },
          { words: ["is", "it", "outside?", "raining"], answer: "Is it raining outside?" },
          { words: ["watching", "aren't", "television", "They"], answer: "They aren't watching television" },
          { words: ["wearing", "What", "she", "is?", "is"], answer: "What is she wearing?" },
        ]
      },
      {
        type: "matchPairs",
        title: "Juftliklarni moslashtiring",
        pairs: [
          { english: "right now", uzbek: "hozir" },
          { english: "temporary", uzbek: "vaqtincha" },
          { english: "improve", uzbek: "yaxshilanmoq" },
          { english: "happen", uzbek: "sodir bo'lmoq" },
          { english: "wait", uzbek: "kutmoq" },
          { english: "currently", uzbek: "hozircha" },
        ]
      },
      {
        type: "errorCorrection",
        title: "Xatoni toping",
        items: [
          { sentence: "She is cook dinner.", errorWord: "cook", correction: "cooking" },
          { sentence: "Are they listen to music?", errorWord: "listen", correction: "listening" },
          { sentence: "I am knowing the answer.", errorWord: "knowing", correction: "know (stative verb)" },
          { sentence: "He running in the park.", errorWord: "running", correction: "is running" },
        ]
      }
    ],
    quiz: [
      { question: "Present Continuous qachon ishlatiladi?", options: ["Odatiy harakatlar uchun", "Ayni daqiqadagi harakatlar uchun", "O'tgan voqealar uchun", "Kelajak rejalari uchun"], answer: 1, explanation: "Present Continuous hozir sodir bo'layotgan yoki vaqtinchalik harakatlarni ifodalaydi." },
      { question: "'She ___ TV right now.' — to'g'ri shakl?", options: ["watch", "watches", "is watching", "was watching"], answer: 2, explanation: "Present Continuous: is/am/are + V-ing." },
      { question: "Qaysi fe'l Continuous shaklida ishlatilmaydi?", options: ["run", "know", "watch", "cook"], answer: 1, explanation: "'Know' — stative verb, Continuous shaklida ishlatilmaydi." },
      { question: "'Temporary' so'zi ma'nosi?", options: ["Doimiy", "Vaqtincha", "Kuchli", "Musbat"], answer: 1, explanation: "'Temporary' — vaqtincha, o'tkinchi degan ma'noni anglatadi." },
      { question: "To'g'ri inkor shaklini tanlang: 'I ___ TV.'", options: ["am not watching", "is not watching", "are not watching", "not watch"], answer: 0, explanation: "I bilan 'am not' ishlatiladi." },
      { question: "'Improve' so'zi ma'nosi?", options: ["Yomonlashtirmoq", "O'zgartirmoq", "Yaxshilanmoq", "Harakat qilmoq"], answer: 2, explanation: "'Improve' — yaxshilanmoq, rivojlanmoq." },
      { question: "So'roq shaklini tanlang: 'they / study'", options: ["Do they studying?", "Are they studying?", "Is they studying?", "They are studying?"], answer: 1, explanation: "They bilan 'Are' ishlatiladi." },
      { question: "'Right now' ma'nosi?", options: ["Har doim", "Hozir", "Kecha", "Ertaga"], answer: 1, explanation: "'Right now' — ayni daqiqada, hozir." },
      { question: "Qaysi gap to'g'ri?", options: ["She is wanting coffee.", "She wants coffee.", "She wanting coffee.", "She want coffee."], answer: 1, explanation: "'Want' — stative verb, Present Continuous shaklida ishlatilmaydi." },
      { question: "'What ___ you ___ right now?' — to'g'ri shakl?", options: ["do / do", "are / doing", "is / doing", "do / doing"], answer: 1, explanation: "'You' bilan 'are' ishlatiladi: What are you doing?" },
    ]
  },

  // ─── LESSON 3 ───────────────────────────────────────────────────────────────
  {
    id: 3,
    title: "Present Simple vs Continuous (farq)",
    block: "Present & Past",
    blockColor: "#22c55e",
    explanation: [
      {
        heading: "Asosiy farq",
        text: "Present Simple — odatiy, takroriy, doimiy harakatlar uchun (every day, usually, always). Present Continuous — hozir sodir bo'layotgan yoki vaqtincha harakatlar uchun (now, right now, at the moment, currently).",
        examples: ["I drink tea every morning. (Simple — odat)", "I am drinking tea right now. (Continuous — hozir)", "He works in a school. (Simple — doimiy ish)"]
      },
      {
        heading: "Signal so'zlar",
        text: "Present Simple bilan: always, usually, often, sometimes, never, every day/week/year, on Mondays. Present Continuous bilan: now, right now, at the moment, currently, today, this week.",
        examples: ["She always has breakfast at 8. (Simple)", "She is having breakfast now. (Continuous)", "They often visit us. (Simple)"]
      },
      {
        heading: "Vaqtincha vs doimiy",
        text: "Present Continuous vaqtincha holatlarni ham ifodalaydi, hatto hozir bajarmayotgan bo'lsa ham.",
        examples: ["I am living with my parents this month. (vaqtincha)", "I live in Tashkent. (doimiy)", "She is studying medicine. (hozirgi davr — vaqtincha bo'lishi mumkin)"]
      },
      {
        heading: "O'zgarish bildiruvchi fe'llar",
        text: "O'zgarish va rivojlanishni bildiruvchi fe'llar (get, change, improve, rise, fall, grow) kontekstga qarab har ikkala zamonda ham ishlatilishi mumkin.",
        examples: ["Prices rise every year. (odatiy)", "Prices are rising fast this year. (hozirgi jarayon)", "The weather is getting colder."]
      },
      {
        heading: "Ko'p uchraydigan xatolar",
        text: "O'zbeklar ko'pincha Present Simple va Continuous ni chalkashtirib yuborishadi. 'Men o'qiyapman' — hozir bo'lsa 'I am studying', odat bo'lsa 'I study'. Stative verbs (know, love, want) — hech qachon Continuous shaklida emas.",
        examples: ["I study at university. (doimiy)", "I am studying for an exam right now. (hozir, vaqtincha)", "I love you. (NOT: I am loving you)"]
      },
    ],
    vocabulary: [
      { word: "at the moment", translation: "hozirda, shu paytda", partOfSpeech: "ravish", exampleSentence: "I am busy at the moment.", exampleTranslation: "Men hozirda bandman." },
      { word: "permanent", translation: "doimiy, abadiy", partOfSpeech: "sifat", exampleSentence: "This is a permanent position.", exampleTranslation: "Bu doimiy lavozim." },
      { word: "describe", translation: "tavsiflash", partOfSpeech: "fe'l", exampleSentence: "Can you describe what you see?", exampleTranslation: "Ko'rayotganingizni tavsiflap bera olasizmi?" },
      { word: "contrast", translation: "zidlik, farq", partOfSpeech: "ot", exampleSentence: "There is a contrast between the two tenses.", exampleTranslation: "Ikkita zamon orasida farq bor." },
      { word: "situation", translation: "holat, vaziyat", partOfSpeech: "ot", exampleSentence: "The situation is changing rapidly.", exampleTranslation: "Vaziyat tezda o'zgarmoqda." },
      { word: "process", translation: "jarayon", partOfSpeech: "ot", exampleSentence: "Learning a language is a long process.", exampleTranslation: "Til o'rganish uzoq jarayondir." },
      { word: "action", translation: "harakat", partOfSpeech: "ot", exampleSentence: "His action surprised everyone.", exampleTranslation: "Uning harakati hamma ni hayron qoldirdi." },
      { word: "state", translation: "holat", partOfSpeech: "ot", exampleSentence: "I am in a state of shock.", exampleTranslation: "Men shok holatidaman." },
      { word: "signal word", translation: "signal so'z", partOfSpeech: "ot", exampleSentence: "'Always' is a signal word for Present Simple.", exampleTranslation: "'Always' Present Simple uchun signal so'zdir." },
      { word: "typical", translation: "odatiy, tipik", partOfSpeech: "sifat", exampleSentence: "This is a typical mistake.", exampleTranslation: "Bu odatiy xato." },
      { word: "frequent", translation: "tez-tez", partOfSpeech: "sifat", exampleSentence: "He makes frequent mistakes.", exampleTranslation: "U tez-tez xato qiladi." },
      { word: "lately", translation: "yaqinda, so'nggi paytda", partOfSpeech: "ravish", exampleSentence: "I have been studying hard lately.", exampleTranslation: "Men so'nggi paytda qattiq o'qimoqdaman." },
      { word: "differ", translation: "farqlanmoq", partOfSpeech: "fe'l", exampleSentence: "These two tenses differ in usage.", exampleTranslation: "Bu ikki zamon qo'llanishida farqlanadi." },
      { word: "ongoing", translation: "davom etayotgan", partOfSpeech: "sifat", exampleSentence: "This is an ongoing project.", exampleTranslation: "Bu davom etayotgan loyihadir." },
      { word: "switch", translation: "o'tmoq, almashtirmoq", partOfSpeech: "fe'l", exampleSentence: "I often switch between languages.", exampleTranslation: "Men ko'pincha tillar orasida almashaman." },
    ],
    exercises: [
      {
        type: "fillBlank",
        title: "To'g'ri zamonni tanlang",
        items: [
          { sentence: "He usually ___ (go) to work by car, but today he ___ (walk).", answer: "goes / is walking" },
          { sentence: "I ___ (not/understand) this word. Can you explain?", answer: "don't understand" },
          { sentence: "Water ___ (freeze) at 0°C.", answer: "freezes" },
          { sentence: "She ___ (live) with her parents this month.", answer: "is living" },
          { sentence: "Why ___ you ___ (smile)?", answer: "are / smiling" },
        ]
      },
      {
        type: "multipleChoice",
        title: "Qaysi zamon to'g'ri?",
        items: [
          { question: "'I always ___ coffee in the morning.'", options: ["am drinking", "drink", "drinking", "drank"], answer: 1 },
          { question: "'She ___ a new book this week.'", options: ["reads", "read", "is reading", "was reading"], answer: 2 },
          { question: "'The sun ___ in the east.'", options: ["is rising", "rise", "rises", "rose"], answer: 2 },
          { question: "'He ___ on his laptop at the moment.'", options: ["work", "works", "is working", "worked"], answer: 2 },
        ]
      },
      {
        type: "wordOrder",
        title: "So'zlarni joylashtiring",
        items: [
          { words: ["moment", "at", "studying", "the", "I", "am"], answer: "I am studying at the moment" },
          { words: ["often", "to", "She", "cinema", "the", "goes"], answer: "She often goes to the cinema" },
          { words: ["speaking?", "you", "are", "Why"], answer: "Why are you speaking?" },
          { words: ["every", "He", "exercises", "morning"], answer: "He exercises every morning" },
        ]
      },
      {
        type: "matchPairs",
        title: "Signal so'zlarni moslashtiring",
        pairs: [
          { english: "always", uzbek: "Present Simple" },
          { english: "right now", uzbek: "Present Continuous" },
          { english: "every day", uzbek: "Present Simple" },
          { english: "at the moment", uzbek: "Present Continuous" },
          { english: "usually", uzbek: "Present Simple" },
          { english: "currently", uzbek: "Present Continuous" },
        ]
      },
      {
        type: "errorCorrection",
        title: "Xatoni toping",
        items: [
          { sentence: "I am knowing the answer.", errorWord: "am knowing", correction: "know" },
          { sentence: "She always is late.", errorWord: "is", correction: "is → 'She is always late' (tartib xatosi)" },
          { sentence: "He work at the moment.", errorWord: "work", correction: "is working" },
          { sentence: "They are go to school every day.", errorWord: "are go", correction: "go" },
        ]
      }
    ],
    quiz: [
      { question: "Qaysi gap to'g'ri?", options: ["I am knowing you.", "I know you.", "I knowing you.", "I does know you."], answer: 1, explanation: "'Know' — stative verb, Continuous shaklida ishlatilmaydi." },
      { question: "'Every day' — qaysi zamon bilan ishlatiladi?", options: ["Present Continuous", "Present Simple", "Past Simple", "Future Simple"], answer: 1, explanation: "'Every day' — Present Simple uchun signal so'z." },
      { question: "'At the moment' so'zi ma'nosi?", options: ["Har doim", "Hozirda", "Kecha", "Vaqtida"], answer: 1, explanation: "'At the moment' — hozirda, shu payta." },
      { question: "To'g'ri gapni tanlang:", options: ["She is working every day.", "She works every day.", "She work every day.", "She working every day."], answer: 1, explanation: "Odatiy harakatlar uchun Present Simple ishlatiladi." },
      { question: "Hozir bo'layotgan ish uchun qaysi zamon?", options: ["Present Simple", "Present Continuous", "Past Simple", "Past Continuous"], answer: 1, explanation: "Hozir, ayni daqiqada bo'layotgan ish — Present Continuous." },
      { question: "'Permanent' so'zi ma'nosi?", options: ["Vaqtincha", "Doimiy", "Tez-tez", "Kamdan-kam"], answer: 1, explanation: "'Permanent' — doimiy, abadiy." },
      { question: "Qaysi fe'l stative verb emas?", options: ["know", "love", "want", "run"], answer: 3, explanation: "'Run' — harakat fe'li, stative verb emas." },
      { question: "'She ___ (currently work) on a new project.'", options: ["currently works", "is currently working", "currently working", "currently worked"], answer: 1, explanation: "'Currently' + hozirgi davomli jarayon → Present Continuous." },
      { question: "'Differ' so'zi ma'nosi?", options: ["Birlashtirmoq", "Farqlanmoq", "Tavsiflash", "Aniqlash"], answer: 1, explanation: "'Differ' — farqlanmoq, o'zgacha bo'lmoq." },
      { question: "Qaysi gap to'g'ri Present Continuous da?", options: ["I wanting coffee.", "I am want coffee.", "I am wanting coffee.", "I want coffee."], answer: 3, explanation: "'Want' — stative verb, faqat Present Simple da ishlatiladi." },
    ]
  },

  // ─── LESSON 4 ───────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Past Simple (I did)",
    block: "Present & Past",
    blockColor: "#22c55e",
    explanation: [
      {
        heading: "Past Simple nima?",
        text: "Past Simple (O'tgan oddiy zamon) — aniq vaqtda tugallangan o'tgan harakatlarni ifodalaydi. O'zbek tilidagi '-di' qo'shimchasiga mos keladi. Masalan: 'yesterday', 'last week', 'in 2020', 'ago'.",
        examples: ["I visited my grandmother yesterday.", "She finished the project last week.", "They moved to Tashkent in 2018."]
      },
      {
        heading: "To'g'ri fe'llar (Regular verbs)",
        text: "To'g'ri fe'llarga -ed qo'shiladi: work→worked, play→played, visit→visited. -e bilan tugasa, faqat -d: live→lived. Ikki tovush: undosh+unli+undosh→ikkilashtirish: stop→stopped.",
        examples: ["I worked all day.", "She played tennis.", "He stopped the car."]
      },
      {
        heading: "Noto'g'ri fe'llar (Irregular verbs)",
        text: "Ko'p ishlatilgan fe'llar noto'g'ri: go→went, come→came, see→saw, take→took, know→knew, give→gave, get→got, have→had, do→did.",
        examples: ["I went to the market.", "She came home late.", "He saw an old friend."]
      },
      {
        heading: "Inkor va so'roq shakli",
        text: "Inkor: Subject + didn't + V1. So'roq: Did + Subject + V1 + ? Barcha shaxslar uchun 'did/didn't' ishlatiladi, asosiy fe'l o'zgarmaydi.",
        examples: ["I didn't go to school yesterday.", "She didn't understand the question.", "Did you call him?"]
      },
      {
        heading: "Signal so'zlar",
        text: "Yesterday, last (week/year/night), ago (2 days ago), in (2020), when (o'tgan paytda). Ushbu so'zlar Past Simple ni ko'rsatadi.",
        examples: ["I met her two years ago.", "We watched a film last night.", "Did you see him yesterday?"]
      },
    ],
    vocabulary: [
      { word: "visit", translation: "tashrif buyurmoq", partOfSpeech: "fe'l", exampleSentence: "We visited the museum.", exampleTranslation: "Biz muzeyga tashrif buyurdik." },
      { word: "finish", translation: "tugatmoq", partOfSpeech: "fe'l", exampleSentence: "She finished her homework.", exampleTranslation: "U uy vazifasini tugatdi." },
      { word: "travel", translation: "sayohat qilmoq", partOfSpeech: "fe'l", exampleSentence: "They travelled to Europe.", exampleTranslation: "Ular Yevropaga sayohat qilishdi." },
      { word: "decide", translation: "qaror qilmoq", partOfSpeech: "fe'l", exampleSentence: "I decided to leave early.", exampleTranslation: "Men erta ketishga qaror qildim." },
      { word: "arrive", translation: "kelmoq, yetib kelmoq", partOfSpeech: "fe'l", exampleSentence: "The train arrived on time.", exampleTranslation: "Poyezd o'z vaqtida keldi." },
      { word: "happen", translation: "sodir bo'lmoq", partOfSpeech: "fe'l", exampleSentence: "What happened last night?", exampleTranslation: "Kecha kechqurun nima bo'ldi?" },
      { word: "realize", translation: "anglash, tushunib yetmoq", partOfSpeech: "fe'l", exampleSentence: "I realized my mistake.", exampleTranslation: "Men xatoimni angladim." },
      { word: "forget", translation: "unutmoq", partOfSpeech: "fe'l", exampleSentence: "She forgot her keys.", exampleTranslation: "U kalitlarini unutdi." },
      { word: "spend", translation: "o'tkazmoq (vaqt), sarflamoq", partOfSpeech: "fe'l", exampleSentence: "We spent the weekend at the beach.", exampleTranslation: "Biz dam olish kunini sohilda o'tkazdik." },
      { word: "meet", translation: "uchrashmoq", partOfSpeech: "fe'l", exampleSentence: "I met an old friend yesterday.", exampleTranslation: "Men kecha eski do'stimni uchrashtirim." },
      { word: "break", translation: "sindirmoq", partOfSpeech: "fe'l", exampleSentence: "He broke the window.", exampleTranslation: "U oynani sindirdi." },
      { word: "find", translation: "topmoq", partOfSpeech: "fe'l", exampleSentence: "She found her book.", exampleTranslation: "U kitobini topdi." },
      { word: "lose", translation: "yo'qotmoq", partOfSpeech: "fe'l", exampleSentence: "I lost my phone.", exampleTranslation: "Men telefonimni yo'qotdim." },
      { word: "teach", translation: "o'qitmoq", partOfSpeech: "fe'l", exampleSentence: "He taught English for ten years.", exampleTranslation: "U o'n yil ingliz tili o'qitdi." },
      { word: "build", translation: "qurmoq", partOfSpeech: "fe'l", exampleSentence: "They built a new school.", exampleTranslation: "Ular yangi maktab qurdi." },
    ],
    exercises: [
      {
        type: "fillBlank",
        title: "To'g'ri shaklni qo'ying",
        items: [
          { sentence: "She ___ (visit) her grandmother last Sunday.", answer: "visited" },
          { sentence: "I ___ (not/go) to the party because I was tired.", answer: "didn't go" },
          { sentence: "___ they ___ (travel) to Europe last year?", answer: "Did / travel" },
          { sentence: "He ___ (break) his leg two months ago.", answer: "broke" },
          { sentence: "We ___ (spend) three days in Samarkand.", answer: "spent" },
        ]
      },
      {
        type: "multipleChoice",
        title: "To'g'ri tarjimani tanlang",
        items: [
          { question: "Men kecha eski do'stimni uchratdim.", options: ["I meet an old friend yesterday.", "I met an old friend yesterday.", "I was meeting an old friend yesterday.", "I have met an old friend yesterday."], answer: 1 },
          { question: "U o'n yil ingliz tili o'qitdimi?", options: ["Did he teach English for ten years?", "Does he teach English for ten years?", "Has he taught English for ten years?", "He taught English for ten years?"], answer: 0 },
          { question: "Ular yangi maktab qurishdi.", options: ["They build a new school.", "They are building a new school.", "They built a new school.", "They have built a new school."], answer: 2 },
          { question: "Men telefobimni yo'qotdim.", options: ["I lose my phone.", "I lost my phone.", "I have lost my phone.", "I was losing my phone."], answer: 1 },
        ]
      },
      {
        type: "wordOrder",
        title: "So'zlarni joylashtiring",
        items: [
          { words: ["ago", "met", "two", "I", "her", "years"], answer: "I met her two years ago" },
          { words: ["night?", "last", "happen", "did", "What"], answer: "What did happen last night?" },
          { words: ["didn't", "She", "the", "understand", "question"], answer: "She didn't understand the question" },
          { words: ["trained", "The", "time.", "on", "arrived"], answer: "The train arrived on time." },
        ]
      },
      {
        type: "matchPairs",
        title: "Fe'l qo'shimchalarini moslashtiring",
        pairs: [
          { english: "visit", uzbek: "visited" },
          { english: "go", uzbek: "went" },
          { english: "see", uzbek: "saw" },
          { english: "break", uzbek: "broke" },
          { english: "find", uzbek: "found" },
          { english: "teach", uzbek: "taught" },
        ]
      },
      {
        type: "errorCorrection",
        title: "Xatoni toping",
        items: [
          { sentence: "She didn't went to school.", errorWord: "went", correction: "go" },
          { sentence: "Did he came yesterday?", errorWord: "came", correction: "come" },
          { sentence: "I seed a beautiful bird.", errorWord: "seed", correction: "saw" },
          { sentence: "They builded a new house.", errorWord: "builded", correction: "built" },
        ]
      }
    ],
    quiz: [
      { question: "Past Simple qachon ishlatiladi?", options: ["Hozirda bo'layotgan ish", "Aniq vaqtda tugallangan o'tgan ish", "Odatiy harakatlar", "Kelajak rejalari"], answer: 1, explanation: "Past Simple aniq vaqtda tugallangan o'tgan harakatlar uchun." },
      { question: "'go' ning Past Simple shakli?", options: ["goed", "gone", "went", "goes"], answer: 2, explanation: "'Go' — noto'g'ri fe'l, Past Simple'da 'went'." },
      { question: "To'g'ri inkor shaklini tanlang:", options: ["She didn't went.", "She doesn't went.", "She didn't go.", "She not went."], answer: 2, explanation: "didn't + V1 (asosiy fe'l o'zgarmaydi)." },
      { question: "'Forget' ning Past Simple shakli?", options: ["forgetted", "forgot", "forgotten", "forget"], answer: 1, explanation: "'Forget' — noto'g'ri fe'l: forgot." },
      { question: "'Did they ___ to Paris?' — to'g'ri shakl?", options: ["went", "gone", "go", "goes"], answer: 2, explanation: "Did bilan asosiy fe'l o'zgarmaydi: go." },
      { question: "'Realize' so'zi ma'nosi?", options: ["Rejalashtirmoq", "Anglash, tushunib yetmoq", "Erishmoq", "Yaratmoq"], answer: 1, explanation: "'Realize' — anglash, tushunib yetmoq." },
      { question: "Qaysi signal so'z Past Simple bilan ishlatiladi?", options: ["right now", "always", "yesterday", "currently"], answer: 2, explanation: "'Yesterday' — Past Simple bilan ishlatiluvchi signal so'z." },
      { question: "'spend' ning Past Simple shakli?", options: ["spended", "spend", "spent", "spen"], answer: 2, explanation: "'Spend' — noto'g'ri fe'l: spent." },
      { question: "Qaysi gap to'g'ri?", options: ["I finded my keys.", "I found my keys.", "I find my keys yesterday.", "I was found my keys."], answer: 1, explanation: "'Find' — noto'g'ri fe'l: found." },
      { question: "'Arrive' ning Past Simple shakli?", options: ["arrivved", "arrived", "arove", "arrive"], answer: 1, explanation: "'Arrive' — to'g'ri fe'l: -d qo'shiladi → arrived." },
    ]
  },

  // ─── LESSON 5 ───────────────────────────────────────────────────────────────
  {
    id: 5,
    title: "Past Continuous (I was doing)",
    block: "Present & Past",
    blockColor: "#22c55e",
    explanation: [
      {
        heading: "Past Continuous nima?",
        text: "Past Continuous (O'tgan davomli zamon) — o'tmishdagi muayyan vaqtda davom etayotgan harakatni ifodalaydi. Ko'pincha Past Simple bilan birgalikda ishlatiladi: bitta harakat davom etayotganda, ikkinchisi kelib qoladi.",
        examples: ["I was sleeping when you called.", "She was reading while he was cooking.", "At 8 pm, we were watching TV."]
      },
      {
        heading: "Tuzilishi",
        text: "Subject + was/were + V-ing. Was → I, He, She, It bilan. Were → You, We, They bilan.",
        examples: ["I was working.", "She was studying.", "They were playing."]
      },
      {
        heading: "Inkor va so'roq",
        text: "Inkor: wasn't / weren't + V-ing. So'roq: Was/Were + Subject + V-ing?",
        examples: ["I wasn't sleeping.", "Were you listening?", "She wasn't watching TV."]
      },
      {
        heading: "when va while bilan",
        text: "'When' + Past Simple (qisqa, to'satdan harakat). 'While' + Past Continuous (uzoq, davomli harakat mashg'ullik).",
        examples: ["I was cooking when the phone rang.", "While she was studying, he was watching TV.", "He fell asleep while he was reading."]
      },
      {
        heading: "Faqat fon (background) uchun",
        text: "Past Continuous ko'pincha bir harakat bo'layotganida boshqa harakatning fonini (background) ifodalaydi.",
        examples: ["The sun was shining and birds were singing when I woke up.", "It was raining, so we stayed inside.", "People were dancing when the music stopped."]
      },
    ],
    vocabulary: [
      { word: "while", translation: "... paytida, bir vaqtda", partOfSpeech: "bog'lovchi", exampleSentence: "I read while she cooked.", exampleTranslation: "U oshpazlik qilayotganda men o'qidim." },
      { word: "suddenly", translation: "to'satdan", partOfSpeech: "ravish", exampleSentence: "Suddenly the lights went out.", exampleTranslation: "To'satdan chiroq o'chib qoldi." },
      { word: "interrupt", translation: "bo'lmoq, to'xtatmoq", partOfSpeech: "fe'l", exampleSentence: "Don't interrupt me when I'm speaking.", exampleTranslation: "Gapirayotganimda meni bo'lmang." },
      { word: "background", translation: "fon, orqa zamin", partOfSpeech: "ot", exampleSentence: "There was music in the background.", exampleTranslation: "Fonda musiqa yangrardi." },
      { word: "storm", translation: "bo'ron", partOfSpeech: "ot", exampleSentence: "A storm was coming.", exampleTranslation: "Bo'ron kelayotgan edi." },
      { word: "shine", translation: "porlash, yarqilamoq", partOfSpeech: "fe'l", exampleSentence: "The sun was shining brightly.", exampleTranslation: "Quyosh ravshan porlayotgan edi." },
      { word: "ring", translation: "jiringlash, chalinmoq", partOfSpeech: "fe'l", exampleSentence: "The phone rang suddenly.", exampleTranslation: "Telefon to'satdan jiringladi." },
      { word: "fall asleep", translation: "uxlab qolmoq", partOfSpeech: "fe'l", exampleSentence: "He fell asleep on the sofa.", exampleTranslation: "U divaneda uxlab qoldi." },
      { word: "carry", translation: "ko'tarmoq, olib yurmoq", partOfSpeech: "fe'l", exampleSentence: "She was carrying a heavy bag.", exampleTranslation: "U og'ir sumka ko'tarib yurardi." },
      { word: "discuss", translation: "muhokama qilmoq", partOfSpeech: "fe'l", exampleSentence: "They were discussing the problem.", exampleTranslation: "Ular muammoni muhokama qilishayotgan edi." },
      { word: "yell", translation: "baqirmoq", partOfSpeech: "fe'l", exampleSentence: "Someone was yelling outside.", exampleTranslation: "Tashqarida kimdir baqirayotgan edi." },
      { word: "pour", translation: "quyish, (yomg'ir) quyib yog'moq", partOfSpeech: "fe'l", exampleSentence: "It was pouring when we left.", exampleTranslation: "Biz ketayotganimizda yomg'ir quyib yog'ayotgan edi." },
      { word: "notice", translation: "sezmoq", partOfSpeech: "fe'l", exampleSentence: "I noticed she was crying.", exampleTranslation: "Men u yig'layotganini sezdim." },
      { word: "entire", translation: "butun, to'liq", partOfSpeech: "sifat", exampleSentence: "I was working the entire day.", exampleTranslation: "Men butun kun ishlayotgan edim." },
      { word: "argue", translation: "bahslashmoq, janjallashmoq", partOfSpeech: "fe'l", exampleSentence: "They were arguing loudly.", exampleTranslation: "Ular baland ovozda janjalashayotgan edi." },
    ],
    exercises: [
      {
        type: "fillBlank",
        title: "To'g'ri shaklni qo'ying",
        items: [
          { sentence: "I ___ (sleep) when you knocked.", answer: "was sleeping" },
          { sentence: "They ___ (not/watch) TV, they ___ (study).", answer: "weren't watching / were studying" },
          { sentence: "___ she ___ (cook) at 7 o'clock?", answer: "Was / cooking" },
          { sentence: "While he ___ (read), she ___ (make) tea.", answer: "was reading / was making" },
          { sentence: "The sun ___ (shine) when we arrived.", answer: "was shining" },
        ]
      },
      {
        type: "multipleChoice",
        title: "To'g'ri tarjimani tanlang",
        items: [
          { question: "Men gapirganida u o'qiyotgan edi.", options: ["She was reading when I spoke.", "She is reading when I speak.", "She read when I speak.", "She reads when I spoke."], answer: 0 },
          { question: "Ular butun tun bahslashishayotgan edi.", options: ["They argued the entire night.", "They were arguing the entire night.", "They are arguing the entire night.", "They arguing all night."], answer: 1 },
          { question: "Biz chiqib ketayotganimizda yomg'ir quyib yog'ayotgan edi.", options: ["It poured when we left.", "It was pouring when we left.", "It rains when we left.", "It is pouring when we left."], answer: 1 },
          { question: "Siz soat 9 da nima qilayotgan edingiz?", options: ["What do you do at 9?", "What were you doing at 9?", "What did you do at 9?", "What are you doing at 9?"], answer: 1 },
        ]
      },
      {
        type: "wordOrder",
        title: "So'zlarni joylashtiring",
        items: [
          { words: ["when", "sleeping", "was", "I", "called", "you"], answer: "I was sleeping when you called" },
          { words: ["doing", "were", "you", "What", "at", "8?"], answer: "What were you doing at 8?" },
          { words: ["TV", "watching", "weren't", "They"], answer: "They weren't watching TV" },
          { words: ["studying", "he", "was", "While", "cooked", "she"], answer: "While he was studying she cooked" },
        ]
      },
      {
        type: "matchPairs",
        title: "Juftliklarni moslashtiring",
        pairs: [
          { english: "while", uzbek: "... paytida" },
          { english: "suddenly", uzbek: "to'satdan" },
          { english: "background", uzbek: "fon" },
          { english: "interrupt", uzbek: "bo'lmoq" },
          { english: "argue", uzbek: "bahslashmoq" },
          { english: "notice", uzbek: "sezmoq" },
        ]
      },
      {
        type: "errorCorrection",
        title: "Xatoni toping",
        items: [
          { sentence: "She were reading when I came.", errorWord: "were", correction: "was" },
          { sentence: "I was sleep when you called.", errorWord: "sleep", correction: "sleeping" },
          { sentence: "Was they watching TV?", errorWord: "Was", correction: "Were" },
          { sentence: "He fell asleep while he reads.", errorWord: "reads", correction: "was reading" },
        ]
      }
    ],
    quiz: [
      { question: "Past Continuous ni qachon ishlatamiz?", options: ["Tugallangan o'tgan ish", "O'tmishdagi davomli ish", "Kelajak rejasi", "Odatiy ish"], answer: 1, explanation: "Past Continuous o'tmishdagi muayyan vaqtda davom etayotgan harakatni ifodalaydi." },
      { question: "'She' bilan qaysi shakl to'g'ri?", options: ["She were reading.", "She was read.", "She was reading.", "She been reading."], answer: 2, explanation: "She bilan 'was' ishlatiladi: She was reading." },
      { question: "'While' so'zi qaysi zamon bilan ishlatiladi?", options: ["Past Simple", "Past Continuous", "Present Simple", "Past Perfect"], answer: 1, explanation: "'While' + Past Continuous — uzoq, fon harakat." },
      { question: "'Suddenly' so'zi ma'nosi?", options: ["Sekin", "To'satdan", "Har doim", "Ba'zan"], answer: 1, explanation: "'Suddenly' — to'satdan, kutilmagan tarzda." },
      { question: "To'g'ri so'roq shaklini tanlang:", options: ["Was they studying?", "Were they studying?", "Did they studying?", "Are they studying?"], answer: 1, explanation: "They bilan 'Were' ishlatiladi." },
      { question: "'Argue' so'zi ma'nosi?", options: ["Kelishmoq", "Bahslashmoq", "Gaplashmoq", "O'ylash"], answer: 1, explanation: "'Argue' — bahslashmoq, janjallashmoq." },
      { question: "Qaysi gap to'g'ri?", options: ["I was sleep.", "I sleeping.", "I were sleeping.", "I was sleeping."], answer: 3, explanation: "I + was + V-ing." },
      { question: "'when' + Past Simple nimani anglatadi?", options: ["Uzoq davomli ish", "To'satdan sodir bo'lgan ish", "Odatiy ish", "Tugallanmagan ish"], answer: 1, explanation: "'When' Past Simple bilan kelganda — to'satdan, qisqa muddatli harakat." },
      { question: "'Notice' so'zi ma'nosi?", options: ["E'tibor bermaslik", "Sezmoq", "Ko'rmoq", "Bilmoq"], answer: 1, explanation: "'Notice' — sezmoq, diqqatini tortmoq." },
      { question: "'I was working ___ day.' — to'g'ri so'z?", options: ["whole", "all", "entire", "full"], answer: 2, explanation: "'Entire day' — butun kun." },
    ]
  },

  // ─── LESSON 6 ───────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "Past Simple vs Past Continuous (farq)",
    block: "Present & Past",
    blockColor: "#22c55e",
    explanation: [
      {
        heading: "Farq nimada?",
        text: "Past Simple — to'liq tugallangan, qisqa muddatli o'tgan harakat. Past Continuous — o'tmishdagi muayyan vaqtda davom etayotgan (background) harakat. Ko'pincha ikkalasi birgalikda ishlatiladi.",
        examples: ["I was reading when he arrived. (Continuous=fon, Simple=to'satdan)", "She cooked, cleaned and went to bed. (ketma-ket tugallangan harakatlar)", "The sun was shining and birds were singing. (fon holatlar)"]
      },
      {
        heading: "Ketma-ket vs bir vaqtda",
        text: "Past Simple: ketma-ket harakatlar uchun (then, after, next). Past Continuous: bir vaqtda davom etayotgan harakatlar uchun (while, as).",
        examples: ["She got up, had breakfast and left. (ketma-ket)", "While she was eating, he was watching TV. (bir vaqtda)", "I finished work, then went home."]
      },
      {
        heading: "To'satdan sodir bo'lgan ish",
        text: "Past Continuous (davomli ish) + when + Past Simple (to'satdan sodir bo'lgan ish). Masalan: I was having a shower when the doorbell rang.",
        examples: ["We were driving when it started to snow.", "She was sleeping when the alarm went off.", "I was talking to him when he suddenly left."]
      },
      {
        heading: "Faqat Past Continuous qiyinchilik",
        text: "Past Continuous bilan muammoli holat: faqat holat-sharoitni tasvirlash, harakat emas. Masalan: hikoya boshida vaziyatni tasvirlash uchun.",
        examples: ["It was a dark night. The wind was blowing. I was walking home alone...", "The café was full. People were chatting and laughing.", "The children were sleeping peacefully."]
      },
      {
        heading: "Ko'p uchraydigan xatolar",
        text: "Ketma-ket harakatlar uchun Past Continuous ishlatmaslik kerak. 'I was getting up, was having breakfast and was leaving' — NOTO'G'RI. Past Simple ishlatilishi kerak: 'I got up, had breakfast and left.'",
        examples: ["WRONG: I was cooking, was eating and was sleeping.", "RIGHT: I cooked, ate and went to sleep.", "She was talking on the phone when I came in."]
      },
    ],
    vocabulary: [
      { word: "sequence", translation: "ketma-ketlik", partOfSpeech: "ot", exampleSentence: "Follow the sequence of events.", exampleTranslation: "Voqealar ketma-ketligiga rioya qiling." },
      { word: "simultaneously", translation: "bir vaqtda", partOfSpeech: "ravish", exampleSentence: "They spoke simultaneously.", exampleTranslation: "Ular bir vaqtda gapirdi." },
      { word: "interrupt", translation: "to'xtatmoq, bo'lmoq", partOfSpeech: "fe'l", exampleSentence: "He interrupted the meeting.", exampleTranslation: "U yig'ilishni to'xtatdi." },
      { word: "alarm", translation: "signal, qo'ng'iroq", partOfSpeech: "ot", exampleSentence: "The alarm went off at 6.", exampleTranslation: "Soat 6 da signal chalindi." },
      { word: "doorbell", translation: "eshik qo'ng'irog'i", partOfSpeech: "ot", exampleSentence: "The doorbell rang.", exampleTranslation: "Eshik qo'ng'irog'i chaldi." },
      { word: "as", translation: "... paytida / sifatida", partOfSpeech: "bog'lovchi", exampleSentence: "As she was leaving, it started raining.", exampleTranslation: "U ketayotganda yomg'ir yog'a boshladi." },
      { word: "scene", translation: "manzara, sahna", partOfSpeech: "ot", exampleSentence: "The scene was beautiful.", exampleTranslation: "Manzara chiroyli edi." },
      { word: "eventually", translation: "oxir-oqibat", partOfSpeech: "ravish", exampleSentence: "Eventually, they found a solution.", exampleTranslation: "Oxir-oqibat ular yechim topishdi." },
      { word: "immediately", translation: "darhol", partOfSpeech: "ravish", exampleSentence: "I called him immediately.", exampleTranslation: "Men uni darhol chaqirdim." },
      { word: "context", translation: "mazmun, kontekst", partOfSpeech: "ot", exampleSentence: "Understand the context first.", exampleTranslation: "Avval kontekstni tushuning." },
      { word: "describe", translation: "tasvirlamoq", partOfSpeech: "fe'l", exampleSentence: "Can you describe what happened?", exampleTranslation: "Nima bo'lganini tasvirlay olasizmi?" },
      { word: "escape", translation: "qochmoq, qutulmoq", partOfSpeech: "fe'l", exampleSentence: "He escaped from prison.", exampleTranslation: "U qamoqxonadan qochdi." },
      { word: "cheer", translation: "xursand qilmoq, qo'llab-quvvatlamoq", partOfSpeech: "fe'l", exampleSentence: "The crowd was cheering.", exampleTranslation: "Olomon xitob qilib turardi." },
      { word: "crash", translation: "to'qnashmoq, qulamoq", partOfSpeech: "fe'l/ot", exampleSentence: "The car crashed into the wall.", exampleTranslation: "Mashina devorga urildi." },
      { word: "peaceful", translation: "tinch, sokin", partOfSpeech: "sifat", exampleSentence: "It was a peaceful morning.", exampleTranslation: "Tinch ertalab edi." },
    ],
    exercises: [
      {
        type: "fillBlank",
        title: "To'g'ri zamonni ishlating",
        items: [
          { sentence: "She ___ (read) when he ___ (come) in.", answer: "was reading / came" },
          { sentence: "I ___ (get up), ___ (have) breakfast and ___ (go) to work.", answer: "got up / had / went" },
          { sentence: "While they ___ (play), it ___ (start) to rain.", answer: "were playing / started" },
          { sentence: "The crowd ___ (cheer) when the team ___ (score).", answer: "was cheering / scored" },
          { sentence: "She ___ (cook), ___ (clean) and then ___ (sleep).", answer: "cooked / cleaned / slept" },
        ]
      },
      {
        type: "multipleChoice",
        title: "To'g'ri variantni tanlang",
        items: [
          { question: "Ketma-ket harakatlar uchun qaysi zamon?", options: ["Past Continuous", "Past Simple", "Present Simple", "Past Perfect"], answer: 1 },
          { question: "Bir vaqtda davom etayotgan harakatlar uchun?", options: ["Past Simple + Past Simple", "Past Continuous + Past Continuous", "Past Simple only", "Present Continuous"], answer: 1 },
          { question: "'As she was leaving, it ___ rain.'", options: ["would start", "was starting", "started", "starts"], answer: 2 },
          { question: "'While' qaysi zamon bilan birga ishlatiladi?", options: ["Past Simple", "Past Continuous", "Present Perfect", "Future"], answer: 1 },
        ]
      },
      {
        type: "wordOrder",
        title: "So'zlarni joylashtiring",
        items: [
          { words: ["was", "She", "rang", "cooking", "doorbell", "when", "the"], answer: "She was cooking when the doorbell rang" },
          { words: ["playing", "started", "raining", "they", "were", "While", "it"], answer: "While they were playing it started raining" },
          { words: ["eventually", "found", "They", "solution", "a"], answer: "They eventually found a solution" },
          { words: ["crashed", "driving", "was", "he", "wall", "the", "into", "He"], answer: "He crashed into the wall while he was driving" },
        ]
      },
      {
        type: "matchPairs",
        title: "Juftliklarni moslashtiring",
        pairs: [
          { english: "simultaneously", uzbek: "bir vaqtda" },
          { english: "sequence", uzbek: "ketma-ketlik" },
          { english: "eventually", uzbek: "oxir-oqibat" },
          { english: "immediately", uzbek: "darhol" },
          { english: "peaceful", uzbek: "tinch" },
          { english: "escape", uzbek: "qochmoq" },
        ]
      },
      {
        type: "errorCorrection",
        title: "Xatoni toping",
        items: [
          { sentence: "I was getting up, was eating and was leaving.", errorWord: "was getting / was eating / was leaving", correction: "got up, ate, left" },
          { sentence: "While she reading, he slept.", errorWord: "reading", correction: "was reading" },
          { sentence: "The alarm went off while I was sleep.", errorWord: "sleep", correction: "sleeping" },
          { sentence: "She cooked when he arrived.", errorWord: "was cooking", correction: "is correct — but if ongoing: was cooking" },
        ]
      }
    ],
    quiz: [
      { question: "Ketma-ket o'tgan harakatlar uchun qaysi zamon?", options: ["Past Continuous", "Present Perfect", "Past Simple", "Past Perfect"], answer: 2, explanation: "Ketma-ket tugallangan o'tgan harakatlar — Past Simple." },
      { question: "'While she was cooking, he ___ TV.' — to'g'ri shakl?", options: ["was watching", "watched", "is watching", "watches"], answer: 0, explanation: "Bir vaqtda davomli harakatlar — Past Continuous + Past Continuous." },
      { question: "'Simultaneously' ma'nosi?", options: ["Birma-bir", "Bir vaqtda", "Sekin", "Tez-tez"], answer: 1, explanation: "'Simultaneously' — bir vaqtda, ayni paytda." },
      { question: "Qaysi gap to'g'ri?", options: ["I was getting up, was having breakfast and was leaving.", "I got up, had breakfast and left.", "I get up, have breakfast and leave.", "I gotten up, had breakfast, left."], answer: 1, explanation: "Ketma-ket harakatlar uchun Past Simple ishlatiladi." },
      { question: "'when' + Past Simple nimani anglatadi?", options: ["Bir vaqtda davom etayotgan ish", "To'satdan sodir bo'lgan ish", "Tugallanmagan ish", "Odatiy ish"], answer: 1, explanation: "'When' Past Simple bilan — to'satdan bo'lgan qisqa harakat." },
      { question: "'Alarm' ma'nosi?", options: ["Soat", "Signal/qo'ng'iroq", "Eshik", "Telefon"], answer: 1, explanation: "'Alarm' — signal, ogohlantirish qo'ng'irog'i." },
      { question: "'The car ___ into the wall.' — to'g'ri shakl?", options: ["was crashing", "crash", "crashed", "crashing"], answer: 2, explanation: "To'satdan sodir bo'lgan harakat — Past Simple: crashed." },
      { question: "'Peaceful' ma'nosi?", options: ["Shovqinli", "Tinch/sokin", "Qo'rqinchli", "Baxtli"], answer: 1, explanation: "'Peaceful' — tinch, xotirjam, sokin." },
      { question: "'As she was leaving, ___' — davomida nima keladi?", options: ["Past Perfect", "Past Simple — to'satdan", "Future Simple", "Present Simple"], answer: 1, explanation: "'As' + Continuous —> boshqa harakat Past Simple da keladi." },
      { question: "'Escape' ma'nosi?", options: ["Kirib kelmoq", "Qochmoq/qutulmoq", "Yashirmoq", "To'xtatmoq"], answer: 1, explanation: "'Escape' — qochmoq, qutulmoq." },
    ]
  },
];
