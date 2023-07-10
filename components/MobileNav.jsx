"use client";
import Link from "next/link";
import React, { useState } from "react";

function MobileNav() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative  ">
			{isOpen ? (
				<div
					onClick={() => setIsOpen(!isOpen)}
					className="text-white text-2xl "
				>
					X
				</div>
			) : (
				<svg
					onClick={() => setIsOpen(!isOpen)}
					viewBox="0 0 100 80"
					width="20"
					height="20"
					fill="#fff"
				>
					<rect width="100" height="20" rx="8"></rect>
					<rect y="30" width="100" height="20" rx="8"></rect>
					<rect y="60" width="100" height="20" rx="8"></rect>
				</svg>
			)}
			<div
				className={`fixed z-50 w-52 h-screen bg-slate-500 ${
					isOpen
						? "right-0 transition duration-200 ease-in-out"
						: "-right-60 hidden"
				}`}
			>
				<div className="flex flex-col">
					<Link href="/">Regular</Link>
					<Link href="/words">Words</Link>
				</div>
			</div>
		</div>
	);
}
//need to add class to change x size
export default MobileNav;
