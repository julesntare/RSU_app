import React from 'react';
import './Animation.scss';
import Liquid from "../../assets/img/Liquid.mp4";

function Animation (){
    return (
    <video autoPlay loop muted plays-inline="true" className= "animation container-fluid" >
        <source src={Liquid} type="video/mp4" />
    </video>
    )
}
export default  Animation
