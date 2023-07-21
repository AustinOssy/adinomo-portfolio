import React from "react";
import { Link } from "react-scroll";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { IconContext } from "react-icons";

function Footer() {
	const year = new Date().getFullYear()

	return (
		<div className="flex">
			{/* <div className="flex">
					<a href="https://github.com/Adinomo">
						<AiOutlineGithub />
					</a>
					<a href="https://www.linkedin.com/in/austin-ossy-616864252">
						<AiFillLinkedin />
					</a>
					<HiOutlineMail />
			</div> */}
			<div className="mx-auto py-1">
				© Austin Osigbemhe {year}
			</div>
		</div>
	);
}

export default Footer;
