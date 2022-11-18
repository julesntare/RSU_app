import React from 'react';
import './Animation.scss';
import Liquid from "../../assets/img/Liquid.mp4";
import   SvgBg from "../../assets/img/Svg.PNG";


function Animation (){
    return (
        <video autoPlay loop muted playsInline={true} className= "animation-video" >
            <source src={Liquid} type="video/mp4" />
        </video>
   
   
    )
}
export default  Animation
