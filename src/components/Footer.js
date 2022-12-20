import { NavLink, useLocation } from "react-router-dom";
import { navData } from "../constants/data";
// import Instafeed from "../../components/Instagram/Instafeed";

export default function Footer() {
	const location = useLocation();
	const today = new Date().getFullYear();
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<footer 
			role="contentinfo" 
			className="section"
		>
			<div className="outer-wrapper">
				<span id="footer">
					<button 
						className="btn-scroll" 
						onClick={scrollToTop}
					>
						<span className="sr-only">scroll to the top of the page</span>
					</button>

					<div className="inner-footer-wrapper">
						<div className="row one">
							{
								location.pathname === '/' ? (
									<h6>Let's Brainstorm</h6>
								) : (
									<h3>Let's Brainstorm</h3>
								)
							}
							<ul className="footer-nav-list">
								{navData.navigation.map((item) => (
									<li
										key={`nav-${item.id}`}
										className="nav-item"
									>
										<NavLink
											className="nav-link"
											to={item.linkTo}
										>
											{item.pageTitle}
											<span className="sr-only">Page</span>
										</NavLink>
									</li>
								))}
							</ul>
						</div>

						<div className="btn-wrapper">
							<a href="mailto:erinnicolekahn@gmail.com">Get In Touch</a>
						</div>

						<div className="row two">
							<p className="copyright">Copyright &copy; {today}. All rights reserved.</p>					
							<ul className="social">
								{navData.socialIcons.map((icon) => (
									<li
										className="icon-list-item"
										key={`icon-${icon.id}`}
									>
										<a
											className={`icon ${icon.siteName}`}
											target="_blank"
											rel="noreferrer"
											href={icon.url}
										>
											<span className="sr-only">
												{icon.siteName}
											</span>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
					{/* <Instafeed /> */}
				</span>
			</div>
		</footer>
	);
}