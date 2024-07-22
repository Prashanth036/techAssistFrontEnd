import axios from "axios";
import { useEffect, useState } from "react"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate } from "react-router-dom"



export const RegistrationForm = () => {

  const [userDetails, setUserDetails] = useState({
    userName: "",
    company: "",
    email: "",
    password: ""
  });

  const [passStrength, setPassStrength] = useState(0);
  const [error, setError] = useState(null);

  const [valid,setValid]=useState({
    userName: false,
    company: false,
    email: false,
    password: false  
  })

  let navigate=useNavigate()

  useEffect(()=>{
    if(userDetails.password===""){
      setPassStrength(0)
    }
  },[]);




  function handleChange(e) {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
    if (userDetails.password.length > 0) {
      setPassStrength(n => n + 5);
     
    }
  }
  
  


async function handleSubmit(e) {
  e.preventDefault();

  const isValidPassword = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;
  const isValidUsername = /^[0-9A-Za-z]{6,16}$/;
  const isValidEmail = /^\S+@\S+\.\S+$/;

  // Clear previous validation messages
  setValid({
    userName: false,
    company: false,
    email: false,
    password: false  
  });

  let valid = true;
  
  if (!isValidEmail.test(userDetails.email)) {
    valid = false;
    setValid(prev => ({ ...prev, email: "Invalid email format" }));
  }
  
  if (!isValidPassword.test(userDetails.password)) {
    valid = false;
    setValid(prev => ({ ...prev, password: "Password must be 8-32 characters long and include at least one letter and one number" }));
  }
  
  if (!isValidUsername.test(userDetails.userName)) {
    valid = false;
    setValid(prev => ({ ...prev, userName: "Username must be 6-16 characters long and include only alphanumeric characters" }));
  }

  if (!valid) return;
  try {
    const response = await axios.post(
      // "http://localhost:3000/register"
     "https://techassistbackend.onrender.com/register"
      , userDetails, { withCredentials: true });
    localStorage.setItem('accessToken', response.data.accessToken);
    navigate("/user");
  } catch (err) {
    console.log(err);
    setError(err.response.data.errors[0].message);
    
  }
}


  return (
    <>
      <section className="vh-screen" style={{ backgroundColor: "#eee", margin: "1%", fontFamily: "roman" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>
  
                      <form className="mx-1 mx-md-4" onSubmit={(e) => handleSubmit(e)} method="POST">
                        {/* User Name Field */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                          </svg>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0 mx-2">
                            <input type="text" onChange={handleChange} value={userDetails.userName} name="userName" maxLength={14} minLength={5} id="form3Example1c" className="form-control" required placeholder="Your Name" />
                            {valid.userName && <p className="text-danger">{valid.userName}</p>}
                          </div>
                        </div>
  
                        {/* Company Field */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-building-fill" viewBox="0 0 16 16">
                            <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                          </svg>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0 mx-2">
                            <input type="text" onChange={handleChange} value={userDetails.company} name="company" maxLength={14} minLength={2} id="form3Example4cd" className="form-control" required placeholder="Company" />
                            {valid.company && <p className="text-danger">{valid.company}</p>}
                          </div>
                        </div>
  
                        {/* Email Field */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 .492-.825zM14 13a2 2 0 0 0 1.573-2.01l-6.694-4.11L8 9.589l6.573 4.026A2 2 0 0 0 14 13zM8 8.414 2 4.698V11.8l6-3.731z" />
                          </svg>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0 mx-2">
                            <input type="email" onChange={handleChange} value={userDetails.email} name="email" id="form3Example3c" className="form-control" required placeholder="Your Email" />
                            {valid.email && <p className="text-danger">{valid.email}</p>}
                          </div>
                        </div>
  
                        {/* Password Field */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 0-2 2v3H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2z" />
                          </svg>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0 mx-2">
                            <input type="password" onChange={handleChange} value={userDetails.password} name="password" id="form3Example4c" className="form-control" required placeholder="Password" />
                            {valid.password && <p className="text-danger">{valid.password}</p>}
                          </div>
                        </div>
  
                        {/* Submit Button */}
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>
  
                        {/* Error Message */}
                        {error && <p className="text-danger text-center">{error}</p>}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}  

    