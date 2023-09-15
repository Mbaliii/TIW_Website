import React from "react";
import './header.css';
import CTA from "./CTA";
import ME from '../../assets/me.png';
import HeaderScocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm </h5>
                <h1>Sibusiso Mazibuko</h1>
                <h5 className="text-light"> Fashion Designer</h5>
                <CTA />
                <HeaderScocials />
                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
};

export default Header