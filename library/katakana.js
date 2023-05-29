//Initialize Map for katana > English romaji
const katakanaMap = new Map();

//object to store key => value pairs (romaji > katakana)
const romajiToKatakana = {
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
function initializeMap() {
	for (let key of Object.keys(romajiToKatakana)) {
		katakanaMap.set(key, romajiToKatakana[key]); // romaji => katakana
	}
}
initializeMap(); // call initialize function

/**
 *
 * @param {string} answer user's submission
 * @param {event} event form event
 * @returns {boolean}
 *
 */
function checkAnswer(answer, event) {
	// event.preventDefault();
	console.log("called");
	if (katakanaMap.get(answer)) {
		return true;
	} else return false;
}

console.log(checkAnswer("ab"));
