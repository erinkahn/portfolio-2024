import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider(props) {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		if (theme === "dark") {
			setTheme("light");
			window.localStorage.setItem("theme", "light");
		} else {
			setTheme("dark");
			window.localStorage.setItem("theme", "dark");
		}
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem("theme");

		localTheme
			? setTheme(localTheme)
			: window.localStorage.setItem("theme", "light");
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
}
