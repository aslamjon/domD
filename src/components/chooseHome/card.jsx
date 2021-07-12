import React from 'react';
import './card.scss';
import arrow from '../../img/Arrow 1.png'
const Card = ({ title, img, br = false }) => (
    <div className="card">
        <div className="title">
            {(() => {
                if (br) {
                    return <span dangerouslySetInnerHTML={{ __html: title }} />;
                }
                else {
                    return title;
                }
            })()}
        </div>
        <a href="#" className="moreDetails">
            Подробнее
            <img src={arrow} alt="" />
        </a>
        <img className="cardImg" src={img} alt="" />
    </div>
)

export default Card;