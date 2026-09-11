import { Navigate, useNavigate, useParams } from "react-router-dom";
import { motion as m } from "framer-motion";
import Seo from "../../components/Seo";
import { workData } from "../../constants/data";
import { slugify } from "../../utils/slugify";
import CaseStudySlider from "./CaseStudySlider";

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = workData.projects.find((p) => slugify(p.title) === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const slideImages =
    project.type === "website"
      ? [{ img: project.img, alt: project.title }]
      : [
          { img: project.img, alt: project.title },
          ...project.thumbnails.filter((thumb) => thumb.img !== project.img),
        ];

  return (
    <m.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Seo
        title={`Erin Kahn | ${project.title}`}
        url={`https://erin-kahn.com/work/${slugify(project.title)}`}
      />

      <div className="case-study">
        <span>
          <button
            type="button"
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            &larr; Work
          </button>

          <CaseStudySlider images={slideImages} />
        </span>

        <span className="case-study-content">
          <h1 className="case-study-title">{project.title}</h1>
          <ul className="case-study-tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <p className="case-study-desc">{project.description}</p>

          <dl className="case-study-credits">
            <div>
              <dt>My Role</dt>
              <dd>{project.role}</dd>
            </div>
            {project.type === "website" && project.designers && (
              <div>
                <dt>Designer</dt>
                <dd>{project.designers}</dd>
              </div>
            )}
            {project.type === "website" && project.devs && (
              <div>
                <dt>Co-Devs</dt>
                <dd>{project.devs}</dd>
              </div>
            )}
          </dl>

          {(project.type === "website" || project.type === "design") && (
            <ul className="case-study-tools">
              {project.icons.map((icon) => (
                <li key={icon.alt}>
                  <img src={icon.img} alt="" />
                  <span className="sr-only">{icon.alt}</span>
                </li>
              ))}
            </ul>
          )}

          {project.type === "website" && project.url && (
            <a
              className="live-site-btn"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit the live site for ${project.title}`}
            >
              Visit Live Site
            </a>
          )}
        </span>
      </div>
    </m.div>
  );
}
