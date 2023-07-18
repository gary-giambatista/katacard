import Header from "@/components/navbar/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Katacard",
	description: "Katakana flashcards made easy",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header className="relative z-50">
					<Header />
				</header>
				{children}
				<footer>
					<div className="fixed bottom-1 left-1/2 -translate-x-1/2 text-black text-md">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="//www.gary-giambatista.com"
							className="tracking-widest"
						>
							Author
						</a>
					</div>
				</footer>
			</body>
		</html>
	);
}
