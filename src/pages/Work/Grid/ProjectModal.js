import React, { useState } from "react";
import FocusTrap from "focus-trap-react";

export default function ProjectModal(props) {
	const [isActive, setIsActive] = useState(0);

	return (
		<FocusTrap active={props.showingModal}>
			<div className="project-modal">
				<button
					className="close-btn"
					onClick={props.closeModal}
					aria-label="Close the project details modal"
				>
					<span className="sr-only">Close Modal</span>
				</button>

				<div className="inner-wrapper">
					<div className="dialog-content">
						{props.filteredProjectProp.projects
							.filter((project) => project.id === props.projectSelected)
							.map((filteredPro, m) => (
								<div
									key={`modal-${m}`}
									aria-labelledby={`dialogTitle${m}`}
									aria-describedby={`dialogDescription${m}`}
									role="dialog"
									className="content-wrapper"
								>
									{filteredPro.type === "website" && (
										<h2 className="section-title" id={`dialogTitle${m}`}>
											{filteredPro.title}
										</h2>
									)}

									<div className={`row ${filteredPro.type}`}>
										<div className="col">
											{filteredPro.type !== "website" && (
												<h2 className="section-title" id={`dialogTitle${m}`}>
													{filteredPro.title}
												</h2>
											)}
											<p className="desc" id={`dialogDescription${m}`}>
												{filteredPro.description}
											</p>

											<div className="roles">
												<p>
													<span>My Role:</span>
													{filteredPro.role}
												</p>
												{filteredPro.designers && (
													<p>
														<span>Designer:</span>
														{filteredPro.designers}
													</p>
												)}
												{filteredPro.devs && (
													<p>
														<span>Co-Devs:</span>
														{filteredPro.devs}
													</p>
												)}
											</div>

											{filteredPro.type === "design" && (
												<div className="tools design">
													<p>
														<span>Tools:</span>
													</p>
													<ul>
														{filteredPro.icons.map((icon, i) => (
															<li key={`icon-${i}`}>
																<img src={icon.img} alt={icon.alt} />
																<span className="alt-tool">{icon.alt}</span>
															</li>
														))}
													</ul>
												</div>
											)}
										</div>

										<div className="col">
											{filteredPro.type === "website" ? (
												<div className="tools">
													<p>
														<span>Tools:</span>
													</p>
													<ul>
														{filteredPro.icons.map((icon, i) => (
															<li key={`icon-${i}`}>
																<img src={icon.img} alt={icon.alt} />
																<span className="alt-tool">{icon.alt}</span>
															</li>
														))}
													</ul>
												</div>
											) : (
												<>
													<ul className="thumbnails">
														{filteredPro.thumbnails.map((athumb, a) => (
															<li
																key={`thumb-${a}`}
																className={`thumbnail-slide ${
																	a === isActive ? "active" : ""
																}`}
															>
																<img
																	width="511px"
																	height="451px"
																	className={`${a < 1 ? "single" : "more"}`}
																	src={athumb.img}
																	alt={athumb.alt}
																/>
															</li>
														))}
													</ul>

													{filteredPro.thumbnails.length > 1 && (
														<div
															className="pager-btns-container"
															role="tablist"
														>
															{filteredPro.thumbnails.map((thumbButton, b) => (
																<button
																	key={`btn-${b}`}
																	className={`pager-btn ${
																		b === isActive ? "active" : ""
																	}`}
																	aria-label={`Navigate to slide ${b}`}
																	aria-current={b === isActive ? true : false}
																	role="tab"
																	id={thumbButton.client}
																	onClick={(e) => {
																		setIsActive(b);
																	}}
																></button>
															))}
														</div>
													)}
												</>
											)}

											{filteredPro.url && (
												<div className="button-col">
													<div className="button-wrapper">
														<a
															target="_blank"
															rel="noreferrer"
															aria-label={`Visit the live site for ${filteredPro.title}`}
															href={filteredPro.url}
														>
															<div>Live Site</div>
														</a>
													</div>
												</div>
											)}
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</FocusTrap>
	);
}
