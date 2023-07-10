import KatacardLogo from "@/public/katacard-logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";

function Header() {
	return (
		<nav className="flex w-full items-center px-5 justify-center md:justify-between h-16 border-b-2 drop-shadow-md bg-[#1A1938] font-PaytoneOne">
			<Link className="flex ml-auto sm:ml-0" href="/">
				<Image
					src={KatacardLogo}
					height="40"
					width="auto"
					alt="Katacard logo"
					quality={100}
				/>
				<h1 className="text-3xl text-gray-50">Katacard</h1>
			</Link>

			{/* <div><Link href=""></Link></div> */}
			{/* Add Routes for Words and Compound Sounds here */}
			<Link className=" ml-auto text-white" href="/words">
				Words
			</Link>
			{/* hidden sm:block */}
			{/* <div className="sm:hidden ml-auto">
				<MobileNav />
			</div> */}
		</nav>
	);
}

export default Header;

//Keep Header.jsx a server component strat
//Wrap <MobileNav /> in current <div className="sm:hidden ml-auto">
//<MobileNav /> keeps state for isOpen
