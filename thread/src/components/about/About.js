import React from "react";
import './about.css';
import ME from '../../assets/me-about.jpg';
import { BsAwardFill } from 'react-icons/bs';
import { BsFillFolderFill } from 'react-icons/bs';




const About = () => {
    return (
        <section id='about'>
            <h5 className="black-text">Get to know</h5>
            <h2 className="blue-text">About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt='About Image' />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <BsAwardFill className="about__icon" />
                            <h5>Experience</h5>
                            <h5> 1+ Years Experience</h5>
                        </article>

                        <article className="about__card">
                            <BsFillFolderFill className="about__icon" />
                            <h5>Experience</h5>
                            <h5>20+ Completed</h5>
                        </article>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <a href="#contact" className="blue-text">Let's Talk</a>
                </div>
            </div>
        </section>
    )
};

export default About