import PageWrapper from "../components/Global/PageWrapper";
import Header from "../components/Global/Header";
import Hero from "../components/Global/Hero";
import { heroData } from "../constants/data";
import Services from "../components/Services";
// import Skills from "../components/Skills";
// import Work from "../components/Work/Work";
// import Testimonials from "../components/Testimonials";
import Footer from "../components/Global/Footer";

export default function Home() {
	return (
		<PageWrapper>
			<Hero
				title={heroData.home.title}
				subtitle={heroData.home.subtitle}
				image={heroData.home.image}
				alt={heroData.home.alt}
			/>
			<Header /> 
			<main id="maincontent" role="main">
				<div className="inner-wrapper">
					<Services />
					{/* <Skills /> */}
					{/* <Work />  */}
				    {/* <Testimonials />	 */}
				</div>
			</main>
			<Footer />
		</PageWrapper>
	);
}
