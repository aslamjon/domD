import React from 'react';

import OwlCarouselProps from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

const Owl = ({ item, showItem = 3 }) => (
    <OwlCarouselProps
        className="owl-theme"
        items={String(showItem)}
        autoplay
        nav
        dots
        loop
        margin={10}
    >
        <div className="item">
            fsdfsdfsd
        </div>
    </OwlCarouselProps>
);


export default Owl;