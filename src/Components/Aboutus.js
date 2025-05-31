import React from "react";
import "../Css/Aboutus.css";
import about1 from "../Image/about1.png";
import about2 from "../Image/about21.png";
import laptopicon from "../Image/laptopicon.png";
import usericon from "../Image/usericon.jpg";
import requesticon from "../Image/requesticon.png";
import Fotter from "../Components/Fotter";
import insurence from "../Image/insurance.png";
import retail from "../Image/retail.png";
import energy from "../Image/energy.png";
import agriculture from "../Image/agriculture.png";
import logistics from "../Image/logistics.png";
import { NavLink } from "react-router-dom";

function Aboutus() {
  return (
    <div className="Aboutusmain">
      <div className="container-fluid">
        <div className="container">
          <div
            className="row"
            style={{ justifyContent: "space-around", paddingTop: "4rem" }}
          >
            <div className="col-md-5">
              <h1 style={{ fontSize: "3rem" }}>
                <b style={{ color: "red" }}>KhWeather</b> <br />
                <b>Global services</b>{" "}
              </h1>
              <p>
                <b>
                  Weather forecasts,nowcasts and history in <br />
                  fast and elegant way
                </b>
              </p>
            </div>
            <div className="col-md-5">
              <img src={about1} className="img-fluid globe" alt="abi" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about2cont">
        <div className="container">
          <div
            className="row"
            style={{ justifyContent: "space-around", padding: "4rem 0 4rem 0" }}
          >
            <div className="col-md-5">
              <img src={about2} className="img-fluid globe2" alt="abi" />
            </div>
            <div
              className="col-md-5"
              style={{
                textAlign: "center",
                paddingTop: "10%",
              }}
            >
              <h1 style={{ fontSize: "2rem", color: "white" }}>
                We make
                <b style={{ color: "red" }}>
                  {" "}
                  hyper-local weather data open
                </b>{" "}
                <br />
                <b>for any bussiness</b>{" "}
              </h1>
              <p style={{ color: "white" }}>
                <b>
                  For each point on the globe, we provide historical, current
                  and forecasted weather data via light-speed APIs.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid aboutcont3">
        <div className="container">
          <div
            className="row"
            style={{ justifyContent: "space-around", textAlign: "center" }}
          >
            <div className="col-md-2">
              <img src={laptopicon} className="img-fluid abicon" alt="icon" />
              <br />
              <span id="abicdata">
                4,000,000 <br /> customers use our API
              </span>
            </div>
            <div className="col-md-2">
              <img src={usericon} className="img-fluid abicon" alt="icon" />
              <br />
              <span id="abicdata">
                2,500 <br /> new users every day
              </span>
            </div>
            <div className="col-md-2">
              <img src={requesticon} className="img-fluid abicon" alt="icon" />
              <br />
              <span id="abicdata">
                2 billion <br /> requests a day
              </span>
            </div>
            <span style={{ color: "white", marginTop: "2.5rem" }}>
              From small companies to Top 100 Fortune
            </span>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div
            className="row durarow1"
            style={{
              justifyContent: "space-around",
              textAlign: "center",
              marginTop: "2rem",
            }}
          >
            <h3>
              <b>Customers from </b>{" "}
              <b style={{ color: "red" }}>
                different industries benefit from our weather data
              </b>
            </h3>
            <div className="col-md-3">
              <img src={insurence} alt="icon" className="img-fluid insicon" />
              <br />
              <div id="incontent">
                <span style={{ color: "red" }}>
                  <b>Insurance</b>
                </span>
                <br />
                <p>
                  Employing historical weather data to verify claims at the time
                  of insurance event. Management of existing risks via forecasts
                  and current weather data.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img src={retail} alt="icon" className="img-fluid insicon" />
              <div id="incontent">
                <span style={{ color: "red" }}>
                  <b>retail analytics</b>
                </span>
                <br />
                <p>
                  Sales prediction models in weather-sensitive industries (food,
                  beverage, entertainment). Complex analytics that measure
                  impact of weather on a particular business/project.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img src={energy} alt="icon" className="img-fluid insicon" />
              <div id="incontent">
                <span style={{ color: "red" }}>
                  <b>energy</b>
                </span>
                <br />
                <p>
                  Accurate, data-driven prediction of energy supply and demand.
                  Trading advice, based on insights from forecasted weather
                  data.
                </p>
              </div>
            </div>
          </div>

          <div
            className="row durarow"
            style={{
              justifyContent: "center",
              textAlign: "center",
              marginTop: "0rem",
            }}
          >
            <div className="col-md-3">
              <img src={agriculture} alt="icon" className="img-fluid insicon" />
              <div id="incontent">
                <span style={{ color: "red" }}>
                  <b>agriculture</b>
                </span>
                <br />
                <p>
                  Fast and convenient monitoring of current weather and damaging
                  weather conditions (frost, thunderstorm, etc.) at fields for
                  farmers to minimize risks of loss and more efficient farming.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img src={logistics} alt="icon" className="img-fluid insicon" />
              <div id="incontent">
                <span style={{ color: "red" }}>
                  <b>logistics</b>
                </span>
                <br />
                <p>
                  Short-range forecasts to set up severe weather alerts for
                  efficient route planning and minimizing risks of loss
                  (delay/cargo damage).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row whykh">
            <p style={{ color: "red" }}>
              <b>why KhWeather</b>
            </p>
            <h4>
              KhWeather is a team of IT experts and data scientists that has
              been practicing deep weather data science since 2021.
            </h4>
            <p>Headquarters in India,Haryana</p>
          </div>
        </div>
      </div>
      <div className="container-fluid mlcontab">
        <div className="container">
          <div className="row" style={{ justifyContent: "space-around" }}>
            <div className="col-md-5" style={{ paddingTop: "5%" }}>
              <h3 style={{ color: "white" }}>
                <b>
                  Ideal set of tools and weather data for Machine Learning
                  developers
                </b>
              </h3>
            </div>
            <div className="col-md-5" style={{ background: "white" }}>
              <p style={{ color: "red" }}>
                immense database via light-speed APIs
              </p>

              <ul id="immul">
                <li>Any location on the globe</li>
                <li>Minute by minute forecast</li>
                <li>40 years of weather history</li>
                <li>Vast range of meteorological parameters</li>
              </ul>
              <p>
                Transportation, logistics, insurance, retail and all other
                geographically distributed industries.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid whereto">
        <div className="container">
          <div
            className="row"
            style={{ textAlign: "center", justifyContent: "space-around" }}
          >
            <h3 style={{ margin: "1rem 0 3rem 0" }}>
              <b>Where to</b>
            </h3>
            <div className="col-md-2">
              <NavLink to={"/Signin"}>
                <button id="buyitembtn">Buy by Subscription</button>
              </NavLink>
            </div>
            <div className="col-md-2">
              <NavLink
                to={"https://home.openweathermap.org/marketplace"}
                target="blank"
              >
                <button id="buyitembtn">Buy in the Marketplace</button>
              </NavLink>
            </div>
            <div className="col-md-2">
              <NavLink to={"https://openweathermap.org/api"} target="blank">
                <button id="buyitembtn">Products documentation</button>
              </NavLink>
            </div>
            <div className="col-md-2">
              <NavLink
                to={"https://openweather.co.uk/blog/category/weather"}
                target="blank"
              >
                <button id="buyitembtn">News and Updates</button>
              </NavLink>
            </div>

            <span id="ifyou">
              If you want to ask a question about our service or simply want to
              discuss your enquiry in more details, you are more than welcome to
              <br />
              <NavLink to={"/Contact"}>
                <button id="buyitembtn2">contact us</button>
              </NavLink>
            </span>
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
}

export default Aboutus;
