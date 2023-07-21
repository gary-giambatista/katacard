import Hiracard from "@/components/cards/Hiracard";
import React from "react";

export const metadata = {
	title: "Hiragana",
	description: "Hiragana flashcards made easy",
};

function HiraganaRoute() {
	return (
		<div className="flex flex-col items-center h-[100vh] bg-[#1d2642]">
			<Hiracard />
		</div>
	);
}

export default HiraganaRoute;
