/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"black-light": "#414141",
				"black-lighter": "#6D6D6D",
				"dark-gray": "#8F8F8F",
				gray: "#ACACAC",
				blue: "#374885",
			},
		},
	},
	plugins: [],
};
