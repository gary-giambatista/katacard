/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		fontFamily: {
			PaytoneOne: ["Paytone One", "sans-serif"],
		},
		animation: {
			text: "text 1s ease infinite",
		},
		keyframes: {
			text: {
				"0%": {
					"background-size": "200% 200%",
					"background-position": "top center",
				},
				"100%": {
					"background-size": "100% 100%",
					"background-position": "bottom center",
				},
			},
		},
	},
	plugins: [],
};
