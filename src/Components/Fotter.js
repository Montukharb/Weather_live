// import React from 'react'
import "../Css/Fotter.css";
import { NavLink } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import appstore from "../Image/app-store-badge.svg";
import shortlogo from "../Image/shortlogo.png";
import playstore from "../Image/google-play-badge.png";
import { BsTelegram, BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { TbWorldUp } from "react-icons/tb";
import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
function Fotter() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <div>
      <div className="container-fluid" style={{ background: "#F2F2F2" }}>
        <div
          className="row"
          style={{ justifyContent: "space-around", padding: "2rem 0 2rem 0" }}
        >
          <div className="col-md-3">
            <h4>
              <b>Product Collection</b>
            </h4>
            <NavLink
              id="textdecoration"
              to={"https://openweathermap.org/api#current"}
              target="blank"
            >
              <li>Current and Forecast APIs</li>
            </NavLink>
            <NavLink
              id="textdecoration"
              to={"https://openweathermap.org/api#history"}
              target="blank"
            >
              <li>Historical Weather Data</li>
            </NavLink>
            <NavLink
              id="textdecoration"
              to={"https://openweathermap.org/api#maps"}
              target="blank"
            >
              <li>Weather Maps</li>
            </NavLink>
            <NavLink id="textdecoration" to={"/Dashboard"}>
              <li>Weather Dashboard</li>
            </NavLink>
            <NavLink
              id="textdecoration"
              to={"https://openweathermap.org/widgets-constructor"}
              target="blank"
            >
              <li>Widgets</li>
            </NavLink>
          </div>
          <div className="col-md-3">
            <h4>
              <b>Subscription</b>
            </h4>

            <NavLink id="textdecoration" to={"/Pricing"}>
              <li>Pricing</li>
            </NavLink>
            <NavLink
              id="textdecoration"
              to={"https://home.openweathermap.org/"}
              target="blank"
            >
              <li>Subsribe for free</li>
            </NavLink>
            <NavLink id="textdecoration" to={"/FAQ"}>
              <li>FAQ</li>
            </NavLink>
          </div>
          <div className="col-md-4">
            <h4>
              <b>Company</b>
            </h4>
            <p>
              KhWeather is a team of IT experts and data scientists that has
              been practising deep weather data science. For each point on the
              globe, KhWeather provides historical, current and forecasted
              weather data via light-speed APIs. Headquarters in London, UK.
            </p>
          </div>
          <div className="col-md-3">
        
            <h4>
              <b>Technologies</b>
            </h4>
            <NavLink id="textdecoration" to={"/Technology"}>
              <li>Our technology</li>
            </NavLink>
            <NavLink
              id="textdecoration"
              to={"https://openweathermap.org/accuracy-and-quality"}
              target="blank"
            >
              <li> Accuracy and quality of weather data</li>
            </NavLink>
            <NavLink
              id="textdecoration"
              to={"https://openweathermap.org/stations"}
              target="blank"
            >
              <li>connect your weather station</li>
            </NavLink>
          </div>
          <div className="col-md-3">
            <h4>
              <b>Terms & Conditions</b>
            </h4>

            <NavLink id="textdecoration" to={"/Privacypolicy"}>
              <li>Privacy Policy</li>
            </NavLink>
          </div>
          <div className="col-md-4" id="textdecoration">
            <h4>
              <b>Other</b>
            </h4>
            <NavLink id="textdecoration" to={"/Aboutus"}>
              <li>About us</li>
            </NavLink>
            <NavLink id="textdecoration" to={"/Contact"}>
              <li>Contact</li>
            </NavLink>
            <NavLink id="textdecoration">
              <li>
                {" "}
                <Button ref={target} onClick={() => setShow(!show)}>
                  Imp links
                </Button>
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      <NavLink
                        to={"https://montunotepad.netlify.app/"}
                        target="blank"
                      >
                        Notepad webapp
                      </NavLink>
                      <br />
                      <NavLink
                        to={"https://montukharb.netlify.app/"}
                        target="blank"
                      >
                        Personal
                      </NavLink>
                      <br />
                      <NavLink
                        to={"https://kharbcollege.netlify.app/"}
                        target="blank"
                      >
                        College
                      </NavLink>
                      <br />
                      <NavLink
                        to={"https://khweather.netlify.app/"}
                        target="blank"
                      >
                        Weather
                      </NavLink>
                      <br />
                    </Tooltip>
                  )}
                </Overlay>
              </li>
            </NavLink>
            <NavLink id="textdecoration" to={"/AskAQuestion"}>
              <li>Ask a question</li>
            </NavLink>
          </div>
        </div>
        <div className="row" style={{ justifyContent: "space-evenly" }}>
          <div className="col-md-6" style={{ textAlign: "center" }}>
            <span style={{ color: "red", textAlign: "center" }}>
              <b>Download KhWeather app</b>
            </span>
            <br />
            <img src={appstore} className="img-fluid playapp" alt="icon" />
            <img src={playstore} className="img-fluid playapp" alt="icon" />
          </div>
          <div className="col-md-6" style={{ textAlign: "center" }}>
            <br />
            <img src={shortlogo} alt="logo" className="img-fluid shortlogo" />
          </div>
          <div className="row reserved">
            <span>
              Supplier of Kharb Codehacked community &copy; 2024 khWeather
              &reg;All rights reserved
              <NavLink
                id="sociallink"
                to={"https://www.instagram.com/montu_kharb/"}
              >
                {<BsInstagram />}
              </NavLink>
              <NavLink
                id="sociallink"
                to={
                  "https://www.facebook.com/people/Mrking-Haryana/100089109543795/"
                }
              >
                {<FaFacebook />}
              </NavLink>
              <NavLink
                id="sociallink"
                to={"https://in.linkedin.com/in/montu-kharb-92b67b240"}
              >
                {<BsLinkedin />}
              </NavLink>
              <NavLink
                id="sociallink"
                to={"https://www.youtube.com/channel/UCEXVE4J_OgxeZvNF60DbRIg"}
              >
                {<FaYoutube />}
              </NavLink>
              <NavLink id="sociallink" to={"https://web.telegram.org/k/"}>
                {<BsTelegram />}
              </NavLink>
              <NavLink id="sociallink" to={"https://montukharb.netlify.app/"}>
                {<TbWorldUp />}
              </NavLink>
            </span>
          </div>
        </div>
      </div>

      <ScrollToTop id="stop" color="white" height={30} smooth />
    </div>
  );
}

export default Fotter;
