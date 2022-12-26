import React, { useState, useRef} from "react";
import "./Login.scss"
import Logo from "../../assets/logo/urLogo.png";
import Register from "../Register/Register";


const LoginForm = () => {
  const refName = useRef();
  const refPassword = useRef();
  const [popupStyle, showPopup] = useState("hide");
  const [rememberPassword, setRememberPassword]= useState(false);

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
    const handleLoginClick = ()=> {
      setRememberPassword(true)
    }
    return (
        <div className="row d-flex login flex-column justify-content-start align-items-center">
          <div className="col-12 col-md-6 p-4">
            <div className="cover px-5 border">
            <h1 className="text-dark w-100 fw-bold h2 text-center my-3">
              RSU Authentication
            </h1>
              <h3 className="text-primary fw-bold my-2"></h3>
              <form className="d-flex align-items-center container  p-4 flex-column " onSubmit={SubmitLoginData}>
                  <input type="text" placeholder="Username"  className="my-2 w-100  "  ref={refName} />
                  <input type="password" placeholder="Password" className="my-2 w-100 " ref={refPassword} />
                  <button className="btn w-100 my-2 login-btn">Login</button>
              </form>
              <div className="password-reset mt-3 px-4 mb-5 w-100 text-primary fw-bold">
                  <p className="ms-2"><span onClick={handleLoginClick}>Forgot password?</span></p>
              </div>
            </div>
            <div className={popupStyle}>
                <h3 className=" h3"> <i className="bi bi-exclamation-circle-fill me-3"></i>Login Failed</h3>
                <p className="fw-bold">Username or password incorrect</p>
            </div>
           { rememberPassword &&
                <Register setRememberPassword= {setRememberPassword} />
            }
          </div>
        </div>
    )
}
export default LoginForm
