import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import MyWork from './MyWork';
import Skills from './Skills';

const MainHome = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <MyWork></MyWork>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default MainHome;