import React,{ useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import '/src/assets/sass/_navbar.scss';

function NavBar() {
	const [menuOpen, setMenuOpen]= useState(false);
	const [size, setSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
	  const handleResize = () =>{
		  setSize({
			  width: window.innerWidth,
			  height: window.innerHeight,
		  })
	  }
	  window.addEventListener("resize", handleResize);
	  return () => window.removeEventListener("resize", handleResize)
	}, [])

	useEffect(() => {
	  if (size.width > 768 && menuOpen){
		  setMenuOpen(false);
	  }
	}, [size.width, menuOpen])
	
	

	const menuToggleHandler = () => {
		setMenuOpen(menu => !menu)
	}

	return (
		<header className="header">
			<div className="header__content">
				<h2 className="header__content__logo">A◉ <span></span></h2>
				<div className={`header__content__nav ${menuOpen ? "isMenu" : ""}`}>
					<ul>
						<li>
							<NavLink to={"/"}>HOME</NavLink>
						</li>
						<li>
							<NavLink to={"/projects"}>PROJECTS</NavLink>
						</li>
						<li>
							<NavLink to={"/skills"}>SKILLS</NavLink>
						</li>
						<li>
							<NavLink to={"/contacts"}>CONTACTS</NavLink>
						</li>
					</ul>
				</div>
				<div className="header__content__toggle">
					 {menuOpen ? <AiOutlineClose onClick={menuToggleHandler} /> : <BiMenuAltRight onClick={menuToggleHandler} /> }
				</div>
			</div>
		</header>
	);
}

export default NavBar;