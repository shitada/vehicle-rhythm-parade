const baseRounds = [
  {
    id: "train",
    name: "でんしゃ",
    emoji: "🚆",
    subtitle: "ガタン ゴトン",
    instruction: "ひかったら タップ",
    color: "#2f8cff",
    themeClass: "theme-train",
    rhythm: [1, 1, 0, 0, 1, 1, 0, 0],
    beatInterval: 500,
    loops: 3,
    hitsNeeded: 8,
    bubbleText: "ガタン",
    introText: "でんしゃの リズム",
    surpriseTitle: "トンネル ぴかっ",
    surpriseCopy: "でんしゃが トンネルを くぐるよ",
    surpriseIcons: ["🚆", "✨", "🛤️"],
    surpriseMoments: [3, 9],
    pulseType: "sine",
    pulseFrequency: 350,
    hitTone: 540,
    bgmNotes: [392, 523, 659, 523],
    bgmType: "triangle",
    tapPraise: "いいね",
    starPraise: "きらっ",
    clearPraise: "じょうずに できた",
    feverPraise: "でんしゃ めいじん",
  },
  {
    id: "bus",
    name: "バス",
    emoji: "🚌",
    subtitle: "ゆら ゆら",
    instruction: "リズムに あわせて タップ",
    color: "#ff9f1c",
    themeClass: "theme-bus",
    rhythm: [1, 0, 1, 1, 0, 0],
    beatInterval: 480,
    loops: 4,
    hitsNeeded: 8,
    bubbleText: "ゆら ゆら",
    introText: "バスで しゅっぱつ",
    surpriseTitle: "まどの そと キラッ",
    surpriseCopy: "まちの けしきが みえてくるよ",
    surpriseIcons: ["🚌", "🏙️", "✨"],
    surpriseMoments: [3, 9],
    pulseType: "sawtooth",
    pulseFrequency: 390,
    hitTone: 590,
    bgmNotes: [330, 392, 494, 392],
    bgmType: "sine",
    tapPraise: "じょうず",
    starPraise: "ぴかぴか",
    clearPraise: "とっても じょうず",
    feverPraise: "バス すごい",
  },
  {
    id: "fire",
    name: "しょうぼうしゃ",
    emoji: "🚒",
    subtitle: "ウー ウー",
    instruction: "3れんだ リズム",
    color: "#ff6b4a",
    themeClass: "theme-fire",
    rhythm: [1, 1, 1, 0, 1, 1, 1, 0],
    beatInterval: 440,
    loops: 3,
    hitsNeeded: 12,
    bubbleText: "ウー ウー",
    introText: "しょうぼうしゃ しゅつどう",
    surpriseTitle: "みず しゅーっ",
    surpriseCopy: "ホースで みずを しゅーっ",
    surpriseIcons: ["🚒", "💦", "✨"],
    surpriseMoments: [5, 14],
    pulseType: "square",
    pulseFrequency: 470,
    hitTone: 690,
    bgmNotes: [349, 466, 523, 466],
    bgmType: "square",
    tapPraise: "すごい",
    starPraise: "ぴかっ",
    clearPraise: "ばっちり クリア",
    feverPraise: "しょうぼう ヒーロー",
  },
  {
    id: "taxi",
    name: "タクシー",
    emoji: "🚕",
    subtitle: "スイスイ",
    instruction: "よく きいて タップ",
    color: "#f7c948",
    themeClass: "theme-taxi",
    rhythm: [1, 1, 0, 1, 0, 0],
    beatInterval: 420,
    loops: 4,
    hitsNeeded: 8,
    bubbleText: "スイスイ",
    introText: "タクシーで まちを すすむ",
    surpriseTitle: "ネオン きらっ",
    surpriseCopy: "まちの ライトが ひかるよ",
    surpriseIcons: ["🚕", "🌃", "✨"],
    surpriseMoments: [4, 10],
    pulseType: "triangle",
    pulseFrequency: 430,
    hitTone: 620,
    bgmNotes: [392, 440, 523, 659],
    bgmType: "triangle",
    tapPraise: "やったね",
    starPraise: "きらめき",
    clearPraise: "かなり すごい",
    feverPraise: "タクシー マスター",
  },
  {
    id: "ship",
    name: "ふね",
    emoji: "🚢",
    subtitle: "ゆったり ざぶーん",
    instruction: "あかは おやすみ！",
    color: "#008c8c",
    themeClass: "theme-ship",
    rhythm: [1, 1, 0, -1, 0, 1, 0],
    beatInterval: 440,
    loops: 4,
    hitsNeeded: 8,
    bubbleText: "ざぶーん",
    introText: "ふねで うみへ",
    surpriseTitle: "しぶき きらきら",
    surpriseCopy: "うみに ひかりが はねるよ",
    surpriseIcons: ["🚢", "🌊", "✨"],
    surpriseMoments: [4, 12],
    pulseType: "sine",
    pulseFrequency: 320,
    hitTone: 560,
    bgmNotes: [262, 330, 392, 494],
    bgmType: "sine",
    tapPraise: "すてき",
    starPraise: "ぴかぴか すてき",
    clearPraise: "うみでも ばっちり",
    feverPraise: "ふねの たつじん",
  },
  {
    id: "heli",
    name: "ヘリコプター",
    emoji: "🚁",
    subtitle: "ブーン ブーン",
    instruction: "あかは たたかないで",
    color: "#29b37e",
    themeClass: "theme-heli",
    rhythm: [1, 1, 0, -1, 1, 1, 0],
    beatInterval: 400,
    loops: 4,
    hitsNeeded: 10,
    bubbleText: "ブーン",
    introText: "ヘリコプターで そらへ",
    surpriseTitle: "くもの うえ",
    surpriseCopy: "ふわっと そらを とんでいくよ",
    surpriseIcons: ["🚁", "☁️", "🌤️"],
    surpriseMoments: [5, 15],
    pulseType: "triangle",
    pulseFrequency: 410,
    hitTone: 610,
    bgmNotes: [294, 440, 494, 440],
    bgmType: "triangle",
    tapPraise: "かっこいい",
    starPraise: "きらきら じょうず",
    clearPraise: "そらでも すごい",
    feverPraise: "ヘリ だいかつやく",
  },
  {
    id: "police",
    name: "パトカー",
    emoji: "🚓",
    subtitle: "ピーポー",
    instruction: "あかに きをつけて！",
    color: "#3867d6",
    themeClass: "theme-police",
    rhythm: [1, -1, 1, 0, 1, -1, 0],
    beatInterval: 380,
    loops: 6,
    hitsNeeded: 13,
    bubbleText: "ピーポー",
    introText: "パトカーで パトロール",
    surpriseTitle: "ライト ぴかぴか",
    surpriseCopy: "あおと あかが くるくる ひかるよ",
    surpriseIcons: ["🚓", "🔵", "🔴"],
    surpriseMoments: [5, 15, 25],
    pulseType: "square",
    pulseFrequency: 500,
    hitTone: 720,
    bgmNotes: [330, 494, 523, 659],
    bgmType: "square",
    tapPraise: "すごすぎ",
    starPraise: "ぴかぴか すごい",
    clearPraise: "パトロール かんぺき",
    feverPraise: "パトカー エース",
  },
  {
    id: "bulldozer",
    name: "ブルドーザー",
    emoji: "🚜",
    subtitle: "ぐいぐい",
    instruction: "あかは がまん！",
    color: "#c98910",
    themeClass: "theme-bulldozer",
    rhythm: [1, 1, -1, 0, -1, 1, 0],
    beatInterval: 360,
    loops: 6,
    hitsNeeded: 13,
    bubbleText: "ぐいぐい",
    introText: "ブルドーザーで どんどん",
    surpriseTitle: "どろんこ ぽん",
    surpriseCopy: "つちが ぽんっと はねるよ",
    surpriseIcons: ["🚜", "🪨", "✨"],
    surpriseMoments: [5, 15, 25],
    pulseType: "sawtooth",
    pulseFrequency: 380,
    hitTone: 680,
    bgmNotes: [247, 330, 370, 494],
    bgmType: "sawtooth",
    tapPraise: "かなり じょうず",
    starPraise: "ぴかぴか さいこう",
    clearPraise: "どんどん すすんだ",
    feverPraise: "ブルドーザー つよい",
  },
  {
    id: "airplane",
    name: "ひこうき",
    emoji: "✈️",
    subtitle: "スーッ",
    instruction: "はやい！ よく みて",
    color: "#2dcaea",
    themeClass: "theme-airplane",
    rhythm: [1, -1, 1, -1, 0, 1, 0],
    beatInterval: 320,
    loops: 6,
    hitsNeeded: 13,
    bubbleText: "スーッ",
    introText: "ひこうきで おおぞらへ",
    surpriseTitle: "にじの そら",
    surpriseCopy: "そらに ひかりの みちが できるよ",
    surpriseIcons: ["✈️", "🌈", "☁️"],
    surpriseMoments: [6, 16, 26],
    pulseType: "triangle",
    pulseFrequency: 560,
    hitTone: 770,
    bgmNotes: [392, 587, 659, 880],
    bgmType: "triangle",
    tapPraise: "ほんとうに すごい",
    starPraise: "きらきら てんさい",
    clearPraise: "おおぞら だいせいこう",
    feverPraise: "ひこうき エース",
  },
  {
    id: "rocket",
    name: "ロケット",
    emoji: "🚀",
    subtitle: "ビューン",
    instruction: "さいごまで がんばれ！",
    color: "#7c4dff",
    themeClass: "theme-rocket",
    rhythm: [1, -1, 1, -1, 1, 0, -1, 0],
    beatInterval: 300,
    loops: 5,
    hitsNeeded: 11,
    bubbleText: "ビューン",
    introText: "ロケットで うちゅうへ",
    surpriseTitle: "ほしが キラキラ",
    surpriseCopy: "うちゅうに きらめきが ひろがるよ",
    surpriseIcons: ["🚀", "🌟", "🪐"],
    surpriseMoments: [5, 14, 23],
    pulseType: "triangle",
    pulseFrequency: 520,
    hitTone: 760,
    bgmNotes: [262, 392, 587, 784],
    bgmType: "triangle",
    tapPraise: "さいこう",
    starPraise: "きらきら さいきょう",
    clearPraise: "うちゅういち すごい",
    feverPraise: "ロケット だいヒーロー",
  },
];

const baseMixRounds = [
  {
    id: "mix-city",
    name: "まちの のりもの",
    emoji: "🏙️",
    subtitle: "いろんな リズム",
    instruction: "のりものが かわるよ！",
    color: "#ff6b9d",
    themeClass: "theme-mix-city",
    mixSources: ["train", "bus", "taxi"],
    beatInterval: 450,
    loops: 8,
    hitsNeeded: 14,
    isMix: true,
    bubbleText: "のりもの",
    introText: "まちの のりもの ミックス",
    surpriseTitle: "まちが にぎやか",
    surpriseCopy: "いろんな のりものが はしるよ",
    surpriseIcons: ["🏙️", "✨", "🚆"],
    surpriseMoments: [5, 16, 28],
    pulseType: "triangle",
    pulseFrequency: 400,
    hitTone: 600,
    bgmNotes: [392, 494, 587, 494],
    bgmType: "triangle",
    tapPraise: "すごい",
    starPraise: "きらきら",
    clearPraise: "ミックス クリア",
    feverPraise: "まちの めいじん",
  },
  {
    id: "mix-work",
    name: "はたらく くるま",
    emoji: "🔧",
    subtitle: "はたらく リズム",
    instruction: "あかに きをつけて！",
    color: "#e8590c",
    themeClass: "theme-mix-work",
    mixSources: ["fire", "police", "bulldozer"],
    beatInterval: 400,
    loops: 8,
    hitsNeeded: 15,
    isMix: true,
    bubbleText: "はたらく",
    introText: "はたらく くるま ミックス",
    surpriseTitle: "おしごと がんばる",
    surpriseCopy: "はたらく くるまが だいかつやく",
    surpriseIcons: ["🔧", "✨", "🚒"],
    surpriseMoments: [6, 18, 30],
    pulseType: "square",
    pulseFrequency: 450,
    hitTone: 700,
    bgmNotes: [349, 440, 523, 440],
    bgmType: "square",
    tapPraise: "かっこいい",
    starPraise: "ぴかぴか",
    clearPraise: "おしごと かんりょう",
    feverPraise: "はたらく ヒーロー",
  },
  {
    id: "mix-sky",
    name: "そらの のりもの",
    emoji: "🌤️",
    subtitle: "そらの リズム",
    instruction: "はやい！ あかも くるよ",
    color: "#1098ad",
    themeClass: "theme-mix-sky",
    mixSources: ["heli", "airplane", "rocket"],
    beatInterval: 350,
    loops: 8,
    hitsNeeded: 14,
    isMix: true,
    bubbleText: "そら",
    introText: "そらの のりもの ミックス",
    surpriseTitle: "そらが ひろがる",
    surpriseCopy: "そらを とぶ のりものが いっぱい",
    surpriseIcons: ["🌤️", "✨", "🚁"],
    surpriseMoments: [6, 18, 30],
    pulseType: "triangle",
    pulseFrequency: 500,
    hitTone: 740,
    bgmNotes: [330, 494, 659, 880],
    bgmType: "triangle",
    tapPraise: "すごすぎ",
    starPraise: "きらきら てんさい",
    clearPraise: "そらでも ばっちり",
    feverPraise: "そらの エース",
  },
  {
    id: "mix-allstar",
    name: "オールスター",
    emoji: "🌟",
    subtitle: "みんな しゅうごう",
    instruction: "なにが くるかな？",
    color: "#ae3ec9",
    themeClass: "theme-mix-allstar",
    mixSources: ["train", "bus", "fire", "taxi", "ship", "heli", "police", "bulldozer", "airplane", "rocket"],
    beatInterval: 380,
    loops: 10,
    hitsNeeded: 18,
    isMix: true,
    bubbleText: "のりもの",
    introText: "のりもの オールスター",
    surpriseTitle: "みんな あつまれ",
    surpriseCopy: "ぜんぶの のりものが でてくるよ",
    surpriseIcons: ["🌟", "✨", "🎉"],
    surpriseMoments: [8, 22, 36],
    pulseType: "triangle",
    pulseFrequency: 440,
    hitTone: 680,
    bgmNotes: [262, 392, 523, 659],
    bgmType: "triangle",
    tapPraise: "さいこう",
    starPraise: "きらきら さいきょう",
    clearPraise: "オールスター クリア",
    feverPraise: "のりもの マスター",
  },
  {
    id: "mix-final",
    name: "ファイナル パレード",
    emoji: "🎪",
    subtitle: "さいごの パレード",
    instruction: "さいそく！ がんばれ！",
    color: "#d6336c",
    themeClass: "theme-mix-final",
    mixSources: ["train", "bus", "fire", "taxi", "ship", "heli", "police", "bulldozer", "airplane", "rocket"],
    beatInterval: 320,
    loops: 12,
    hitsNeeded: 22,
    isMix: true,
    bubbleText: "パレード",
    introText: "ファイナル パレード",
    surpriseTitle: "グランド フィナーレ",
    surpriseCopy: "さいごの パレードが はじまるよ",
    surpriseIcons: ["🎪", "🎆", "✨"],
    surpriseMoments: [10, 28, 46],
    pulseType: "triangle",
    pulseFrequency: 480,
    hitTone: 750,
    bgmNotes: [392, 523, 659, 784],
    bgmType: "triangle",
    tapPraise: "てんさい",
    starPraise: "きらきら ちょうじん",
    clearPraise: "パレード だいせいこう",
    feverPraise: "リズム だいおう",
  },
];

function getSourceRound(sourceId) {
  return baseRounds.find((r) => r.id === sourceId);
}

let rounds = buildRounds();

const screens = new Map(
  Array.from(document.querySelectorAll(".screen")).map((screen) => [screen.dataset.screen, screen]),
);

const startButton = document.querySelector("#startButton");
const restartButton = document.querySelector("#restartButton");
const titleCard = document.querySelector("#titleCard");
const resultCard = document.querySelector("#resultCard");
const roundLabel = document.querySelector("#roundLabel");
const progressDots = document.querySelector("#progressDots");
const playfield = document.querySelector("#playfield");
const vehicleEmoji = document.querySelector("#vehicleEmoji");
const vehicleName = document.querySelector("#vehicleName");
const vehicleSubtitle = document.querySelector("#vehicleSubtitle");
const instructionText = document.querySelector("#instructionText");
const pulseLane = document.querySelector("#pulseLane");
const tapButton = document.querySelector("#tapButton");
const encourageBubble = document.querySelector("#encourageBubble");
const roundBanner = document.querySelector("#roundBanner");
const resultTitle = document.querySelector("#resultTitle");
const resultCopy = document.querySelector("#resultCopy");
const resultBonus = document.querySelector("#resultBonus");
const starCount = document.querySelector("#starCount");
const streakCount = document.querySelector("#streakCount");
const feverSign = document.querySelector("#feverSign");
const rewardBurst = document.querySelector("#rewardBurst");
const restStop = document.querySelector("#restStop");
const restStopEmoji = document.querySelector("#restStopEmoji");
const restStopTitle = document.querySelector("#restStopTitle");
const restStopCopy = document.querySelector("#restStopCopy");
const surprisePop = document.querySelector("#surprisePop");
const surpriseIcons = document.querySelector("#surpriseIcons");
const surpriseTitle = document.querySelector("#surpriseTitle");
const surpriseCopy = document.querySelector("#surpriseCopy");
const previewOverlay = document.querySelector("#previewOverlay");
const previewLabel = document.querySelector("#previewLabel");
const startOverlay = document.querySelector("#startOverlay");

let audioContext;
let bgmIntervalId;
let bgmStep = 0;
let activeToneCount = 0;
const MAX_ACTIVE_TONES = 20;
let state = createInitialState();

function buildRounds() {
  const normal = baseRounds.map((round) => ({ ...round }));
  const mix = baseMixRounds.map((round) => ({ ...round }));
  return [...normal, ...mix];
}

function getVolumeGain() {
  return 0.18;
}

function getBgmGain() {
  return getVolumeGain() * 0.28;
}

function getTransitionDelay() {
  return 1800;
}

function hideRestStop() {
  restStop.setAttribute("hidden", "");
}

function showRestStop(nextRound) {
  const isBonus = rounds.indexOf(nextRound) >= baseRounds.length;
  restStopEmoji.textContent = nextRound.emoji;
  restStopTitle.textContent = isBonus
    ? `ボーナス: ${nextRound.name}`
    : `つぎは ${nextRound.name}`;
  restStopCopy.textContent = isBonus
    ? "ボーナスステージ！ がんばろう"
    : "ちょっと ひとやすみして つづけよう";
  restStop.removeAttribute("hidden");
}

function createInitialState() {
  return {
    roundIndex: 0,
    activePulse: -1,
    activeOrbType: null,
    pendingOrb: null,
    hits: 0,
    totalHits: 0,
    acceptingTap: false,
    previewMode: false,
    timers: [],
    finishedRounds: 0,
    roundResults: [],
    stars: 0,
    streak: 0,
    bestStreak: 0,
    surprises: 0,
    triggeredSurprises: [],
    feverTimer: null,
    restMisses: 0,
    currentMixSequence: null,
  };
}

function buildBeatSequence(round) {
  const fullBeats = [];
  for (let loop = 0; loop < round.loops; loop += 1) {
    for (const beat of round.rhythm) {
      fullBeats.push(beat);
    }
  }

  const orbSequence = [];
  let orbIndex = 0;
  for (let i = 0; i < fullBeats.length; i += 1) {
    const beat = fullBeats[i];
    if (beat !== 0) {
      orbSequence.push({
        orbIndex,
        beatTime: i * round.beatInterval,
        type: beat === 1 ? "tap" : "rest",
      });
      orbIndex += 1;
    }
  }

  const totalDuration = fullBeats.length * round.beatInterval;
  return { orbSequence, totalDuration };
}

function buildMixedBeatSequence(round) {
  const fullBeats = [];
  const loopSources = [];
  const availableSources = round.mixSources.slice();

  for (let loop = 0; loop < round.loops; loop += 1) {
    const sourceId = availableSources[Math.floor(Math.random() * availableSources.length)];
    const sourceRound = getSourceRound(sourceId);
    loopSources.push({ sourceId, sourceRound, startBeat: fullBeats.length });
    for (const beat of sourceRound.rhythm) {
      fullBeats.push({ value: beat, sourceId });
    }
  }

  const orbSequence = [];
  let orbIndex = 0;
  for (let i = 0; i < fullBeats.length; i += 1) {
    const beat = fullBeats[i];
    if (beat.value !== 0) {
      orbSequence.push({
        orbIndex,
        beatTime: i * round.beatInterval,
        type: beat.value === 1 ? "tap" : "rest",
        sourceId: beat.sourceId,
      });
      orbIndex += 1;
    }
  }

  const totalDuration = fullBeats.length * round.beatInterval;
  return { orbSequence, totalDuration, loopSources };
}

function getBeatSequenceForRound(round) {
  if (round.isMix) {
    if (!state.currentMixSequence) {
      state.currentMixSequence = buildMixedBeatSequence(round);
    }
    return state.currentMixSequence;
  }
  return buildBeatSequence(round);
}

function renderRewards() {
  starCount.textContent = `${state.stars}こ`;
  streakCount.textContent = `${state.streak}れんぞく`;
}

function hideSurprise() {
  surprisePop.setAttribute("hidden", "");
  surprisePop.classList.remove("show");
}

function showSurprise(round) {
  const surpriseKey = `${round.id}-${state.activePulse}`;
  if (state.triggeredSurprises.includes(surpriseKey)) {
    return;
  }

  state.triggeredSurprises.push(surpriseKey);
  state.surprises += 1;
  surpriseIcons.innerHTML = "";
  round.surpriseIcons.forEach((icon) => {
    const item = document.createElement("span");
    item.textContent = icon;
    surpriseIcons.append(item);
  });
  surpriseTitle.textContent = round.surpriseTitle;
  surpriseCopy.textContent = round.surpriseCopy;
  surprisePop.removeAttribute("hidden");
  surprisePop.classList.remove("show");
  void surprisePop.offsetWidth;
  surprisePop.classList.add("show");
  showBubble(round.surpriseTitle);
  playTone(round.hitTone + 170, 0.18, "triangle");

  const hideTimer = setTimeout(() => {
    hideSurprise();
  }, 900);

  state.timers.push(hideTimer);
}

function getRewardIcons(round) {
  return [round.emoji, "⭐", round.surpriseIcons[1] ?? "✨"];
}

function showRewardBurst(round) {
  rewardBurst.innerHTML = "";

  getRewardIcons(round).forEach((icon) => {
    const item = document.createElement("span");
    item.textContent = icon;
    rewardBurst.append(item);
  });

  rewardBurst.classList.remove("show");
  void rewardBurst.offsetWidth;
  rewardBurst.classList.add("show");

  const hideTimer = setTimeout(() => rewardBurst.classList.remove("show"), 680);
  state.timers.push(hideTimer);
}

function clearFever() {
  if (state.feverTimer) {
    clearTimeout(state.feverTimer);
    state.feverTimer = null;
  }

  playfield.classList.remove("fever-mode");
  feverSign.classList.remove("active");
}

function triggerFever(round) {
  clearFever();
  playfield.classList.add("fever-mode");
  feverSign.classList.add("active");
  showBubble(round.feverPraise);
  showRewardBurst(round);
  playTone(round.hitTone + 120, 0.16, "triangle");

  state.feverTimer = setTimeout(() => {
    playfield.classList.remove("fever-mode");
    feverSign.classList.remove("active");
    state.feverTimer = null;
  }, 900);
}

function showScreen(name) {
  for (const [screenName, element] of screens) {
    element.classList.toggle("screen-active", screenName === name);
  }
}

function ensureAudio() {
  if (!audioContext) {
    audioContext = new AudioContext();
    activeToneCount = 0;
  }

  if (audioContext.state === "suspended") {
    audioContext.resume().catch(() => {});
  }
}

function playTone(frequency, duration, type = "sine", gainScale = 1) {
  if (!audioContext) {
    return;
  }

  const volumeGain = getVolumeGain() * gainScale;
  if (volumeGain === 0) {
    return;
  }

  if (audioContext.state === "suspended") {
    audioContext.resume().catch(() => {});
  }

  if (activeToneCount >= MAX_ACTIVE_TONES) {
    return;
  }

  try {
    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now);
    gainNode.gain.setValueAtTime(0.001, now);
    gainNode.gain.exponentialRampToValueAtTime(volumeGain, now + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + duration + 0.04);
    activeToneCount += 1;

    oscillator.addEventListener("ended", () => {
      oscillator.disconnect();
      gainNode.disconnect();
      activeToneCount = Math.max(0, activeToneCount - 1);
    });
  } catch (_error) {
    activeToneCount = 0;
  }
}

function stopBgm() {
  if (bgmIntervalId) {
    clearInterval(bgmIntervalId);
    bgmIntervalId = undefined;
  }
  bgmStep = 0;
}

function startBgm(round) {
  stopBgm();

  if (!audioContext) {
    return;
  }

  const bgmGain = getBgmGain();
  if (bgmGain === 0) {
    return;
  }

  const launchBgm = () => {
    const playBgmStep = () => {
      if (!audioContext) {
        stopBgm();
        return;
      }
      const note = round.bgmNotes[bgmStep % round.bgmNotes.length];
      const harmony = note / 2;
      playTone(note, 0.34, round.bgmType, 0.22);
      playTone(harmony, 0.28, "sine", 0.11);
      bgmStep += 1;
    };

    playBgmStep();
    const interval = Math.max(360, Math.round(round.beatInterval * 0.42));
    bgmIntervalId = setInterval(playBgmStep, interval);
  };

  if (audioContext.state === "suspended") {
    audioContext.resume().then(launchBgm).catch(() => {});
  } else {
    launchBgm();
  }
}

function clearTimers() {
  for (const timer of state.timers) {
    clearTimeout(timer);
  }
  state.timers = [];
  clearFever();
  hideSurprise();
}

function renderProgress() {
  progressDots.innerHTML = "";

  rounds.forEach((_, index) => {
    const dot = document.createElement("span");
    if (index === state.roundIndex) {
      dot.style.transform = "scale(1.12)";
    }
    if (index < state.finishedRounds) {
      dot.classList.add("done");
    }
    progressDots.append(dot);
  });
}

function showRoundBanner(text) {
  roundBanner.textContent = text;
  roundBanner.classList.remove("show");
  void roundBanner.offsetWidth;
  roundBanner.classList.add("show");
}

function createPulseOrbs(round) {
  pulseLane.innerHTML = "";
  const { orbSequence } = getBeatSequenceForRound(round);
  for (let index = 0; index < orbSequence.length; index += 1) {
    const orb = document.createElement("div");
    orb.className = "pulse-orb";
    pulseLane.append(orb);
  }
}

function createPreviewOrbs(round) {
  pulseLane.innerHTML = "";
  const previewRound = { ...round, loops: 1 };
  const { orbSequence } = round.isMix
    ? buildMixedBeatSequence(previewRound)
    : buildBeatSequence(previewRound);
  for (let index = 0; index < orbSequence.length; index += 1) {
    const orb = document.createElement("div");
    orb.className = "pulse-orb";
    pulseLane.append(orb);
  }
  return orbSequence;
}

function showBubble(text) {
  encourageBubble.textContent = text;
  encourageBubble.classList.remove("show");
  void encourageBubble.offsetWidth;
  encourageBubble.classList.add("show");
}

function animateTapButton() {
  tapButton.classList.remove("glow");
  void tapButton.offsetWidth;
  tapButton.classList.add("glow");
}

function runPreview(round, callback) {
  state.previewMode = true;
  tapButton.classList.add("preview-mode");
  tapButton.querySelector("span").textContent = "👀 みてね";

  const previewOrbSequence = createPreviewOrbs(round);
  const pulseOrbs = Array.from(document.querySelectorAll(".pulse-orb"));
  const previewRound = { ...round, loops: 1 };
  const previewDuration = round.isMix
    ? buildMixedBeatSequence(previewRound).totalDuration
    : buildBeatSequence(previewRound).totalDuration;

  previewLabel.textContent = "🎵 おてほん";
  previewOverlay.removeAttribute("hidden");

  ensureAudio();

  for (const entry of previewOrbSequence) {
    const timer = setTimeout(() => {
      pulseOrbs.forEach((orb) => {
        orb.classList.remove("pulse-active", "pulse-rest-active");
      });
      if (pulseOrbs[entry.orbIndex]) {
        pulseOrbs[entry.orbIndex].classList.add(
          entry.type === "tap" ? "pulse-active" : "pulse-rest-active",
        );
      }
      if (entry.type === "tap") {
        playTone(round.pulseFrequency + entry.orbIndex * 18, 0.18, round.pulseType);
      } else {
        playTone(round.pulseFrequency * 0.6 + entry.orbIndex * 10, 0.14, round.pulseType);
      }
    }, entry.beatTime);
    state.timers.push(timer);
  }

  const finishTimer = setTimeout(() => {
    pulseOrbs.forEach((orb) => {
      orb.classList.remove("pulse-active", "pulse-rest-active");
    });
    previewOverlay.setAttribute("hidden", "");
    state.previewMode = false;
    tapButton.classList.remove("preview-mode");
    tapButton.querySelector("span").textContent = "👆 タップ";
    callback();
  }, previewDuration + 200);
  state.timers.push(finishTimer);
}

function prepareRound() {
  clearTimers();
  hideRestStop();
  previewOverlay.setAttribute("hidden", "");
  startOverlay.setAttribute("hidden", "");
  state.activePulse = -1;
  state.hits = 0;
  state.acceptingTap = false;
  state.triggeredSurprises = [];
  state.currentMixSequence = null;

  const round = rounds[state.roundIndex];

  if (round.isMix) {
    state.currentMixSequence = buildMixedBeatSequence(round);
  }

  const isBonus = state.roundIndex >= baseRounds.length;
  const label = isBonus
    ? `ボーナス ${state.roundIndex - baseRounds.length + 1} / ${baseMixRounds.length}`
    : `ラウンド ${state.roundIndex + 1} / ${baseRounds.length}`;
  roundLabel.textContent = label;
  playfield.className = `playfield ${round.themeClass}`;
  vehicleEmoji.textContent = round.emoji;
  vehicleName.textContent = round.name;
  vehicleSubtitle.textContent = round.subtitle;
  instructionText.textContent = round.instruction;
  createPulseOrbs(round);
  renderProgress();
  renderRewards();
  showRoundBanner(round.introText);
  startBgm(round);

  showScreen("game");

  const introDelay = 1200;
  const timer = setTimeout(() => {
    if (round.isMix) {
      showRoundBanner("いろんな のりものが でるよ！");
      const startTimer = setTimeout(() => {
        createPulseOrbs(round);
        runPulseSequence(round);
      }, 1400);
      state.timers.push(startTimer);
    } else {
      runPreview(round, () => {
        startOverlay.removeAttribute("hidden");
        const startTimer = setTimeout(() => {
          startOverlay.setAttribute("hidden", "");
          ensureAudio();
          createPulseOrbs(round);
          runPulseSequence(round);
        }, 1200);
        state.timers.push(startTimer);
      });
    }
  }, introDelay);
  state.timers.push(timer);
}

function runPulseSequence(round) {
  ensureAudio();
  const pulseOrbs = Array.from(document.querySelectorAll(".pulse-orb"));
  const { orbSequence, totalDuration } = getBeatSequenceForRound(round);

  pulseOrbs.forEach((orb) => {
    orb.classList.remove("pulse-active", "pulse-rest-active", "pulse-hit", "pulse-rest-passed");
  });

  let lastSourceId = null;

  for (const entry of orbSequence) {
    // Early-tap window: accept tap 20% of beatInterval BEFORE the orb lights up
    const earlyWindow = Math.round(round.beatInterval * 0.2);
    const earlyTime = Math.max(0, entry.beatTime - earlyWindow);

    if (earlyTime < entry.beatTime) {
      const earlyTimer = setTimeout(() => {
        state.pendingOrb = entry;
      }, earlyTime);
      state.timers.push(earlyTimer);
    }

    const timer = setTimeout(() => {
      state.pendingOrb = null;
      state.activePulse = entry.orbIndex;
      state.activeOrbType = entry.type;

      if (entry.type === "tap") {
        state.acceptingTap = true;
      } else {
        state.acceptingTap = false;
      }

      pulseOrbs.forEach((orb, orbIndex) => {
        orb.classList.remove("pulse-active", "pulse-rest-active");
        if (orbIndex === entry.orbIndex) {
          orb.classList.add(entry.type === "tap" ? "pulse-active" : "pulse-rest-active");
        }
      });

      if (round.isMix && entry.sourceId && entry.sourceId !== lastSourceId) {
        lastSourceId = entry.sourceId;
        const src = getSourceRound(entry.sourceId);
        if (src) {
          vehicleEmoji.classList.add("switching");
          setTimeout(() => {
            vehicleEmoji.textContent = src.emoji;
            vehicleName.textContent = src.name;
            vehicleSubtitle.textContent = src.subtitle;
            vehicleEmoji.classList.remove("switching");
          }, 150);
        }
      }

      const freq = round.isMix && entry.sourceId
        ? (getSourceRound(entry.sourceId)?.pulseFrequency ?? round.pulseFrequency)
        : round.pulseFrequency;
      const pType = round.isMix && entry.sourceId
        ? (getSourceRound(entry.sourceId)?.pulseType ?? round.pulseType)
        : round.pulseType;

      if (entry.type === "tap") {
        playTone(freq + entry.orbIndex * 18, 0.18, pType);
      } else {
        playTone(freq * 0.6 + entry.orbIndex * 10, 0.14, pType);
      }

      if (round.surpriseMoments.includes(entry.orbIndex)) {
        showSurprise(round);
      }

      const deactivateTimer = setTimeout(() => {
        if (entry.type === "rest" && pulseOrbs[entry.orbIndex]) {
          pulseOrbs[entry.orbIndex].classList.remove("pulse-rest-active");
          pulseOrbs[entry.orbIndex].classList.add("pulse-rest-passed");
        }
        state.acceptingTap = false;
        state.activeOrbType = null;
        state.pendingOrb = null;
      }, round.beatInterval * 0.75);

      state.timers.push(deactivateTimer);
    }, entry.beatTime);

    state.timers.push(timer);
  }

  const finishTimer = setTimeout(() => {
    finishRound();
  }, totalDuration + 300);

  state.timers.push(finishTimer);
}

function finishRound() {
  const round = rounds[state.roundIndex];

  clearTimers();
  state.totalHits += state.hits;
  state.roundResults.push({ roundId: round.id, hits: state.hits, target: round.hitsNeeded });
  state.finishedRounds = state.roundIndex + 1;
  renderProgress();
  renderRewards();
  playTone(660, 0.22, "triangle");
  showBubble(round.clearPraise);
  showRoundBanner(`${round.name} クリア`);
  showRewardBurst(round);

  const nextTimer = setTimeout(() => {
    state.roundIndex += 1;

    if (state.roundIndex >= rounds.length) {
      showResult();
      return;
    }

    showRestStop(rounds[state.roundIndex]);

    const restTimer = setTimeout(() => {
      prepareRound();
    }, getTransitionDelay());

    state.timers.push(restTimer);
  }, 600);

  state.timers.push(nextTimer);
}

function showResult() {
  hideRestStop();
  hideSurprise();
  stopBgm();
  const normalCount = Math.min(state.finishedRounds, baseRounds.length);
  const bonusCount = Math.max(0, state.finishedRounds - baseRounds.length);
  const titleText = bonusCount > 0
    ? `${normalCount}だい + ボーナス${bonusCount} クリア`
    : `${normalCount}だい クリア`;
  resultTitle.textContent = titleText;
  resultCopy.textContent = `ぜんぶで ${state.totalHits} かい タップできたよ。さいごまで あそべた きみは りずむ めいじん。`;
  const bonusParts = [`スター ${state.stars}こ`, `さいこう ${state.bestStreak}れんぞく`, `サプライズ ${state.surprises}かい`];
  if (state.restMisses > 0) {
    bonusParts.push(`おやすみミス ${state.restMisses}かい`);
  }
  resultBonus.textContent = bonusParts.join(" ・ ");
  showScreen("result");
  playTone(523, 0.18, "triangle");
  setTimeout(() => playTone(659, 0.18, "triangle"), 180);
  setTimeout(() => playTone(784, 0.24, "triangle"), 360);
}

function handleTap() {
  const round = rounds[state.roundIndex];

  animateTapButton();

  if (state.previewMode) {
    showBubble("👀 みてるよ！");
    return;
  }

  if (restStop.hasAttribute("hidden") === false) {
    showBubble("つぎの じゅんびちゅう");
    return;
  }

  // Early-tap: tapped before orb lit up, within the early window
  if (state.pendingOrb && !state.acceptingTap && state.activeOrbType === null) {
    const pending = state.pendingOrb;
    state.pendingOrb = null;

    if (pending.type === "tap") {
      // Treat as a hit — light up the orb immediately
      state.activePulse = pending.orbIndex;
      state.activeOrbType = "tap";
      state.acceptingTap = true;
      const pulseOrbs = Array.from(document.querySelectorAll(".pulse-orb"));
      pulseOrbs.forEach((orb) => orb.classList.remove("pulse-active", "pulse-rest-active"));
      if (pulseOrbs[pending.orbIndex]) {
        pulseOrbs[pending.orbIndex].classList.add("pulse-active");
      }
      // Fall through to the normal acceptingTap handler below
    } else if (pending.type === "rest") {
      // Early tap on upcoming rest orb
      state.streak = 0;
      state.restMisses += 1;
      renderRewards();
      showBubble("💤 おやすみちゅう！");
      playTone(220, 0.12, "square");
      tapButton.classList.remove("rest-miss");
      void tapButton.offsetWidth;
      tapButton.classList.add("rest-miss");
      return;
    }
  }

  if (state.activeOrbType === "rest") {
    state.streak = 0;
    state.restMisses += 1;
    state.activeOrbType = null;
    renderRewards();
    showBubble("💤 おやすみちゅう！");
    playTone(220, 0.12, "square");
    tapButton.classList.remove("rest-miss");
    void tapButton.offsetWidth;
    tapButton.classList.add("rest-miss");
    return;
  }

  if (state.acceptingTap) {
    state.hits += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    state.acceptingTap = false;

    const pulseOrbs = Array.from(document.querySelectorAll(".pulse-orb"));
    pulseOrbs[state.activePulse]?.classList.remove("pulse-active");
    pulseOrbs[state.activePulse]?.classList.add("pulse-hit");
    if (state.streak % 3 === 0) {
      state.stars += 1;
      showBubble(round.starPraise);
      showRewardBurst(round);
      playTone(round.hitTone + 80, 0.13, "triangle");
    } else {
      showBubble(`${round.tapPraise} ${round.bubbleText}`);
      playTone(round.hitTone, 0.12, round.id === "fire" ? "square" : "sine");
    }

    if (state.streak > 0 && state.streak % 5 === 0) {
      triggerFever(round);
    }

    renderRewards();
    return;
  }

  state.streak = 0;
  renderRewards();
  showBubble("ナイスタップ");
  playTone(420, 0.08, "sine");
}

function startGame() {
  clearTimers();
  stopBgm();
  hideRestStop();
  hideSurprise();
  previewOverlay.setAttribute("hidden", "");
  startOverlay.setAttribute("hidden", "");

  ensureAudio();

  rounds = buildRounds();
  state = createInitialState();
  renderProgress();
  prepareRound();
}

function activateStart(event) {
  event?.stopPropagation();
  // Ensure AudioContext is created and resumed within user gesture
  ensureAudio();
  if (audioContext && audioContext.state === "suspended") {
    audioContext.resume().then(() => startGame()).catch(() => startGame());
    return;
  }
  startGame();
}

function activateRestart(event) {
  event?.stopPropagation();
  ensureAudio();
  if (audioContext && audioContext.state === "suspended") {
    audioContext.resume().then(() => startGame()).catch(() => startGame());
    return;
  }
  startGame();
}

function goHome(event) {
  event?.stopPropagation();
  clearTimers();
  stopBgm();
  hideRestStop();
  hideSurprise();
  previewOverlay.setAttribute("hidden", "");
  startOverlay.setAttribute("hidden", "");
  state = createInitialState();
  showScreen("title");
}

function handleCardKeydown(event, action) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    action(event);
  }
}

startButton.addEventListener("click", activateStart);
restartButton.addEventListener("click", activateRestart);
titleCard.addEventListener("click", activateStart);
resultCard.addEventListener("click", activateRestart);
titleCard.addEventListener("keydown", (event) => handleCardKeydown(event, activateStart));
resultCard.addEventListener("keydown", (event) => handleCardKeydown(event, activateRestart));
tapButton.addEventListener("click", handleTap);
document.querySelector("#homeButtonGame").addEventListener("click", goHome);
document.querySelector("#homeButtonResult").addEventListener("click", goHome);

document.addEventListener("keydown", (event) => {
  if (event.key !== " ") {
    return;
  }
  event.preventDefault();

  const activeScreen = document.querySelector(".screen-active");
  if (!activeScreen) {
    return;
  }

  const screenName = activeScreen.dataset.screen;
  if (screenName === "title") {
    activateStart();
  } else if (screenName === "game") {
    handleTap();
  } else if (screenName === "result") {
    activateRestart();
  }
});

renderRewards();
renderProgress();

// Resume AudioContext when tab becomes visible again (Safari suspends audio in background)
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && audioContext && audioContext.state === "suspended") {
    audioContext.resume().catch(() => {});
  }
});

// Also resume on any touch/click as a fallback
document.addEventListener("touchstart", () => {
  if (audioContext && audioContext.state === "suspended") {
    audioContext.resume().catch(() => {});
  }
}, { passive: true });

// === Audio debug indicator (remove after debugging) ===
const audioDebug = document.createElement("div");
audioDebug.style.cssText = "position:fixed;bottom:4px;right:4px;padding:4px 8px;font-size:11px;font-family:monospace;background:rgba(0,0,0,0.7);color:#0f0;border-radius:6px;z-index:9999;pointer-events:none;";
document.body.append(audioDebug);
setInterval(() => {
  const ctx = audioContext;
  if (!ctx) {
    audioDebug.textContent = "🔇 no ctx";
    audioDebug.style.color = "#f66";
    return;
  }
  const s = ctx.state;
  const t = activeToneCount;
  audioDebug.textContent = `🔊 ${s} t:${t} sr:${ctx.sampleRate}`;
  audioDebug.style.color = s === "running" ? "#0f0" : s === "suspended" ? "#ff0" : "#f66";
}, 200);