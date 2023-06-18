import React, { useContext } from 'react';
import './Experiance.css'
import { themeContext } from '../../Context';

const Experiance = () => {
        const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;
    return (
        <div className="experience" id='experience'>
            <div className="achievement">
                {/* darkMode */}
                <div className="circle mt-[300px]" style={{color: darkMode?'var(--orange)':''}}>8+</div>
                <span style={{color: darkMode?'white':''}}>years </span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle mt-[300px]" style={{color: darkMode?'var(--orange)':''}}>20+</div>
                <span style={{color: darkMode?'white':''}}>completed </span>
                <span>Projects</span>
            </div>
            <div className="achievement">
                <div className="circle mt-[300px]" style={{color: darkMode?'var(--orange)':''}}>5+</div>
                <span style={{color: darkMode?'white':''}}>companies </span>
                <span>Work</span>
            </div>
        </div>
    );
};

export default Experiance;