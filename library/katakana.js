"use client";
//Initialize Map for katana > English romaji
// const katakanaMap = new Map();

//object to store key => value pairs (romaji > katakana)
export let romajiToKatakana = {
	a: "ア",
	i: "イ",
	u: "ウ",
	e: "エ",
	o: "オ",
	ka: "カ",
	ki: "キ",
	ku: "ク",
	ke: "ケ",
	ko: "コ",
	sa: "サ",
	shi: "シ",
	su: "ス",
	se: "セ",
	so: "ソ",
	ta: "タ",
	chi: "チ",
	tsu: "ツ",
	te: "テ",
	to: "ト",
	na: "ナ",
	ni: "ニ",
	nu: "ヌ",
	ne: "ネ",
	no: "ノ",
	ha: "ハ",
	hi: "ヒ",
	fu: "フ",
	he: "ヘ",
	ho: "ホ",
	ma: "マ",
	mi: "ミ",
	mu: "ム",
	me: "メ",
	mo: "モ",
	ya: "ヤ",
	yu: "ユ",
	yo: "ヨ",
	ra: "ラ",
	ri: "リ",
	ru: "ル",
	re: "レ",
	ro: "ロ",
	wa: "ワ",
	wo: "ヲ",
	n: "ン",
	ga: "ガ",
	gi: "ギ",
	gu: "グ",
	ge: "ゲ",
	go: "ゴ",
	za: "ザ",
	ji: "ジ",
	zu: "ズ",
	ze: "ゼ",
	zo: "ゾ",
	da: "ダ",
	de: "デ",
	do: "ド",
	ba: "バ",
	bi: "ビ",
	bu: "ブ",
	be: "ベ",
	bo: "ボ",
	pa: "パ",
	pi: "ピ",
	pu: "プ",
	pe: "ペ",
	po: "ポ",
};
let copy = { ...romajiToKatakana };
//Compound Sounds:
// kya: 'キャ',
// kyu: 'キュ',
// kyo: 'キョ',
// sha: 'シャ',
// shu: 'シュ',
// sho: 'ショ',
// cha: 'チャ',
// chu: 'チュ',
// cho: 'チョ',
// nya: 'ニャ',
// nyu: 'ニュ',
// nyo: 'ニョ',
// hya: 'ヒャ',
// hyu: 'ヒュ',
// hyo: 'ヒョ',
// mya: 'ミャ',
// myu: 'ミュ',
// myo: 'ミョ',
// rya: 'リャ',
// ryu: 'リュ',
// ryo: 'リョ',
// gya: 'ギャ',
// gyu: 'ギュ',
// gyo: 'ギョ',
// ja: 'ジャ',
// ju: 'ジュ',
// jo: 'ジョ',
// bya: 'ビャ',
// byu: 'ビュ',
// byo: 'ビョ',
// pya: 'ピャ',
// pyu: 'ピュ',
// pyo: 'ピョ',

//Initialize Map with romaji => katakana key, value pairs
// function initializeMap() {
// 	for (let key of Object.keys(romajiToKatakana)) {
// 		katakanaMap.set(key, romajiToKatakana[key]); // romaji => katakana
// 	}
// }
// initializeMap(); // call initialize function

//Global values
let keys = Object.keys(romajiToKatakana);
let testNumber = Math.floor(Math.random() * keys.length);
// let testNumber = 1;
let testKey = keys[testNumber];
export let testChar = romajiToKatakana[testKey];
export let correct = 0;
export let incorrect = 0;
export let count = Object.keys(romajiToKatakana).length;

//use set storage function here and get storage in card component page mount useEffect
function setStorageCorrect() {
	console.log("Set LOCAL Storage on CORRECT");
	localStorage.setItem("romajiToKatakana", JSON.stringify(romajiToKatakana));
	localStorage.setItem("correct", `${correct}`);
}
function setStorageIncorrect() {
	console.log("Set LOCAL Storage on INCORRECT");
	localStorage.setItem("incorrect", `${incorrect}`);
}

//Helper function to reset global values after getting answer CORRECT
export function updateMap() {
	keys = Object.keys(romajiToKatakana);
	count = keys.length;
	testNumber = Math.floor(Math.random() * keys.length);
	testKey = keys[testNumber];
	testChar = romajiToKatakana[testKey];
}
/**
 *
 * @param {object} oldRomajitoKatakana modified romajiToKatakana object
 * @returns {void}
 * Helper function to update global state and set testChar from storage
 */
export function updateMapOld(oldRomajitoKatakana) {
	romajiToKatakana = oldRomajitoKatakana;
	updateMap();
	// keys = Object.keys(oldRomajitoKatakana);
	// count = keys.length;
	// testNumber = Math.floor(Math.random() * keys.length);
	// testKey = keys[testNumber];
	// testChar = oldRomajitoKatakana[testKey];
}

//Use local storage int's to update correct or incorrect from useEffect in Card component
export function updateOldCorrect(oldCorrect) {
	correct = oldCorrect;
}
export function updateOldIncorrect(oldIncorrect) {
	incorrect = oldIncorrect;
}

/**
 *
 * @param {string} answer user's submission
 * @param {event} event form event
 * @returns {boolean}
 *
 */
export function checkAnswer(answer, event) {
	console.log("Check Answer Called");
	if (answer === testKey) {
		console.log("CORRECT");
		delete romajiToKatakana[testKey];
		updateMap();
		correct += 1;
		setStorageCorrect();
		return true;
	} else {
		console.log("INCORRECT");
		incorrect += 1;
		setStorageIncorrect();
		//add new key>val to local storage here for incorrect to 0
		return false;
	}
}

export function reset() {
	console.log("reset ran");
	localStorage.clear();
	romajiToKatakana = copy;
	updateMap();
	correct = 0;
	incorrect = 0;
	count = Object.keys(romajiToKatakana).length;
}
