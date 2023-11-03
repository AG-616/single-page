import React, { Component } from 'react';

import style from './Banner.module.css';
import img from '../images/banner.jpeg'
// import img from '../banner.jpeg';


class Banner extends Component {
    render() {
        return (
            <>
                <div className={style.banner}>
                    <img src={img} alt='banner'/>
                    <div className={style.text}>
                        <h1>
                            وبسایت <span>کدینو</span>
                        </h1>
                        <p> طراح سایت های خلاقانه </p>
                    </div>
                </div>
            </>
        );
    }
}

export default Banner;