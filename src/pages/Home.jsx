import React from "react";

function Home() {
	return (
		<div className="home__content container d-flex align-items-center justify-content-center text-center pt-5 pb-5 mt-5 mb-5">
			<div className="d-flex flex-column align-items-center justify-content-center text-center mt-5 mb-5">
				<h3 className="home__name text-center">HEY, I'M AUSTIN OSIGBEMHE</h3>
				<h1 className="home__role text-center">FRONTEND DEVELOPER</h1>
				<p className="home__text">
					I'm a Frontend Developer with basic knowledge in developing great user
					interfaces and web based components with interactive functionality that
					leads to the success of the overall product.
				</p>
				<a href="#projects"><button className="btn mt-2">PROJECTS</button></a>
			</div>
		</div>
	);
}

export default Home;
