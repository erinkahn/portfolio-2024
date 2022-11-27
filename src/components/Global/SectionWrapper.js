import React from "react";

export default function SectionWrapper(props) {
	return (
		<div
			className={`section-wrapper`}
			role="region"
			// aria-label={props.children._owner.elementType.name}
		>
			{props.children}
		</div>
	);
}
