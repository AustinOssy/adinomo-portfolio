import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import resume from "../assets/Austin Osigbemhe CV.pdf";

function NavBar() {
	return (
		<div className="text-sec flex items-center p-2">
			<Link
				className="font-bold text-[2.5rem] tracking-[-0.8rem] text-transparent bg-clip-text bg-gradient-to-r from-sec to-success w-16"
				to="">
				A◉
			</Link>
			<a
				className="ms-auto ps-2"
				href={resume}
				download="Austin Osigbemhe CV"
				target="_blank">
				<button className="bg-gradient-to-r from-sec to-success text-primary font-medium p-2 px-3 shadow-[0px_0px_10px_1px] shadow-sec rounded-md pt-[0.6rem]">
					Resume
				</button>
			</a>
		</div>
	);
}

export default NavBar;
