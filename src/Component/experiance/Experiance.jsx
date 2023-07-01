import React, { useContext } from 'react';
import './Experiance.css'
import { themeContext } from '../../Context';

const Experiance = () => {
        const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;
    return (
        <div className="experience " id='experience'>
            <div className="achievement ">
                {/* darkMode */}
                <div className="circle mt-[300px] " style={{color: darkMode?'var(--orange)':''}}>6+</div>
                <span className='font-bold text-2xl' style={{color: darkMode?'white':''}}>month </span>
                <span className='font-semibold'>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle mt-[300px]" style={{color: darkMode?'var(--orange)':''}}>20+</div>
                <span className='font-bold text-2xl' style={{color: darkMode?'white':''}}>completed </span>
                <span className='font-semibold'>Projects</span>
            </div>
            <div className="achievement">
                <div className="circle mt-[300px]" style={{color: darkMode?'var(--orange)':''}}>0</div>
                <span className='font-bold text-2xl' style={{color: darkMode?'white':''}}>companies </span>
                <span className='font-semibold'>Work</span>
            </div>
        </div>
    );
};

export default Experiance;