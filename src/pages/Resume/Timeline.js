import { motion } from "framer-motion";
import SectionWrapper from "../../components/SectionWrapper";
import { timelineData } from "../../constants/data";

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
					{timelineData.years.map((entry, index) => (
						<motion.li
							key={index}
							className="timeline-item"
							variants={itemVariants}
						>
							<h2 className="timeline-year">{entry.year}</h2>

							{entry.url ? (
								<a
									className="timeline-link"
									href={entry.url}
									target="_blank"
									rel="noreferrer"
								>
									<p className="timeline-company">
										<strong>{entry.company}</strong>
									</p>
								</a>
							) : (
								<p className="timeline-company">
									<strong>{entry.company}</strong>
								</p>
							)}

							<p className="timeline-title">
								<em>{entry.position}</em>
							</p>
							<p className="timeline-summary">{entry.summary}</p>

							{entry.tools && (
								<p className="timeline-tools">
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
