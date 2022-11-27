import React, {lazy, Suspense} from 'react';
import SectionWrapper from '../Global/SectionWrapper';
import { statsData } from '../../constants/data';
import StatNum from './StatNum';
const StatImage = lazy(() => import('./StatImage'));

export default function Stats() {
    return (
        <SectionWrapper>
            <div className="stats-container">
                <Suspense fallback={<div>Loading images...</div>}>
                    <StatImage statProp={statsData} />
                </Suspense>
                <ul className="stat-list">
                    <StatNum statsProp={statsData}/>
                </ul>                
            </div>
        </SectionWrapper>
    )
}