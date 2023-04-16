import React from "react";
import "/src/assets/sass/_projects.scss";
import huddle from "/src/assets/img/huddle.png";
import space from "/src/assets/img/space-tour.png";
import spyces from "/src/assets/img/spyces.png";
import todo from "/src/assets/img/todo.png";
import multiform from "/src/assets/img/multi-step-form.png";
import newshome from "/src/assets/img/new-homepage.png";
import estore from "/src/assets/img/e-store.png";
import {BsBoxArrowRight} from 'react-icons/bs';

function Projects() {
	function ProjectCard(props) {
		return (
			<div className="project__card">
				<img
					src={props.img}
					alt="picture"
					className="project__image"
				/>
				<div className="project__body">
					<h5>{props.name}</h5>
					<p>Tech used: {props.tech}</p>
					<button className="project__btnV pointer-event p-1 px-3">
						<a
							href={props.link}
							className="text-light text-decoration-none">
							<BsBoxArrowRight /> view
						</a>
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="container pb-5">
			<div className="d-flex flex-wrap gap-5 gap-xl-4 pb-5 pt-5 justify-content-center">
				<div className="projects__col">
					<ProjectCard
						name="Huddle Landing Page"
						img={huddle}
						tech="HTML, CSS"
						link={"https://huddle-etse.netlify.app"}
					/>
				</div>
				<div className="projects__col">
					<ProjectCard
						name="Space-Tourism"
						img={space}
						tech="HTML, CSS, Bootstrap, React"
						link={"https://space-tourism-etse.netlify.app"}
					/>
				</div>
				<div className="projects__col">
					<ProjectCard
						name="Spyces Food Recipe App"
						img={spyces}
						tech="HTML, CSS, Bootstrap, React"
						link={"https://spyces.netlify.app"}
					/>
				</div>
				<div className="projects__col">
					<ProjectCard
						name="TODO list"
						img={todo}
						tech="SCSS, React, Redux-toolkit"
						link={"https://todo-list-adinomo.netlify.app"}
					/>
				</div>
				<div className="projects__col">
					<ProjectCard
						name="Multi step form"
						img={multiform}
						tech="HTML, SCSS, React"
						link={"https://multistep-forms.netlify.app"}
					/>
				</div>
				<div className="projects__col">
					<ProjectCard
						name="E-store"
						img={estore}
						tech="HTML, SCSS, Bootstrap, React, Redux-toolkit"
						link={"https://etse-store.netlify.app/"}
					/>
				</div>
			</div>
		</div>
	);
}

export default Projects;
