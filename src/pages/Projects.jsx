import React from "react";
import "/src/assets/sass/_projects.scss";
import huddle from "/src/assets/img/huddle.png";
import space from "/src/assets/img/space-tour.png";
import spyces from "/src/assets/img/spyces.png";
import todo from "/src/assets/img/todo.png";
import multiform from "/src/assets/img/multi-step-form.png";
import newshome from "/src/assets/img/new-homepage.png";

function Projects() {
	function ProjectCard(props) {
		return (
			<div className="project__card">
				<img
					src={props.img}
					width={300}
					alt="picture"
				/>
				<h5>{props.name}</h5>
				<p>Tech used: {props.tech}</p>
				<button className="project__btnV text-light">
					<a href={props.ref}>View</a>
				</button>
			</div>
		);
	}

	return (
		<div className="container pb-3">
			<div className="d-flex flex-wrap gap-5 gap-xl-4 pb-5 pt-5 justify-content-center">
				<div className="projects__col">
					<ProjectCard
						name="Huddle Landing Page"
						img={huddle}
						tech="HTML, CSS"
						ref={"https://huddle-etse.netlify.app"}
					/>
				</div>
				<div className="projects__col">
					<ProjectCard
						name="Space-Tourism"
						img={space}
						tech="HTML, CSS, Bootstrap, React"
						ref={"https://space-tourism-etse.netlify.app"}
					/>
				</div>
				<div className="projects__col">
					<ProjectCard
						name="Spyces Food Recipe App"
						img={spyces}
						tech="HTML, CSS, Bootstrap, React"
						ref={"https://spyces.netlify.app"}
					/>
				</div>
				<div className="projects__col">
					<ProjectCard
						name="TODO list"
						img={todo}
						tech="HTML, SCSS, React, Redux-toolkit"
						ref={"https://todo-list-adinomo.netlify.app"}
					/>
				</div>
				<div className="projects__col">
					<ProjectCard
						name="Multi step form"
						img={multiform}
						tech="HTML, SCSS, React"
						ref={"https://multistep-forms.netlify.app"}
					/>
				</div>
				<div className="projects__col">
					<ProjectCard
						name="News Homepage"
						img={newshome}
						tech="HTML, SCSS, React"
						ref={"https://multistep-forms.netlify.app"}
					/>
				</div>
			</div>
		</div>
	);
}

export default Projects;
