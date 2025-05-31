import { useState, useEffect } from "react";
import "../Css/Dashboard.css";
import { useNavigate, NavLink } from "react-router-dom";
import Fotter from "../Components/Fotter";
import Companyimg from "../Image/Companysliderad.png";
import Marquee from "react-fast-marquee";
import weatherdb from "../Image/weather_db.jpg";
import icon1 from "../Image/icon-1.png";
import icon2 from "../Image/icon-2.png";
import icon4 from "../Image/icon-4.png";

 function Dashboard( {setAuthUser}) {
   const Navigate = useNavigate();
   const [userId, setUserId] = useState(null);
  useEffect(() => {
    document.title = "khWeather/Dashboard";
    const fetchDashboard = async () => {
        const backurl = process.env.REACT_APP_SERVICE_URL;
      const res = await fetch(`${backurl}/auth/dashboard`, {
        method: "GET",
        credentials: "include",
      });
      const result = await res.json();
       if(res.ok){
        //  alert(result.message);
         await setUserId(result.message)
       }
       else
       {
         alert(result.message)
         setUserId(null)
         Navigate('/Login');
       }
    };
    fetchDashboard();
  },[Navigate]);
//  async function logoutuser (){
//         const res = await fetch('http://localhost:4000/auth/logout',{
//           method:"GET",
//           credentials:"include",
//         })        
//         if (res.ok) {
//           const result = await res.json();
//           alert("You have been logged out successfully" + result.message);
//           setAuthUser(null);
//           Navigate("/Login")
//       } else {
//         const result = await res.json();
//         console.log(result.message);
//         alert(result.message);
//       }
//   }
  return (
    <>
  <div className="Dashboardmain">
      <div className="contaier-fluid">
        <div className="container">
          <div className="row" style={{ padding: "1rem 0rem 0rem 0rem" }}>
            <h2> {userId}</h2>
            
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid">
        <div className="container">
          <div
            className="row"
            style={{ justifyContent: "space-around", paddingTop: "2rem" }}
          >
            <div className="col-md-5">
              <h2>
                <b style={{ color: "red" }}>KhWeather</b>
                <br />
                <b>Dashboard</b>
              </h2>
              <p style={{ color: "black", fontSize: "1.2rem" }}>
                A visual tool for working with weather data and timely tracking
                of dangerous phenomena
              </p>
              <br />
              <br />
              <button id="trydash">Manage the Dashboard</button>
            </div>
            <div className="col-md-5">
              <img src={weatherdb} alt="wedb" className="img-fluid weadb" />
            </div>
          </div>
          <div className="row" style={{ paddingTop: "2rem" }}>
            <p>
              <b>
                <NavLink>The KhWeather Dashboard </NavLink>
                is a lightweight and flexible visual tool for out cusomers who
                would like to be notified weather events to make informed
                decisions and plan sactions based on the weather input.
              </b>
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row Drow1">
            <div className="col-md-3">
              <img src={icon1} alt="icon" className="img-fluid dashicon" />
              <p id="Dcard">Set triggers to track weather conditions</p>
            </div>
            <div className="col-md-3">
              <img src={icon2} alt="icon" className="img-fluid dashicon" />
              <p id="Dcard">
                Track trigger events in the dashboard or receive email
                notifications
              </p>
            </div>
            <div className="col-md-3">
              <img src={icon4} alt="icon" className="img-fluid dashicon" />
              <p id="Dcard">
                Make timely decisions once trigger conditions are met
              </p>
            </div>
          </div>
          <div className="row productfeature">
            <h2 style={{ color: "red", marginTop: "2rem" }}>
              Product Features
            </h2>
            <div className="col-md-2">
              <h4>
                <b>Global coverage</b>
              </h4>
              <p>Choose any location on the Globe</p>
            </div>
            <div className="col-md-2">
              <h4>
                <b>Email notifications</b>
              </h4>
              <p>
                Set up triggers. You will be notified by email and in the
                Dashboard once trigger conditions are met
              </p>
            </div>
            <div className="col-md-2">
              <h4>
                <b>Weather parameters</b>
              </h4>
              <p>
                Track the main weather parameters: temperature, wind speed,
                precipitations
              </p>
            </div>
            <div className="col-md-2">
              <h4>
                <b>Accuracy</b>
              </h4>
              <p>
                Weather data are updated every hour based on Hourly{" "}
                <NavLink>(forecast API)</NavLink>
              </p>
            </div>
          </div>
          <div className="row">
            <h3 style={{ color: "red" }}>How to Start</h3>
            <p>
              It is easy to start working with the Dashboard.There are 3 steps:
            </p>
            <nav>
              <ul>
                <li>
                  <b>1.</b> <NavLink>Sign up</NavLink> to our service.
                  Alternatively, please use your existing OpenWeather{" "}
                  <NavLink>username and password.</NavLink>
                </li>
                <li>
                  <b>2.</b> <NavLink>Go to the Dashboard</NavLink> Then, you
                  will be taken to the <NavLink>"Events" section.</NavLink> (the
                  events list will be empty because you haven't set up any
                  triggers yet).
                </li>
                <li>
                  <b>3.</b>
                  <NavLink> Go to the "New trigger" section</NavLink>
                  and set up the conditions of your first trigger by choosing a
                  trigger location, weather conditions, etc.
                  <br />
                  Detailed instruction of how to set up a trigger is available{" "}
                  <NavLink>here.</NavLink>
                </li>
              </ul>
            </nav>
            <p>
              Well done! From now on, you will receive email notifications and
              see future events on the Dashboard's main screen as soon as the
              trigger conditions are met.
            </p>
            <p>
              Our<NavLink>detailed user manual</NavLink> contains complete
              information about the functions of the Dashboard and how to work
              with them.
            </p>
          </div>
          <div
            className="row"
            style={{ justifyContent: "center", padding: "2rem 0 1rem 0" }}
          >
            <button id="trydash2">Try the Dashboard</button>
          </div>
          <div className="row">
            <h3 style={{ color: "red" }}>Our Users</h3>
            <p>
              Weather Dashboard can be easily used in a wide range of cases,
              from large enterprises who need to monitor critical business
              functions across the world to individual users who want to track
              the weather for various other purposes.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div
        className="container-fluid companyslidercontainer"
        style={{ padding: "1rem 0 1rem 0" }}
      >
        <div className="container">
          <div className="row">
            <Marquee>
              <img id="markqueimg" src={Companyimg} alt="liked_company" />
            </Marquee>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <h3 style={{ color: "red" }}>Pricing and Limits</h3>
            <p>
              Please note that access to the Dashboard is included in the{" "}
              <NavLink>
                Current & Forecasts subscription plans collection
              </NavLink>
              . This means that, should you subscribe to one of these plans, you
              automatically obtain access to both the Dashboard and other
              products included in that plan.
            </p>
          </div>
          <div className="row tablerow10">
            <table className="table">
              <tbody>
                <tr>
                  <th></th>
                  <th>
                    <NavLink>Free</NavLink>
                    <br />
                    <h4>
                      <b>N.A</b>/month
                    </h4>
                    <br />

                    <button id="trydash3">sign-up</button>
                  </th>
                  <th>
                    <NavLink>Startup</NavLink>
                    <br />
                    <h4>
                      <b>30 GBP</b>/month
                    </h4>
                    <br />

                    <button id="trydash3">sign-up</button>
                  </th>
                  <th>
                    <NavLink>Developer</NavLink>
                    <br />
                    <h4>
                      <b>140 GBP</b>/month
                    </h4>
                    <br />

                    <button id="trydash3">sign-up</button>
                  </th>
                  <th>
                    <NavLink>Professional</NavLink>
                    <br />
                    <h4>
                      <b>370 GBP</b>/month
                    </h4>
                    <br />

                    <button id="trydash3">sign-up</button>
                  </th>
                  <th>
                    <NavLink>Enterprise</NavLink>
                    <br />
                    <h4>
                      <b>1500 GBP</b>/month
                    </h4>
                    <br />

                    <button id="trydash3">sign-up</button>
                  </th>
                </tr>

                <tr>
                  <td>Number of available triggers</td>
                  <td>3</td>
                  <td>5</td>
                  <td>10</td>
                  <td>200</td>
                  <td>Custom</td>
                </tr>

                <tr>
                  <td>How to get notifications</td>
                  <td>Only via Dashboard</td>
                  <td>Dashboard and emails</td>
                  <td>Dashboard and emails</td>
                  <td>Dashboard and emails</td>
                  <td>Dashboard and emails</td>
                </tr>

                <tr>
                  <td>Number of email addresses for each trigger</td>
                  <td>-</td>
                  <td>3</td>
                  <td>10</td>
                  <td>20</td>
                  <td>100</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row"style={{justifyContent:"center",textAlign:"center",paddingTop:"3rem",marginBottom:"3rem"}}>
            {/* <p>Log out</p> */}
            <br/>
            <br/>
            {/* <button id="trydash3" onClick={logoutuser}>Log-Out</button> */}
            
          </div>
        </div>
      </div>
<Fotter/>
    </div>
  
    </>
  );
}

export default Dashboard;
