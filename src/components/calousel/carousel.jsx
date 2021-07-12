import React from 'react';
import ReactDOM from 'react-dom';
import OwlCarouselProps, { OwlCarousel } from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import './carousel.scss';

import remmer from '../../img/image 69.png';
import sadolin from '../../img/image 66.png';
import pinotex from '../../img/image 80.png';
import adler from '../../img/image 67.png';
const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 4,

        }
    },
};

const Carousel = () => (
    <section className="carousel container">
        <div className="title">
            Используем только <span>экологически чистые <br /> и профессиональные материалы</span>
        </div>

        <OwlCarouselProps
            className="owl-theme"
            {...options}
        >
            <div className="item">
                <img src={remmer} alt="" />
            </div>
            <div className="item">
                <img src={sadolin} alt="" />
            </div>

            <div className="item">
                <img src={adler} alt="" />
            </div>
            <div className="item">
                <img src={pinotex} alt="" className="pinotex" />
            </div>
        </OwlCarouselProps>

    </section>
)
export default Carousel;