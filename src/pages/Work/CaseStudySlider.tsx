import { useState } from "react";

interface SlideImage {
	img: string;
	alt: string;
}

function ChevronLeftIcon() {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path
				d="M15 5L8 12L15 19"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function ChevronRightIcon() {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path
				d="M9 5L16 12L9 19"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

interface CaseStudySliderProps {
	images: SlideImage[];
}

export default function CaseStudySlider({ images }: CaseStudySliderProps) {
	const [active, setActive] = useState(0);
	const hasMultiple = images.length > 1;

	const goTo = (index: number) => {
		setActive((index + images.length) % images.length);
	};

	return (
		<div className="case-study-slider">
			<div className="case-study-image">
				<ul className="case-study-slides">
					{images.map((image, i) => (
						<li key={image.img} className={i === active ? "active" : ""}>
							<img src={image.img} alt={image.alt} />
						</li>
					))}
				</ul>

				{hasMultiple && (
					<>
						<button
							type="button"
							className="slide-arrow prev"
							aria-label="Previous image"
							onClick={() => goTo(active - 1)}
						>
							<ChevronLeftIcon />
						</button>
						<button
							type="button"
							className="slide-arrow next"
							aria-label="Next image"
							onClick={() => goTo(active + 1)}
						>
							<ChevronRightIcon />
						</button>
					</>
				)}
			</div>

			{hasMultiple && (
				<div className="pager-btns-container" role="tablist">
					{images.map((image, i) => (
						<button
							key={image.img}
							type="button"
							className={`pager-btn ${i === active ? "active" : ""}`}
							aria-label={`Show image ${i + 1}`}
							aria-current={i === active}
							role="tab"
							onClick={() => goTo(i)}
						/>
					))}
				</div>
			)}
		</div>
	);
}
