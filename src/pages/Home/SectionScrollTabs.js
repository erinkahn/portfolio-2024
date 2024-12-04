import React, { useState, useRef, useEffect, useCallback } from "react";

export default function SectionScrollTabs({ sections }) {
	const [isActive, setIsActive] = useState(0);
	const ref = useRef(null);

	const scrollToSection = (e) => {
		e.preventDefault();
		const idAttribute = e.currentTarget.getAttribute("aria-label");
		const str = "Navigate to section ";
		const strippedAttribute = idAttribute.replace(str, "");
		const sectionId = document.querySelector(`#${strippedAttribute}`);
		if (sectionId) {
			sectionId.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleScroll = useCallback(() => {
		let newActiveIndex = 0;
		let minDistance = Infinity;

		sections.forEach((section, index) => {
			const sectionElement = document.getElementById(section.id); // Corrected line
			console.log(sectionElement, section.id); // Added section.id for debugging
			if (sectionElement) {
				const rect = sectionElement.getBoundingClientRect();
				const distance = Math.abs(rect.top); //Distance from top of viewport

				if (distance < minDistance) {
					minDistance = distance;
					newActiveIndex = index;
				}
			}
		});
		setIsActive(newActiveIndex);
	}, [sections]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll, sections]);

	return (
		<aside ref={ref} className="sectionScrollTabs">
			{sections.map((section, s) => (
				<button
					id={s}
					key={`sectionTab-${s}`}
					className={`${isActive === s ? "active" : ""}`}
					onClick={(e) => {
						setIsActive(s);
						scrollToSection(e);
					}}
					aria-label={`Navigate to section ${section.id}`}
					aria-controls={`${section.title}`}
					aria-current={s === isActive ? true : false}
				>
					{/* {s} */}
				</button>
			))}
		</aside>
	);
}
