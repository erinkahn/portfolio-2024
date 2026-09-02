import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import type { WorkProject } from "../../constants/data";
import WorkGridCard from "./WorkGridCard";

interface WorkGridProps {
	projects: WorkProject[];
}

const MIN_SCALE = 0.85;

export default function WorkGrid({ projects }: WorkGridProps) {
	const containerRef = useRef<HTMLUListElement>(null);
	const cardRefs = useRef<Map<number, HTMLAnchorElement>>(new Map());
	const rafRef = useRef<number | null>(null);
	const wheelEndRef = useRef<number | null>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const updateScale = () => {
			const containerRect = container.getBoundingClientRect();
			const containerCenter = containerRect.left + containerRect.width / 2;
			const maxDistance = containerRect.width / 2 || 1;

			let closestIndex = 0;
			let closestDistance = Infinity;

			projects.forEach((project, index) => {
				const card = cardRefs.current.get(project.id);
				if (!card) return;

				const cardRect = card.getBoundingClientRect();
				const cardCenter = cardRect.left + cardRect.width / 2;
				const distance = Math.abs(cardCenter - containerCenter);
				const ratio = Math.min(distance / maxDistance, 1);
				const scale = 1 - ratio * (1 - MIN_SCALE);
				card.style.transform = `scale(${scale})`;

				if (distance < closestDistance) {
					closestDistance = distance;
					closestIndex = index;
				}
			});

			setActiveIndex((prev) => (prev === closestIndex ? prev : closestIndex));
		};

		const requestUpdate = () => {
			if (rafRef.current !== null) return;
			rafRef.current = requestAnimationFrame(() => {
				rafRef.current = null;
				updateScale();
			});
		};

		const handleWheel = (e: WheelEvent) => {
			if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
				e.preventDefault();

				// Scroll-snap fights a JS-driven scrollLeft mid-gesture, so
				// suspend it for the duration of the wheel gesture and only
				// let it settle once the gesture stops.
				container.classList.add("is-wheeling");
				if (wheelEndRef.current !== null) {
					window.clearTimeout(wheelEndRef.current);
				}
				wheelEndRef.current = window.setTimeout(() => {
					container.classList.remove("is-wheeling");
					wheelEndRef.current = null;
				}, 150);

				container.scrollLeft += e.deltaY;
			}
		};

		updateScale();

		container.addEventListener("wheel", handleWheel, { passive: false });
		container.addEventListener("scroll", requestUpdate, { passive: true });
		window.addEventListener("resize", requestUpdate);

		return () => {
			container.removeEventListener("wheel", handleWheel);
			container.removeEventListener("scroll", requestUpdate);
			window.removeEventListener("resize", requestUpdate);
			if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
			if (wheelEndRef.current !== null) window.clearTimeout(wheelEndRef.current);
		};
	}, [projects]);

	return (
		<>
			<ul className="work-grid" ref={containerRef}>
				<AnimatePresence initial={false}>
					{projects.map((project) => (
						<WorkGridCard
							key={project.id}
							project={project}
							ref={(node) => {
								if (node) cardRefs.current.set(project.id, node);
								else cardRefs.current.delete(project.id);
							}}
						/>
					))}
				</AnimatePresence>
			</ul>

			<div className="work-grid-counter" aria-hidden="true">
				{activeIndex + 1} / {projects.length}
			</div>
		</>
	);
}
