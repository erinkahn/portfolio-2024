import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import RotatedCopyright from "./RotatedCopyright";

interface ShellProps {
	children: ReactNode;
}

export default function Shell({ children }: ShellProps) {
	return (
		<div className="shell">
			<div id="skip">
				<a href="#maincontent">Skip to main content</a>
			</div>

			<Sidebar />

			<main id="maincontent" role="main">
				{children}
			</main>

			<RotatedCopyright />
		</div>
	);
}
