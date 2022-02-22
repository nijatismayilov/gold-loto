const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	content: ["src/**/*.{js,jsx,ts,tsx}"],
	safelist: [{ pattern: /bg-/ }],
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
