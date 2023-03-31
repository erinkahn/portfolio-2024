import {useState} from 'react';

export default function ProjectModal(props) {
    // const [activeThumb, setActiveThumb] = useState(1);

    // const expandThumbnail = (e) => {
    //     console.log(e.currentTarget.parentNode.getAttribute('id'))
    //     if (e.currentTarget.parentElement.classList.contains('active-thumb')) {
    //         e.currentTarget.parentElement.classList.remove('active-thumb')
    //     } else {
    //         e.currentTarget.parentElement.classList.add('active-thumb')
    //     }
    // }



    return (
        <div className="project-modal">
            <div className="inner-wrapper">
                <button 
                    className="close-btn" 
                    onClick={props.closeModal}
                    aria-label="Close Modal"
                >
                    <span className="sr-only">Close Modal</span>
                </button>
                
            </div>
        </div>
    )
}