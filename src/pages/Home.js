import PageWrapper from "../components/Global/PageWrapper";
import Header from "../components/Global/Header";
import Hero from "../components/Global/Hero";
import Services from "../components/Services";
import Featured from "../components/Work/Featured";
import About from '../components/About/About';
import Testimonials from "../components/Testimonials";
import Footer from "../components/Global/Footer";
import { heroData } from "../constants/data";

export default function Home() {
	return (
		<PageWrapper>
			<Hero 
				title={heroData.home.title}
				subtitle={heroData.home.subtitle}
				image={heroData.home.image}
			/>
			<Header /> 
			<main id="maincontent" role="main">
				<Services />
				<Featured /> 
				<About/>
				<Testimonials />	
			</main>
			<Footer />
		</PageWrapper>
	);
}
