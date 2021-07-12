import React from 'react';

import './promise.scss';

const PromiseBox = ({ img, title, des, bold = false }) => (
    <div className="box">
        <div className="img">
            <img src={img} alt="" />
        </div>
        <div className="mainSection">
            <div className="title">{title}</div>
            <div className="des">{(() => {
                if (bold) {
                    return <span dangerouslySetInnerHTML={{ __html: des }} />;
                }
                else return des
            })()}</div>
        </div>
    </div>
)
export default PromiseBox;