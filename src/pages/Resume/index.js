import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import { heroData } from "../../constants/data";
import Timeline from "./Timeline";

export default function Resume() {
	return (
		<PageWrapper>
			<Header />
			<Hero
				title={heroData.resume.title}
				subtitle={heroData.resume.subtitle}
				image={heroData.resume.image}
			/>
			<main id="maincontent" role="main">
				<Timeline/>
			</main>
			<Footer />
		</PageWrapper>
	);
}
