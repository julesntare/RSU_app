
import React from 'react';
import './Footer.scss';
// import '../../../public/scss/buttons.scss';


export default  function Footer(){
    let date = new Date()
    const year = date.getFullYear();

    return(
        <footer className="footer mt-5 pt-3 container text-center text-white">
            <section className="mb-2 d-flex  footer-medias">
                <a
                    className="btn btn-transparent   btn-lg btn-floating m-1"
                    href="#!"
                    role="button"
                    >
                        <i className="bi bi-facebook"></i>
                </a>
                <a
                    className="btn btn-transparent  btn-lg  btn-floating m-1"
                    href="#!"
                    role="button"
                    >
                        <i className="bi bi-twitter"></i>
                </a>

                <a
                    className="btn  btn-transparent   btn-lg btn-floating m-1"
                    href="#!"
                    role="button"
                    >
                        <i className="bi bi-google"></i>
                </a>

                <a
                    className="btn btn-transparent  btn-lg btn-floating m-1"
                    href="#!"
                    role="button"
                    >
                        <i className="bi bi-instagram"></i>
                </a>

                <a
                    className="btn btn-transparent    btn-lg btn-floating m-1"
                    href="#!"
                    role="button"
                    >
                        <i className="bi bi-linkedin"></i>
                </a>
                <a
                    className="btn btn-transparent   btn-lg btn-floating m-1"
                    href="#!"
                    role="button"
                    >
                        <i className="bi bi-github"></i>
                </a>
            </section>

            <div className="text-center p-3 d-flex flex-column copy-right">
                <p>
                    ©  {year} All Rights Reserved
                    <a className="text-white ms-2 " href="https://ur.ac.rw" target="_blank">College of Science and Technology (CST)</a>
                </p>
                <p>
                    Made by <i className="bi bi-bag-heart text-white fw-bold "></i> with 
                    <a className="text-white ms-2 me-5  " href="https://www.github.com/Kress2000" target="_blank">Nsanzimfura Eric</a>And
                    <a className="text-white ms-5  " href="https://github.com/julesntare" target="_blank">Jules Ntare</a>
                </p>

            </div>
        </footer>
    )
}
