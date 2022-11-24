import React, {useContext} from "react";
import { Link} from "react-router-dom";
import { ThemeContext } from "../../contexts/Theme/ThemeContext";
import ThemeToggler from "../../contexts/Theme/ThemeToggler";
import Navigation from "./Navigation";
import ProgressBar from "./ProgressBar";
import Weather from "../Weather";

export default function Header(props) {
	console.log(props, 'props')
	const themeName = useContext(ThemeContext);

	return (
		<header ref={props.forwardedRef}>
			<Link className="logo-wrapper" to="/">
				<img
					src={"/images/header/logo-" + `${themeName.theme}` + ".svg"}
					style={{ width: "3em", height: "3em" }}
					alt="erin kahn home"
					className="logo"
				/>
			</Link>

			<Navigation />

			<ThemeToggler />

			<Weather />

			<ProgressBar />
		</header>
	);
}
