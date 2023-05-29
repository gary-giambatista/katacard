import React from "react";

function Card() {
	return (
		<div className="flex flex-col w-full max-w-xs md:max-w-3xl md:max-h-3xl mt-[10vw] h-[80vh] justify-between">
			<div className="flex justify-center items-center w-full h-[80%] bg-[#2E204F] text-gray-50 drop-shadow-lg rounded-2xl">
				<h1 className="text-9xl">カ</h1>
			</div>
			<input className="h-14 pl-5 w-full rounded-2xl" placeholder="Enter..." />
		</div>
	);
}

export default Card;
