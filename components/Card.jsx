"use client";

import { useEffect, useState } from "react";
import {
	checkAnswer,
	correct,
	incorrect,
	testChar,
	updateMapOld,
	updateOldCorrect,
	updateOldIncorrect,
} from "../library/katakana.js";

function Card() {
	const [answer, setAnswer] = useState("");
	const [test, setTest] = useState("");
	const [correctAnswers, setCorrectAnswers] = useState(correct);
	const [incorrectAnswers, setIncorrectAnswers] = useState(incorrect);

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
		}
	}, []);

	useEffect(() => {
		console.log("USE EFFECT");
		setTest(testChar);
		setCorrectAnswers(correct);
		setIncorrectAnswers(incorrect);
	}, [testChar, correct, incorrect]);

	return (
		<div className="flex flex-col w-full max-w-xs md:max-w-3xl md:max-h-2xl mt-[5vw] h-[80vh] justify-between">
			<div className="flex justify-center items-center w-full h-[80%] bg-[#2E204F] text-gray-50 drop-shadow-lg rounded-2xl">
				<h1 className="text-9xl">{test}</h1>
			</div>
			<div className="flex justify-evenly">
				<div className="text-green-600">{correctAnswers}</div>
				<div className="text-red-600">{incorrectAnswers}</div>
			</div>
			<form
				className="flex"
				onSubmit={(event) => {
					event.preventDefault();
					checkAnswer(answer, event);
					//using useEffect instead of below
					// setTest(testChar);
					// setCorrectAnswers(correct);
					setAnswer("");
				}}
			>
				<input
					className="h-14 pl-5 rounded-l-2xl md:w-full focus:outline-0"
					placeholder="Enter..."
					value={answer}
					onChange={(e) => setAnswer(e.target.value)}
				/>
				<button className="rounded-r-2xl bg-slate-700 w-full hover:opacity-50">
					Submit
				</button>
			</form>
		</div>
	);
}
//Add reset button & Remaining: reset button can call localStorage.clear(), and make sure to check length of the new romajiToKatakana (a copy may be needed), also that length will be used to calculate remaining
export default Card;
