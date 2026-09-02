import { NavLink, useLocation } from "react-router-dom";

const navItems = [
	{ to: "/", label: "Work" },
	{ to: "/about", label: "About" },
	{ to: "/contact", label: "Contact" },
];

export default function Sidebar() {
	const { pathname } = useLocation();

	const isActive = (to: string) => {
		if (to === "/") {
			return pathname === "/" || pathname.startsWith("/work/");
		}
		return pathname === to;
	};

	return (
		<nav className="sidebar" aria-label="Primary">
			<ul className="sidebar-nav">
				{navItems.map((item) => (
					<li key={item.to}>
						<NavLink
							to={item.to}
							className={isActive(item.to) ? "active" : ""}
						>
							{item.label}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}
