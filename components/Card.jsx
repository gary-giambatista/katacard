"use client";

import { useEffect, useRef, useState } from "react";
import { toHiragana } from "wanakana";
import {
	changeMapData,
	checkAnswer,
	correct,
	count,
	incorrect,
	reset,
	resetFailed,
	testChar,
	testKey,
	updateMapOld,
	updateOldCorrect,
	updateOldIncorrect,
} from "../library/katakana.js";

function Card() {
	const [answer, setAnswer] = useState("");
	const [test, setTest] = useState("");
	const [currentCount, setCurrentCount] = useState(count);
	const [correctAnswers, setCorrectAnswers] = useState(correct);
	const [incorrectAnswers, setIncorrectAnswers] = useState(incorrect);
	const [resetTrigger, setResetTrigger] = useState(false); //required to use setResetTrigger in reset function to change page state and rerender componen
	const [hint, setHint] = useState(""); //use testKey to set onClick of Hint button >> reset to "" when submit button is clicked
	const [mode, setMode] = useState("Regular"); //Regular or Failed
	const [failedModeEnabled, setFailedModeEnabled] = useState(false);
	const inputRef = useRef(null);

	console.log(/iPhone/.test(navigator.userAgent));
	//Check for existing session from Local Storage and update global state
	useEffect(() => {
		console.log("Getting Local Storage");
		if (localStorage.getItem("romajiToKatakana")) {
			console.log("GOT Old R to K Storage");
			const oldRomajiToKatakana = JSON.parse(
				localStorage.getItem("romajiToKatakana")
			);
			//call updateMapOld to set testChar>test from shortened romaji>kata
			updateMapOld(oldRomajiToKatakana);
			if (localStorage.getItem("correct")) {
				console.log("GOT Old correct from Storage");
				const oldCorrect = JSON.parse(localStorage.getItem("correct"));
				//update global correct to local storage correct
				updateOldCorrect(oldCorrect);
			}
			if (localStorage.getItem("incorrect")) {
				console.log("GOT Old incorrect from Storage");
				const oldIncorrect = JSON.parse(localStorage.getItem("incorrect"));
				//update global incorrect to local storage incorrect
				updateOldIncorrect(oldIncorrect);
			}
			localStorage.getItem("incorrectMap")
				? setFailedModeEnabled(true)
				: setFailedModeEnabled(false);
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
		localStorage.getItem("incorrectMap")
			? setFailedModeEnabled(true)
			: setFailedModeEnabled(false);
	}, [testChar, correct, incorrect, count, resetTrigger]);

	function changeMode() {
		!failedModeEnabled
			? alert("Failed Mode requires misses ;)")
			: mode === "Regular"
			? setMode("Failed")
			: setMode("Regular");
	}
	return (
		<div className="flex flex-col w-full max-w-xs md:max-w-3xl md:max-h-2xl mt-[5vw] md:mt-[4vw] xl:mt-[2vw] h-[80vh] justify-between gap-2">
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
			<div className="relative flex justify-center items-center w-full h-[80%] bg-[#2E204F] text-gray-50 drop-shadow-lg rounded-2xl">
				<h1 className="text-9xl">{test ? test : "😁"}</h1>
				<button onClick={() => changeMode()} className="absolute left-5 top-3">
					<h5>{mode} Mode</h5>
				</button>
				<button
					onClick={() => (hint ? setHint("") : setHint(testKey))}
					className="absolute right-5 bottom-3"
				>
					<h5>{hint ? hint[0] : "Hint"}</h5>
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
					ref={inputRef}
					autoCorrect="off"
					className="h-14 pl-5 rounded-l-2xl md:w-full focus:outline-0"
					placeholder="Enter..."
					value={answer}
					onChange={(e) =>
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
//

export default Card;

//Handling IOS keyboard
//1. Check if the user's device is IOS
//2. add useRef for focus on the input
//TODO: next
//3. add a style to the card component when focus is on the input
//4. remove the style when the focus in not on the input

//Handling Android Keyboard
//1. add media query for height to adjust font of {test}

//add compound mode?
//add most popular words mode?
