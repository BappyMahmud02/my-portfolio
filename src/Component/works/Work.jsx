import React from 'react';
import './Work.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Work = () => {
    return (
        <div className='works container mx-auto '>

            <div className="awesome ">
                {/* dark mode */}
                <span style={{}}>Works for All these</span>
                <span >Brands Client</span>
                <spane>
                    Lorem ispum is simpley dummy text of printing of printing Lorem
                    <br />
                    ispum is simpley dummy text of printing
                    <br />
                    ispum is simpley dummy text of printing text of printing
                    <br />
                    ispum is simpley dummy text
                </spane>

                <button className="button s-button ">Hire Me</button>

                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* Right side  */}

            <div className="w-right">
                <div className='w-mainCircle '>


                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>{" "}
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>

                    {/* background Circles */}
                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>
                </div>
            </div>
        </div>

    );
};

export default Work;