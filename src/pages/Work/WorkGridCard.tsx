import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { WorkProject } from "../../constants/data";
import { slugify } from "../../utils/slugify";

interface WorkGridCardProps {
	project: WorkProject;
}

const WorkGridCard = forwardRef<HTMLAnchorElement, WorkGridCardProps>(
	function WorkGridCard({ project }, ref) {
		return (
			<motion.li
				className="work-grid-card"
				layout
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.35, ease: "easeOut" }}
			>
				<Link to={`/work/${slugify(project.title)}`} ref={ref}>
					<span
						className="card-image"
						style={{ backgroundImage: `url(${project.img})` }}
					/>
					<span className="card-tags">{project.tags.join(", ")}</span>
					<span className="card-title">{project.title}</span>
				</Link>
			</motion.li>
		);
	}
);

export default WorkGridCard;
