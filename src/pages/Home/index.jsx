import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Services from "./Services/Services";
import Featured from "./Featured/Featured";
import About from "./About/About";
import Testimonials from "./Testimonials";
import Footer from "../../components/Footer";
import { heroData, sections } from "../../constants/data";
import SectionScrollTabs from "./SectionScrollTabs";
import { motion as m } from "framer-motion";
import Seo from "../../components/Seo";
import { Fragment } from "react";

export default function Home() {
	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: "easeOut" }}
		>
			<Fragment>
				<Seo title="Erin Kahn | Home" url="https://erin-kahn.com" />
			</Fragment>

			<PageWrapper>
				<Header />
				<SectionScrollTabs sections={sections.homepage} />
				<Hero
					title={heroData.home.title}
					subtitle={heroData.home.subtitle}
					scrollBtn={heroData.home.scrollBtn}
				/>
				<main id="maincontent" role="main">
					<Services />
					<Featured />
					<About />
					<Testimonials />
				</main>
				<Footer />
			</PageWrapper>
		</m.div>
	);
}
