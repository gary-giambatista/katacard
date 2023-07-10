import WordCard from "@/components/WordCard";
import React from "react";

export const metadata = {
	title: "Katawords",
	description: "Katakana word flashcards made easy",
};

function WordsRoute() {
	return (
		<div className="flex flex-col items-center h-[100vh] bg-[#1d2642]">
			<WordCard />
		</div>
	);
}

export default WordsRoute;
