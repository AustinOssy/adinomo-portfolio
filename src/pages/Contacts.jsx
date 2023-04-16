import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import '../assets/sass/_contacts.scss';

function Contacts() {
	return (
		<div className="container pt-4 pb-5">
			<div className="contacts justify-content-between px-2">
				<IconContext.Provider value={{ color: "#343F71" }}>
					<p>
						<BsTelephoneFill /> +2348130546909
					</p>
					<p>
						<MdEmail /> austinossy20@gmail.com
					</p>
					<p>
						<ImLocation2 /> Nigeria
					</p>
				</IconContext.Provider>
			</div>
			<div className="form-floating mb-3">
				<form
					action=""
					className="form">
					<div className="d-flex flex-column p-2 gap-2">
						<input
							type="text"
							className="form-control"
							placeholder="name"
						/>
						<input
							type="email"
							className="form-control"
							placeholder="email"
						/>
						<textarea placeholder="message" />
						<input
							className="btn fs-6"
							type="button"
							value="send"
						/>
					</div>
				</form>
			</div>
			<div className="profiles d-flex flex-column px-2 pb-2">
				<IconContext.Provider value={{ size: 19, color: "white" }}>
					<p>
						<button className="btn-icon text-white rounded-pill px-2">
							<AiOutlineGithub /> Github
						</button>
					</p>
					<p>
						<button className="btn-icon text-white rounded-pill">
							<AiFillLinkedin /> Linkedin
						</button>
					</p>
				</IconContext.Provider>
			</div>
		</div>
	);
}

export default Contacts;
