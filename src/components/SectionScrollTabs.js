import {useState} from 'react';
import {sections} from './../constants/data';

export default function SectionScrollTabs() {
    const [isActive, setIsActive] = useState(0);

    const changeActiveTab = (e, s) => {
        if(e.currentTarget.className !== 'active') {
            setIsActive(s)
        } else {
            return
        }
    }

    const scrollToSection = (e) => {         
        e.preventDefault()
        const idAttribute = e.currentTarget.getAttribute('id');
        const sectionId = document.querySelectorAll(`#${idAttribute}`)[1];
        sectionId.scrollIntoView({behavior: "smooth"});
   
    }

    return (
        <span className="sectionNavTabs">
            {sections.homepage.map((section, s) => (
                <button 
                    key={`sectionTab-${s}`}
                    role="tab"
                    slideindex={section.num}
                    id={`${section.id}`}
                    className={`${isActive === section.num ? 'active' : ''}`}
                    onClick={(e) => {
                        changeActiveTab(e, s)
                        scrollToSection(e);
                    }}
                    aria-label={`Navigate to section ${section.id}`}
                    aria-controls={`${section.title}-tab`}
                    aria-selected={s === isActive ? true : false}
                ></button>
            ))}
        </span>
    )
}