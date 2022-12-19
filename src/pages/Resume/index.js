import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import { heroData } from "../../constants/data";

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
