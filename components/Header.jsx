import React from "react";

function Header() {
	return (
		<div className="flex w-full items-center px-5 justify-center md:justify-between h-16 border-b-2 drop-shadow-md bg-[#1A1938]">
			<h1 className="text-3xl text-gray-50">Katacard</h1>
			<div>{/* <button>Sign In</button> */}</div>
		</div>
	);
}

export default Header;
