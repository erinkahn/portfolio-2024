import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import { heroData } from "../../constants/data";
import ProjectGallery from "./Work/ProjectGallery";

export default function Work() {
	return (
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
	);
}
