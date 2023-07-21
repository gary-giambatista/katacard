"use client";

export let romajiToKatakana = {
	ア: "あ",
	イ: "い",
	ウ: "う",
	エ: "え",
	オ: "お",
	カ: "か",
	ガ: "が",
	キ: "き",
	ギ: "ぎ",
	ク: "く",
	グ: "ぐ",
	ケ: "け",
	ゲ: "げ",
	コ: "こ",
	ゴ: "ご",
	サ: "さ",
	ザ: "ざ",
	シ: "し",
	ジ: "じ",
	ス: "す",
	ズ: "ず",
	セ: "せ",
	ゼ: "ぜ",
	ソ: "そ",
	ゾ: "ぞ",
	タ: "た",
	ダ: "だ",
	チ: "ち",
	ヂ: "ぢ",
	ツ: "つ",
	ヅ: "づ",
	テ: "て",
	デ: "で",
	ト: "と",
	ド: "ど",
	ナ: "な",
	ニ: "に",
	ヌ: "ぬ",
	ネ: "ね",
	ノ: "の",
	ハ: "は",
	バ: "ば",
	パ: "ぱ",
	ヒ: "ひ",
	ビ: "び",
	ピ: "ぴ",
	フ: "ふ",
	ブ: "ぶ",
	プ: "ぷ",
	ヘ: "へ",
	ベ: "べ",
	ペ: "ぺ",
	ホ: "ほ",
	ボ: "ぼ",
	ポ: "ぽ",
	マ: "ま",
	ミ: "み",
	ム: "む",
	メ: "め",
	モ: "も",
	ヤ: "や",
	ユ: "ゆ",
	ヨ: "よ",
	ラ: "ら",
	リ: "り",
	ル: "る",
	レ: "れ",
	ロ: "ろ",
	ワ: "わ",
	ヲ: "を",
	ン: "ん",
};
let copy = { ...romajiToKatakana };
export let incorrectMap = {};
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

//Global values
let keys = Object.keys(romajiToKatakana);
let testNumber = Math.floor(Math.random() * keys.length);
// let testNumber = 1;
export let testKey = keys[testNumber];
export let testChar = romajiToKatakana[testKey];
export let correct = 0;
export let incorrect = 0;
export let count = Object.keys(romajiToKatakana).length;
export let isCorrectLib = false;
export let isIncorrectLib = false;
export let attempedLib = false;

//use set storage function here and get storage in card component page mount useEffect
function setStorageCorrect() {
	console.log("Set LOCAL Storage on CORRECT");
	localStorage.setItem("hiragana", JSON.stringify(romajiToKatakana));
	localStorage.setItem("hiraganaCorrect", `${correct}`);
}
function setStorageIncorrect() {
	console.log("Set LOCAL Storage on INCORRECT");
	localStorage.setItem("hiraganaIncorrect", `${incorrect}`);
}
function setStorageIncorrectMap() {
	console.log("Set LOCAL Storage on INCORRECT MAP");
	console.log(testKey, testChar, typeof testKey, typeof testChar);
	incorrectMap[testKey] = testChar;
	localStorage.setItem("hiraganaIncorrectMap", JSON.stringify(incorrectMap));
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
export function UpdateOldIncorrectMap(oldIncorrectMap) {
	incorrectMap = oldIncorrectMap;
}

/**
 *
 * @param {string} answer user's submission
 * @returns {boolean}
 *
 */
export function checkAnswer(answer, mode) {
	console.log("Check Answer Called");
	const cleanedAnswer = answer.replace(/\s+/g, "").toLowerCase();
	if (cleanedAnswer === testKey) {
		console.log("CORRECT");
		isCorrectLib = true;
		isIncorrectLib = false;
		delete romajiToKatakana[testKey];
		updateMap();
		correct += 1;
		mode === "Regular" ? setStorageCorrect() : setStorageIncorrectMap();
		return true;
	} else {
		//TODO: figure out how to get this to fire after 2 incorrect
		console.log("INCORRECT");
		isCorrectLib = false;
		isIncorrectLib = true;
		attempedLib = !attempedLib;
		if (
			localStorage.getItem("hiraganaIncorrectMap") &&
			!JSON.parse(localStorage.getItem("hiraganaIncorrectMap"))[testKey]
		) {
			incorrect += 1;
		}
		if (incorrect === 0) {
			incorrect += 1;
		}
		// incorrect += 1;
		setStorageIncorrect(); // number of incorrect
		setStorageIncorrectMap(); // map of incorrect romajiToKatakana
		//add new key>val to local storage here for incorrect to 0
		return false;
	}
}

export function reset() {
	console.log("reset ran");
	// localStorage.clear();
	localStorage.removeItem("hiragana");
	localStorage.removeItem("hiraganaCorrect");
	localStorage.removeItem("hiraganaIncorrect");
	localStorage.removeItem("hiraganaIncorrectMap");
	romajiToKatakana = copy;
	incorrectMap = {};
	updateMap();
	correct = 0;
	incorrect = 0;
	count = Object.keys(romajiToKatakana).length;
	isCorrectLib = false;
	isIncorrectLib = false;
}

export function changeMapData(mode) {
	console.log("Changed MODE CALLED", mode);
	isCorrectLib = false;
	isIncorrectLib = false;
	if (mode === "Regular") {
		const oldRomajiToKatakana = JSON.parse(localStorage.getItem("hiragana"));
		if (oldRomajiToKatakana) {
			updateMapOld(oldRomajiToKatakana);
		} else {
			//Where no answers are yet recorded
			romajiToKatakana = { ...copy };
			updateMap();
		}
	} else {
		const failedKatakanaToRomaji = JSON.parse(
			localStorage.getItem("hiraganaIncorrectMap")
		);
		if (failedKatakanaToRomaji) {
			romajiToKatakana = failedKatakanaToRomaji;
			updateMap();
		}
	}
}

export function resetFailed() {
	console.log("Reset Failed RAN");
	localStorage.removeItem("hiraganaIncorrectMap");
	localStorage.removeItem("hiraganaIncorrect");
	incorrectMap = {};
	incorrect = 0;
	isCorrectLib = false;
	isIncorrectLib = false;
}
