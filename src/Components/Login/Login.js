import React, { useState, useRef} from "react";
import "./Login.scss"
import Logo from "../../assets/logo/urLogo.png";


const LoginForm = () => {
  const refName = useRef();
  const refPassword = useRef();

    const [popupStyle, showPopup] = useState("hide");

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
    const SubmitLoginData = (e)=>{
      e.preventDefault();
      const UserName = refName.current.value;
      const Password = refPassword.current.value;
      console.log({UserName: UserName, Password: Password} );
      if(Password === "" && UserName === "" ){
        popup();
      }
    }
    
    return (
        <div className="row container-fluid d-flex login flex-column justify-content-start align-items-center">
          <div className="col-12 col-md-6 col-lg-4">
            <h1 className="text-primary w-100 fw-bold h2 text-center mb-2">
              <img 
              src={Logo} 
              className="me-3"
               width="50px"
              height ="50px" 
              />
              RSU
            </h1>
            <p className="fw-bold mb-4 text-primary text-center"><small> Sign in with  </small><strong>College of Science and Technology</strong> </p>
            <div className="cover px-5 border">
              <h3 className="text-primary fw-bold my-2">Login</h3>
              <form className="d-flex align-items-center container form-login p-4 flex-column border" onSubmit={SubmitLoginData}>
                  <input type="text" placeholder="Username"  className="my-2 w-100  "  ref={refName} />
                  <input type="password" placeholder="Password" className="my-2 w-100 " ref={refPassword} />
                  <button className="btn w-100 my-2 login-btn">Login</button>
              </form>
              <div className="password-reset mt-3 px-4 mb-5 w-100 text-primary fw-bold">
                  <p className="ms-2">Forgot password?</p>
                  <p className="text-end me-2 lead">Register</p>
              </div>
            </div>

            <div className={popupStyle}>
                <h3 className=" h3 text-danger">Login Failed</h3>
                <p className="text-danger fw-bold">Username or password incorrect</p>
            </div>
            
          </div>
        </div>
    )
}

export default LoginForm
