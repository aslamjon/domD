import React, { useEffect, useRef } from 'react';
import './footer.scss';

import logo from '../../img/image 2.png';

const Footer = () => (
    <footer>
        <div className="container boxes">
            <div className="box">
                <img src={logo} alt="" />
            </div>
            <div className="box">
                <div className="title">Виды строительства</div>
                <ul>
                    <li>
                        <a href="/">- Каркасные дома</a>
                    </li>
                    <li>
                        <a href="/">- Дома из клеёного бруса</a>
                    </li>
                    <li>
                        <a href="/">- Фахверковые дома</a>
                    </li>
                    <li>
                        <a href="/">-  Дома из брёвен</a>
                    </li>
                    <li>
                        <a href="/">-  Беседки</a>
                    </li>
                    <li>
                        <a href="/">-  Ремонт и отделка</a>
                    </li>
                </ul>
                <div className="log1">
                    <a href="/" className="clickes">Наши работы</a>
                    <a href="/" className="clickes">Отзывы клиентов</a>
                    <a href="/" className="clickes">Партнеры</a>
                </div>
            </div>
            <div className="box log2">
                <a href="/" className="clickes">Наши работы</a>
                <a href="/" className="clickes">Отзывы клиентов</a>
                <a href="/" className="clickes">Партнеры</a>
            </div>
            <div className="box">
                <div className="title">Контакты</div>
                <div className="address">
                    <div className="map"></div>
                    <div>Украина, г. Одесса <br /> ул. Комитетская, 24Б</div>
                </div>
                <div className="mail">
                    <div className="mailImg"></div>
                    <div> Эл.почта: odessadomd@gmail.com</div>
                </div>
                <div className="tel">
                    <div className="telImg"></div>
                    <div>+38 (098) 271-50-35</div>
                </div>
                <div className="social">
                    <div className="facebook"></div>
                    <div className="insta"></div>
                    <div className="youtube"></div>
                    <div className="text">Свежие видео  <br />у нас на канале</div>
                </div>
            </div>
        </div>
    </footer>
)
export default Footer;