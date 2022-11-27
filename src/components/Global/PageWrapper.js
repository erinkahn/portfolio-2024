import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme/ThemeContext";

export default function PageWrapper(props) {
	let themeName = useContext(ThemeContext);

	return (
		<div className={`page-wrapper theme-${themeName.theme}`}>
			<div id="skip">
				<a href="#maincontent">Skip to main content</a>
			</div>
			<div className="inside-wrapper">
				{props.children}
			</div>
		</div>
	);
}
