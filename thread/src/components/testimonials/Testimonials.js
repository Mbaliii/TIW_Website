import React from "react";
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import { Pagination } from 'swiper';
import {Swiper, SWiperSlide} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination'




const data = [
    {
        avatar: AVTR1,
        name: 'Tiffinay Doe',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 'Robert James',
        image: AVTR2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 'Todd Rhames',
        image: AVTR3,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    
    },
    {
        id: '',
        image:AVTR4,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
]
const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review</h5>
            <h2 className="blue-text">Testimonials</h2>

            <div className="container testimonials__container">
                <article className="testimonials">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="Avatar One" />
                    </div>
                    <h5 className="client__name">Tiffinay Doe</h5>
                    <small className="client__review">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </small>
                </article>

                <article className="testimonials">
                    <div className="client__avatar">
                        <img src={AVTR2} alt="Avatar One" />
                    </div>
                    <h5 className="client__name">Robert James</h5>
                    <small className="client__review">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </small>
                </article>

                <article className="testimonials">
                    <div className="client__avatar">
                        <img src={AVTR3} alt="Avatar One" />
                    </div>
                    <h5 className="client__name">Todd Rhames</h5>
                    <small className="client__review">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </small>
                </article>

                <article className="testimonials">
                    <div className="client__avatar">
                        <img src={AVTR4} alt="Avatar One" />
                    </div>
                    <h5 className="client__name">Fatima Priyanka</h5>
                    <small className="client__review">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </small>
                </article>
            </div>
        </section>
    )
}

export default Testimonials