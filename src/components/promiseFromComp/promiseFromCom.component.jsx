import React from 'react';

import './promise.scss';
import PromiseBox from './promiseBox';

import wallet from '../../img/Vector.svg';
import calendar from '../../img/appointment.svg';
import time from '../../img/007-free-time.svg';
import eco from '../../img/Ресурс 3.svg';
import arch from '../../img/architecture.svg';
import brush from '../../img/brush.svg';

const PromiseFromCom = () => (
    <section className="promise container">
        <div className="titlee">Заботимся о Вашем <span>спокойствии</span></div>
        <div className="promises">
            <div className="first">
                <PromiseBox
                    img={wallet} title="Не поднимаем стоимость"
                    des="Фиксируем <span>стоимость</span> <br/> работ в договоре" bold={true} />
                <PromiseBox
                    img={calendar} title="Поэтапная оплата"
                    des="Оплата каждого вида <br/> работ <span>разбита</span> на 2 части <br/>
                (50% аванс 50% по <br/> завершению)" bold={true} />
                <PromiseBox
                    img={time} title="Соблюдаем сроки"
                    des="Несем <span>ответственность</span> <br/> за соблюдение сроков." bold={true} />
                <PromiseBox
                    img={eco} title="Экологичность"
                    des="Дом <span>строится</span> из <br/> натуральных материалов " bold={true} />
                <PromiseBox
                    img={arch} title="Самостоятельно"
                    des="Закупаем и <span>доставляем</span> <br/> на объект, качественные <br/> материалы и расходники " bold={true} />
                <PromiseBox
                    img={brush} title="Проводим уборку"
                    des="В процессе работ и <br/> <span>вывозим</span> мусор после <br/> завершения работ." bold={true} />
            </div>
        </div>
    </section>
)
export default PromiseFromCom;