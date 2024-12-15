import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { TiLocation } from "react-icons/ti";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
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
      <div className="px-3 my-20">
         <h2 className="heading">Contact me</h2>
         <div className="flex flex-col md:flex-row w-fit mx-auto mt-5">
            <p className="mx-3">
               <MdPhone className="inline-flex text-success" size={20} />
               +2348130546909
            </p>
            <p className="mx-3">
               <MdEmail className="inline-flex text-success" size={20} />{" "}
               austinossy20@gmail.com
            </p>
            <p className="mx-3">
               <TiLocation
                  size={20}
                  color="#f65be3"
                  className="inline-flex items-center mt-[-3px]"
               />
               <span>Nigeria</span>
            </p>
         </div>
         <div className="max-w-[600px] mb-10 mt-10 mx-auto">
            <form
               ref={form}
               onSubmit={sendEmail}
               className="flex flex-col gap-y-5"
            >
               <input
                  type="text"
                  className="h-[60px] bg-inherit rounded-md border-sec border outline-none px-3 placeholder:text-white shadow-sm shadow-sec"
                  placeholder="name"
                  name="user_name"
                  required
               />
               <input
                  type="email"
                  className="h-[60px] bg-inherit rounded-md border-sec border outline-none px-3 placeholder:text-white shadow-sm shadow-sec"
                  placeholder="email"
                  name="user_email"
                  required
               />
               <textarea
                  placeholder="message"
                  name="message"
                  className="h-[200px] bg-inherit rounded-md border-sec border outline-none shadow-sec shadow p-3 placeholder:text-white"
                  required
               />
               <input className="btn text-xl  disabled:bg-slate-400 cursor-pointer" type="submit" value="send"/>
            </form>
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
