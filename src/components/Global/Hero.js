import Prallax from "react-rellax";

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
					<h1 className="hero-title">{props.title}</h1>
					<p className="hero-subtitle">{props.subtitle}</p>
				</div>
			</Prallax>

			<button className="btn-scroll" onClick={scrollToSection}>
				<span className="sr-only">scroll to next section</span>
			</button>
		</div>
	);
}
