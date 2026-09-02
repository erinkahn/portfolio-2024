import { useLocation } from "react-router-dom";
import { navData } from "../constants/data";

const iconOrder = ["instagram", "github", "linkedin"];

export default function RotatedCopyright() {
	const year = new Date().getFullYear();
	const { pathname } = useLocation();
	const showSocial = pathname === "/contact";

	const icons = iconOrder
		.map((siteName) =>
			navData.socialIcons.find((icon) => icon.siteName === siteName)
		)
		.filter((icon): icon is NonNullable<typeof icon> => Boolean(icon));

	return (
		<div className="side-column">
			{showSocial && (
				<ul className="social-links">
					{icons.map((icon) => (
						<li key={icon.id}>
							<a
								className={`social-icon ${icon.siteName}`}
								href={icon.url}
								target="_blank"
								rel="noreferrer"
							>
								<span className="sr-only">{icon.siteName}</span>
							</a>
						</li>
					))}
				</ul>
			)}

			<p className="rotated-copyright">Erin Kahn Copyright {year}</p>
		</div>
	);
}
