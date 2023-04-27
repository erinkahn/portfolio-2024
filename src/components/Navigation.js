import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navData } from "./../constants/data";
import useLockBodyScroll from "./../hooks/useLockBodyScroll";
import useScrollPos from "./../hooks/useScrollPos";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Navigation = (props) => {
	const today = new Date().getFullYear();
	const [hidden, setHidden] = useState(true);
	const [locked, setLocked] = useLockBodyScroll();
	const [buttonIsWhite, setButtonIsWhite] = useState(true);
	const btnRef = useRef();
	const sideNavRef = useRef();
	const scrollPos = useScrollPos();
    const { isVisible } = useIntersectionObserver(document.querySelector('footer .outer-wrapper'));

	const changeButtonColor = () => {
		if (scrollPos[1] >= 470) {
			setButtonIsWhite(false);
		} else if (isVisible) {
			setButtonIsWhite(true);
		} else {
			setButtonIsWhite(true)
		}
	}

	useEffect(() => {
		document.addEventListener('scroll', changeButtonColor);
		return() => {
			document.removeEventListener('scroll', changeButtonColor);
		}
	})

	const toggle = () => {
		hidden ? setHidden(false) : setHidden(true);
		locked ? setLocked(false) : setLocked(true);
	};

	const handleFocus = (event) => {
		if (!event.currentTarget.contains(event.relatedTarget)) {
			btnRef.current.focus();
		}
	};

	const escapeModal = (event) => {
		if (event.key === "Escape") {
			setHidden(true);
			setLocked(true);
		}
	};

	return (
		<div 
			ref={sideNavRef} 
			className="side-nav-wrap" 
		>
			<button
				className={`menuBtn ${hidden ? "" : "open"} ${!buttonIsWhite ? "colored" : ""}`}
				aria-label={`${
					hidden ? "Open Navigation" : "Close Navigation"
				}`}
				onClick={toggle}
				ref={btnRef}
				tabIndex="0"
			>
				<span class="close">{hidden ? "" : "close"}</span>
			</button>

			<div
				className={`fullPageMenu ${hidden ? "" : "appear"}`}
				aria-hidden={hidden ? true : false}
				role="dialog"
				aria-modal="true"
				aria-labelledby="full page menu"
				onKeyUp={escapeModal}
				onBlur={handleFocus}
			>
				<div className="nav-wrapper">
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

					<p className="copyright">
						Copyright &copy; {today}. All rights reserved.
					</p>

					<nav>
						<ul className="nav-list">
							{navData.navigation.map((item) => (
								<li
									key={`nav-${item.id}`}
									className={`nav-item ${
										hidden ? "" : "open"
									}`}
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
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
