import React from 'react';
import OwlCarouselProps from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import './viewHome.scss';

import img1 from '../../img/изображение_viber_2021-03-30_16-58-25.png';
import img2 from '../../img/изображение_viber_2021-03-30_16-58-26-2 1.png';
import img3 from '../../img/изображение_viber_2021-03-30_16-58-26 1.png';
import img4 from '../../img/изображение_viber_2021-03-30_16-58-26-6 1.png';
import img5 from '../../img/изображение_viber_2021-03-30_16-58-26-3.png';
import img6 from '../../img/изображение_viber_2021-03-30_16-58-27-9 1.png';
import arrow from '../../img/Arrow 1.png';
import check from '../../img/Union.svg'
const ViewHome = () => (
    <seciont className="viewHome">
        <div className="title">
            <div><span>Посмотрите на готовые дома</span> с комплексом</div>
            отделки и прокладки коммуникаций.
        </div>
        <div className="viewImg">
            <div className="first">
                <div className="">
                    <img src={img1} alt="" />
                </div>
                <div className="">
                    <img src={img2} alt="" />
                </div>
                <div className="">
                    <img src={img3} alt="" />
                </div>
            </div>
            <div className="second">
                <div className="">
                    <img src={img4} alt="" />
                </div>
                <div className="">
                    <img src={img5} alt="" />
                </div>
                <div className="">
                    <img src={img6} alt="" />
                </div>
            </div>
        </div>

        <OwlCarouselProps
            className="owl-theme log1"
            items='1'
            autoplay
            nav
            dots={false}
            loop
            margin={10}
        >
            <div className="item">
                <img src={img1} alt="" />
            </div>
            <div className="item">
                <img src={img2} alt="" />
            </div>
            <div className="item">
                <img src={img3} alt="" />
            </div>
            <div className="item">
                <img src={img4} alt="" />
            </div>
            <div className="item">
                <img src={img5} alt="" />
            </div>
            <div className="item">
                <img src={img6} alt="" />
            </div>
        </OwlCarouselProps>

        <div className="startBuilding container">
            <div className="allView">
                <a href='/' className="btn">Смотреть все <img src={arrow} alt="" /></a>
            </div>
            <div className="question">
                Готовы <span>начать строить дом</span> <br /> с надежной компанией? </div>
            <div className="article">
                <div className="imgDir">
                    <div className="textD">
                        <div>Здравствуйте, меня зовут</div>
                        <div>Ярослав  Доля.</div>
                        Я руководитель компании <span>DOM-D</span>
                    </div>
                </div>
                <div className="checkes">
                    <OwlCarouselProps
                        className="owl-theme log1"
                        items='1'
                        autoplay
                        nav
                        dots={false}
                        loop
                        margin={10}
                    >
                        <div className="item">
                            <div className='flex'>
                                <img src={check} alt="" />
                                <div className="text">
                                    Мы не просто <span>предоставляем</span> <br /> услуги мы отвечаем за весь <br /> комплекс работ от <br /> проектирования до гарантийного <br /> обслуживания.
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className='flex'>
                                <img src={check} alt="" />
                                <div className="text">
                                    Вы не <span>рискуете</span> своими деньгами, <br />
                                    нервами и временем. Мы берем на <br />
                                    себя полную материальную <br />
                                    ответственность по договору за <br />
                                    дом, работы, сроки выполнения <br />
                                    каждого этапа работы
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className='flex'>
                                <img src={check} alt="" />
                                <div className="text">
                                    Наша команда стремится к полной <br /> <span>прозрачности</span> в работе, поэтому мы <br /> с удовольствием показываем <br /> каждый процесс строительства, <br /> без прикрас.
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className='flex'>
                                <img src={check} alt="" />
                                <div className="text">
                                    Мы <span>гарантируем</span> Ваше <br /> минимальное вовлечение в рутину <br /> строительства, беря на себя весь <br /> комплекс строительных работ
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className='flex'>
                                <img src={check} alt="" />
                                <div className="text">
                                    Мы <span>знаем все</span> о строительстве <br />
                                    деревянных домов и <br /> строительных работах
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className='flex'>
                                <img src={check} alt="" />
                                <div className="text">
                                    <span>Проектируем</span> и строим авторские <br /> дома из дерева и клееного бруса
                                </div>
                            </div>
                        </div>
                    </OwlCarouselProps>
                    <div className="firstSection">
                        <div className='flex'>
                            <img src={check} alt="" />
                            <div className="text">
                                Мы не просто <span>предоставляем</span> <br /> услуги мы отвечаем за весь <br /> комплекс работ от <br /> проектирования до гарантийного <br /> обслуживания.
                            </div>
                        </div>
                        <div className='flex'>
                            <img src={check} alt="" />
                            <div className="text">
                                Вы не <span>рискуете</span> своими деньгами, <br />
                                нервами и временем. Мы берем на <br />
                                себя полную материальную <br />
                                ответственность по договору за <br />
                                дом, работы, сроки выполнения <br />
                                каждого этапа работы
                            </div>
                        </div>
                    </div>
                    <div className="firstSection">
                        <div className='flex'>
                            <img src={check} alt="" />
                            <div className="text">
                                Наша команда стремится к полной <br /> <span>прозрачности</span> в работе, поэтому мы <br /> с удовольствием показываем <br /> каждый процесс строительства, <br /> без прикрас.
                            </div>
                        </div>
                        <div className='flex'>
                            <img src={check} alt="" />
                            <div className="text">
                                Мы <span>гарантируем</span> Ваше <br /> минимальное вовлечение в рутину <br /> строительства, беря на себя весь <br /> комплекс строительных работ
                            </div>
                        </div>
                    </div>
                    <div className="firstSection">
                        <div className='flex'>
                            <img src={check} alt="" />
                            <div className="text">
                                Мы <span>знаем все</span> о строительстве <br />
                                деревянных домов и <br /> строительных работах
                            </div>
                        </div>
                        <div className='flex'>
                            <img src={check} alt="" />
                            <div className="text">
                                <span>Проектируем</span> и строим авторские <br /> дома из дерева и клееного бруса
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </seciont>
)
export default ViewHome;