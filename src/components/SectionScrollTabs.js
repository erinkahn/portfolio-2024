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
        const idAttribute = e.currentTarget.getAttribute('aria-label');
        const str = 'Navigate to section ';
        const strippedAttribute = idAttribute.replace(str, "");
        const sectionId = document.querySelector(`#${strippedAttribute}`);
        sectionId.scrollIntoView({behavior: "smooth"});  
    }

    return (
        <aside className="sectionScrollTabs">
            {sections.homepage.map((section, s) => (
                <button 
                    key={`sectionTab-${s}`}
                    className={`${isActive === section.num ? 'active' : ''}`}
                    onClick={(e) => {
                        changeActiveTab(e, s)
                        scrollToSection(e);
                    }}
                    aria-label={`Navigate to section ${section.id}`}
                    aria-controls={`${section.title}`}
                    aria-current={s === isActive ? true : false}
                ></button>
            ))}
        </aside>
    )
}