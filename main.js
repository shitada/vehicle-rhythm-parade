const baseRounds = [
  {
    id: "train",
    name: "でんしゃ",
    emoji: "🚆",
    subtitle: "ガタン ゴトン",
    instruction: "ひかったら タップ",
    color: "#2f8cff",
    themeClass: "theme-train",
    pulses: 14,
    interval: 1120,
    hitsNeeded: 6,
    bubbleText: "ガタン",
    introText: "でんしゃの リズム",
    surpriseTitle: "トンネル ぴかっ",
    surpriseCopy: "でんしゃが トンネルを くぐるよ",
    surpriseIcons: ["🚆", "✨", "🛤️"],
    surpriseMoments: [4, 10],
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
    instruction: "ピカッで タップ",
    color: "#ff9f1c",
    themeClass: "theme-bus",
    pulses: 15,
    interval: 1060,
    hitsNeeded: 7,
    bubbleText: "ゆら ゆら",
    introText: "バスで しゅっぱつ",
    surpriseTitle: "まどの そと キラッ",
    surpriseCopy: "まちの けしきが みえてくるよ",
    surpriseIcons: ["🚌", "🏙️", "✨"],
    surpriseMoments: [4, 11],
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
    instruction: "ピカッで タップ",
    color: "#ff6b4a",
    themeClass: "theme-fire",
    pulses: 16,
    interval: 1000,
    hitsNeeded: 7,
    bubbleText: "ウー ウー",
    introText: "しょうぼうしゃ しゅつどう",
    surpriseTitle: "みず しゅーっ",
    surpriseCopy: "ホースで みずを しゅーっ",
    surpriseIcons: ["🚒", "💦", "✨"],
    surpriseMoments: [4, 12],
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
    instruction: "よく みて タップ",
    color: "#f7c948",
    themeClass: "theme-taxi",
    pulses: 17,
    interval: 940,
    hitsNeeded: 8,
    bubbleText: "スイスイ",
    introText: "タクシーで まちを すすむ",
    surpriseTitle: "ネオン きらっ",
    surpriseCopy: "まちの ライトが ひかるよ",
    surpriseIcons: ["🚕", "🌃", "✨"],
    surpriseMoments: [5, 12],
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
    instruction: "おとに あわせて タップ",
    color: "#008c8c",
    themeClass: "theme-ship",
    pulses: 18,
    interval: 880,
    hitsNeeded: 8,
    bubbleText: "ざぶーん",
    introText: "ふねで うみへ",
    surpriseTitle: "しぶき きらきら",
    surpriseCopy: "うみに ひかりが はねるよ",
    surpriseIcons: ["🚢", "🌊", "✨"],
    surpriseMoments: [5, 13],
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
    instruction: "はやめに タップ",
    color: "#29b37e",
    themeClass: "theme-heli",
    pulses: 19,
    interval: 820,
    hitsNeeded: 9,
    bubbleText: "ブーン",
    introText: "ヘリコプターで そらへ",
    surpriseTitle: "くもの うえ",
    surpriseCopy: "ふわっと そらを とんでいくよ",
    surpriseIcons: ["🚁", "☁️", "🌤️"],
    surpriseMoments: [6, 14],
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
    instruction: "すばやく タップ",
    color: "#3867d6",
    themeClass: "theme-police",
    pulses: 20,
    interval: 770,
    hitsNeeded: 9,
    bubbleText: "ピーポー",
    introText: "パトカーで パトロール",
    surpriseTitle: "ライト ぴかぴか",
    surpriseCopy: "あおと あかが くるくる ひかるよ",
    surpriseIcons: ["🚓", "🔵", "🔴"],
    surpriseMoments: [6, 14],
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
    instruction: "すぐ みて タップ",
    color: "#c98910",
    themeClass: "theme-bulldozer",
    pulses: 21,
    interval: 720,
    hitsNeeded: 10,
    bubbleText: "ぐいぐい",
    introText: "ブルドーザーで どんどん",
    surpriseTitle: "どろんこ ぽん",
    surpriseCopy: "つちが ぽんっと はねるよ",
    surpriseIcons: ["🚜", "🪨", "✨"],
    surpriseMoments: [6, 15],
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
    instruction: "はやく みつけて タップ",
    color: "#2dcaea",
    themeClass: "theme-airplane",
    pulses: 22,
    interval: 680,
    hitsNeeded: 10,
    bubbleText: "スーッ",
    introText: "ひこうきで おおぞらへ",
    surpriseTitle: "にじの そら",
    surpriseCopy: "そらに ひかりの みちが できるよ",
    surpriseIcons: ["✈️", "🌈", "☁️"],
    surpriseMoments: [7, 16],
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
    instruction: "はやく みて タップ",
    color: "#7c4dff",
    themeClass: "theme-rocket",
    pulses: 23,
    interval: 640,
    hitsNeeded: 11,
    bubbleText: "ビューン",
    introText: "ロケットで うちゅうへ",
    surpriseTitle: "ほしが キラキラ",
    surpriseCopy: "うちゅうに きらめきが ひろがるよ",
    surpriseIcons: ["🚀", "🌟", "🪐"],
    surpriseMoments: [7, 16],
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

let audioContext;
let bgmIntervalId;
let bgmStep = 0;
let state = createInitialState();

function buildRounds() {
  return baseRounds.map((round) => ({ ...round }));
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
  restStopEmoji.textContent = nextRound.emoji;
  restStopTitle.textContent = `つぎは ${nextRound.name}`;
  restStopCopy.textContent = "ちょっと ひとやすみして つづけよう";
  restStop.removeAttribute("hidden");
}

function createInitialState() {
  return {
    roundIndex: 0,
    activePulse: -1,
    hits: 0,
    totalHits: 0,
    acceptingTap: false,
    timers: [],
    finishedRounds: 0,
    roundResults: [],
    stars: 0,
    streak: 0,
    bestStreak: 0,
    surprises: 0,
    triggeredSurprises: [],
    feverTimer: null,
  };
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
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
}

function playTone(frequency, duration, type = "sine", gainScale = 1) {
  const volumeGain = getVolumeGain() * gainScale;

  if (!audioContext || volumeGain === 0) {
    return;
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

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

  oscillator.addEventListener("ended", () => {
    oscillator.disconnect();
    gainNode.disconnect();
  });
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

  const bgmGain = getBgmGain();
  if (!audioContext || bgmGain === 0) {
    return;
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  const playBgmStep = () => {
    const note = round.bgmNotes[bgmStep % round.bgmNotes.length];
    const harmony = note / 2;
    playTone(note, 0.34, round.bgmType, 0.22);
    playTone(harmony, 0.28, "sine", 0.11);
    bgmStep += 1;
  };

  playBgmStep();
  const interval = Math.max(360, Math.round(round.interval * 0.42));
  bgmIntervalId = setInterval(playBgmStep, interval);
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
  for (let index = 0; index < round.pulses; index += 1) {
    const orb = document.createElement("div");
    orb.className = "pulse-orb";
    orb.style.borderColor = `${round.color}33`;
    pulseLane.append(orb);
  }
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

function prepareRound() {
  clearTimers();
  hideRestStop();
  state.activePulse = -1;
  state.hits = 0;
  state.acceptingTap = false;
  state.triggeredSurprises = [];

  const round = rounds[state.roundIndex];
  roundLabel.textContent = `ラウンド ${state.roundIndex + 1} / ${rounds.length}`;
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

  const startDelay = 1800;
  const timer = setTimeout(() => runPulseSequence(round), startDelay);
  state.timers.push(timer);
}

function runPulseSequence(round) {
  const pulseOrbs = Array.from(document.querySelectorAll(".pulse-orb"));

  pulseOrbs.forEach((orb) => {
    orb.classList.remove("pulse-active", "pulse-hit");
  });

  for (let index = 0; index < round.pulses; index += 1) {
    const timer = setTimeout(() => {
      state.activePulse = index;
      state.acceptingTap = true;

      pulseOrbs.forEach((orb, orbIndex) => {
        orb.classList.toggle("pulse-active", orbIndex === index);
      });

      playTone(round.pulseFrequency + index * 18, 0.18, round.pulseType);

      if (round.surpriseMoments.includes(index)) {
        showSurprise(round);
      }

      const deactivateTimer = setTimeout(() => {
        state.acceptingTap = false;
      }, round.interval * 0.75);

      state.timers.push(deactivateTimer);
    }, round.interval * index);

    state.timers.push(timer);
  }

  const finishTimer = setTimeout(() => {
    finishRound();
  }, round.interval * round.pulses + 300);

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
  resultTitle.textContent = `${rounds.length}だい クリア`;
  resultCopy.textContent = `ぜんぶで ${state.totalHits} かい タップできたよ。さいごまで あそべた きみは りずむ めいじん。`;
  resultBonus.textContent = `スター ${state.stars}こ ・ さいこう ${state.bestStreak}れんぞく ・ サプライズ ${state.surprises}かい`;
  showScreen("result");
  playTone(523, 0.18, "triangle");
  setTimeout(() => playTone(659, 0.18, "triangle"), 180);
  setTimeout(() => playTone(784, 0.24, "triangle"), 360);
}

function handleTap() {
  const round = rounds[state.roundIndex];

  animateTapButton();

  if (restStop.hasAttribute("hidden") === false) {
    showBubble("つぎの じゅんびちゅう");
    return;
  }

  if (state.acceptingTap) {
    state.hits += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    state.acceptingTap = false;

    const pulseOrbs = Array.from(document.querySelectorAll(".pulse-orb"));
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
  ensureAudio();
  clearTimers();
  stopBgm();
  hideRestStop();
  hideSurprise();
  rounds = buildRounds();
  state = createInitialState();
  renderProgress();
  prepareRound();
}

function activateStart(event) {
  event?.stopPropagation();
  startGame();
}

function activateRestart(event) {
  event?.stopPropagation();
  startGame();
}

function goHome(event) {
  event?.stopPropagation();
  clearTimers();
  stopBgm();
  hideRestStop();
  hideSurprise();
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