import React, { Suspense, lazy, useLayoutEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/index"));
const Work = lazy(() => import("../pages/Work/index"));
const Resume = lazy(() => import("../pages/Resume/index"));
const NotFound = lazy(() => import("../pages/404/index"));

function ScrollToTop() {
  const { pathname } = useLocation();

  // useLayoutEffect so scroll happens after DOM updates but before paint
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function PageRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Suspense>
  );
}
