'use client'
import "@/styles/Navbar.css"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
            <img src= "/assets/logo.svg" alt="" />
        </div>
        <div className="menu">
            
        <li><Link activeClass="active" to="Hero1" spy={true} smooth={true} hashSpy={true} offset={50} duration={500}>Home</Link></li>
        <li><Link activeClass="active" to="Hero2" spy={true} smooth={true} hashSpy={true} offset={50} duration={500}>About Me</Link></li>
        <li><Link activeClass="active" to="Services" spy={true} smooth={true} hashSpy={true} offset={50} duration={500}>Services</Link></li>
        <li><Link activeClass="active" to="Projects" spy={true} smooth={true} hashSpy={true} offset={50} duration={500}>Projects</Link></li>
        <li><Link activeClass="active" to="Testimonials" spy={true} smooth={true} hashSpy={true} offset={50} duration={500}>Testimonials</Link></li>
        <li><Link activeClass="active" to="Contact" spy={true} smooth={true} hashSpy={true} offset={50} duration={500}>Contact</Link></li>
            <button>Download CV</button>
        </div>
    </div>
)
}

export default Navbar