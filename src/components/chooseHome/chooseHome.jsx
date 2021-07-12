import React from 'react';
import OwlCarouselProps from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import './chooseHome.scss';
import Card from './card';

import img1 from "../../img/каркас 1.png";
import img2 from '../../img/клееній 1.png';
import img3 from '../../img/Дома из брёвен 1.png';
import img4 from '../../img/Фахверковые дома 1.png';
import img5 from '../../img/бесед 1.png';
import img6 from '../../img/ыафуп 1.png';
const ChooseHome = () => (
    <section className="chooseHome container">
        <div className="title">
            <span>Оказываем услуги комплексно</span>, <br />
            <div className="d-inline">совмещая отдельные виды работ</div>
        </div>
        <div className="first">
            <Card title="Каркасные дома" img={img1} />
            <Card title="Дома из <br/> клеёного бруса" img={img2} br={true} />
            <Card title="Дома из брёвен" img={img3} />
            <Card title="Фахверковые <br/> дома" img={img4} br={true} />
            <Card title="Беседки" img={img5} />
            <Card title="Ремонт и <br/> отделка" img={img6} br={true} />
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
                    <Card title="Каркасные дома" img={img1} />
                </div>
                <div className="item">
                    <Card title="Дома из <br/> клеёного бруса" img={img2} br={true} />
                </div>
                <div className="item">
                    <Card title="Дома из брёвен" img={img3} />
                </div>
                <div className="item">
                    <Card title="Фахверковые <br/> дома" img={img4} br={true} />
                </div>
                <div className="item">
                    <Card title="Беседки" img={img5} />
                </div>
                <div className="item">
                    <Card title="Ремонт и <br/> отделка" img={img6} br={true} />
                </div>
            </OwlCarouselProps>
        </div>
    </section>
)

export default ChooseHome;