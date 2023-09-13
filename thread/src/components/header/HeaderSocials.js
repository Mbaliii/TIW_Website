import React from "react";
import './header.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

const HeaderScocials = () => {
    return (
        <div className="header__socials">
            <a href="https://github.com/" target="_blank"><BsGithub /></a>
            <a href="https://www.linkedin.com/" target="_blank"><BsLinkedin /></a>
            <a href="https://www.facebook.com/" target="_blank"><BsFacebook /></a>
        </div>
    )
};

export default HeaderScocials