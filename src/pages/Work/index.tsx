import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion as m } from "framer-motion";
import Seo from "../../components/Seo";
import ViewToggleButton, {
  type ViewMode,
} from "../../components/ViewToggleButton";
import WorkFilterTabs, { type WorkFilter } from "./WorkFilterTabs";
import WorkGrid from "./WorkGrid";
import WorkList from "./WorkList";
import { workData, type WorkProject } from "../../constants/data";

const FILTER_VALUES: WorkFilter[] = ["dev", "design", "art"];

const matchesFilter = (project: WorkProject, filter: WorkFilter) => {
  switch (filter) {
    case "dev":
      return project.tags.includes("DEV");
    case "design":
      return project.tags.includes("DESIGN");
    case "art":
      return project.tags.includes("ART");
    default:
      return true;
  }
};

export default function Work() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterParam = searchParams.get("filter");
  const filter: WorkFilter = FILTER_VALUES.includes(filterParam as WorkFilter)
    ? (filterParam as WorkFilter)
    : "dev";

  const viewMode: ViewMode = searchParams.get("view") === "list" ? "list" : "grid";

  const setFilter = (next: WorkFilter) => {
    setSearchParams(
      (prev) => {
        const params = new URLSearchParams(prev);
        params.set("filter", next);
        return params;
      },
      { replace: true },
    );
  };

  const setViewMode = (next: ViewMode) => {
    setSearchParams(
      (prev) => {
        const params = new URLSearchParams(prev);
        params.set("view", next);
        return params;
      },
      { replace: true },
    );
  };

  const filteredProjects = useMemo(
    () => workData.projects.filter((project) => matchesFilter(project, filter)),
    [filter],
  );

  return (
    <m.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Seo title="Erin Kahn | Work" url="https://erin-kahn.com" />

      <div className="work-toolbar">
        <WorkFilterTabs active={filter} onChange={setFilter} />

        <ViewToggleButton
          viewMode={viewMode}
          onToggle={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
        />
      </div>

      {viewMode === "grid" ? (
        <WorkGrid projects={filteredProjects} />
      ) : (
        <WorkList projects={filteredProjects} />
      )}
    </m.div>
  );
}
