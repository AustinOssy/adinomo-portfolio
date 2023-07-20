import React from 'react'
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom"

function SideBar() {
  return (
			<div className="ms-2 p-1 z-50 rounded-lg fixed gap-y-4 w-fit flex flex-col left-0 top-[45vh] text-white">
				<a
					href=""
					className="z-10">
					<AiOutlineGithub
						size={40}
						className="cursor-pointer p-1 outline-none bg-gradient-to-r from-sec to-success text-primary font-medium shadow-[0px_0px_7px_1px] shadow-sec rounded-md"
					/>
				</a>
				<a
					href=""
					className="z-10">
					<AiFillLinkedin
						size={40}
						className="cursor-pointer p-1 outline-none bg-gradient-to-r from-sec to-success text-primary font-medium shadow-[0px_0px_7px_1px] shadow-sec rounded-md"
					/>
				</a>
				<span className=" h-[80px] z-0 left-5 w-fit ms-[-5px] mt-[-88px]"></span>
			</div>
		);
}

export default SideBar