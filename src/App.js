import React, { Component } from 'react';
// import { Route, Switch, Link } from 'react-router-dom';

import style from './App.module.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
// import AboutUs from './components/AboutUs';
// import Blogs from './components/Blogs';
// import Products from './components/Products';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div className={style.container}>
                <Navbar/> 
                <Home/>
                {/* <div>
                    <Route exact patth='/' component={Home} />
                    <Route patth='/aboutus' component={AboutUs} />
                    <Route patth='/blogs' component={Blogs} />
                    <Route patth='/products' component={Products} />
                </div> */}
                <Footer/>
            </div>
        );
    }
}

export default App;