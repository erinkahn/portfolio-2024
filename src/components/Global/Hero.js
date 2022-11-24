import React, {useRef} from "react";
import useScrollPos from '../../hooks/useScrollPos';
import Prallax from "react-rellax";

export default function Hero(props) {
	const scrollPos = useScrollPos();
	const heroRef = useRef();

	const scrollToSection = () => {
		const heroHeight = heroRef.current.getBoundingClientRect().height;
		if(scrollPos[1] < heroHeight) {
			window.scrollBy(0, heroHeight)
		};
	}

	return (
		<div
			role="banner"
			ref={heroRef}
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
