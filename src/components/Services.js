import React, { Component } from 'react';
import ReactCardSlider from "react-card-slider-component";


import style from './Services.module.css';
import Service from './service';
import img from '../images/code.jpeg';
import banner from '../images/banner.jpeg';


class Services extends Component {
    constructor() {
        super();
        this.state = ({
            data: [
                {image: img,
                     title: 'طراحی سایت',
                     description:' لورم ایپسوم متن ساختگی با استفاده از طراحان',
                      id:1},
                {image: banner,
                     title: 'سئو',
                     description:' لورم ایپسوم متن ساختگی با استفاده از طراحان',
                      id:2},
                {image: img,
                     title: 'قالب و افزونه',
                     description:' لورم ایپسوم متن ساختگی با استفاده از طراحان',
                      id:3},
                {image: banner,
                     title: 'پشتیبانی سایت',
                     description:' لورم ایپسوم متن ساختگی با استفاده از طراحان',
                      id:4},
                {image: img,
                     title: 'وردپرس',
                     description:' لورم ایپسوم متن ساختگی با استفاده از طراحان',
                      id:5},
                {image: banner,
                     title: 'توسعه سایت',
                     description:' لورم ایپسوم متن ساختگی با استفاده از طراحان',
                     id:6}
            ]
        })
    }
    render() {
        const { data } = this.state;
        return (
            <>
                <div className={style.Service}>
                    <h1>خدمات و پروژه ها</h1>
                    <div className={style.text}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </div>
                    <div className={style.card}>
                        {data.map(card => <Service key={card.id} img={card.image} desc={card.title} />)}
                    </div>
                        <ReactCardSlider slides={data} className='slider'/>
                </div>
                <style jsx>{`
                    #main-slider-container{
                        display: none;
                    }

                    @media (max-width: 999px){
                        #main-slider-container{
                            display:inline-flex;
                            padding-top:15px;
                        }
                    }
                `}</style>
            </>
        );
    }
}

export default Services;