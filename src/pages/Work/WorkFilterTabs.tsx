export type WorkFilter = "dev" | "design" | "art";

interface WorkFilterTabsProps {
  active: WorkFilter;
  onChange: (filter: WorkFilter) => void;
}

const tabs: { id: WorkFilter; label: string }[] = [
  { id: "dev", label: "Dev" },
  { id: "design", label: "Design" },
  { id: "art", label: "Art" },
];

export default function WorkFilterTabs({
  active,
  onChange,
}: WorkFilterTabsProps) {
  return (
    <ul
      className="work-filter-tabs"
      role="tablist"
      aria-label="Work categories"
    >
      {tabs.map((tab) => (
        <li key={tab.id}>
          <button
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            className={active === tab.id ? "active" : ""}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
