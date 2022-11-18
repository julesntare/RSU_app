
import React from 'react';
import './Footer.scss';
// import '../../../public/scss/buttons.scss';


export default  function Footer(){
    return(
        <footer className="footer mt-5 pt-3 container bg-primary text-center text-white">
            <section className="mb-2 d-flex  footer-medias">
                <a
                    className="btn btn-transparent  btn-floating m-1"
                    href="#!"
                    role="button"
                    >
                        <i className="bi bi-facebook"></i>
                </a>
                <a
                    className="btn btn-transparent  btn-floating m-1"
                    href="#!"
                    role="button"
                    >
                        <i className="bi bi-twitter"></i>
                </a>

                <a
                    className="btn  btn-transparent btn-floating m-1"
                    href="#!"
                    role="button"
                    >
                        <i className="bi bi-google"></i>
                </a>

                <a
                    className="btn btn-transparent btn-floating m-1"
                    href="#!"
                    role="button"
                    >
                        <i className="bi bi-instagram"></i>
                </a>

                <a
                    className="btn btn-transparent  btn-floating m-1"
                    href="#!"
                    role="button"
                    >
                        <i className="bi bi-linkedin"></i>
                </a>
                <a
                    className="btn btn-transparent  btn-floating m-1"
                    href="#!"
                    role="button"
                    >
                        <i className="bi bi-github"></i>
                </a>
            </section>

            <div className="text-center p-3 copy-right">
                © 2020 Copyright:
                <a className="text-white mx-2 lead" href="https://mdbootstrap.com/">CST</a>
            </div>
        </footer>
    )
}
