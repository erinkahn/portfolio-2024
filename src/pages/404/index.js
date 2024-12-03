import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { heroData } from "../../constants/data";
import { motion as m } from "framer-motion";
import Seo from "../../components/Seo";
import { Fragment } from "react";

export default function NotFound() {
	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: "easeOut" }}
		>
			<Fragment>
				<Seo title="Erin Kahn | 404" url="https://erin-kahn.com/404" />
			</Fragment>

			<PageWrapper>
				<Header />
				<Hero
					title={heroData.missing.title}
					subtitle={heroData.missing.subtitle}
					image={heroData.missing.image}
					scrollBtn={heroData.missing.scrollBtn}
				/>
			</PageWrapper>
		</m.div>
	);
}
