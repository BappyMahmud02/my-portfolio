import React, { useContext } from 'react';
import NavBar from '../Component/navbar/NavBar';
import './Main.css'
import { Outlet } from 'react-router-dom';
import Service from '../Component/services/Service';
import Intro from '../Component/intro/Intro';
import Experiance from '../Component/experiance/Experiance';
import Work from '../Component/works/Work';
import Portfolio from '../Component/portfolio/Portfolio';
import Testimonials from '../Component/testimonials/Testimonials';
import Contact from '../Component/contact/Contact';
import Footer from '../Component/footer/Footer';
import { themeContext } from '../Context';
const Main = () => {
    const theme = useContext(themeContext)
    const darkMood = theme.state.darkMood ;
    return (
        <div className='App' 
        style={{
            background: darkMood ? "black" : "",
            color: darkMood ? "white" : "",
          }}>
            <NavBar></NavBar>
            <Intro></Intro>
            <Service></Service>
            <Experiance></Experiance>
            {/* <Work></Work> */}
            <Portfolio></Portfolio>
            {/* <Testimonials></Testimonials> */}
            <Contact></Contact>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;