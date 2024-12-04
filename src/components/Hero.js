import { useState, useEffect } from "react";

export default function Hero(props) {
	const scrollToSection = () => {
		document
			.querySelector("#maincontent")
			.scrollIntoView({ behavior: "smooth" });
	};

	const [offsetY, setOffsetY] = useState(0);
	const handleScroll = () => setOffsetY(window.pageYOffset);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section
			className="hero-container"
			id="hero"
			sectionid="0"
			role="tabpanel"
			style={{ minheight: "100vh" }}
		>
			<div
				className="text-box-container"
				style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
			>
				<div className="text-wrapper">
					<h1 className="hero-title">{props.title}</h1>
					<p className="hero-subtitle">{props.subtitle}</p>
				</div>
			</div>

			{props.scrollBtn === true && (
				<button onClick={scrollToSection} className="btn-scroll">
					<span className="sr-only">scroll to next section</span>
				</button>
			)}
		</section>
	);
}
