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
import {motion as m} from 'framer-motion';

export default function Home() {
	return (
		<m.div 
			initial={{opacity: 0}} 
			animate={{opacity: 1}} 
			transition={{duration: 0.75, ease: 'easeOut'}}
			>
			<PageWrapper>	
				<Header />
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
		</m.div>
	);
}
