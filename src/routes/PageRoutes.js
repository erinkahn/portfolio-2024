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
				<Route exact path="/" element={<Home />} />
				<Route exact path="/work" element={<Work />} />
				<Route exact path="/resume" element={<Resume />} />
				<Route exact path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate replace to="/404" />} />
			</Routes>
		</Suspense>
	);
}
