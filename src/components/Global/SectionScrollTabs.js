import {useState} from 'react';
import {sections} from '../../constants/data';

export default function SectionScrollTabs() {
    const [isActive, setIsActive] = useState(0);

    return (
        <span className="sectionNavTabs">
            {sections.homepage.map((section, s) => (
                <button 
                    key={`sectionTab-${s}`}
                    role="tab"
                    id={`${section.id}`}
                    className={`${isActive === section.num ? 'active' : ''}`}
                    onClick={(e) => setIsActive(s)}
                    aria-label={`Navigate to section ${section.id}`}
                    aria-controls={`${section.title}-tab`}
                    aria-selected={s === isActive ? true : false}
                ></button>
            ))}
        </span>
    )
}