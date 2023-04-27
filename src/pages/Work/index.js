import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import { heroData } from "../../constants/data";
import ProjectGallery from "./Grid/ProjectGallery";
import {motion as m} from 'framer-motion';
import Seo from "../../components/Seo";
import { Fragment } from "react";

export default function Work() {
	return (
		<m.div 
			initial={{opacity: 0}} 
			animate={{opacity: 1}} 
			transition={{duration: 0.75, ease: 'easeOut'}}
		>

			<Fragment>
				<Seo
					title="Erin Kahn | Work"
					url="https://erin-kahn.com/Work"
				/>
			</Fragment>

			<PageWrapper>
				<Header />
				<Hero
					title={heroData.work.title}
					subtitle={heroData.work.subtitle}
					image={heroData.work.image}
				/>
				<main id="maincontent" role="main">
					<ProjectGallery/>
				</main>
				<Footer />
			</PageWrapper>
		</m.div>
	);
}
