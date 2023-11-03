import React from 'react';
import { useState } from 'react';

import style from './Navbar.module.css';
import logo from '../images/logo.png';
import Burger from './Burger'



function Navbar() {
        const [hamburgerOpen, setHamburgerOpen] = useState(false);

        const toggleHamburger = () =>{
            setHamburgerOpen(!hamburgerOpen)
        }
        return (
            <>
            <div className={style.Nav}>
                <div className={style.navLogo}>
                    <img src={logo} alt='logo'/>
                </div>
            <header>
                <div className={style.navList} >
                    <ul>
                        <li >
                            <a className={style.active} href='/'>صفحه اصلی</a>
                        </li>
                        <li>
                            <a href='products'>تازه ها</a>
                            </li>
                        <li>
                            <a href='blogs'>بلاگ</a>
                            </li>
                        <li>
                            <a href='aboutus'>خدمات</a>
                            </li>
                    </ul>
                </div>
            </header>
                <div className={style.contactUs}>
                    <button>ارتباط با ما</button>
                </div>

                 <div className='navMobile'>
                    <div className={style.hamburger} onClick={toggleHamburger}>
                            <Burger isOpen={hamburgerOpen}/>
                    </div>
                    <div className='mobileNav'>
                    <ul>
                        <li >
                            <a className={style.active} href='/'>صفحه اصلی</a>
                        </li>
                        <li>
                            <a href='products'>تازه ها</a>
                            </li>
                        <li>
                            <a href='blogs'>بلاگ</a>
                            </li>
                        <li>
                            <a href='aboutus'>خدمات</a>
                            </li>
                    </ul>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .mobileNav{
                display:none;
            }
            .mobileNav ul{
                display:flex;
                flex-wrap: wrap;
                float: right;
                margin: 0px;
                padding: 0px;
                overflow: hidden;
            }
            .mobileNav ul li{
                list-style-type: none;
                padding-right: 10px;

            }
            @media (max-width: 767px){
                .mobileNav {
                    display: ${hamburgerOpen ? 'inline' : 'none'};
                    background-color: #fff;
                    height: 100%;
                    width: 50vw;
                    position: fixed;
                    top:0;
                    right:0;
                    z-index:6;
                    // transition: all 250ms ease-out;
                    transition: top 0.5s ease-out;
                    transform: ${hamburgerOpen ? ` translate(0)`:`translate(360px)`};
                }

                .mobileNav ul{
                    width:100%;
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    gap: 2.5rem;
                    text-align: center;     
                }

                .mobileNav ul a{
                    text-decoration: none;
                    color:#043646;
                    font-weight: bold;
                    font-size: 16px;
                }
            }
            `}</style>
            </>
        );
}

export default Navbar;