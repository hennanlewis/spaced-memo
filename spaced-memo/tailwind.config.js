/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)"
			},
			fontFamily: {
				signika: ["var(--font-signika)"],
			},
			screens: {
				xs: "360px",
				sm: "480px",
			},
			textColor: {
				skin: {
					main: "var(--color-text-main)",
					support: "var(--color-text-support)",
				},
			},
			backgroundColor: {
				skin: {
					main: "var(--color-background-main)",
					support: "var(--color-background-support)",
				},
			},
		},
	},
	plugins: [],
}
