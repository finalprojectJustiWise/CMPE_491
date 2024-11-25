import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { GoLaw } from "react-icons/go";
import { FaUsers } from "react-icons/fa";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}> <ul className="navbar-menu">
        <li className="navbar-item"><a href="/CMPE_491"><GoLaw /> Home</a></li>
         <li className="navbar-item"><a href="/team"><FaUsers /> Team</a></li>
         </ul></nav>
  )
}

export default Navbar