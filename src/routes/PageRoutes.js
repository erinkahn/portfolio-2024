import React, { Suspense, lazy } from 'react';
import { Routes, Route} from "react-router-dom";

const Home = lazy(() => import('../pages/Home/index'));
const Work = lazy(() => import('../pages/Work/index'));
const Resume = lazy(() => import('../pages/Resume/index'));

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