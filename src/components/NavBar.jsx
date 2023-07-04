import React,{ useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import resume from "../assets/Austin Osigbemhe CV.pdf"

function NavBar() {
	return (
		<header className="container-fluid bg-primary sticky-top">
			<nav className="navbar navbar-expand-sm navbar-dark">
				<div className="container">
					<a
						className="navbar-brand text-light fs-4"
						href="#">
						A◉
					</a>
					{/* <button
						className="navbar-toggler d-lg-none border-0"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapsibleNavId"
						aria-controls="collapsibleNavId"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button> */}
					<div
						/* className="collapse navbar-collapse"
						id="collapsibleNavId" */>
						{/* <ul className="navbar-nav me-auto mt-2 mt-lg-0">
							<li className="nav-item">
								<p className="nav-link text-light">
									HOME
								</p>
							</li>
							<li className="nav-item">
								<p className="nav-link text-light">
									PROJECTS
								</p>
							</li>
							<li className="nav-item">
								<p className="nav-link text-light">
									SKILLS
								</p>
							</li>
							<li className="nav-item">
								<p className="nav-link text-light">
									CONTACTS
								</p>
							</li>
						</ul> */}
						<ul className="navbar-nav mt-2 mt-lg-0 ms-auto">
							<li className="nav-item">
								<a
									href={resume}
									download="Austin Osigbemhe CV"
									target="_blank" 
								>
									<button className="cv-btn nav-link px-3">Resume</button>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default NavBar;