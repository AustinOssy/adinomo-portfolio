import React from "react";
import { Link } from "react-router-dom";
import "/src/assets/sass/_footer.scss";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { IconContext } from "react-icons";

function Footer() {
	return (
		<div className="footer d-sm-flex align-items-center justify-content-between p-2 sticky-bottom container-fluid">
			<div className="footer__icons text-center">
				<IconContext.Provider value={{ size: "1.2rem", color:'white', className: "me-1" }}>
					<a href="https://github.com/Adinomo">
						<AiOutlineGithub />
					</a>
					<a href="https://www.linkedin.com/in/austin-ossy-616864252">
						<AiFillLinkedin />
					</a>
					<HiOutlineMail />
				</IconContext.Provider>
			</div>
			<div className="text-white text-center footer__copyright">
				© Austin Ossy 2023
			</div>
		</div>
	);
}

export default Footer;
