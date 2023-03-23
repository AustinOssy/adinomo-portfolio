import React from "react";
import { Link } from "react-router-dom";
import "/src/assets/sass/_footer.scss";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { IconContext } from "react-icons";

function Footer() {
	return (
		<div className="footer__content">
			<div className="footer__icons">
				<IconContext.Provider value={{ size: 27 }}>
					<a href="https://github.com/Adinomo">
						<AiOutlineGithub />
					</a>
					<a href="https://www.linkedin.com/in/austin-ossy-616864252">
						<AiFillLinkedin />
					</a>
					<HiOutlineMail />
				</IconContext.Provider>
			</div>
			<div className="footer__copyright mx-5">
				© Copyright 2022. Made by Austin Ossy
			</div>
		</div>
	);
}

export default Footer;
