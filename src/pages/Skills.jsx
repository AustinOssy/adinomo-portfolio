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
       <div className="flex flex-col w-fit mx-auto gap-5">
         <div className="p-3 w-full max-w-[900px]">
           <p className="text-[20px] leading-[38px] text-justify">
             I’m Austin Osigbemhe, a front-end web developer based in ilorin
             Nigeria, with over 5 years of experience.
           </p>
           <p className="text-[20px] leading-[38px] text-justify">
             I am passionate about creating impactful websites and web
             applications that deliver exceptional user experiences. Feel free
             to explore my portfolio to see my work in action. I’m open to job
             opportunities where I can apply my skills, contribute to impactful
             projects, and continue growing as a developer. If you have a role
             that aligns with my expertise, I’d love to connect and discuss how
             I can add value to your team.
           </p>
           <div className="flex items-center gap-5 flex-wrap">
             <button
               onClick={handleClick}
               className="bg-gradient-to-r from-sec to-success text-primary font-medium p-2 px-3 shadow-[0px_0px_10px_1px] shadow-sec rounded-md pt-[0.6rem] mt-5">
               Hire Me
             </button>
             <a
               href={resume}
               className=""
               download="Austin Osigbemhe CV"
               target="_blank">
               <button className="bg-gradient-to-r from-sec to-success text-primary font-medium p-2 px-3 shadow-[0px_0px_10px_1px] shadow-sec rounded-md pt-[0.6rem] mt-5">
                 Resume
               </button>
             </a>
           </div>
         </div>
         <div className="my-10">
           <h2 className="heading">Skills</h2>
           <p className="max-w-[900px] text-[20px] leading-[38px] text-justify">
             Proficient in modern frontend technologies, including HTML, CSS,
             JavaScript, and frameworks like React and Next.js. Experienced in
             building responsive, user-friendly interfaces with Tailwind CSS and
             integrating APIs for dynamic web applications. Skilled in
             debugging, optimizing performance, and delivering seamless user
             experiences. Strong focus on clean code, accessibility, and
             cross-browser compatibility.
           </p>
           <div className="flex flex-wrap gap-3 items-center w-full max-w-[600px] p-2 mx-auto my-5 mt-10">
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
