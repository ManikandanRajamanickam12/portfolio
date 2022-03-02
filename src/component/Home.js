import React, { useEffect, useState } from "react"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import $ from "jquery";
import "../component/Home.css"
import { HashLink as Link } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useWindowScroll } from 'react-use'
import Aboutme from "./Aboutme"
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Pulse from 'react-reveal/Pulse';
import Zoom from 'react-reveal/Zoom';
import Typical from 'react-typical'
import ReactRotatingText from "react-rotating-text"


function Header() {
    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click);

    const { x, y } = useWindowScroll();
    const [scrolled, setscrolled] = useState(0);

    useEffect(() => {
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setscrolled((y / height) * 100)

        if (scrolled > 20) {
            $(".navbar-main").css("display", "block");
            $(".navbar-main").css("position", "fixed");
            $(".navbar-main").css("top", "0");
        } else {
            $(".navbar-main").css("position", "relative");
        }

    }, [y])





    const closeMobileMenu = () => setClick(false);




    return (
        <div id="home">
            <div id="gradient"></div>
            <div className="card">
                <img id="avatar" src="pic.jpeg" />
                <div className="name">
                    <Pulse> <h2>Manikandan R</h2></Pulse>
                    {/* <p1 >Web Developer</p1> */}
                </div>
                {/* <pre className="preClass">
                    {`
        <html>
            `}
                    {` <body>`}
                    {`
                    
                <h1>
`}
                </pre> */}
                <div id="area">
                    <ReactRotatingText items={['<Web Developer/>', '<App Developer/>', '<Designer/>']} />

                    {/* <div className="wrapper">

                        <ul className="dynamic-txts">
                            <li><span>Web Developer</span></li>
                            <li><span>App Developer</span></li>
                            <li><span>UI Designer</span></li>

                        </ul>

                    </div> */}
                    {/* <Typical
                        steps={[
                            "Web Developer",


                            "App Developer",


                        ]}
                        loop={Infinity}
                        wrapper="p"
                    /> */}


                </div>

                <Zoom>   <p id="describe"> I am specialized in MERN stack WEB developing and Android App Developing.</p></Zoom>
                <div className="socialmed">

                    <ul>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100025351846238"><FacebookIcon className="fb" /></a>
                            <a href="https://www.instagram.com/manikandan_1212_/"><InstagramIcon className="insta" /></a>
                            <a href="https://www.linkedin.com/in/manikandan-r-5b4a171a6/"><LinkedInIcon className="linkedin" /></a>
                            <a href="https://github.com/ManikandanRajamanickam12"><GitHubIcon className="mail" /></a>
                        </li>
                    </ul>
                    <div id="line"></div>

                </div>


            </div>

            <nav className='navbar-main'>
                <div className='navbar-container container'>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>

                    {/* <nav>

                    <ul className="list">
                        <li className="items">Home</li>
                        <li className="items">About Me</li>
                        <li className="items">Skills</li>
                        <li className="items">Projects</li>
                        <li className="items">Contact</li>
                    </ul>


                </nav> */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link smooth to='#home' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth
                                to='#aboutme'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth
                                to='#skills'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Skills
                            </Link>


                        </li>
                        <li className='nav-item'>
                            <Link smooth
                                to='#projects' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth
                                to='#contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>


            <div>
                <Aboutme />
            </div>
            <div>
                <Skills />
            </div>
            <div>
                <Project />
            </div>
            <div>
                <Contact />
            </div>





        </div>




    )
}
export default Header;