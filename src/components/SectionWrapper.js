export default function SectionWrapper(props) {
	return (
		<section
			className="section-wrapper"
			role="tabpanel" aria-labelledby={props.id}
			// aria-label={props.children._owner.elementType.name}
		>
			{props.children}
		</section>
	);
}
