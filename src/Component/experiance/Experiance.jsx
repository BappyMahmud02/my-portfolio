import React, { useContext } from 'react';
import './Experiance.css'

const Experiance = () => {
    //     const theme = useContext(themeContext);
    //   const darkMode = theme.state.darkMode;
    return (
        <div className="experience" id='experience'>
            <div className="achievement">
                {/* darkMode */}
                <div className="circle mt-[300px]" style={{}}>8+</div>
                <span style={{}}>years </span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle mt-[300px]" style={{}}>20+</div>
                <span style={{}}>completed </span>
                <span>Projects</span>
            </div>
            <div className="achievement">
                <div className="circle mt-[300px]" style={{}}>5+</div>
                <span style={{}}>companies </span>
                <span>Work</span>
            </div>
        </div>
    );
};

export default Experiance;