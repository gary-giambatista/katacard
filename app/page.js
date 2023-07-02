import Card from "@/components/Card";
import Header from "@/components/Header";

export default function Home() {
	return (
		<div className="flex flex-col items-center h-[100vh] bg-[#1d2642]">
			<Header />
			<Card />
		</div>
	);
}
