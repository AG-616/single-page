import React, { Component } from 'react';

import style from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/logo.png';

class Footer extends Component {
    render() {
        return (
            <div className={style.footer}>
                <div className={style.desc}>
                    <div className={style.logo}>
                    <img src={logo} alt='logo'/>
                    <p>وب کدینو<br/>
                        انجام پروژه های برنامه نویسی | پشتیبانی دائمی | جامع
                    </p>
                    </div>
                    <br/>
                    <div className={style.content}>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                    </div>
                </div>
                <div className={style.Sections}>
                    <div>
                        <p>بخش های سایت</p>

                        <div className={style.link}>
                            <div className={style.squer}></div>
                            <p>پروژه ها</p>
                        </div>

                        <div className={style.link}>
                            <div className={style.squer}></div>
                            <p>پروژه ها</p>
                        </div>

                        <div className={style.link}>
                            <div className={style.squer}></div>
                                <p>پروژه ها</p>
                        </div>
                        
                        <div className={style.link}>
                            <div className={style.squer}></div>
                                <p>پروژه ها</p>
                        </div>
                    </div>
                    
                </div>
                <div className={style.contactus}>
                    <p>اطلاعات</p>
                    <p className={style.info}>شماره تماس : ۰۹۱۰۶۵۳۰۹۱۳</p>
                    <p className={style.info}>ایمیل : webcodino@gmail.com</p>
                    <p className={style.info}>آدرس : بزرگراه اشرفی اصفهانی </p>

                    <div className={style.social}>
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faTelegram} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
                
                <div className={style.desierd}>
                    ساخته شده با <FontAwesomeIcon icon={faHeart} beat/> & <FontAwesomeIcon icon={faCoffee} beat />
                </div>
            </div>
        );
    }
}

export default Footer;