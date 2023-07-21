"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function DesktopNav() {
	const pathname = usePathname(); //"/" or "/words"

	return (
		<div className="hidden sm:flex gap-4 ml-auto text-white text-xl">
			<Link
				className={`${
					pathname === "/" ? "underline decoration-4 decoration-[#7c6e9c]" : ""
				}`}
				href="/"
			>
				Katakana
			</Link>
			<Link
				className={`${
					pathname === "/words"
						? "underline decoration-4 decoration-[#7c6e9c]"
						: ""
				}`}
				href="/words"
			>
				Words
			</Link>
			<Link
				className={`${
					pathname === "/hiragana"
						? "underline decoration-4 decoration-[#7c6e9c]"
						: ""
				}`}
				href="/hiragana"
			>
				Hiragana
			</Link>
		</div>
	);
}

export default DesktopNav;
