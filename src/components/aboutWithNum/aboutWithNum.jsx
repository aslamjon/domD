import React from 'react';

import './aboutWithNum.scss';
import youtube from '../../img/Group (1).svg';
const AboutWithNum = () => (
    <section className="container color1">
        <div className='aboutWithNum'>


            <div className="first">
                <div className="num">15</div>
                <div className="text">лет опыта <br /> в стоительстве</div>
            </div>
            <div className="first">
                <div className="num">15</div>
                <div className="text">специалистов <br /> в штате</div>
            </div>
            <div className="first">
                <div className="num">53</div>
                <div className="text">построенных <div className="dom">домов</div></div>
            </div>
            <div className="first">
                <a href="/" className="youtube">
                    <img src={youtube} alt="" />
                </a>
                <div className="text"><div>Наши <span>ВИДЕО </span></div> <div className="vib">об отделке и <br /> устройстве <br /> смотрите</div>на <br /> канале DOM-D</div>
            </div>
        </div>
    </section>
)
export default AboutWithNum;