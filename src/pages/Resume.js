import PageWrapper from "../components/Global/PageWrapper";
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer";
import Hero from "../components/Global/Hero";
import { heroData } from "../constants/data";

export default function Resume() {
	return (
		<PageWrapper>
			<Header />
			<Hero
				title={heroData.resume.title}
				subtitle={heroData.resume.subtitle}
				image={heroData.resume.image}
			/>
			<main id="maincontent" role="main"></main>
			<Footer />
		</PageWrapper>
	);
}
