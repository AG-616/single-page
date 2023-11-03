import React, { Component } from 'react';

import style from './ContactUs.module.css';

class ContactUs extends Component {
    render() {
        return (
            <div className={style.container}>
                <div className={style.text}>
                    یک نوع متفاوت از فروشگاه هایی که دیده اید  
                    <p>لورم  با تولید سادگی بلکه مجله در ستون و سطرآنچنان که لازم است</p>   
                </div>
                <div className={style.form}>
                    <form>
                        <p>درخواست مشاوره</p>
                        <input type='text'placeholder='نام'/><br/>
                        <input type='text'placeholder='شماره تماس'/><br/>
                        <input type='email'placeholder='ایمیل'/><br/>
                        <textarea placeholder='پیام شما ...' rows="4" cols="50"/>
                        <button>ثبت اطلاعات</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactUs;