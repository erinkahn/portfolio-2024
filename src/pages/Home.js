import PageWrapper from "../components/Global/PageWrapper";
import Header from "../components/Global/Header";
import Hero from "../components/Global/Hero";
import Services from "../components/Services/Services";
import Featured from "../components/Featured/Featured";
import About from '../components/About/About';
import Testimonials from "../components/Testimonials";
import Footer from "../components/Global/Footer";
import { heroData } from "../constants/data";
import useWindowSize from '../hooks/useWindowSize';

export default function Home() {
	const size = useWindowSize();
	
	if (size.width > 991) {
		console.log('biger')
	}
	  // on scroll
    // if top of vp is === top of 'work' section
    // set position sticky to white box and...
    // on scroll (direction = up) translate 100vh up (change slide)
    // on scroll (direction = down) translate -100vh down (previous slide)
    // if scroll % is below/before 'work' or if scroll % is greater/after 'work' remove position sticky
    // or if last slide is visible...on scroll (direction down) remove sticky


	return (
		<PageWrapper>
			<Hero 
				title={heroData.home.title}
				subtitle={heroData.home.subtitle}
			/>
			<Header /> 
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
