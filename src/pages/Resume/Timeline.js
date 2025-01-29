import { motion } from "framer-motion";
import SectionWrapper from "../../components/SectionWrapper";
import { timelineData } from "../../constants/data";
import { FaDownload } from "react-icons/fa";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

export default function Timeline() {
	return (
		<SectionWrapper>
			<motion.div
				className="timeline-container"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<ul className="timeline">
					<div className="intro-section">
						<h1 className="section-title">Erin Kahn</h1>
						<span className="title-download">
							<p className="title">Senior Frontend Developer</p>
							<a
								className="download"
								href="/images/ErinKahnResume.pdf"
								download
							>
								<FaDownload size={15} />
								<span>Download PDF</span>
							</a>
						</span>
					</div>
					{timelineData.years.map((entry, index) => (
						<motion.li
							key={index}
							className="timeline-item"
							variants={itemVariants}
						>
							<p className="timeline-year">{entry.year}</p>

							{entry.url ? (
								<a
									className="timeline-link"
									href={entry.url}
									target="_blank"
									rel="noreferrer"
								>
									<h2 className="timeline-company">
										<strong>{entry.company}</strong>
									</h2>
								</a>
							) : (
								<h2 className="timeline-company">
									<strong>{entry.company}</strong>
								</h2>
							)}

							<p className="timeline-title">
								<b>{entry.edu ? "Degree: " : "Role: "} </b>
								<em>{entry.position}</em>
							</p>
							<p className="timeline-summary">{entry.summary}</p>

							{entry.tools && (
								<p className="timeline-tools">
									<b> Skills</b>
									<em>{entry.tools}</em>
								</p>
							)}
						</motion.li>
					))}
				</ul>
			</motion.div>
		</SectionWrapper>
	);
}
