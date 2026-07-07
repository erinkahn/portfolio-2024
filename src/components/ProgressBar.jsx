import { useState, useEffect } from "react";

export default function ProgressBar() {
	const [scrolled, setScrolled] = useState(0);

	const handleProgressBar = (e) => {
		const scrollContainer = document.querySelector(".page-wrapper") || document.documentElement;
		const totalScroll = scrollContainer.scrollTop;
		const windowHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
		const scroll = `${totalScroll / windowHeight}`;
		setScrolled(scroll);
		document.documentElement.style.setProperty("--scroll", scroll);
	};

	useEffect(() => {
		const scrollContainer = document.querySelector(".page-wrapper") || window;
		scrollContainer.addEventListener("scroll", handleProgressBar);

		return () => {
			scrollContainer.removeEventListener("scroll", handleProgressBar);
		};
	}, [scrolled]);

	return (
		<div className={`scroll-tracker ${scrolled > 0 ? "scrolled" : ""}`}></div>
	);
}
