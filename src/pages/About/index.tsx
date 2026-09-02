import { motion as m } from "framer-motion";
import Seo from "../../components/Seo";
import AboutImage from "./AboutImage";
import { aboutData } from "../../constants/data";

export default function About() {
  return (
    <m.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Seo title="Erin Kahn | About" url="https://erin-kahn.com/about" />

      <div className="about-container">
        <div className="about-image">
          <AboutImage aboutProp={aboutData.img} />
        </div>

        <div className="about-content">
          <h1 className="about-name">Erin Kahn</h1>

          <div className="about-text">
            <p className="italic">"{aboutData.content}"</p>
            <p>{aboutData.content2}</p>
          </div>
        </div>
      </div>
    </m.div>
  );
}
