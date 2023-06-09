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
			</body>
		</html>
	);
}
