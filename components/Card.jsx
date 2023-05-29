"use client";

import { useState } from "react";
import { checkAnswer, initializeMap } from "../library/katakana.js";

function Card() {
	const [answer, setAnswer] = useState("");

	return (
		<div className="flex flex-col w-full max-w-xs md:max-w-3xl md:max-h-2xl mt-[5vw] h-[80vh] justify-between">
			<div className="flex justify-center items-center w-full h-[80%] bg-[#2E204F] text-gray-50 drop-shadow-lg rounded-2xl">
				<h1 className="text-9xl">カ</h1>
			</div>
			<div className="flex justify-evenly">
				<div className="text-green-600">0</div>
				<div className="text-red-600">0</div>
			</div>
			<div className="flex">
				<input
					className="h-14 pl-5 rounded-l-2xl md:w-full"
					placeholder="Enter..."
					value={answer}
					onChange={(e) => setAnswer(e.target.value)}
				/>
				<button
					className="rounded-r-2xl bg-slate-700 w-full hover:opacity-50"
					onSubmit={(event) => checkAnswer(answer, event)}
				>
					Submit
				</button>
			</div>
		</div>
	);
}

export default Card;
