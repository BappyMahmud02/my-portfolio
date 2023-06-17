import React from 'react';
import NavBar from '../Component/navbar/NavBar';
import './Main.css'
import { Outlet } from 'react-router-dom';
const Main = () => {
    return (
        <div className='App'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;