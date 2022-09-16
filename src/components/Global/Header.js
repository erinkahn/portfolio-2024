import { Link } from "react-router-dom";
import ThemeToggler from "../../contexts/Theme/ThemeToggler";
import Navigation from "../Navigation";
import ProgressBar from "./ProgressBar";
import Weather from "../Weather";

export default function Header(props) {
	return (
		<header ref={props.forwardedRef}>
			<Link className="logo-wrapper" to="/">
				<img
					src="/images/header/logo.svg"
					style={{ width: "3em", height: "3em" }}
					alt="erin smith home"
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
