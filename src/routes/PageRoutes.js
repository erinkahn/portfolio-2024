import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/index"));
const Work = lazy(() => import("../pages/Work/index"));
const Resume = lazy(() => import("../pages/Resume/index"));
const NotFound = lazy(() => import("../pages/404/index"));

export default function PageRoutes() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/work" element={<Work />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</Suspense>
	);
}
