import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Resume = lazy(() => import('../pages/Resume'));
const Contact = lazy(() => import('../pages/Contact'));

export default function PageRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>        
                <Route exact path='/'
                    element={<Home/>}>
                </Route>
                <Route exact path='/about'
                    element={<About/>}>
                </Route>
                <Route exact path='/resume'
                    element={<Resume/>}>
                </Route>
                <Route exact path='/contact'
                    element={<Contact/>}>
                </Route>
            </Routes>
        </Suspense>
    )
}