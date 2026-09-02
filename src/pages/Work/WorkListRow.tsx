import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { WorkProject } from "../../constants/data";
import { slugify } from "../../utils/slugify";

interface WorkListRowProps {
	project: WorkProject;
}

export default function WorkListRow({ project }: WorkListRowProps) {
	return (
		<motion.li
			className="work-list-row"
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.35, ease: "easeOut" }}
		>
			<Link to={`/work/${slugify(project.title)}`}>
				<span className="row-title">{project.title}</span>
				<span className="row-tags">{project.tags.join(", ")}</span>
			</Link>
		</motion.li>
	);
}
