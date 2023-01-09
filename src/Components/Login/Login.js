import React, { useState, useRef } from "react";
import swal from "sweetalert";
import "./Login.scss";
import Register from "../Register/Register";

const LoginForm = () => {
  const refName = useRef();
  const refPassword = useRef();
  const [popupStyle, showPopup] = useState("hide");
  const [rememberPassword, setRememberPassword] = useState(false);

  const SubmitLoginData = (e) => {
    e.preventDefault();
    const UserName = refName.current.value;
    const Password = refPassword.current.value;
    if (Password === "" || UserName === "") {
      // add sweet alert danger
      swal({
        title: "Error!",
        text: "Please enter your username and password",
        icon: "error",
        button: "OK",
      });
    } else {
      // use fetch api to send login credentials on http://localhost:8000/api/auth/login
      fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: UserName,
          password: Password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            // save token in local storage
            localStorage.setItem("rsu_token", data.token);
            // add sweet alert success
            swal({
              title: "Success!",
              text: "You have successfully logged in",
              icon: "success",
              button: "OK",
            });
            // add redirect to home page
            window.location.href = localStorage.getItem("rsu_redirect")
              ? localStorage.getItem("rsu_redirect")
              : "/";
            localStorage.removeItem("rsu_redirect");
          } else {
            // add sweet alert danger
            swal({
              title: "Error!",
              text: data.message,
              icon: "error",
              button: "OK",
            });
          }
        })
        .catch((err) => {
          // add sweet alert danger
          swal({
            title: "Error!",
            text: err,
            icon: "error",
            button: "OK",
          });
        });
    }
  };
  const handleLoginClick = () => {
    setRememberPassword(true);
  };
  return (
    <div className="row d-flex login flex-column justify-content-start align-items-center">
      <div className="col-12 col-md-6 p-4">
        <div className="cover px-5 border">
          <h1 className="text-dark w-100 fw-bold h2 text-center my-3">
            RSU Authentication
          </h1>
          <h3 className="text-primary fw-bold my-2"></h3>
          <form
            className="d-flex align-items-center container  p-4 flex-column "
            onSubmit={SubmitLoginData}
          >
            <input
              type="text"
              placeholder="Email"
              className="my-2 w-100"
              ref={refName}
            />
            <input
              type="password"
              placeholder="Password"
              className="my-2 w-100"
              ref={refPassword}
            />
            <button className="btn w-100 my-2 login-btn">Login</button>
          </form>
          <div className="password-reset mt-3 px-4 mb-5 w-100 text-primary fw-bold">
            <p className="ms-2">
              <span onClick={handleLoginClick}>Forgot password?</span>
            </p>
          </div>
        </div>
        <div className={popupStyle}>
          <h3 className=" h3">
            {" "}
            <i className="bi bi-exclamation-circle-fill me-3"></i>Login Failed
          </h3>
          <p className="fw-bold">Username or password incorrect</p>
        </div>
        {rememberPassword && (
          <Register setRememberPassword={setRememberPassword} />
        )}
      </div>
    </div>
  );
};
export default LoginForm;
