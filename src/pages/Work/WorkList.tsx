import { AnimatePresence } from "framer-motion";
import type { WorkProject } from "../../constants/data";
import WorkListRow from "./WorkListRow";

interface WorkListProps {
	projects: WorkProject[];
}

export default function WorkList({ projects }: WorkListProps) {
	return (
		<ul className="work-list">
			<AnimatePresence initial={false}>
				{projects.map((project) => (
					<WorkListRow key={project.id} project={project} />
				))}
			</AnimatePresence>
		</ul>
	);
}
