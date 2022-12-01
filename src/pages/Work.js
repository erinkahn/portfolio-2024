import PageWrapper from "../components/Global/PageWrapper";
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer";
import Hero from "../components/Global/Hero";
import { heroData } from "../constants/data";
import ProjectGallery from "../components/Work/ProjectGallery";

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
