import axios from "axios";
import React, { useState } from "react";
import "./css/login.css";
import loginImage from "./image/login.jpg";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [token, setToken] = useState("");
  const [formErrors, setFormErrors] = useState({}); // object

  const errors = {};

  const formSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };
    //console.log(formData)

    axios
      .post("https://reqres.in/api/login", formData)
      .then((response) => {
        console.log(response.data);
        const result = response.data;
        if (result.token) {
          alert("successfully logged in");
          setToken(result.token);
        }
      })
      .catch((err) => {
        alert("Missing password");
      });
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "remember") {
      setRemember(e.target.checked);
    }
  };

  //   const runValidate = () => {
  //     if (email.trim().length === 0) {
  //       errors.email = "email cannot be blank";
  //     } else if (!validator.isEmail(email)) {
  //       errors.email = "invalid email";
  //     }
  //     if (password.trim().length === 0) {
  //       errors.name = "password cannot be blank";
  //     }
  //   };

  return (
    <div className="wrapper">
      <div
        className="
          section-authentication-login
          d-flex
          align-items-center
          justify-content-center
        "
      >
        <div className="row ">
          <div className="col-12 col-lg-10 mx-auto">
            <div className="card radius-15">
              <div className="row no-gutters ">
                <div className="col-lg-6">
                  <div className="card-body p-md-5">
                    <div className="text-center">
                      <h2 className="mt-4 font-weight-bold">Welcome Back</h2>

                      <div className=" mb-4 col-sm-12">
                        <p className=" ">sub-title text goes here</p>
                      </div>
                    </div>
                    <form onSubmit={formSubmit}>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Email Address *"
                          value={email}
                          onChange={handleChange}
                          name="email"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Password *"
                          value={password}
                          onChange={handleChange}
                          name="password"
                        />
                      </div>

                      <div className="form-group">
                        <div className="text-center">
                          <input
                            className="form-control w-100 btn btn-info btn-md"
                            type="submit"
                            name="Login"
                          />
                        </div>
                      </div>

                      <hr />
                      {}
                      <div className="form-row">
                        <div className="form-group col">
                          <div className="form-check">
                            <input
                              id="rememberCheck1"
                              type="checkbox"
                              className="form-check-input"
                              name="remember"
                              checked={remember}
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-input"
                              for="rememberCheck1"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <div className="form-group col text-right">
                          <a href="authentication-forgot-password.html">
                            <i className="bx bxs-key mr-2"></i>Forget Password?
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img
                    src={loginImage}
                    className="card-img login-img h-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
