import React from 'react';
import './Animation.scss';
import Liquid from "../../assets/img/Liquid.mp4";
import   SvgBg from "../../assets/img/Svg.PNG";


function Animation (){
    return (
    <div className='animation-box d-flex position-absolute'>
        <video autoPlay loop muted playsInline={true} className= "animation-video" >
            <source src={Liquid} type="video/mp4" />
        </video>
        <img  src={SvgBg} alt= "bg svg" className='.svg-img'/>
    </div>
   
    )
}
export default  Animation
