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
		},
		fontFamily: {
			sans: ["Roboto", "sans-serif"],
		},
	},
	plugins: [],
};
