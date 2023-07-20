import React from "react";
import resume from "../assets/Austin Osigbemhe CV.pdf"
import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaNpm } from 'react-icons/fa';
import { DiSass } from "react-icons/di";
import { TbBrandTailwind, TbBrandRedux,  } from "react-icons/tb"

function Skills() {
	return (
		<div className="min-h-[500px]">
			<h2 className="heading">
				About me
			</h2>
			<div className="flex flex-col md:flex-row w-fit mx-auto gap-5">
				<div className="p-3 w-full max-w-[600px]">
					<p className="text-xl text-justify">
						I'm a Frontend Web Developer who builds the Front-end of Websites and Web
						Applications that leads to the success of the overall product. Check out
						some of my work in the Projects section. Feel free to connect with me as
						I'm open to Job opportunities where I can contribute, learn and grow. If
						you have a good opportunity that matches my skill set and experience then
						don't hesitate to contact me.
					</p>
					<button className="btn">CONTACTS →</button>
					<br />
					<a
						href={resume}
						className=""
						download="Austin Osigbemhe CV"
						target="_blank">
						<button className="bg-gradient-to-r from-sec to-success text-primary font-medium p-2 px-3 shadow-[0px_0px_10px_1px] shadow-sec rounded-md pt-[0.6rem] mt-5">
							Resume
						</button>
					</a>
				</div>
				<div className="">
					<h4 className="text-center font-sec text-xl text-sec">Skills</h4>
					<div className="flex flex-wrap gap-3 items-center w-full max-w-[600px] p-2 mx-auto mt-2">
						<FaHtml5
							size={80}
							className="text-html"
						/>
						<FaCss3
							size={77}
							className="text-css"
						/>
						<div className="h-[65px] w-[70px] bg-js text-primary text-3xl font-bold rounded-sm flex justify-end items-end px-1 pt-10">
							JS
						</div>
						<DiSass
							size={80}
							className="text-sass"
						/>
						<FaBootstrap
							size={80}
							className="text-success"
						/>
						<TbBrandTailwind
							size={80}
							className="text-sky-500"
						/>
						<FaReact
							size={79}
							className="text-react"
						/>
						<TbBrandRedux
							size={80}
							className="text-redux"
						/>
						<div className="h-[65px] w-[70px] bg-typescript font-semibold text-3xl rounded-sm flex justify-end items-end px-1 pt-10">
							TS
						</div>
						<FaGitAlt
							size={80}
							className="text-git"
						/>
						<FaGithub
							size={75}
							className=""
						/>
						<FaNpm
							size={80}
							className="text-npm"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
