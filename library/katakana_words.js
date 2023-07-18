"use client";

//object to store key => value pairs (romaji > katakana)
export let romajiToKatakana = {
	びじねすまん: "ビジネスマン",
	あいどる: "アイドル",
	めーく: "メーク",
	そふぁ: "ソファ",
	あるこ: "アルコール",
	どきゅめんと: "ドキュメント",
	たいむ: "タイム",
	ふりーたー: "フリーター",
	つあー: "ツアー",
	さらりーまん: "サラリーマン",
	おふぃすれでぃ: "オフィスレディ",
	ぱーとなー: "パートナー",
	すたいる: "スタイル",
	ふぁっしょん: "ファッション",
	のーと: "ノート",
	だんす: "ダンス",
	ぐらす: "グラス",
	ぼーなす: "ボーナス",
	みゅーじっく: "ミュージック",
	あぷり: "アプリ",
	もーど: "モード",
	でーた: "データ",
	ねっとわーく: "ネットワーク",
	ぷろぐらみんぐ: "プログラミング",
	くらうど: "クラウド",
	ろぼっと: "ロボット",
	はーどうぇあ: "ハードウェア",
	そふとうぇあ: "ソフトウェア",
	こんぴゅーたー: "コンピューター",
	あにめ: "アニメ",
	てれび: "テレビ",
	かめら: "カメラ",
	せんさー: "センサー",
	あいてむ: "アイテム",
	ばいく: "バイク",
	えすかれーたー: "エスカレーター",
	すぽーつかー: "スポーツカー",
	ぼうりんぐ: "ボウリング",
	すけーとぼーど: "スケートボード",
	ぼくしんぐ: "ボクシング",
	ごるふ: "ゴルフ",
	さっかー: "サッカー",
	ばすけっとばーる: "バスケットボール",
	じゅーす: "ジュース",
	びーる: "ビール",
	こーひー: "コーヒー",
	けーき: "ケーキ",
	ちーず: "チーズ",
	たこす: "タコス",
	しーふーど: "シーフード",
	ふらいどぽてと: "フライドポテト",
	らーめん: "ラーメン",
	あいすくりーむ: "アイスクリーム",
	かれー: "カレー",
	ぴざ: "ピザ",
	ちょこれーと: "チョコレート",
	はんばーがー: "ハンバーガー",
	さんどいっち: "サンドイッチ",
	さらだ: "サラダ",
	ばーすでー: "バースデー",
	ばれんたいん: "バレンタイン",
	ごーるでんうぃーく: "ゴールデンウィーク",
	くりすます: "クリスマス",
	じむ: "ジム",
	てーまぱーく: "テーマパーク",
	しねま: "シネマ",
	ほてる: "ホテル",
	れすとらん: "レストラン",
	すーぱーまーけっと: "スーパーマーケット",
	こんびに: "コンビニ",
	あぱーと: "アパート",
	かふぇ: "カフェ",
	くらぶ: "クラブ",
	すぱ: "スパ",
	ぷーる: "プール",
	さうな: "サウナ",
	らいぶはうす: "ライブハウス",
	みゅーじあむ: "ミュージアム",
	ぱーく: "パーク",
	よーろっぱ: "ヨーロッパ",
	あめりか: "アメリカ",
	おーすとらりあ: "オーストラリア",
	いたりあ: "イタリア",
};
let copy = { ...romajiToKatakana };
export let incorrectMap = {};

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

//use set storage function here and get storage in card component page mount useEffect
function setStorageCorrect() {
	console.log("Set LOCAL Storage on CORRECT");
	localStorage.setItem("kataWords", JSON.stringify(romajiToKatakana));
	localStorage.setItem("kataWordsCorrect", `${correct}`);
}
function setStorageIncorrect() {
	console.log("Set LOCAL Storage on INCORRECT");
	localStorage.setItem("kataWordsIncorrect", `${incorrect}`);
}
function setStorageIncorrectMap() {
	console.log("Set LOCAL Storage on INCORRECT MAP");
	console.log(testKey, testChar, typeof testKey, typeof testChar);
	incorrectMap[testKey] = testChar;
	localStorage.setItem("kataWordsIncorrectMap", JSON.stringify(incorrectMap));
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
		console.log("INCORRECT");
		isCorrectLib = false;
		isIncorrectLib = true;
		if (
			localStorage.getItem("kataWordsIncorrectMap") &&
			!JSON.parse(localStorage.getItem("kataWordsIncorrectMap"))[testKey]
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
	localStorage.removeItem("kataWords");
	localStorage.removeItem("kataWordsIncorrect");
	localStorage.removeItem("kataWordsCorrect");
	localStorage.removeItem("kataWordsIncorrectMap");
	romajiToKatakana = copy;
	incorrectMap = {};
	updateMap();
	correct = 0;
	incorrect = 0;
	count = Object.keys(romajiToKatakana).length;
}

export function changeMapData(mode) {
	console.log("Changed MODE CALLED", mode);
	isCorrectLib = false;
	isIncorrectLib = false;
	if (mode === "Regular") {
		const oldRomajiToKatakana = JSON.parse(localStorage.getItem("kataWords"));
		if (oldRomajiToKatakana) {
			updateMapOld(oldRomajiToKatakana);
		} else {
			//Where no answers are yet recorded
			romajiToKatakana = { ...copy };
			updateMap();
		}
	} else {
		const failedKatakanaToRomaji = JSON.parse(
			localStorage.getItem("kataWordsIncorrectMap")
		);
		if (failedKatakanaToRomaji) {
			romajiToKatakana = failedKatakanaToRomaji;
			updateMap();
		}
	}
}

export function resetFailed() {
	console.log("Reset Failed RAN");
	localStorage.removeItem("kataWordsIncorrectMap");
	localStorage.removeItem("kataWordsIncorrect");
	incorrectMap = {};
	incorrect = 0;
}
