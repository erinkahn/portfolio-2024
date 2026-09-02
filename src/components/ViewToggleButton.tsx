export type ViewMode = "grid" | "list";

interface ViewToggleButtonProps {
	viewMode: ViewMode;
	onToggle: () => void;
}

function ListIcon() {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="2" />
			<line
				x1="4"
				y1="12"
				x2="20"
				y2="12"
				stroke="currentColor"
				strokeWidth="2"
			/>
			<line
				x1="4"
				y1="18"
				x2="20"
				y2="18"
				stroke="currentColor"
				strokeWidth="2"
			/>
		</svg>
	);
}

function GridIcon() {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<rect x="4" y="4" width="7" height="7" rx="1" fill="currentColor" />
			<rect x="13" y="4" width="7" height="7" rx="1" fill="currentColor" />
			<rect x="4" y="13" width="7" height="7" rx="1" fill="currentColor" />
			<rect x="13" y="13" width="7" height="7" rx="1" fill="currentColor" />
		</svg>
	);
}

export default function ViewToggleButton({
	viewMode,
	onToggle,
}: ViewToggleButtonProps) {
	const showGridIcon = viewMode === "list";
	const label = showGridIcon ? "Switch to grid view" : "Switch to list view";

	return (
		<button
			type="button"
			className="view-toggle-btn"
			onClick={onToggle}
			aria-label={label}
		>
			{showGridIcon ? <GridIcon /> : <ListIcon />}
		</button>
	);
}
