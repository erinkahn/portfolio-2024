import {useState} from 'react';
import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Services from "./Services/Services";
import Featured from "./Featured/Featured";
import About from './About/About';
import Testimonials from "./Testimonials";
import Footer from "../../components/Footer";
import { heroData } from "../../constants/data";
// import useWindowSize from '../hooks/useWindowSize';
import SectionScrollTabs from "../../components/SectionScrollTabs";
import {sections} from '../../constants/data';

export default function Home() {
	const [isActive, setIsActive] = useState(0);	
	// const size = useWindowSize();

	// if (size.width > 991) {
	// 	console.log('bigger')
	// }
	
	// on scroll
    // if top of vp is === top of 'work' section
    // set position sticky to white box and...
    // on scroll (direction = up) translate 100vh up (change slide)
    // on scroll (direction = down) translate -100vh down (previous slide)
    // if scroll % is below/before 'work' or if scroll % is greater/after 'work' remove position sticky
    // or if last slide is visible...on scroll (direction down) remove sticky

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
