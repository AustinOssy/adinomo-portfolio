import React from 'react';
import '/src/assets/sass/_skills.scss';

function Skills() {
	return (
		<div className="skills container">
			<div className="skills__about d-flex flex-column align-items-center">
				<h1 className="text-center">About me</h1>
				<p className="text-center w-75">
					Here you will find more information about me, what I do, and my current
					skills mostly in terms of programming and technology
				</p>
			</div>
			<div className="skills__row">
				<div className="skills__col">
					<div className="skills__knowMe">
						<p>
							I'm a Frontend Web Developer building the Front-end of Websites and Web
							Applications that leads to the success of the overall product. Check out
							some of my work in the Projects section. I also like sharing content
							related to the stuff that I have learned over the years in Web
							Development so it can help other people of the Dev Community. Feel free
							to Connect or Follow me on my Linkedin where I post useful content
							related to Web Development and Programming I'm open to Job opportunities
							where I can contribute, learn and grow. If you have a good opportunity
							that matches my skills and experience then don't hesitate to contact me.
						</p>
						<button className="btn skills__contact">CONTACT</button>
					</div>
				</div>
				<div className="skills__col">
					<div className="skills__technical">
						<div className="skills__list">HTML</div>
						<div className="skills__list">CSS</div>
						<div className="skills__list">Javascript</div>
						<div className="skills__list">Bootstrap</div>
						<div className="skills__list">SASS</div>
						<div className="skills__list">Responsive Design</div>
						<div className="skills__list">React</div>
						<div className="skills__list">GIT</div>
						<div className="skills__list">Github</div>
						<div className="skills__list">NPM</div>
						<div className="skills__list">Redux-toolkit</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;