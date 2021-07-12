import React from 'react';

import './startedToday.scss'
import play from '../../img/Group 2.3.png';
import home from '../../img/image 72.png';
const StartedToday = () => (
    <section className="startedToday container">
        <div className="title">Приступим cегодня</div>
        <div className="des">Напишите нам, чтобы получить персональное предложение</div>
        <div className="box">
            <div className="titleBox log1">
                Cтроительство дома,
                не покажешь картинкой
            </div>
            <div className="flex">
                <div className="first">
                    <div className="titleBox log2">
                        Cтроительство дома,
                        не покажешь картинкой
                    </div>
                    <div className="desBox">
                        За каждым домом стоит целая <br />
                        история, смотри полезные <br />
                        презентации у нас на канале.
                    </div>
                    <a href="/" className="btn">Заказать расчет</a>
                </div>
                <div className="second">
                    <img className="homeImg" src={home} alt="" />
                    <div className="play">
                        <img className="" src={play} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
)
export default StartedToday;