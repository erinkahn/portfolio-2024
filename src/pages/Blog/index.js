import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import { heroData } from "../../constants/data";
import { motion as m } from "framer-motion";
import Seo from "../../components/Seo";
import { Fragment } from "react";
import { blog } from "../../constants/blog";

export default function Blog() {
	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: "easeOut" }}
		>
			<Fragment>
				<Seo title="Erin Kahn | Blog" url="https://erin-kahn.com/blog" />
			</Fragment>

			<PageWrapper>
				<Header />
				<Hero
					title={heroData.blog.title}
					subtitle={heroData.blog.subtitle}
					image={heroData.blog.image}
					scrollBtn={heroData.blog.scrollBtn}
				/>
				<main id="maincontent" role="main">
                    <p className="blog-intro">Unlike most software engineer/developer blogs, this one is not a collection of tutorials or technical articles. Instead, it serves as a personal journal where I share my thoughts, experiences, advice, and reflections on my seven years of experience as an engineer. This is important to me, because let's face it, getting a mentor as a engineer is hard without paying someone. There are new developers out there with no one to turn to. I'd like to help them avoid the mistakes I've made.</p>
                    {blog.articles.map((article, index) => (
                        <article key={index} className="blog-article">
                            <h2>{article.title}</h2>
                            <p>{article.subtitle}</p>
                            {/* <img src={article.image} alt={article.title} /> */}
                            <div dangerouslySetInnerHTML={{ __html: article.article }} />
                            <a href={article.scrollBtn.url} className="scroll-btn">
                                {article.scrollBtn.text}
                            </a>
                        </article>
                    ))}
				</main>
				<Footer />
			</PageWrapper>
		</m.div>
	);
}
