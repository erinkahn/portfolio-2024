import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import Seo from "../../components/Seo";

export default function NotFound() {
	return (
		<m.div
			initial={{ opacity: 0, y: 8 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -8 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<Seo title="Erin Kahn | 404" url="https://erin-kahn.com/404" />

			<div className="not-found">
				<h1>404</h1>
				<p>Oops...try again</p>
				<Link to="/">Back to Work</Link>
			</div>
		</m.div>
	);
}
