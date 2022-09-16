import React from "react";
import Prallax from "react-rellax";
// import { isWebpSupported } from "react-image-webp/dist/utils";

export default function Hero(props) {
	return (
		<div
			role="banner"
			className="hero-container"
			// style={
			// 	isWebpSupported()
			// 		? { backgroundImage: `url(${props.image})` }
			// 		: { backgroundImage: `url(${props.fallback})` }
			// }
		>
			<Prallax speed={6} className="text-box-container">
				<div className="text-wrapper">
					<h1 className="hero-title">{props.title}</h1>
					<p className="hero-subtitle">{props.subtitle}</p>
				</div>
			</Prallax>
		</div>
	);
}
