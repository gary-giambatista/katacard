import KatacardLogo from "@/public/katacard-logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
	return (
		<div className="flex w-full items-center px-5 justify-center md:justify-start h-16 border-b-2 drop-shadow-md bg-[#1A1938] font-PaytoneOne">
			<Image
				src={KatacardLogo}
				height="40"
				width="auto"
				alt="Katacard logo"
				quality={100}
			/>
			<h1 className="text-3xl text-gray-50">Katacard</h1>
			{/* <div><Link href=""></Link></div> */}
		</div>
	);
}

export default Header;
