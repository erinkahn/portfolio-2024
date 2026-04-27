export default function SectionWrapper(props) {
	return (
		<section
			className="section-wrapper"
			role="tabpanel"
			aria-labelledby={props.id}
			sectionid={props.sectionid}
		>
			{props.children}
		</section>
	);
}
