import React, { Component } from 'react';

import Banner from './Banner';
import Services from './Services';
import ContactUs from './ContactUs';

class Home extends Component {
    render() {
        return (
            <>
              <Banner />  
              <Services/>
              <ContactUs/>
            </>
        );
    }
}

export default Home;