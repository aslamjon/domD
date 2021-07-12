import React from 'react';

import './header.scss';
import book from "../../img/image-removebg-preview-(1)-1 2.png";
import paper from "../../img/image-removebg-preview-(3)-1 1.png";
const Header = () => (
    <header className="container">
        <div className="Ltitle log1 text-white">
            Сделаем ваш <span className="gold">Дом</span>
        </div>
        <div className="Lfirst log1">
            готовым к комфортному <br />проживанию
        </div>
        <div className="flex">
            <div className="text-section">
                <div className="title text-white">
                    Сделаем ваш <span className="gold">Дом</span>
                </div>
                <div className="description">
                    <div className="first">
                        готовым к комфортному <br />проживанию
                    </div>
                    <div className="second">
                        Строительство деревянных домов «под ключ»: <br />
                        коттеджи, беседки, бани, дома из клееного бруса
                    </div>
                </div>
                <div className="choose">
                    <div className="first">
                        <a href="#">Демонтаж</a>
                        <a href="#">Бетонные <br />работы</a>
                        <a href="#">Возведение <br />стен</a>
                        <a href="#">Кровельные <br />работы</a>
                        <a href="#">Отделка <br />фасадов</a>
                        <a href="#">Инженерные <br />работы</a>
                    </div>
                </div>
            </div>
            <div className="zakaz">
                <div className="title">Заказать расчет</div>
                <div className="des">Оказываем  услуги комплексно, <br />совмещая отдельные виды работ</div>
                <div className="img">
                    <img src={book} alt="" />
                    <img src={paper} alt="" />
                </div>
                <a className="zakazBtn">Заказать расчет</a>
            </div>
            <div className="log2">
                <div className="second">
                    Строительство деревянных домов «под ключ»: <br />
                    коттеджи, беседки, бани, дома из клееного бруса
                </div>
                <a className="zakazBtn">Заказать расчет</a>
            </div>
        </div>
    </header>
)

export default Header;