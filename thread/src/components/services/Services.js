import React from "react";
import './services.css';
import { BiCheckDouble } from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What i offer</h5>
            <h2 className="blue-text">Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheckDouble className="service__list-icon" />
                            <p>Aenean condimentum nec augue non hendrerit. </p>
                        </li>

                        <li>
                            <BiCheckDouble className="service__list-icon" />
                            <p>Aenean condimentum nec augue non hendrerit. </p>
                        </li>

                        <li>
                            <BiCheckDouble className="service__list-icon" />
                            <p>Aenean condimentum nec augue non hendrerit. </p>
                        </li>

                        <li>
                            <BiCheckDouble className="service__list-icon" />
                            <p>Aenean condimentum nec augue non hendrerit. </p>
                        </li>

                        <li>
                            <BiCheckDouble className="service__list-icon" />
                            <p>Aenean condimentum nec augue non hendrerit. </p>
                        </li>

                        <li>
                            <BiCheckDouble className="service__list-icon" />
                            <p>Aenean condimentum nec augue non hendrerit. </p>
                        </li>
                    </ul>
                </article>
                {/* end of ui/ux  */}

                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheckDouble className="service__list-icon" />
                            <p>Aenean condimentum nec augue non hendrerit. </p>
                        </li>

                        <li>
                            <BiCheckDouble className="service__list-icon" />
                            <p>Aenean condimentum nec augue non hendrerit. </p>
                        </li>

                        <li>
                            <BiCheckDouble className="service__list-icon" />
                            <p>Aenean condimentum nec augue non hendrerit. </p>
                        </li>

                        <li>
                            <BiCheckDouble className="service__list-icon" />
                            <p>Aenean condimentum nec augue non hendrerit. </p>
                        </li>

                        <li>
                            <BiCheckDouble className="service__list-icon" />
                            <p>Aenean condimentum nec augue non hendrerit. </p>
                        </li>

                        <li>
                            <BiCheckDouble className="service__list-icon" />
                            <p>Aenean condimentum nec augue non hendrerit. </p>
                        </li>
                    </ul>
                </article>
                {/* end of web development */}

                <article className="service">
                    <div className="service__head">
                        <h3>Content Creator</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheckDouble className="service__list-icon" />
                            <p>Aenean condimentum nec augue non hendrerit. </p>
                        </li>

                        <li>
                            <BiCheckDouble className="service__list-icon" />
                            <p>Aenean condimentum nec augue non hendrerit. </p>
                        </li>

                        <li>
                            <BiCheckDouble className="service__list-icon" />
                            <p>Aenean condimentum nec augue non hendrerit. </p>
                        </li>

                        <li>
                            <BiCheckDouble className="service__list-icon" />
                            <p>Aenean condimentum nec augue non hendrerit. </p>
                        </li>

                        <li>
                            <BiCheckDouble className="service__list-icon" />
                            <p>Aenean condimentum nec augue non hendrerit. </p>
                        </li>

                        <li>
                            <BiCheckDouble className="service__list-icon" />
                            <p>Aenean condimentum nec augue non hendrerit. </p>
                        </li>
                    </ul>
                </article>
            </div>
        </section >
    )
};

export default Services;