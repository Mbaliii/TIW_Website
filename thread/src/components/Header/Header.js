import React from "react";
import './Header.css'

const Header = () => {
    return (
        <div className="header" id='header'>
            {/* navbar */}

            <div className="container flex">
                <div className="header-content">
                    <h2 className="text-uppercase text-white op-07 fw-6 ls-2">Fashion Design, Branding,</h2>
                    <h1 className="text-white fw-6 header-title"> Hello, I'm a <span className="text-black">
                        Talented Fashion Designer In Diepkloof</span> that creates stunning and unique clothing <span className="text-black">Designs  </span>
                        inspired by the vibrant culture of the <span className="text-black">neighborhood</span></h1>
                    <div className="btn-groups flex">
                        <button type="button" className="btn-item bg-brown fw-4 ls-2">Explore My Work</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

// "The talented fashion designer in Diepkloof creates stunning and unique 
// clothing designs inspired by the vibrant culture of the neighborhood."