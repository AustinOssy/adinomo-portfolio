import React,{ useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

function NavBar() {
	return (
		<header className="container-fluid bg-primary sticky-top">
			<nav className="navbar navbar-expand-sm navbar-light">
				<div className="container">
					<a
						className="navbar-brand text-light fs-4"
						href="#">
						A◉
					</a>
					<button
						className="navbar-toggler d-lg-none"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapsibleNavId"
						aria-controls="collapsibleNavId"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="collapsibleNavId">
						<ul className="navbar-nav me-auto mt-2 mt-lg-0 ">
							<li className="nav-item">
								<NavLink
									to={"/"}
									className="nav-link text-light">
									HOME
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to={"/projects"}
									className="nav-link text-light">
									PROJECTS
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to={"/skills"}
									className="nav-link text-light">
									SKILLS
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to={"/contacts"}
									className="nav-link text-light">
									CONTACTS
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default NavBar;