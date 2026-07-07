import { useState, useRef, useEffect, useCallback } from "react";

export default function SectionScrollTabs({ sections }) {
	const [isActive, setIsActive] = useState(0);
	const ref = useRef(null);
	const containerRef = useRef(null);

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
		const triggerPoint = window.innerHeight * 0.3;
		let newActiveIndex = 0;

		sections.forEach((section, index) => {
			const sectionElement = document.getElementById(section.id);
			if (sectionElement) {
				const rect = sectionElement.getBoundingClientRect();
				if (rect.top <= triggerPoint) {
					newActiveIndex = index;
				}
			}
		});

		const container = containerRef.current;
		if (container) {
			const scrollTop = container === window ? window.scrollY : container.scrollTop;
			const scrollHeight =
				container === window ? document.documentElement.scrollHeight : container.scrollHeight;
			const clientHeight = container === window ? window.innerHeight : container.clientHeight;
			if (scrollTop + clientHeight >= scrollHeight - 1) {
				newActiveIndex = sections.length - 1;
			}
		}

		setIsActive(newActiveIndex);
	}, [sections]);

	useEffect(() => {
		const scrollContainer = ref.current?.closest(".page-wrapper") || window;
		containerRef.current = scrollContainer;
		scrollContainer.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => scrollContainer.removeEventListener("scroll", handleScroll);
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
