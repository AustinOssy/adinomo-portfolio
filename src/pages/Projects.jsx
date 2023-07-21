import React from "react";
import loopstudios from "../assets/img/loopstudios.jpg";
import space from "/src/assets/img/space-tour.png";
import spyces from "/src/assets/img/spyces.png";
import todo from "/src/assets/img/todo.png";
import multiform from "/src/assets/img/multi-step-form.png";
import newshome from "/src/assets/img/new-homepage.png";
import estore from "/src/assets/img/e-store.png";
import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'


function Projects() {
	function ProjectCard(props) {
		return (
			<div className="w-[350px] group cursor-pointer rounded-[0.3rem] relative shadow-[0px_3px_10px_0px] shadow-success2">
				<img
					src={props.img}
					alt="picture"
					className="w-full h-[200px] rounded-[0.3rem]"
				/>
				<div className="card-info transition-all ">
					<h5>{props.name}</h5>
					<p>Tech used: {props.tech}</p>
					<div className="flex gap-x-3">
						<a href={props.link}>
							<FiExternalLink
								size={32}
								className="cursor-pointer p-1 outline-none bg-gradient-to-r from-sec to-success text-primary font-medium shadow-[0px_0px_7px_1px] shadow-sec rounded-md"
							/>
						</a>
						<a
							href={props.link}
							className="inline">
							<FaGithub
								size={33}
								className="cursor-pointer p-1 outline-none bg-gradient-to-r from-sec to-success text-primary font-medium shadow-[0px_0px_4px_1px] shadow-sec rounded-md"
							/>
						</a>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div
			id="projects"
			className="min-h-[650px]">
			<h2 className="heading h-[65px]">
				My Works
			</h2>
			<div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-14 w-fit">
				<div className="w-fit h-400px">
					<ProjectCard
						name="Huddle Landing Page"
						img={loopstudios}
						tech="HTML, CSS, Tailwindcss"
						link={"https://eloopstudios.netlify.app"}
					/>
				</div>
				<div className="w-fit h-400px">
					<ProjectCard
						name="Space-Tourism"
						img={space}
						tech="HTML, CSS, Bootstrap, React"
						link={"https://space-tourism-etse.netlify.app"}
					/>
				</div>
				<div className="w-fit h-400px">
					<ProjectCard
						name="Spyces Food Recipe App"
						img={spyces}
						tech="HTML, CSS, Bootstrap, React"
						link={"https://spyces.netlify.app"}
					/>
				</div>
				<div className="w-fit h-400px">
					<ProjectCard
						name="TODO list"
						img={todo}
						tech="SCSS, React, Redux-toolkit"
						link={"https://todo-list-adinomo.netlify.app"}
					/>
				</div>
				<div className="w-fit h-400px">
					<ProjectCard
						name="Multi step form"
						img={multiform}
						tech="HTML, SCSS, React"
						link={"https://multistep-forms.netlify.app"}
					/>
				</div>
				<div className="w-fit h-400px">
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
