import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeToggler() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<button tabIndex="0" className={`themeBtn ${theme}`} onClick={toggleTheme}>
			<span className="sr-only">
				change theme to {theme === "dark" ? "light" : "dark"}
			</span>
		</button>
	);
}
