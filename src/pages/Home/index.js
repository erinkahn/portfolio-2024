import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Services from "./Services/Services";
import Featured from "./Featured/Featured";
import About from './About/About';
import Testimonials from "./Testimonials";
import Footer from "../../components/Footer";
import { heroData } from "../../constants/data";
import SectionScrollTabs from "./SectionScrollTabs";

export default function Home() {
	return (
		<PageWrapper>	
			<Header/>
			<SectionScrollTabs />
			
			<Hero 
				title={heroData.home.title}
				subtitle={heroData.home.subtitle}
			/>

			<main id="maincontent" role="main">
				<Services />
				<Featured /> 
				<About />
				<Testimonials />	
			</main>

			<Footer />
		</PageWrapper>
	);
}
