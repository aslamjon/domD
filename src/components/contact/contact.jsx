import React from 'react';
import './contact.scss';

import map from '../../img/map.svg';
import mail from '../../img/message.svg';
import viber from '../../img/Group 152.png';
import telegram from '../../img/Group 153.png';
import tel from '../../img/1.2.svg';

const Contact = () => (
    <section className="contact">
        <div className="container">
            <div className="title">Наши контакты</div>
            <div className="flex">
                <div className="first">
                    <div className="ques">Задать вопрос</div>
                    <div className="des">Остались вопросы? Наши эксперты ответят вам в ближайшее рабочее время!</div>
                    <form action="/">
                        <textarea name="text" id="" cols="30" rows="10" placeholder="Ваш вопросы"></textarea> <br />
                        <input type="tel" name="tel" id="" placeholder="Телефон" /><br />
                        <button type="submit" className='btn'>Отправить вопрос</button>
                    </form>
                </div>
                <div className="second">
                    <div className="text">Мы на связи</div>
                    <div className="addresse">
                        <div className="map"></div>
                        <div>Украина, г. Одесса <br />ул. Комитетская, 24Б</div>
                    </div>
                    <div className="mail">
                        <div className="mailImg"></div>
                        <span>Эл.почта: odessadomd@gmail.com</span>
                    </div>
                    <div className="socioalBtn">
                        <a href="/">
                            <img src={viber} alt="" />
                            <span>Viber</span>
                        </a>
                        <a href="/">
                            <img src={telegram} alt="" />
                            <span>Telegram</span>
                        </a>
                    </div>
                    <div className="tel">
                        <div className="telImg"></div>
                        <div>+38 (098) 271-50-35 <br /> <span>Мы на связи</span> </div>
                    </div>
                    <a href="/" className="btn">ПЕРЕЗВОНИТЬ МНЕ</a>

                </div>

            </div>
        </div>
    </section>
)
export default Contact;