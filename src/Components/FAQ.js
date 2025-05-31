import React from "react";
// import  plusicon from '../Image/plus-icon.png'
import "../Css/FAQ.css";
import { useState } from "react";
import Footer from "../Components/Fotter";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { AiOutlinePlus } from "react-icons/ai";
import Collapse from "react-bootstrap/Collapse";
function FAQ() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  return (
    <>
      <div className="faqmain">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <h3
                style={{
                  marginTop: "1rem",
                }}
              >
                Frequently Asked Questions
              </h3>
            </div>
          </div>
        </div>
        <hr />
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <h5>General overview</h5>
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                id="plubtn"
              >
                <span id="plustext">About the company: What is KhWeather?</span>
                <i id="plusid">{<AiOutlinePlus />}</i>

                {/* <img id='plusicon' className='img-fluid' src={plusicon} alt='plicon'/> */}
              </Button>
              <div style={{ minHeight: "10px" }}>
                <Collapse in={open}>
                  <div id="example-collapse-text" className="data123">
                    KhWeather (headquartered in London) is a team of
                    IT-intellectuals that create pivotal products for business
                    using climate data. For each point on the globe, KhWeather
                    provides hyperlocal minutely forecast, historical data,
                    current state, and from short-term to annual forecasted
                    weather data. All data is available via{" "}
                    <NavLink>industry standard APIs</NavLink>.
                    <br />
                    <br />
                    KhWeather Ltd. has more than 3 million customers including
                    Fortune 500 companies and thousands of other businesses
                    globally.
                  </div>
                </Collapse>
              </div>
            </div>
            <div className="row">
              <h5>Get Started</h5>
              <Button
                onClick={() => setOpen2(!open2)}
                aria-controls="example-collapse-text"
                aria-expanded={open2}
                id="plubtn"
              >
                <span id="plustext">About the company: What is KhWeather?</span>
                <i id="plusid">{<AiOutlinePlus />}</i>

                {/* <img id='plusicon' className='img-fluid' src={plusicon} alt='plicon'/> */}
              </Button>
              <div style={{ minHeight: "10px" }}>
                <Collapse in={open2}>
                  <div id="example-collapse-text" className="data123">
                    In order to use our services, you need to get and use your
                    personal API key in all your API requests. How to do it:
                    <br />
                    <br />
                    1. <NavLink>Sign up</NavLink> and get an API key (APPID) on{" "}
                    <NavLink>your account page</NavLink>.
                    <br />
                    2. Verify your email address via a confirmation letter that
                    will be sent to you.
                    <br />
                    3. After verification, check your Inbox again to find our
                    welcome email that contains your API key and important
                    information.
                    <br />
                    <br />
                    Congratulations! Now you have a Free{" "}
                    <NavLink>KhWeather account</NavLink> and can start using our
                    services. We highly recommend you to read the{" "}
                    <NavLink>API documentation</NavLink> that explains how to
                    use our APIs.
                  </div>
                </Collapse>
              </div>
            </div>

            <div className="row">
              <Button
                onClick={() => setOpen3(!open3)}
                aria-controls="example-collapse-text"
                aria-expanded={open3}
                id="plubtn"
              >
                <span id="plustext">
                  What products and types of data can i request ?
                </span>
                <i id="plusid">{<AiOutlinePlus />}</i>

                {/* <img id='plusicon' className='img-fluid' src={plusicon} alt='plicon'/> */}
              </Button>
              <div style={{ minHeight: "10px" }}>
                <Collapse in={open3}>
                  <div id="example-collapse-text" className="data123">
                    For each point on the globe, OpenWeather provides hyperlocal
                    minutely forecast, historical data, current state, and from
                    short-term to annual and forecasted weather data. All data
                    is available via industry standard APIs.
                    <br />
                    <br />
                    <NavLink>One Call API by call:</NavLink>
                    <p>
                      Make just one API call and get all your essential weather
                      data for a specific location with One Call API 3.0.
                    </p>
                    <nav>
                      <ul>
                        <li>Current weather</li>
                        <li>Minute forecast for 1 hour</li>
                        <li>Hourly forecast for 48 hours</li>
                        <li>Daily forecast for 8 days</li>
                        <li>National weather alerts</li>
                        <li>
                          Weather data for 40+ years history archive and 4 days
                          ahead forecast by timestamp{" "}
                        </li>
                        <li>
                          Daily aggregated weather data for 40+years historical
                          archive and 1,5 year forecast ahead
                        </li>
                      </ul>
                    </nav>
                    <p>
                      For more functionality, please consider our generous
                      professional subscriptions.
                    </p>
                    <p>
                      <b>Professional collections:</b>
                    </p>
                    <NavLink>Current Weather and Forecasts Collection</NavLink>
                    <p>How to get:</p>
                    <nav>
                      <ul>
                        <li>
                          APIs (you can request data for geographic coordinates,
                          ZIP codes, city name, city ID, number of cities)
                        </li>
                        <li>
                          Bulk Download (download already collected and
                          regularly updated data for a list of global locations;
                          available for premium subscriptions)
                        </li>
                        <NavLink>Historical Weather Collection</NavLink>
                        <br />
                        How to get:
                        <li>
                          On-the-fly bulks for customised lists of coordinates
                        </li>
                        <li>
                          <NavLink>Marketplace</NavLink>
                          of prepared data sets (coordinates, cities, zip codes)
                          - History Bulk (40+ years back), History Forecast Bulk
                          (from 7 Oct 2017)
                        </li>
                        <li>
                          APIs to a timestamp / a period (subscriptions with
                          different limits on calls and depth of archive)
                        </li>
                        <NavLink>Specialised products: </NavLink>
                        <br />
                        <li>Solar Irradiance API</li>
                        <li>Solar Panels Energy Prediction</li>
                        <li>Global Weather Alerts</li>
                        <li>Road Risk API</li>
                        <li>
                          Global Precipitation Maps - Forecast and historical
                          data
                        </li>
                        <li>Weather Maps 2.0 with 1-hour step</li>
                      </ul>
                    </nav>
                    Detailed information about all our products can be found on
                    the <NavLink>Pricing page.</NavLink>
                  </div>
                </Collapse>
              </div>
            </div>

            <div className="row">
              <Button
                onClick={() => setOpen4(!open4)}
                aria-controls="example-collapse-text"
                aria-expanded={open4}
                id="plubtn"
              >
                <span id="plustext">Do I need to activate my API key ?</span>
                <i id="plusid">{<AiOutlinePlus />}</i>

                {/* <img id='plusicon' className='img-fluid' src={plusicon} alt='plicon'/> */}
              </Button>
              <div style={{ minHeight: "10px" }}>
                <Collapse in={open4}>
                  <div id="example-collapse-text" className="data123">
                    Your API key will be activated automatically, up to 2 hours
                    after your successful registration. We invite you to read
                    the API documentation that explains how to use our APIs.
                    <br />
                    <br />
                  </div>
                </Collapse>
              </div>
            </div>

            <div className="row">
              <Button
                onClick={() => setOpen5(!open5)}
                aria-controls="example-collapse-text"
                aria-expanded={open5}
                id="plubtn"
              >
                <span id="plustext">
                  How can I use an API key in API calls ?
                </span>
                <i id="plusid">{<AiOutlinePlus />}</i>

                {/* <img id='plusicon' className='img-fluid' src={plusicon} alt='plicon'/> */}
              </Button>
              <div style={{ minHeight: "10px" }}>
                <Collapse in={open5}>
                  <div id="example-collapse-text" className="data123">
                    Your API key will be activated automatically, up to 2 hours
                    after your successful registration. We invite you to read
                    the API documentation that explains how to use our APIs.
                    <br />
                    <br />
                    <p>
                      Just use your API key instead of “YOUR_API_KEY” with your
                      personal API key, it can be found in your personal account
                      on the “API keys” page. You can also create additional API
                      keys there
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FAQ;
