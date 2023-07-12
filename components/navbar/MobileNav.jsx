"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function MobileNav() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname(); //"/" or "/words"

	return (
		<div className="">
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
				className={`fixed z-50 h-screen bg-[#1A1938] text-white border-l-8 rounded-lg transform transition-all right-0 ${
					isOpen ? "opacity-100 w-52" : "translate-x-20 opacity-0 mr-20 w-0"
				}`}
			>
				{/* translate-x-10 */}
				<div
					className={`flex flex-col ml-5 mt-3 gap-2 text-2xl ${
						isOpen ? "opacity-100" : "opacity-0 w-0"
					}`}
				>
					<Link
						className={`${
							pathname === "/"
								? "underline decoration-4 decoration-red-500"
								: ""
						}`}
						href="/"
						onClick={() =>
							setTimeout(() => {
								setIsOpen(!isOpen);
							}, 100)
						}
					>
						Katakana
					</Link>
					<Link
						className={`${
							pathname === "/words"
								? "underline decoration-4 decoration-red-500"
								: ""
						}`}
						href="/words"
						onClick={() =>
							setTimeout(() => {
								setIsOpen(!isOpen);
							}, 100)
						}
					>
						Words
					</Link>
				</div>
			</div>
		</div>
	);
}

export default MobileNav;
