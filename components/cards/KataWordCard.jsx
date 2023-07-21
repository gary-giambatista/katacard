"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toHiragana } from "wanakana";
import {
	UpdateOldIncorrectMap,
	attempedLib,
	changeMapData,
	checkAnswer,
	correct,
	count,
	incorrect,
	isCorrectLib,
	isIncorrectLib,
	reset,
	resetFailed,
	testChar,
	testKey,
	updateMapOld,
	updateOldCorrect,
	updateOldIncorrect,
} from "../../library/katakana_words.js";

function KataWordCard() {
	const [answer, setAnswer] = useState("");
	const [test, setTest] = useState("");
	const [currentCount, setCurrentCount] = useState(count);
	const [correctAnswers, setCorrectAnswers] = useState(correct);
	const [incorrectAnswers, setIncorrectAnswers] = useState(incorrect);
	const [resetTrigger, setResetTrigger] = useState(false); //required to use setResetTrigger in reset function to change page state and rerender componen
	const [hint, setHint] = useState(""); //use testKey to set onClick of Hint button >> reset to "" when submit button is clicked
	const [mode, setMode] = useState("Regular"); //Regular or Failed
	const inputRef = useRef(null);
	const [isFocused, setIsFocused] = useState(false);
	const [isCorrect, setIsCorrect] = useState(false);
	const [isIncorrect, setIsIncorrect] = useState(false);
	const [attemped, setAttemped] = useState(attempedLib);

	//Check for existing session from Local Storage and update global state
	useEffect(() => {
		//TODO: Add function here to make Card re-usable
		//1. check URL path
		//2. put different functions for katakana / Hiragana in new library file
		//3. conditionally call the correct function
		//4. PROBLEM : how to handle importing katakana.js and hiragana.js?
		console.log("Getting Local Storage");
		if (localStorage.getItem("kataWords")) {
			console.log("GOT Old R to K Storage");
			const oldRomajiToKatakana = JSON.parse(localStorage.getItem("kataWords"));
			//call updateMapOld to set testChar>test from shortened romaji>kata
			updateMapOld(oldRomajiToKatakana);
		}
		if (localStorage.getItem("kataWordsCorrect")) {
			console.log("GOT Old correct from Storage");
			const oldCorrect = JSON.parse(localStorage.getItem("kataWordsCorrect"));
			//update global correct to local storage correct
			updateOldCorrect(oldCorrect);
		}
		if (localStorage.getItem("kataWordsIncorrect")) {
			console.log("GOT Old incorrect from Storage");
			const oldIncorrect = JSON.parse(
				localStorage.getItem("kataWordsIncorrect")
			);
			//update global incorrect to local storage incorrect
			updateOldIncorrect(oldIncorrect);
		}
		if (localStorage.getItem("kataWordsIncorrectMap")) {
			console.log("GOT old incorrectMap from local storage");
			const oldIncorrectMap = JSON.parse(
				localStorage.getItem("kataWordsIncorrectMap")
			);
			UpdateOldIncorrectMap(oldIncorrectMap);
		}
	}, []);

	//updates romajiToKatakana to correct map romajiToKatakana or incorrectMap
	useEffect(() => {
		changeMapData(mode);
		setHint("");
		setTest(testChar);
		setCurrentCount(count);
	}, [mode]);

	useEffect(() => {
		console.log("USE EFFECT");
		setTest(testChar);
		setCurrentCount(count);
		setCorrectAnswers(correct);
		setIncorrectAnswers(incorrect);
		setIsCorrect(isCorrectLib);
		setIsIncorrect(isIncorrectLib);
		setAttemped(attempedLib);
	}, [
		testChar,
		correct,
		incorrect,
		count,
		isCorrectLib,
		isIncorrectLib,
		attempedLib,
		resetTrigger,
	]);

	useEffect(() => {
		colorAnimation(isCorrect, isIncorrect);
		// console.log("isCorrect: ", isCorrect, "isIncorrect: ", isIncorrect);
	}, [isCorrect, isIncorrect]);

	const colorAnimation = useCallback((isCorrect, isIncorrect) => {
		// console.log("COLOR CALLED");
		if (isCorrect) {
			//setTimeout to change state after 200ms
			setTimeout(() => {
				setIsCorrect(false);
			}, 100);
			return "animate-text bg-gradient-to-t from-white to-green-700 bg-clip-text text-transparent";
			// "ring-4 md:ring-8 ring-lime-700";
		} else if (isIncorrect) {
			//setTimeout to change state after 200ms
			setTimeout(() => {
				setIsIncorrect(false);
			}, 100);
			return "animate-text bg-gradient-to-t from-white to-red-700 bg-clip-text text-transparent";
			// ring-4 md:ring-8 ring-red-700
		} else return "";
	}, []);

	function changeMode() {
		!localStorage.getItem("kataWordsIncorrectMap")
			? alert("Failed Mode requires misses ;)")
			: mode === "Regular"
			? setMode("Failed")
			: setMode("Regular");
	}

	function checkForMobile() {
		if (typeof window !== "undefined") {
			if (/iPhone|Android/.test(navigator.userAgent) && isFocused) {
				return true;
			}
		}
		return false;
	}

	// function colorAnimation(isCorrect, isIncorrect) {
	// 	console.log("COLOR CALLED");
	// 	if (isCorrect) {
	// 		//setTimeout to change state after 200ms
	// 		setTimeout(() => {
	// 			setIsCorrect(false);
	// 		}, 100);
	// 		return "ring-4 md:ring-8 ring-lime-700";
	// 	} else if (isIncorrect) {
	// 		//setTimeout to change state after 200ms
	// 		setTimeout(() => {
	// 			setIsIncorrect(false);
	// 		}, 100);
	// 		return "ring-4 md:ring-8 ring-red-700";
	// 	} else return "";
	// }

	return (
		<div
			className={`flex flex-col w-full max-w-xs md:max-w-xl lg:max-w-3xl md:max-h-2xl mt-[5vw] md:mt-[4vw] xl:mt-[2vw] justify-between gap-2 pb-20 ${
				checkForMobile() ? "h-[52vh]" : "h-[80vh]"
			}`}
		>
			<div className="flex justify-between mb-2 md:justify-center md:gap-2">
				<button
					className="bg-[#7C6E9C] p-1 px-3 rounded-md hover:opacity-50"
					onClick={() => {
						reset();
						setMode("Regular");
						setResetTrigger(!resetTrigger);
						inputRef.current?.focus();
					}}
				>
					Reset
				</button>
				<button
					className="bg-[#7C6E9C] p-1 px-3 rounded-md hover:opacity-50"
					onClick={() => {
						resetFailed();
						setMode("Regular");
						setResetTrigger(!resetTrigger);
						inputRef.current?.focus();
					}}
				>
					Clear Failed
				</button>
				<button
					className="bg-[#7C6E9C] p-1 px-3 rounded-md hover:opacity-50"
					// disabled={!failedModeEnabled}
					onClick={() => {
						changeMode();
						inputRef.current?.focus();
					}}
				>
					Change Mode
				</button>
			</div>
			{/* Border testing: border-2 border-[#1a1938]/50 */}
			<div
				className={`relative flex justify-center items-center w-full h-[80%] bg-[#2E204F] text-gray-50 drop-shadow-lg rounded-2xl`}
			>
				<h1
					className={`${
						checkForMobile() ? "text-4xl" : "text-4xl md:text-5xl lg:text-7xl"
					} ${colorAnimation(isCorrect, isIncorrect)} `}
				>
					{test ? test : "😁"}
					{/* {mode === "Regular" && localStorage.getItem("kataWords") && !test
						? "Loading"
						: test || "😁"} */}
				</h1>
				<button onClick={() => changeMode()} className="absolute left-5 top-3">
					<h5>
						{checkForMobile() ? null : "Mode:"}{" "}
						<span
							className={`underline decoration-2 ${
								mode === "Regular"
									? "decoration-[#7c6e9c]"
									: "decoration-red-500"
							}`}
						>
							{mode}
						</span>
					</h5>
				</button>
				<button
					onClick={() => (hint ? setHint("") : setHint(testKey))}
					className="absolute right-5 bottom-3"
				>
					<h5>{hint ? hint : "Hint"}</h5>
				</button>
			</div>
			<div className="flex justify-evenly">
				<div className="text-green-600">{correctAnswers}</div>
				<div className="text-red-600">{incorrectAnswers}</div>
				<div className="text-white">Remaining: {currentCount}</div>
			</div>
			<form
				className="flex"
				onSubmit={(event) => {
					event.preventDefault();
					checkAnswer(answer, mode);
					//using useEffect instead of below
					// setTest(testChar);
					// setCorrectAnswers(correct);
					setAnswer("");
					setHint("");
					inputRef.current?.focus();
				}}
			>
				<input
					onFocus={(e) => {
						setIsFocused(true);
						setTimeout(() => {
							window.scrollTo({
								top: 0,
								behavior: "smooth",
							});
						}, 300);

						// document.body.scrollTop = document.documentElement.scrollTop = 0;
						// document.body.scrollTop = 0;
					}}
					onBlur={(e) => setIsFocused(false)}
					ref={inputRef}
					autoCorrect="off"
					className="h-14 pl-5 rounded-l-2xl md:w-full focus:outline-0"
					placeholder="Enter..."
					value={answer}
					onChange={(e) =>
						//TODO: Make function to make this reusable if (type === "katakana")
						setAnswer(toHiragana(e.target.value, { IMEMode: true }))
					}
				/>
				<button className="rounded-r-2xl bg-[#7C6E9C] w-full hover:opacity-50">
					Submit
				</button>
			</form>
		</div>
	);
}
//BUGS
//remaining seems off by 1
//ONLY failed and refresh doesn't save local storage -- not fetching when no romajiToKatakana
//on refresh, incorrectMap is reset on first incorrect answer
//test failed are not removed from romjaiToKatakana >> cause error with failed number? -- doesn't seem to cause issues ROBUST! lower test count and test again if needed

export default KataWordCard;

//TODO: Modes where to add, new page or input selector? new page>>
// Create functions in katakana.js and new files like hiragana.js to make Card.jsx re-usable
//Scratch that, just make routes 100% unique by renaming Card.jsx to Katacard.jsx and copying to Hiracard.jsx

//Researching proper way to do routes, need to learn layouts for each route
//Manually update map for RTK and make opposite for Hiragana mode
//add compound mode
//add most popular words mode
