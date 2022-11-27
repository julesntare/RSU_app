
import React from 'react';
import './Footer.scss';
// import '../../../public/scss/buttons.scss';


export default  function Footer(){
    let date = new Date()
    const year = date.getFullYear();

    return(
        <footer className="footer mt-5 pt-3 container">
            <div className=" p-3 text-light d-flex justify-content-between copy-right">
                <p>
                    ©  {year} All Rights Reserved
                    {/* <a className="text-white ms-2 " href="https://ur.ac.rw" target="_blank">College of Science and Technology (CST)</a> */}
                </p>
                <p>Privacy / Terms and Conditions</p>

            </div>
            {/* <p className=''>
                    Made by <i className="bi bi-bag-heart text-white fw-bold "></i> with 
                    <a className="text-white ms-2 me-5  " href="https://www.github.com/Kress2000" target="_blank">Nsanzimfura Eric</a>And
                    <a className="text-white ms-5  " href="https://github.com/julesntare" target="_blank">Jules Ntare</a>
                </p> */}
        </footer>
    )
}
