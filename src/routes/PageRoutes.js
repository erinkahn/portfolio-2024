import React, { Suspense, lazy } from 'react';
import { Routes, Route} from "react-router-dom";

const Home = lazy(() => import('../pages/Home'));
const Work = lazy(() => import('../pages/Work'));
const Resume = lazy(() => import('../pages/Resume'));

export default function PageRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>        
                <Route exact path='/'
                    element={<Home/>}>
                </Route>
                <Route exact path='/Work'
                    element={<Work/>}>
                </Route>
                <Route exact path='/Resume'
                    element={<Resume/>}>
                </Route>
            </Routes>
        </Suspense>
    )
}