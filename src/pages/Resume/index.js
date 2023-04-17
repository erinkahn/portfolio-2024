import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import { heroData } from "../../constants/data";
import Timeline from "./Timeline";
import {motion as m} from 'framer-motion';

export default function Resume() {
	return (
		<m.div 
			initial={{opacity: 0}} 
			animate={{opacity: 1}} 
			transition={{duration: 0.75, ease: 'easeOut'}}
			exit={{opacity: 0}}
		>
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
		</m.div>
	);
}
