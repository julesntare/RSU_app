import React, { useState, useRef} from "react";
import "./Login.scss"

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
        <div className=" container-fluid d-flex p-5 position-relative flex-column justify-content-start align-items-center  bg-light h-100 w-100">
            <h1 className="text-primary mb-3">Book a Room in CST</h1>
            <div className="cover">
              <h1 className="text-primary fw-bold my-2">Login</h1>
              <form className="bg-secondary d-flex align-items-center p-5 flex-column " onSubmit={SubmitLoginData}>
                  <input type="text" placeholder="Username"  className="my-2"  ref={refName} />
                  <input type="password" placeholder="Password" className="my-2" ref={refPassword} />
                  <button className="login-btn  btn my-2 w-50">Login</button>
              </form>
              <div className="password-reset mt-3 mb-5 w-100 text-primary fw-bold">
                  <p className="ms-2">Forgot password?</p>
                  <p className="text-end me-2 lead">Register</p>
          </div>
            </div>

            <div className={popupStyle}>
                <h3 className=" h3 text-danger">Login Failed</h3>
                <p className="text-danger fw-bold">Username or password incorrect</p>
            </div>
            
        </div>
    )
}

export default LoginForm
