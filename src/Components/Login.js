// import React from "react";
import Footer from "../Components/Fotter";
import "../Css/Signin.css";
// import { NavLink } from "react-router-dom";
// import CreateNewAccount from "./CreateNewAccount";
import React, { useEffect } from "react";
import "../Css/CreateNewAccount.css";
// import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function Login({setAuthUser}) {
  useEffect(() => {
    document.title = "khWeather/Members";
  }, []);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    try {
        const backurl = process.env.REACT_APP_SERVICE_URL;
      const response = await fetch(`${backurl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": "Bearer yourTokenHere"
        },
        body: JSON.stringify(data),
        credentials: "include",
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        setAuthUser(true)
        navigate("/Dashboard",{replace:"true"});

        alert(result.message);
      } else {
        const result = await response.json();
        console.log(result.message);
        alert(result.message);
      }
    } catch (err) {
      console.log("error in sending data", err);
    }
  };

  return (
    <div className="signmain">
      <div className="container-fluid">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}></div>
          <div className="container-fluid">
            <div className="container">
              <div className="row" id="loginrow">
                {/* <CreateNewAccount/> */}
                <div className="createnewmain">
                  <div className="row" style={{ justifyContent: "center" }}>
                    <h3 style={{ marginTop: "30px" }}>Login Account</h3>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        {...register("email", {
                          required: "Email are required",
                        })}
                      />
                      <p style={{ color: "red" }}>{errors.email?.message}</p>

                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        {...register("password", {
                          required: "Password is required",
                        })}
                      />
                      <p style={{ color: "red" }}>{errors.password?.message}</p>

                      <br />
                      <button
                        style={{ marginTop: "2rem" }}
                        type="submit"
                        id="submitbtn"
                      >
                        Login/Sign-in
                      </button>
                      <br />
                      <br />
                    </form>
                    {/* </div> */}
                  </div>
                  {/* </div> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
