import React, { useEffect } from "react";
import "../Css/Guide.css";
import { NavLink } from "react-router-dom";
import Fotter from "../Components/Fotter";
function Guide() {
  useEffect(()=>{
    document.title="khWeather/Guide"
  })
  return (
    <div className="Guidemain">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <span style={{ paddingTop: "1rem" }}>
              <h2>Guide</h2>
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <h3>
              <b>Weather data in a fast and easy-to-use way</b>
            </h3>
            <p>
              We are providing highly recognisable weather products that make
              working with the weather data a way easier. We work with millions
              of developers around a clock and believe that these benefits might
              be suitable for most of applications, up to the{" "}
              <NavLink>complex enterprise systems.</NavLink>{" "}
            </p>
            <nav>
              <ul id="guideul">
                <li> A spectrum of ready-to-use weather products</li>
                <li>
                  Short-term and long-term forecasts, history and observation
                </li>
                <li>Any location on the globe</li>
                <li>Transparent pricing and licensing</li>
              </ul>
            </nav>
            <p>
              Our weather products are accessible via fast, reliable{" "}
              <NavLink>APIs</NavLink> that follow industry standards and
              compatible with different kind of enterprise systems. All our
              products content essential climate variables for any location.
              Besides that, we have some special products that helpful for
              industries that are affected by weather condition, for instance{" "}
              <NavLink>
                {" "}
                Road Risk API, Solar Irradiance API,Solar Panel Energy
                Prediction,
              </NavLink>
              ,etc.
            </p>
            <br />
            <br />
            <br />
            <span>
              <h2>KhWeather products</h2>
            </span>
            <p>
              For each point on the globe, khWeather provides hyperlocal minute
              forecast, historical data, current state, and from short-term to
              annual and forecasted weather data. All data is available via{" "}
              <NavLink>industry standard APIs</NavLink>.
            </p>
            <span style={{ color: "red" }}>
              <h5>
                <b>One Call API by call:</b>
              </h5>
            </span>
            <p>
              One Call 3.0 allows users to receive access to the various data
              for a specific location and includes:{" "}
            </p>
            <nav>
              <ul id="guideul">
                <li>Current weather</li>
                <li> Minute forecast for 1 hour</li>
                <li>Hourly forecast for 48 hours</li>
                <li>Daily forecast for 8 days</li>
                <li>Government weather alerts</li>
                <li>
                  Weather data for any timestamp from 1st January 1979 till 4
                  days ahead forecast
                </li>
                <li>
                  Daily aggregation of weather data for 40+ years archive and
                  1.5 years ahead forecast
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="row"
            style={{ justifyContent: "center", padding: "0.5rem 0 1.2rem 0" }}
          >
            <button id="subscribebtn">Subscribe to One Call by Call</button>
          </div>
          <div className="row">
            <p>
              For more functionality, please consider our generous professional
              product collections.
            </p>
            <h4>
              <b>Professional collections:</b>
            </h4>
            <nav>
              <ul id="guideul">
                <li>
                  <b> 1.</b> Current Weather and Forecasts collection
                  <ul>
                    <li>
                      <NavLink>Current state</NavLink> with every 10 min update
                    </li>
                    <li>
                      <NavLink>Forecast for 4 days</NavLink> with hour
                      granularity
                    </li>
                    <li>
                      <NavLink>Forecast for 16 days</NavLink>that give you data
                      four times a day at night, day, evening, and morning
                    </li>
                    <li>
                      <NavLink>Forecast for 30 days</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="row text-center"
            style={{ justifyContent: "center", padding: "1rem 0 1rem 0" }}
          >
            <button id="guidelearnbtn">learn more</button>
          </div>
          <div className="row">
            <nav>
              <ul id="guideul">
                <li>
                  <b> 2.</b> Current Weather and Forecasts collection
                  <ul>
                    <li>
                      <NavLink>History archive for 40+ years back</NavLink> with
                      hour granularity
                    </li>

                    <li>
                      <NavLink>History Forecasts archive </NavLink>of previous
                      forecasts made for 16 days ahead for any location on the
                      globe
                    </li>
                    <li>
                      <NavLink>History API </NavLink>
                      with weather data for one month or year back depending of
                      your subscription
                    </li>
                    <li>
                      <NavLink>Statistical Weather API</NavLink>
                      with statistical data by main weather parameters for a
                      chosen date or month of the year, or for the entire year
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="row text-center"
            style={{ justifyContent: "center", padding: "1rem 0 1rem 0" }}
          >
            <button id="guidelearnbtn">learn more</button>
          </div>
          <div className="row" style={{ padding: "1rem 0 1rem 0" }}>
            <nav>
              <ul id="guideul">
                <li>
                  <b> 3.</b>Weather Maps collection
                  <ul>
                    <li>
                      <NavLink>Weather Maps 2.0</NavLink>with 15 weather layers,
                      which display historical, current and forecast weather
                      data
                    </li>

                    <li>
                      <NavLink>Global Precipition Maps </NavLink>based on radar
                      data, satellite images and powered by ML
                    </li>
                    <li>
                      <NavLink>Relief map </NavLink>
                      as a base layer for ther KhWeather maps
                    </li>
                    <li>
                      <NavLink>Statistical Weather API</NavLink>
                      with statistical data by main weather parameters for a
                      chosen date or month of the year, or for the entire year
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="row text-center"
            style={{ justifyContent: "center", padding: "1rem 0 1rem 0" }}
          >
            <button id="guidelearnbtn">learn more</button>
          </div>
          <div className="row" style={{ padding: "1rem 0 1rem 0" }}>
            <nav>
              <ul id="guideul">
                <li>
                  <b> 4.</b>Other Weather APIs
                  <ul>
                    <li>
                      <NavLink>Air Quality</NavLink>hourly data with Aerosols
                      properties PM2.5, PM10; Carbon CO2; Precursors SO2, NO2;
                      Ozone O3; AQ Index
                    </li>

                    <li>
                      <NavLink>Geocoding API </NavLink>is a simple tool that
                      eases the search for locations while working with
                      geographic names and coordinates
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="row text-center"
            style={{ justifyContent: "center", padding: "1rem 0 1rem 0" }}
          >
            <button id="guidelearnbtn">learn more</button>
          </div>
          <div
            className="row"
            style={{ justifyContent: "center", padding: "1rem 0 1rem 0" }}
          >
            <h2>KhWeather Weather model</h2>
            <p>
              KhWeather model allows to calculate weather data for any location.
              OpenWeather’s advanced ML-based numerical weather model performs
              at up to 500 m resolution and allows its users to consider highly
              local nuances of climate and build accurate, efficient products.
              The model uses a number of data sources - radars, models from
              global meteorological agencies (e.g., Met Office, NOAA, ECMWF),
              weather satellites, and a vast network of weather stations. You
              can find out more about OpenWeather model <NavLink>here.</NavLink>
            </p>
            <br />
            <br />
            <h2>How to start using Weather API</h2>
            <p>
              If you want to start using Free or paid weather API, please read ‘
              <NavLink>
                How to start and operate with API more efficiently
              </NavLink>
              ’.
            </p>
            <p>
              If you are ready to subscribe to our{" "}
              <NavLink>paid plans,</NavLink> please read{" "}
              <NavLink>‘No-fuss subscription to our weather services’ </NavLink>{" "}
              first.
            </p>
            <p>
              Plese read{" "}
              <NavLink>Terms and conditions fo sale,Privacy policy,</NavLink>and{" "}
              <NavLink>Websites ters and conditions of use</NavLink>before you
              buy.
            </p>
            <p>
              <NavLink>Licenses </NavLink>
              We use for data and services.
            </p>
            <p>
              If you are an Enterprise license holder you can request for
              expanded features, customisation, configuration of APIs, and more
              exclusive support. For more details, please
              <NavLink> contact us.</NavLink>
            </p>
            <p>
              More than ever, our <NavLink>Customer support team </NavLink>is at
              your side to answer all your questions and respond to your needs
              in the best possible way.
            </p>
            <p>
              If you do not find answers to your questions about purchasing
              process, subscriptions, products, please look at our comprehensive
              FAQ or contact our
              <NavLink> customer support team.</NavLink>
            </p>
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
}

export default Guide;
