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
    const isValidEmail=/^\S+@\S+\.\S+$/;
    setValid({ 
      userName: false,
      company: false,
      email: false,
      password: false  
    })
    if(isValidEmail.test(userDetails.email)&&isValidPassword.test(userDetails.password)&&isValidUsername.test(userDetails.userName)){
      navigate("/user");
    }else{
      setValid({
        userName: true,
        company: true,
        email: true,
        password: true  
      })
    }
    

    try {
      const response = await axios.post('http://localhost:3000/login',userDetails);
      localStorage.setItem('accessToken', response.data.accessToken);
      console.log(response);
  } catch (err) {
      setError(err.message);
      console.log(err);
  }
   

  }

  return (<>

    <section className="vh-screen" style={{ backgroundcolor: "#eee", margin: "1%" ,fontFamily:"roman"}}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

                    <form className="mx-1 mx-md-4" onSubmit={(e)=>handleSubmit(e)} method="POST" >

                      <div className="d-flex flex-row align-items-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0 mx-2">
                          <input type="text" onChange={handleChange} value={userDetails.userName} name="userName" 
                          maxLength={14} minLength={5} id="form3Example1c" className="form-control" required   placeholder="Your Name" />
                          {/* <label className="form-label" for="form3Example1c">Your Name</label> */}
                      {/* {valid.userName && <p>{isValidUsername.test(userDetails.userName)?"UserName is Valid":"Use alphabets and numbers only ,min 6 Characters"}</p>} */}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-building-fill" viewBox="0 0 16 16">
                          <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                        </svg>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0 mx-2">
                          <input type="text" onChange={handleChange} value={userDetails.company} name="company" 
                          maxLength={14}
                          minLength={2} id="form3Example4cd" className="form-control" required   placeholder="Company" />
                          {/* <label className="form-label" for="form3Example4cd">Repeat your password</label> */}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                          <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                          <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                        </svg>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0 mx-2">
                          <input type="email" onChange={handleChange} value={userDetails.email} name="email" id="form3Example3c" className="form-control" required   placeholder="Email@.com" />
                          {/* <label className="form-label" for="form3Example3c">Your Email</label> */}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                        </svg>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0 mx-2">
                          <input type="password" onChange={handleChange} value={userDetails.password} name="password" id="form3Example4c" className="form-control" required   placeholder="Password" />
                          {/* <label className="form-label" for="form3Example4c">Password</label> */}

                        </div>
                      </div>
                      <div  className="d-flex flex-row align-items-center mb-4"> 
                      <div data-mdb-input-init className="form-outline flex-fill mb-0 mx-2">
                        {/* <p className="bg-danger">{valid.password? "at least one number, at least one letter, correct length": ""}</p> */}
                        {passStrength>0 &&<ProgressBar variant={passStrength>30? "success":"danger"} now={passStrength} />}
                        </div></div>



                      {/* <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div> */}

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit"  data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg" >Register</button>
                      </div>
                      <div>

                        {/* {userDetails.userName} */}
                      </div>
                    </form>

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid" alt="Sample image" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </>)
}