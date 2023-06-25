import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import '../assets/sass/_contacts.scss';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contacts() {

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_f5q3ele",
				"template_ff2hh5h",
				form.current,
				"9fL7TK63dSdCWruVW",
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log("message sent");
					toast("Message sent!", {});
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
				},
			);
	};

	return (
		<div className="container pt-4 pb-5">
			<h2 className="text-center fw-bolder mb-5 underline">Contact me</h2>
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
					ref={form}
					onSubmit={sendEmail}
					className="form">
					<div className="d-flex flex-column p-2 gap-2">
						<input
							type="text"
							className="form-control"
							placeholder="name"
							name="user_name"
						/>
						<input
							type="email"
							className="form-control"
							placeholder="email"
							name="user_email"
						/>
						<textarea
							placeholder="message"
							name="message"
						/>
						<input
							className="btn fs-6"
							type="submit"
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
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			{/* Same as */}
			<ToastContainer />
		</div>
	);
}

export default Contacts;
