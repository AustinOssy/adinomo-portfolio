import React from "react";
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';
import GridLines from 'react-gridlines'
import dot_grid from '../assets/fonts/dot-grid.svg'

function Home() {
	return (
		<div className="flex flex-col items-center mt-20 relative bg-home">{/* 
			<GridLines
				cellWidth={50}
				cellHeight={50}
				strokeWidth={4}
				cellWidth2={50}
				lineColor={"#6B5CA5"}
				lineColor2={"#6B5CA5"}
				className="absolute z-0 grid-area h-[300px] max-w-[600px] w-full"></GridLines> */}
			<h3 className="text-center text-[2.5rem] z-20">HEY, I'M</h3>
			<TypeAnimation
				sequence={[
					// Same substring at the start will only be typed out once, initially
					"AUSTIN OSIGBEMHE",
					1500, // wait 1s before replacing "Mice" with "Hamsters"
					"A FRONTEND DEVELOPER",
					1500,
				]}
				wrapper="div"
				speed={50}
				repeat={Infinity}
				cursor={true}
				className="text-[3.5rem] h-[100px] sm:h-auto text-center font-bold z-20 leading-[3rem] text-transparent bg-clip-text bg-gradient-to-r from-sec to-success"
			/>
			<p className="z-20 text-3xl px-2 lg:px-[5em] text-center">
				I'm a Frontend Developer with basic knowledge in developing great user
				interfaces and web based components with interactive functionality that
				leads to the success of the overall product.
			</p>
			<Link
				className="mx-auto z-20"
				to="projects"
				offset={-100}
				spy={true}
				duration={500}
				smooth={true}>
				<button className="btn">
					PROJECTS
				</button>
			</Link>
		</div>
	);
}

export default Home;
