import {useState} from 'react';
import {sections} from '../../constants/data';

export default function SectionScrollTabs() {
    const [isActive, setIsActive] = useState(0);

    return (
        <span className="sectionNavTabs">
            {sections.homepage.map((section, s) => (
                <a 
                    href={section.id}
                    key={`sectionTab-${s}`}
                    role="tab"
                    id={`${section.id}`}
                    className={`${isActive === section.num ? 'active' : ''}`}
                    onClick={(e) => {
                        e.preventDefault()
            
                        // console.log(e.target, 'btn target')
                        
                        const sectionTop = document.querySelector(`.section #${e.target.id}`);
                        console.log(sectionTop, 'section')

                        //fix this scroll amount
                        window.scrollTo(0, sectionTop.getBoundingClientRect().top);

                        setIsActive(s)
                       
                    }}
                    aria-label={`Navigate to section ${section.id}`}
                    aria-controls={`${section.title}-tab`}
                    aria-selected={s === isActive ? true : false}
                ></a>
            ))}
        </span>
    )
}