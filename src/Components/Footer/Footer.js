
import React from 'react';
import './Footer.scss';


export default  function Footer(){
    let date = new Date()
    const year = date.getFullYear();

    return(
        <div className="footer mt-3  w-100 ">
            <div className=" p-1 d-flex justify-content-between align-items-center px-3 px-lg-5 copy-right">
                <p className=' mt-2'>
                    ©  {year} All Rights Reserved
                </p>
                <p className=' mt-2'>Privacy / Terms and Conditions</p>
            </div>
            {/* <p className=''>
                    Made by <i className="bi bi-bag-heart text-white fw-bold "></i> with 
                    <a className="text-white ms-2 me-5  " href="https://www.github.com/Kress2000" target="_blank">Nsanzimfura Eric</a>And
                    <a className="text-white ms-5  " href="https://github.com/julesntare" target="_blank">Jules Ntare</a>
                </p> */}
        </div>
    )
}
