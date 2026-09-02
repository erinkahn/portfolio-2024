import { useLayoutEffect } from "react";
import {
	Routes,
	Route,
	Navigate,
	useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Shell from "../components/Shell";
import Work from "../pages/Work";
import CaseStudy from "../pages/Work/CaseStudy";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/404";

function ScrollToTop() {
	const { pathname } = useLocation();

	// useLayoutEffect so scroll happens after DOM updates but before paint
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

export default function PageRoutes() {
	const location = useLocation();

	return (
		<Shell>
			<ScrollToTop />
			<AnimatePresence mode="wait" initial={false}>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Work />} />
					<Route path="/work/:slug" element={<CaseStudy />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/404" element={<NotFound />} />
					<Route path="*" element={<Navigate to="/404" />} />
				</Routes>
			</AnimatePresence>
		</Shell>
	);
}
