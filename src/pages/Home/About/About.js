import { lazy, Suspense, useRef } from "react";
import SectionWrapper from "../../../components/SectionWrapper";
import { aboutData } from "../../../constants/data";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
const AboutImage = lazy(() => import("./AboutImage"));

export default function About() {
	const animateRef = useRef();
	const { isVisible } = useIntersectionObserver(animateRef);

	return (
		<SectionWrapper sectionid="3">
			<div className="about-container" id="about" ref={animateRef}>
				<div
					className={`col text ${
						isVisible ? "slide-in-left delay-half" : "slide-out-left"
					}`}
				>
					<h5 className="section-title">{aboutData.sectionTitle}</h5>
					<p>{aboutData.content}</p>
					<p>{aboutData.content2}</p>
				</div>
				<div className="col right">
					<div className={`image-container ${isVisible ? "animate" : ""}`}>
						<Suspense fallback={<div>Loading images...</div>}>
							<AboutImage aboutProp={aboutData.img} />
						</Suspense>
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
}
