



import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  localStorage.clear();
  let navigate = useNavigate();

  const validate = () => {
    let newErrors = {};
    if (!loginData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!loginData.password) {
      newErrors.password = "Password is required";
    } else if (loginData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    return newErrors;
  };

  async function handleClick() {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post(
        // "http://localhost:3000/login",
        'https://techassistbackend.onrender.com/login',
         loginData, { withCredentials: true });
      localStorage.setItem('accessToken', response.data.accessToken);
      console.log(response);
      navigate("/user");
    } catch (err) {
      setErrorMessage(err.response?.data?.message || err.message);
      console.log(err);
    }
  }

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom" style={{ fontFamily: "roman" }}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    placeholder="Email address"
                  />
                  {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    placeholder="Enter password"
                  />
                  {errors.password && <div className="text-danger">{errors.password}</div>}
                </div>
                {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={handleClick}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account? <Link to="/register" className="link-danger">Register</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div className="text-white mb-3 mb-md-0">
            {/* Copyright © 2020. All rights reserved. */}
          </div>
          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};















{/* <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Sign in with</p>
            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div> */}



//   <div class="d-flex justify-content-between align-items-center">
//     {/* <!-- Checkbox --> */}
//     <div class="form-check mb-0">
//       <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
//       <label class="form-check-label" for="form2Example3">
//         Remember me
//       </label>
//     </div>
//     <a href="#!" class="text-body">Forgot password?</a>
//   </div>