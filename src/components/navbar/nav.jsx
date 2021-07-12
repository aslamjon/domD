import React, { useState } from 'react';

import './nav.style.scss';
import menuImg from '../../img/Group 1.svg';
import logo from '../../img/image 2.png';
import viber from '../../img/Group 152.png';
import telegram from '../../img/Group 153.png';
import close from '../../img/Group 1 (1).svg';
import logo2 from '../../img/Mask Group (1).png';

export default function Navbar() {
    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(!show);
    }
    return (
        <nav className="container">
            <button type='button' onClick={toggleShow}>
                <img src={menuImg} alt="" />
            </button>
            <div className="menu" style={{ left: show ? "0" : "-1000px" }}>
                <div className="first">
                    <div className="close" onClick={toggleShow}> <img src={close} alt="" /></div>
                    <div className="logoo">
                        <a className=""><img src={logo2} alt="" /></a>
                        <div className="tel log3">
                            <div className="telImg"></div>
                            <div className="text">+38 (098) 271-50-35</div>
                        </div>
                        <a href="/" className="btn log3">ПЕРЕЗВОНИТЬ МНЕ</a>
                    </div>
                </div>
                <div className="title">Виды строительства</div>
                <div className="ul">
                    <li>
                        <a href="/">- Каркасные дома</a>
                    </li>
                    <li>
                        <a href="/">- Дома из клеёного бруса</a>
                    </li>
                    <li>
                        <a href="/">-  Фахверковые дома</a>
                    </li>
                    <li>
                        <a href="/">- Дома из брёвен</a>
                    </li>
                    <li>
                        <a href="/">- Беседки</a>
                    </li>
                    <li>
                        <a href="/">- Ремонт и отделка</a>
                    </li>
                </div>
                <div className="title">Наши работы</div>
                <div className="title">Отзывы клиентов</div>
                <div className="title">Партнеры</div>
                <div className="title">Контакты</div>
            </div>
            <ul className="">
                <li className="d-flex">
                    <a href="#">
                        <img src={logo} alt="logo" />
                    </a>
                    <span className="text-white title-message">
                        <div>Строительство деревянных домов <br /> <b>за <span className="gold">45</span> дней</b></div>
                    </span>
                </li>
                <li>
                    <div className="gold topMainSocial">Нажмите, чтобы начать общение</div>
                    <div className='mainSocial log2'>
                        <a href="#" className="social">
                            <img src={viber} alt="" />
                            <span>Viber</span>
                        </a>
                        <a href="#" className="social">
                            <img src={telegram} alt="" />
                            <span>Telegram</span>
                        </a>
                    </div>
                </li>

                <div className="call">
                    <div className="tel">
                        <div className="img"></div>
                        <span>+38 (098) 271-50-35</span>
                    </div>
                    <a href="#" className="callMe">
                        ПЕРЕЗВОНИТЬ МНЕ
                    </a>
                    <div className='mainSocial log1'>
                        <a href="#" className="social">
                            <img src={viber} alt="" />
                            <span>Viber</span>
                        </a>
                        <a href="#" className="social">
                            <img src={telegram} alt="" />
                            <span>Telegram</span>
                        </a>
                    </div>
                </div>
            </ul>
        </nav>
    )
}

