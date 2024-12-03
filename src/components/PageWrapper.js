import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "./../contexts/Theme/ThemeContext";

export default function PageWrapper(props) {
	const themeName = useContext(ThemeContext);
	const location = useLocation();
	const pageName = location.pathname.replace(/\//g, "").toLowerCase();

	return (
		<div
			className={`page-wrapper theme-${themeName.theme} ${
				pageName === "" ? "home" : pageName
			}`}
		>
			<div id="skip">
				<a href="#maincontent">Skip to main content</a>
			</div>
			<div className="inside-wrapper">{props.children}</div>
		</div>
	);
}
