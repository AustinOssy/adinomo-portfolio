import React from "react";
import "/src/assets/sass/_projects.scss";
import huddle from "/src/assets/img/huddle.png";
import space from "/src/assets/img/space-tour.png";
import spyces from '/src/assets/img/spyces.png';

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
				<button className="project__btnV">View</button>
			</div>
		);
	}

	return (
		<div className=" container projects__content">
			<div className="projects__row">
				<div className="projects__col">
					<ProjectCard
						name="Huddle Landing Page"
						summary="summary"
						img={huddle}
						tech="HTML, CSS"
					/>
				</div>
				<div className="projects__col">
					<ProjectCard
						name="Space-Tourism"
						summary="Space-Tourism"
						img={space}
						tech="HTML, CSS, Bootstrap, React"
					/>
				</div>
				<div className="projects__col">
					<ProjectCard
						name="Spyces Food Recipe App"
						summary="summary"
						img={spyces}
						tech="HTML, CSS, Bootstrap, React"
					/>
				</div>
			</div>
			<div className="projects__row">
				<div className="projects__col">
					<ProjectCard
						name="Baloel"
						summary="summary"
						img={huddle}
						tech="HTML, SCSS, Bootstrap, React"
					/>
				</div>
				<div className="projects__col">
					<ProjectCard
						name="name"
						summary="summary"
						img={huddle}
					/>
				</div>
				<div className="projects__col">
					<ProjectCard
						name="name"
						summary="summary"
						img={huddle}
					/>
				</div>
			</div>
		</div>
	);
}

export default Projects;
