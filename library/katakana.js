"use client";

//object to store key => value pairs (romaji > katakana)
export let romajiToKatakana = {
	// a: "ア",
	// i: "イ",
	// u: "ウ",
	// e: "エ",
	// o: "オ",
	// ka: "カ",
	// ki: "キ",
	// ku: "ク",
	// ke: "ケ",
	// ko: "コ",
	// sa: "サ",
	// shi: "シ",
	// su: "ス",
	// se: "セ",
	// so: "ソ",
	// ta: "タ",
	// chi: "チ",
	// tsu: "ツ",
	// te: "テ",
	// to: "ト",
	// na: "ナ",
	// ni: "ニ",
	// nu: "ヌ",
	// ne: "ネ",
	// no: "ノ",
	// ha: "ハ",
	// hi: "ヒ",
	// fu: "フ",
	// he: "ヘ",
	// ho: "ホ",
	// ma: "マ",
	// mi: "ミ",
	// mu: "ム",
	// me: "メ",
	// mo: "モ",
	// ya: "ヤ",
	// yu: "ユ",
	// yo: "ヨ",
	// ra: "ラ",
	// ri: "リ",
	// ru: "ル",
	// re: "レ",
	// ro: "ロ",
	// wa: "ワ",
	// wo: "ヲ",
	// n: "ン",
	// ga: "ガ",
	// gi: "ギ",
	// gu: "グ",
	// ge: "ゲ",
	// go: "ゴ",
	// za: "ザ",
	// ji: "ジ",
	// zu: "ズ",
	// ze: "ゼ",
	// zo: "ゾ",
	// da: "ダ",
	// de: "デ",
	// do: "ド",
	// ba: "バ",
	// bi: "ビ",
	// bu: "ブ",
	// be: "ベ",
	// bo: "ボ",
	// pa: "パ",
	// pi: "ピ",
	// pu: "プ",
	// pe: "ペ",
	// po: "ポ",
	あ: "ア",
	い: "イ",
	う: "ウ",
	え: "エ",
	お: "オ",
	か: "カ",
	き: "キ",
	く: "ク",
	け: "ケ",
	こ: "コ",
	さ: "サ",
	し: "シ",
	す: "ス",
	せ: "セ",
	そ: "ソ",
	た: "タ",
	ち: "チ",
	つ: "ツ",
	て: "テ",
	と: "ト",
	な: "ナ",
	に: "ニ",
	ぬ: "ヌ",
	ね: "ネ",
	の: "ノ",
	は: "ハ",
	ひ: "ヒ",
	ふ: "フ",
	へ: "ヘ",
	ほ: "ホ",
	ま: "マ",
	み: "ミ",
	む: "ム",
	め: "メ",
	も: "モ",
	や: "ヤ",
	ゆ: "ユ",
	よ: "ヨ",
	ら: "ラ",
	り: "リ",
	る: "ル",
	れ: "レ",
	ろ: "ロ",
	わ: "ワ",
	を: "ヲ",
	ん: "ン",
	が: "ガ",
	ぎ: "ギ",
	ぐ: "グ",
	げ: "ゲ",
	ご: "ゴ",
	ざ: "ザ",
	じ: "ジ",
	ず: "ズ",
	ぜ: "ゼ",
	ぞ: "ゾ",
	だ: "ダ",
	ぢ: "ヂ",
	づ: "ヅ",
	で: "デ",
	ど: "ド",
	ば: "バ",
	び: "ビ",
	ぶ: "ブ",
	べ: "ベ",
	ぼ: "ボ",
	ぱ: "パ",
	ぴ: "ピ",
	ぷ: "プ",
	ぺ: "ペ",
	ぽ: "ポ",
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
	localStorage.setItem("romajiToKatakana", JSON.stringify(romajiToKatakana));
	localStorage.setItem("correct", `${correct}`);
}
function setStorageIncorrect() {
	console.log("Set LOCAL Storage on INCORRECT");
	localStorage.setItem("incorrect", `${incorrect}`);
}
function setStorageIncorrectMap() {
	console.log("Set LOCAL Storage on INCORRECT MAP");
	console.log(testKey, testChar, typeof testKey, typeof testChar);
	incorrectMap[testKey] = testChar;
	localStorage.setItem("incorrectMap", JSON.stringify(incorrectMap));
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
			localStorage.getItem("incorrectMap") &&
			!JSON.parse(localStorage.getItem("incorrectMap"))[testKey]
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
	localStorage.removeItem("romajiToKatakana");
	localStorage.removeItem("correct");
	localStorage.removeItem("incorrect");
	localStorage.removeItem("incorrectMap");
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
		const oldRomajiToKatakana = JSON.parse(
			localStorage.getItem("romajiToKatakana")
		);
		if (oldRomajiToKatakana) {
			updateMapOld(oldRomajiToKatakana);
		} else {
			//Where no answers are yet recorded
			romajiToKatakana = { ...copy };
			updateMap();
		}
	} else {
		const failedKatakanaToRomaji = JSON.parse(
			localStorage.getItem("incorrectMap")
		);
		if (failedKatakanaToRomaji) {
			romajiToKatakana = failedKatakanaToRomaji;
			updateMap();
		}
	}
}

export function resetFailed() {
	console.log("Reset Failed RAN");
	localStorage.removeItem("incorrectMap");
	localStorage.removeItem("incorrect");
	incorrectMap = {};
	incorrect = 0;
	isCorrectLib = false;
	isIncorrectLib = false;
}
