export default function FilteredProject(props) {
    return (
        <>
            {props.filteredProjectProp.projects.filter(
                (project) => project.show === props.stateProp.active).map(
                    (filteredWebsite) => (
                        <li 
                        key={`item-${filteredWebsite.id}`} 
                        aria-labelledby={filteredWebsite.type}
                        role="tabpanel" 
                        >
                            <a tabIndex="0" href={filteredWebsite.url} target="_blank" rel="noreferrer">
                                {filteredWebsite.title}
                            </a>
                        </li>
                    )
                )
            }
        </>
    )
}