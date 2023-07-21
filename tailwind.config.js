/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				primary: "Libre",
				sec: "Pacifico",
			},
			colors: {
				primary: "#0F060A",
				sec: "#6B5CA5",
				info: "#F8F4E3",
				success: "#F65BE3",
				success2: "#30032b",
				html: "#e34c26",
				css: "#2965f1",
				js: "#f0db4f",
				react: "#61dbfb",
				bootstrap: "#080135",
				bootstrape: "#602c50",
				sass: "#cc6699",
				git: "#f1502f",
				npm: "#cb3837",
				redux: "#764abc",
				typescript: "#007acc",
			},
		},
	},
	plugins: [],
};

