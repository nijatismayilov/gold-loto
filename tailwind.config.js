const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"src/pages/**/*.{js,jsx,ts,tsx}",
		"src/components/**/*.{js,jsx,ts,tsx}",
		"src/utils/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		screens: {
			xs: "475px",
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				primary: "#764A34",
				accent: "#FFFAEF",
			},
			backgroundImage: {
				1: "url('/bg-1.png')",
				2: "url('/bg-2.png')",
				3: "url('/bg-3.png')",
				4: "url('/bg-4.png')",
			},
		},
		fontFamily: {
			sans: ["Roboto", "sans-serif"],
		},
	},
	plugins: [],
};
