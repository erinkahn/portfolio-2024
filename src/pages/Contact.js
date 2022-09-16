import React from "react";
import PageWrapper from "../components/Global/PageWrapper";
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer";
import Hero from "../components/Global/Hero";
import { heroData } from "../constants/data";

export default function Contact() {
	return (
		<PageWrapper>
			<Header />
			<Hero
				title={heroData.contact.title}
				subtitle={heroData.contact.subtitle}
				image={heroData.contact.image}
			/>
			<main id="maincontent" role="main"></main>
			<Footer />
		</PageWrapper>
	);
}
