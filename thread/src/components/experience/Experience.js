import React from "react";
import './experience.css';
import { BsFillBagCheckFill } from 'react-icons/bs';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills do i have</h5>
            <h2 className="blue-text">My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3 >FrontEnd Development</h3>

                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillBagCheckFill />
                            <h4 className="blue-text">HTML</h4>
                            <small className="text-light">Experienced</small>
                        </article>

                        <article className="experience__details">
                            <BsFillBagCheckFill />
                            <h4 className="blue-text">JavaScript</h4>
                            <small className="text-light">Experienced</small>
                        </article>

                        <article className="experience__details">
                            <BsFillBagCheckFill />
                            <h4 className="blue-text">HTML</h4>
                            <small className="text-light">Experienced</small>
                        </article>

                        <article className="experience__details">
                            <BsFillBagCheckFill />
                            <h4 className="blue-text">HTML</h4>
                            <small className="text-light">Experienced</small>
                        </article>

                        <article className="experience__details">
                            <BsFillBagCheckFill />
                            <h4 className="blue-text">HTML</h4>
                            <small className="text-light">Experienced</small>
                        </article>

                        <article className="experience__details">
                            <BsFillBagCheckFill />
                            <h4 className="blue-text">HTML</h4>
                            <small className="text-light">Experienced</small>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                </div>
            </div>
        </section>
    )
};

export default Experience