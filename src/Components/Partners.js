import React, { useEffect } from "react";
import "../Css/Partners.css";
import Footer from "../Components/Fotter";
import { NavLink } from "react-router-dom";
function Partners() {
  useEffect(() => {
    document.title = "khWeather/Partners";
  }, []);
  return (
    <div className="partnersmain">
      <div className="container-fluid">
        <div className="container">
          <div className="row" style={{ paddingTop: "1rem" }}>
            <h3>Partners and solutions</h3>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid">
        <div className="container">
          <div className="row prtner1row">
            <div className="col-md-6">
              <p id="git1">
                If you have not found a proper solution on this page, just look
                at the 14,000+ OpenWeatherMap repositories on{" "}
                <NavLink>GitHub</NavLink>
              </p>
              <br />
              <br />
              <span id="googleW-basedcom">
                <h2>
                  Google Weather-Based Campaign Management with OpenWeatherMap
                  API
                </h2>
                <p>
                  Demand for certain products and services varies greatly
                  depending on the weather. For example, users are much more
                  likely to search for information on amusement parks on a hot,
                  sunny day than if it's cold and raining. An amusement park
                  company may want to increase their bids when the weather is
                  nice, but doing so every day would require a lot of manual
                  work. With AdWords scripts, however, it's possible to
                  programmatically fetch weather information and adjust bids in
                  a matter of minutes.
                  <br />
                  This script uses Google Spreadsheets to store the list of
                  campaigns and their associated locations. A call to the
                  OpenWeatherMap API is made for each location and weather
                  conditions are calculated using some basic rules. If a rule
                  evaluates to true, then a corresponding location bid
                  multiplier is applied to the location targeting for the
                  campaign.
                </p>
                <NavLink>More detailes with source code</NavLink>
              </span>
              <br />
              <br />
              <span id="Googlemapjavascriptapi">
                <h2>Google Maps JavaScript API based on OpenWeatherMap API</h2>
                <p>
                  Google has closed their Weather and Cloud solutions since 4th
                  of June 2015 and recommended to use OpenWeatherMap with the
                  Google Maps JavaScript API as an alternative solution.
                </p>
                <button id="learnmorebtn">View on Github</button>
                <button id="learnmorebtn" style={{ marginLeft: "0.5rem" }}>
                  Open manual
                </button>
              </span>
              <br />
              <br />
              <br />
              <span id="Lotproject">
                <h2>
                  OpenWeather current weather data in Mozilla's IoT project
                </h2>

                <p>
                  The WebThings Gateway for home automation: Monitor and control
                  all your smart home devices via a unified web interface.
                </p>

                <br />
                <button id="learnmorebtn">Open website</button>
                <p>
                  Weather add-on for the gateway allows users to select from
                  OpenWeatherMap or some other providers.
                </p>
                <button id="learnmorebtn">View on Github</button>
              </span>
              <span id="Ubantu">
                <h2>Ubuntu</h2>

                <p>Ubuntu My Weather Indicator</p>

                <button id="learnmorebtn">Open website</button>
                <p>Ubuntu Unity khWeatherMap Scope</p>
                <button id="learnmorebtn">Open Website</button>
              </span>
              <span id="Android">
                <h2>Android</h2>

                <p>Android weather app: JSON, HTTP and Openweathermap</p>

                <p>
                  In this post we want to describe how to create a weather app
                  for Android that gives current weather information. This app
                  will use JSON, HTTP connection and AsyncTask to get this
                  information.
                </p>
                <NavLink>
                  {" "}
                  http://www.survivingwithandroid.com/2016/01/4-free-weather-providers-api-to-develop.html
                </NavLink>
                <br />
                <NavLink>
                  {" "}
                  http://www.survivingwithandroid.com/2013/05/build-weather-app-json-http-android.html
                </NavLink>
                <br />
                <NavLink>
                  {" "}
                  http://survivingwithandroid.github.io/WeatherLib
                </NavLink>
                <br />
                <br />
                <h4>Weather Notification</h4>
                <p>
                  Simple application which displays the air temperature and
                  other weather conditions in the Android notification bar. The
                  air temperature is always visible like a system clock.
                </p>
                <button id="learnmorebtn">See on Bitbucket</button>
              </span>
              <span id="Leaflet">
                <h2>Leaflet</h2>
                <p>
                  Leaflet plugin from ScanEx to show weather in main citites
                </p>
                <button id="learnmorebtn">View on Github</button>
                <p>
                  <b>OpenWeatherMap for Leaflet based maps</b>
                </p>
                A JavaScript library for including OpenWeatherMap's layers and
                OWM's current city/station data in leaflet based maps without
                hassle.
                <p></p>
                <button id="learnmorebtn">View on Github</button>
                <p>
                  <b>Leaflet providers </b>
                </p>
                <p>
                  Leaflet-providers provides tile layers from different
                  providers, including OpenStreetMap, OpenWeatherMap and others.
                </p>
                <button id="learnmorebtn">View on Github</button>
              </span>
              <span id="Java">
                <h2>Java</h2>

                <p>
                  <b>khWeatherMap JSON API client library in Java</b>
                </p>
                <p>
                  Java library to retrieve weather information and forecasts
                  from Open Weather Map
                </p>

                <button id="learnmorebtn">View on Github</button>
                <h4>
                  <b>OWM JAPIs</b>
                </h4>
                <p>
                  OWM JAPIs lets you develop weather-aware applications for Java
                  and Android platforms in minimum time using OWM JAPIs, an
                  easy-to-use, detailed and documented weather APIs' wrapper
                  library for retrieving weather data from OpenWeatherMap.org.
                  You can easily retrieve and use weather data in your
                  applications using this library.
                  <br />
                  OWM JAPIs allows you to fetch weather data in only 3-5 lines
                  of code (excluding any other/skeleton code, of course). You
                  can develop applications and services for multiple platforms
                  using this library, such as Windows, Mac OS X, Linux, and
                  Android.
                </p>
                <button id="learnmorebtn">View on Github</button>
              </span>

              <span id="Golang">
                <h2>Go (golang)</h2>

                <p>
                  <b>KhWeatherMap Go API</b>
                </p>
                <p>Go (golang) library for use with openweathermap.org's API</p>
                <button id="learnmorebtn">See library</button>
              </span>

              <span id="CMS">
                <h2>
                  <b>CMS</b>
                </h2>
                <p>
                  <b>Drupal OpenLayers Kh Weather Map</b>
                </p>
                <p>
                  Provides default OpenWeatherMap layers and a new layer type to
                  display weather forecast and weather stations all around the
                  globe.
                </p>
                <button id="learnmorebtn">See on the Website</button>
                <br />
                <p>
                  <b>WordPress Awesome Weather Widget</b>
                </p>
                <p>
                  This plugin allows you to easily add super clean (and awesome)
                  weather widgets to your site. The weather data is provided for
                  free by http://openweathermap.org
                </p>
                <button id="learnmorebtn">View widget</button>
                <br />
                <p>
                  <b>WordPress HD Weather Widget by The Waypoint</b>
                </p>
                <p>
                  This plugin uses HD 331dpi images, in beautiful responsive
                  cirlces, to display weather for your location. Images included
                  in this package now. The plugin parses data from the OWM api
                  to display information. The HD background image changes, based
                  on the 'condition' outside, better named here, the "Feels". We
                  have provided one Feel in the initial v.1. Use the
                  documentation to xref the api condition statements, against
                  file names. The images get loaded via css, so they don't
                  interfere with layered objects on the site.
                </p>
                <button id="learnmorebtn">View plugin</button>
              </span>
              <span id="RaspberryPi">
                <h2>Raspberry Pi</h2>
                <p>
                  <b>Raspberry_temperature_log</b>
                </p>
                <p>
                  Turn Raspberry Pi into temperature and humidity logging
                  station with DHT11 sensor
                </p>
                <button id="learnmorebtn">View on Github</button>
              </span>
              <span id="Python">
                <h2>
                  <b>Python</b>
                </h2>
                <p>
                  <b>PyOWM</b>
                </p>
                <p>
                  PyOWM is a client Python wrapper library for the
                  OpenWeatherMap. It allows quick and easy consumption of OWM
                  weather data (either observations and forecast) from Python
                  applications via a simple object model. No additional
                  libraries are requested: only the Python 2.6/2.7 standard
                  library modules. PyOWM currently supports version 2.5 of the
                  OWM API.
                </p>
                <button id="learnmorebtn">View on Github</button>
                <button id="learnmorebtn" style={{ marginLeft: "0.5rem" }}>
                  View on YouTube
                </button>
              </span>
              <span id="PHP">
                <h2>
                  <b>PHP</b>
                </h2>
                <p>
                  <b>OpenWeatherMap-PHO-Api</b>
                </p>
                <p>Php api to parse weather data from KhWeatherMap.org</p>
                <button id="learnmorebtn">View on Github</button>
              </span>
              <span id="ApacheCamel">
                <h2>
                  <b>Apache Camel</b>
                </h2>
                <p>
                  <b>Weather Component</b>
                </p>
                <p>
                  Component is used for polling weather information from Open
                  Weather Map - a site that provides free global weather and
                  forecast information. The information is returned as a json
                  String object.
                </p>
                <br />
                <button id="learnmorebtn">See on the website</button>
              </span>
              <span id="Desktop">
                <h2>
                  <b>Desktop</b>
                </h2>
                <p>
                  <b>Weather-Map</b>
                </p>
                <p>
                  Weather-Map is a desktop application that provides free
                  weather data. Weather-Map wide range of weather data - map
                  with current weather, quantity of precipitation, wind speed,
                  clouds cover, sea Level Pressure contour maps, temperature,
                  snow precipitation, data from weather stations, data from
                  radars, data for cities. Weather data is received from
                  OpenWeatherMap api.
                </p>
                <br />
                <button id="learnmorebtn">View on GitHub</button>
              </span>
              <span id="MobileApplication">
                <h2>
                  <b>Mobile Applications</b>
                </h2>
                <p>
                  <b>The khWeather Map app with Glob3 Mobile</b>
                </p>
                <p>The power of Open Data + Glob3 Mobile.</p>
                <NavLink>
                  http://owmgapp.glob3mobile.com 14,000+ repositori
                </NavLink>
                <br />
                <br />
                <br />
                <h4>14,000+ repositories on GitHub</h4>
                <p>
                  GitHub library of codes and scripts operationg with
                  KhWeatherMap API
                </p>
                <button id="learnmorebtn">View solutions</button>
              </span>
            </div>
            <div className="col-md-3 fixclspartner">
              <nav>
                <ul>
                  <a href="#googleW-basedcom">
                    {" "}
                    <li>
                      Google Weather-Based Compaign Management with KhWeatherMap
                      API
                    </li>
                  </a>
                  <a href="#Googlemapjavascriptapi">
                    {" "}
                    <li>
                      Google Maps JavaScript API baserd on KhWeatherMap API
                    </li>
                  </a>
                  <a href="#Lotproject">
                    {" "}
                    <li>
                      {" "}
                      KhWeather current weather data in Mozilla's IoT project
                    </li>
                  </a>
                  <a href="#Ubantu">
                    {" "}
                    <li>Ubuntu</li>
                  </a>
                  <a href="#Android">
                    {" "}
                    <li>Android</li>
                  </a>
                  <a href="#Leaflet">
                    {" "}
                    <li>Leaflet</li>
                  </a>
                  <a href="#Java">
                    {" "}
                    <li>Java</li>
                  </a>
                  <a href="#Golang">
                    {" "}
                    <li>Go (golang)</li>
                  </a>
                  <a href="#CMS">
                    {" "}
                    <li>CMS</li>
                  </a>
                  <a href="#RaspberryPi">
                    {" "}
                    <li>Raspberry Pi</li>
                  </a>

                  <a href="#Python">
                    {" "}
                    <li>Python</li>
                  </a>
                  <a href="#PHP">
                    {" "}
                    <li>PHP</li>
                  </a>
                  <a href="#ApacheCamel">
                    {" "}
                    <li>Apache Camel</li>
                  </a>
                  <a href="#Desktop">
                    {" "}
                    <li>Desktop</li>
                  </a>
                  <a href="#MobileApplication">
                    {" "}
                    <li>Mobile applications</li>
                  </a>
                  <a href="#BigLibraryOnGitHub">
                    {" "}
                    <li>Big library on GitHub</li>
                  </a>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div id="BigLibraryOnGitHub"></div>
      <Footer />
    </div>
  );
}

export default Partners;
