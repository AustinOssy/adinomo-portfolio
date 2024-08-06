import React from "react";
import resume from "../assets/Austin Osigbemhe CV.pdf";
import {
   FaHtml5,
   FaReact,
   FaBootstrap,
   FaGitAlt,
   FaGithub,
   FaNpm,
} from "react-icons/fa";
import { DiSass } from "react-icons/di";
import {
   SiNextdotjs,
   SiTailwindcss,
   SiJavascript,
   SiRedux,
   SiTypescript,
   SiMui,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";

function Skills() {
   const handleClick = () => {
      const subject = encodeURIComponent("Job Opportunity");
      const body = encodeURIComponent(
         `Dear Austin Osigbemhe,\n\n[Your Organization] is interested in discussing a potential job opportunity with you. Here is a brief overview of my requirements and what I am looking for:\n\n- Role:\n- Key Responsibilities:\n- Skills Required:\n- Expected Start Date:\n\nPlease let me know a convenient time for us to discuss this further.\n\nThank you,\n[Your Name]`
      );

      const mailtoLink = `mailto:austinossy20@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
   };
   return (
      <div className="min-h-[500px]">
         <h2 className="heading">About me</h2>
         <div className="flex flex-col md:flex-row w-fit mx-auto gap-5">
            <div className="p-3 w-full max-w-[600px]">
               <p className="text-[20px] leading-[38px] text-justify">
                  I’m Austin Osigbemhe, a front-end web developer based in
                  ilorin Nigeria, with over 5 years of experience.
               </p>
               <p className="text-[20px] leading-[38px] text-justify">
                  As a Frontend Web Developer, I am passionate about building
                  successful websites and web applications. Feel free to explore
                  my projects to see my work in action. I am open to job
                  opportunities where I can contribute, grow, and continue to
                  learn. If you have a role that aligns with my skills and
                  experience, I would love to hear from you.
               </p>
               <div className="flex items-center gap-5 flex-wrap">
                  <button
                     onClick={handleClick}
                     className="bg-gradient-to-r from-sec to-success text-primary font-medium p-2 px-3 shadow-[0px_0px_10px_1px] shadow-sec rounded-md pt-[0.6rem] mt-5"
                  >
                     Hire Me
                  </button>
                  <a
                     href={resume}
                     className=""
                     download="Austin Osigbemhe CV"
                     target="_blank"
                  >
                     <button className="bg-gradient-to-r from-sec to-success text-primary font-medium p-2 px-3 shadow-[0px_0px_10px_1px] shadow-sec rounded-md pt-[0.6rem] mt-5">
                        Resume
                     </button>
                  </a>
               </div>
            </div>
            <div className="">
               <h4 className="text-center font-sec text-xl text-sec">Skills</h4>
               <div className="flex flex-wrap gap-3 items-center w-full max-w-[600px] p-2 mx-auto mt-2">
                  <FaHtml5 size={70} color="#f16529" />
                  <IoLogoCss3 size={70} color="#2965f1" />
                  <SiJavascript size={60} color="#f7df1e" />
                  <DiSass size={70} color="#cc6699" />
                  <FaBootstrap size={70} color="#7952B3" />
                  <SiTailwindcss size={70} color="#38bdf8" />
                  <FaReact size={70} color="#61dafb" />
                  <SiRedux size={70} color="#764abc" />
                  <SiTypescript size={60} color="#3178c6" />
                  <FaGitAlt size={70} className="text-git" />
                  <FaGithub size={75} className="" />
                  <FaNpm size={70} className="text-npm" />
                  <SiNextdotjs size={70} />
                  <SiMui size={70} color="#0081CB" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Skills;
