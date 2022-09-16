import * as React from "react";
import SEO from "../seo.json";
import { Helmet } from "react-helmet-async";

export default function Seo() {
	return (
		<Helmet>
			<title>{SEO.title}</title>
			<meta name="description" content={SEO.description} />
			<meta name="robots" content="index,follow" />
			<link rel="canonical" href={SEO.url} />
			<meta property="og:title" content={SEO.title} />
			<meta property="og:type" content="article" />
			<meta property="og:url" content={SEO.url} />
			<meta property="og:description" content={SEO.description} />
			<meta property="og:image" content={SEO.image} />

			<meta name="twitter:card" content="summary" />
		</Helmet>
	);
}
