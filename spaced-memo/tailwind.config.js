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
				tone1: "var(--color-tone1)",
				tone2: "var(--color-tone2)",
				tone3: "var(--color-tone3)",
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
					muted: "var(--color-text-muted)",
				},
			},
			backgroundColor: {
				skin: {
					main: "var(--color-background-main)",
					support: "var(--color-background-support)",
					muted: "var(--color-background-muted)",
				},
			},
		},
	},
	plugins: [],
}
