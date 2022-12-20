export default function SectionWrapper(props) {
	return (
		<div
			className={`section-wrapper section`}
			role="region tabpanel" aria-labelledby={props.id} 
			// aria-label={props.children._owner.elementType.name}
		>
			{props.children}
		</div>
	);
}
