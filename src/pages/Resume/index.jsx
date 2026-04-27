import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Timeline from "./Timeline";
import Seo from "../../components/Seo";

export default function Resume() {
	return (
		<>
			<Seo title="Erin Kahn | Resume" url="https://erin-kahn.com/Resume" />

			<PageWrapper>
				<Header />
				<main id="maincontent" role="main">
					<Timeline />
				</main>
				<Footer />
			</PageWrapper>
		</>
	);
}
