import * as React from "react";
import { Helmet } from "react-helmet-async";
const description =
	"Erin Kahn is a senior software engineer based in Denver, Colorado. She specializes in building accessible, performant, and user-friendly web applications. With a passion for clean code and a focus on user experience, Erin creates digital solutions that empower users and enhance their online interactions.";
const img = "/public/images/seo/erin-kahn-portfolio.png";

export default function Seo({ title, url }) {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:url" content={url} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={img} />

			{/* Twitter */}
			<meta name="twitter:card" content={img} />
			<meta property="twitter:url" content={url} />
			<meta property="twitter:title" content={description} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={img} />
		</Helmet>
	);
}
