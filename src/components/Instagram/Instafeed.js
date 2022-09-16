import React, {lazy, Suspense} from 'react';
import { instaData } from '../../constants/data';
const InstaPost = lazy(() => import('./InstaPost'));


export default function Instafeed() {
    return (<>
        <div className="instagram-container">
            <ul className="instagram-grid">
                <Suspense fallback={<div>Loading posts...</div>}>
                    <InstaPost instaProp={instaData}/>
                </Suspense>
            </ul>
        </div>
    </>)
}