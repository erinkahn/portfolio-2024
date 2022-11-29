import Prallax from "react-rellax";
import { heroData } from "../../constants/data";

export default function Hero(props) {
	const scrollToSection = (props) => {
		props.current.scrollIntoView({
			behavior: "smooth"
		})
	}

	return (
		<div	
			role="banner"
			className="hero-container"
		>
			<Prallax speed={6} className="text-box-container">
				<div className="text-wrapper">
					<h1 className="hero-title">{heroData.home.title}</h1>
					<p className="hero-subtitle">{heroData.home.subtitle}</p>
				</div>
			</Prallax>

			<button className="btn-scroll" onClick={scrollToSection}>
				<span className="sr-only">scroll to next section</span>
			</button>
		</div>
	);
}
