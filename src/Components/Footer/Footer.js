
import React from 'react';
import './Footer.scss';
// import '../../../public/scss/buttons.scss';


export default  function Footer(){
    return(
        <footer className="footer container text-center p-3 p-xxl-5 text-light">
            <div className="p-4 pb-0">
                <section className="mb-4 p-3 d-flex ">
                    <a
                        className="btn btn-transparent  btn-floating m-1"
                        href="#!"
                        role="button"
                        >
                            <i class="bi bi-facebook"></i>
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
            </div>

            <div className="text-center p-3 copy-right">
                © 2020 Copyright:
                <a className="text-white mx-2" href="https://mdbootstrap.com/">CST</a>
            </div>
        </footer>
    )
}
