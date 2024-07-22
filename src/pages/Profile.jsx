import axios from "axios";
import { useEffect, useState } from "react";



export const UserProfile = () => {
    const [user, setUser] = useState("")
    const accessToken = localStorage.getItem('accessToken');
  
   
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // Replace with your actual access token
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            // "http://localhost:3000/user"
            'https://techassistbackend.onrender.com/user'
            , {
            headers: {
              Authorization: `Bearer ${accessToken}`
            },
             withCredentials: true 
        
        });
          setUserData(response.data);
          console.log(response)
          setLoading(false);
        } catch (error) {
          setError(error);
          console.log(error)
          setLoading(false);
        }
      };
  
      fetchData();
    }, [accessToken]); // Dependency array includes accessToken in case it changes
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
     

    return (<>
        <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-6 mb-4 mb-lg-0">
                        <div className="card mb-3" style={{ borderradius: ".5rem" }}>
                            <div className="row g-0">
                                <div className="col-md-4 gradient-custom text-center text-white"
                                    style={{ borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem" }}>
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                        alt="Avatar" className="img-fluid my-5" style={{ width: "80px" }} />
                                    <h5>{userData.userName}</h5>
                                    <p>Web Designer</p>
                                    <p>at {userData.company}</p>
                                    <i className="far fa-edit mb-5"></i>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body p-4">
                                        <h6>Information</h6>
                                        <hr className="mt-0 mb-4" />
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Email</h6>
                                                <p className="text-muted">{userData.email}</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Phone</h6>
                                                <p className="text-muted">123 456 789</p>
                                            </div>
                                        </div>
                                        <h6>Projects</h6>
                                        <hr className="mt-0 mb-4" />
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Recent</h6>
                                                <p className="text-muted">Lorem ipsum</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Most Viewed</h6>
                                                <p className="text-muted">Dolor sit amet</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start">
                                            <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                                            <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                                            <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                                        </div>
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