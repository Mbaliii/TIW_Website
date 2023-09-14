import React, { useState } from "react";
import './navbar.css';
import { BiSolidHomeAlt2} from 'react-icons/bi'
import { FaUserAlt } from "react-icons/fa";
import { FaBookOpen } from 'react-icons/fa';
import { RiCustomerServiceLine } from 'react-icons/ri';
import { BiSolidMessageSquareDetail } from "react-icons/bi";



const Navbar = () => {
    const [activeNav, setActiveNav] = useState('');
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiSolidHomeAlt2 /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><FaBookOpen /></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiCustomerServiceLine /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiSolidMessageSquareDetail /></a>
        </nav>
    )
};

export default Navbar