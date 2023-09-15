import React from "react";
import './experience.css';
import { BiSolidBadgeCheck } from 'react-icons/bi';

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
                            <BiSolidBadgeCheck className="experience__details-icon" />
                            <div>
                                <h4 className="blue-text">HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BiSolidBadgeCheck className="experience__details-icon" />
                            <div>
                                <h4 className="blue-text">JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BiSolidBadgeCheck className="experience__details-icon" />
                            <div>
                                <h4 className="blue-text">CSS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BiSolidBadgeCheck className="experience__details-icon" />
                            <div>
                                <h4 className="blue-text">Bootstrap</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BiSolidBadgeCheck className="experience__details-icon" />
                            <div>
                                <h4 className="blue-text">Tailwind</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BiSolidBadgeCheck className="experience__details-icon" />
                            <div>
                                <h4 className="blue-text">React</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/*End Of frontend */}


                <div className="experience__backend">
                    <h3 >BackEnd Development</h3>

                    <div className="experience__content">
                        <article className="experience__details">
                            <BiSolidBadgeCheck className="experience__details-icon" />
                            <div>
                                <h4 className="blue-text">Node</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BiSolidBadgeCheck className="experience__details-icon" />
                            <div>
                                <h4 className="blue-text">MongoDB</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BiSolidBadgeCheck className="experience__details-icon" />
                            <div>
                                <h4 className="blue-text">PHP</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BiSolidBadgeCheck className="experience__details-icon" />
                            <div>
                                <h4 className="blue-text">MySQL</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BiSolidBadgeCheck className="experience__details-icon" />
                            <div>
                                <h4 className="blue-text">Python</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Experience