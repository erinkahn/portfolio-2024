import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/index"));
const Work = lazy(() => import("../pages/Work/index"));
const Resume = lazy(() => import("../pages/Resume/index"));
const Blog = lazy(() => import("../pages/Blog/index"));
const NotFound = lazy(() => import("../pages/404/index"));

export default function PageRoutes() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/work" element={<Work />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</Suspense>
	);
}
