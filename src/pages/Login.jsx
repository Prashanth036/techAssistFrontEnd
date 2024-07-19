import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"



export const Login = () => {

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  localStorage.clear();

  let navigate=useNavigate()
  async function handleClick() {
    try {
      const response = await axios.post('http://localhost:3000/login', loginData,{withCredentials: true });
      localStorage.setItem('accessToken', response.data.accessToken);
      console.log(response);
     navigate("/user")
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }


  return (<>
    <section class="vh-100">
      <div class="container-fluid h-custom" style={{ fontFamily: "roman" }}>
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid" alt="Sample image" />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>

              {/* <!-- Email input --> */}
              <div data-mdb-input-init class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control form-control-lg"
                  value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} placeholder="Email address" />
                {/* <label class="form-label" for="form3Example3">Email address</label> */}
              </div>

              {/* <!-- Password input --> */}
              <div data-mdb-input-init class="form-outline mb-3">
                <input type="password" id="form3Example4" class="form-control form-control-lg"
                  value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} placeholder="Enter password" />
                {/* <label class="form-label" for="form3Example4">Password</label> */}
              </div>

              {/*  */}

              <div class="text-center text-lg-start mt-4 pt-2">
                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} onClick={handleClick}>Login</button>
                <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/register"
                  class="link-danger">Register</Link></p>
              </div>

            </form>
          </div>
        </div>
      </div>
      <div
        class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        {/* <!-- Copyright --> */}
        <div class="text-white mb-3 mb-md-0">
          {/* Copyright © 2020. All rights reserved. */}
        </div>
        {/* <!-- Copyright --> */}

        {/* <!-- Right --> */}
        <div>
          <a href="#!" class="text-white me-4">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#!" class="text-white me-4">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#!" class="text-white me-4">
            <i class="fab fa-google"></i>
          </a>
          <a href="#!" class="text-white">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
        {/* <!-- Right --> */}
      </div>
    </section>
  </>)
}
















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