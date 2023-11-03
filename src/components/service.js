import React, { Component } from 'react';

import style from './service.module.css'

class Service extends Component {
    render() {
        const { img, desc } = this.props;
        return (
            <div className={style.card}>
                <h3>{desc}</h3>
                <img src={img} alt='img'/>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان</p>
            </div>
        );
    }
}

export default Service;