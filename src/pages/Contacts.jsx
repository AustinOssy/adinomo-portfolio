import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { IconContext } from "react-icons";


function Contacts() {
	return (
		<div className="container">
			<div className="contacts d-flex justify-content-between">
				<p>Contact me: +2348130546909</p>
				<p>Email: austinossy20@gmail.com</p>
				<p>Location: Nigeria</p>
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
							className="btn"
							type="button"
							value="send"
						/>
					</div>
				</form>
			</div>
			<div className="profiles">
				<IconContext.Provider value={{ size: 27 }}>
					<p>
						<AiOutlineGithub />
					</p>
					<p>
						<AiFillLinkedin />
					</p>
				</IconContext.Provider>
			</div>
		</div>
	);
}

export default Contacts;