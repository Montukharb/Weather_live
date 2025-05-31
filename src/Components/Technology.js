import React from "react";
import "../Css/Technology.css";
import { NavLink } from "react-router-dom";
import Fotter from "./Fotter";
function Technology() {
  return (
    <div className="Technologymain">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-7" style={{ paddingTop: "1rem" }}>
              <h3>Technology</h3>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="continer-fluid">
        <div className="container">
          <div className="row">
            <h4>Why our Free Weather API is so good yet free</h4>
            <p>
              Such powerful technologies as our ML can significantly advance
              both the accuracy and computing speed of global assemble
              forecasting models, a practice that was impossible only a few
              years ago. That makes the entire calculation fast and
              cost-effective, providing millions of customers with accurate
              forecasts promptly.
            </p>
            <h5>Weather data should be open to anyone</h5>
            <p>
              Not many types of data can affect business decisions and personal
              everyday plans on the same scale as weather data does. And that is
              not to mention the billions of dollars that businesses and
              governments are losing indeed due to extreme weather conditions
              that are beyond their control. However, most applications of
              accurate forecasts and history for businesses are more routine,
              yet more practical for daily analysis and decision-making. To name
              just a few, these include analysis of the impact of weather on
              customers’ demand for retailers, planning of safe routes for
              transport companies, accurate evaluation of customers’ cases for
              insurers, sensitive planning of energy consumption for
              householders, and timely watering of crops for farmers.
            </p>
            <h5>
              Modern technologies make accurate weather data not only widely
              available, but also nearly free
            </h5>
            <p>
              What seemed impossible just a few years ago, you can now do at
              lightning speed. Machine learning (ML), neural networks, big data,
              cloud spaces – all of this is easily accessible for calculating
              hugely sophisticated forecasting models such as Numerical Weather
              Prediction (NWP) or short-term forecasts that update rapidly.
            </p>
            <h5>ML empowers the classic forrecasting models</h5>
            <p>
              When it comes to the computing and valuation of complex
              hydro-meteorological models, we rely on the most honourable
              agencies such as NOAA, Met Office, ECMWF, Environmental Canada.
              But we can enhance their models with our knowledge of data science
              and ML, given that most of the mathematics behind forecasting is
              well-known. For example, the forecasting algorithms for its
              extreme form, nowcast, have been in use since the 1950s’ radar
              data is open, and even free for some territories. Additionally,
              there are lots of specialised instruments for developers, such as
              Python libraries for the STEP (Short-term Ensemble Prediction
              System) computation.
            </p>
            <h5>PLethora of Kh Weather daa to be fed the ML model</h5>
            <p>
              Fortunately, global meteorological companies such as NOAA, the Met
              Office, Environment Canada and ECMWF share our belief that weather
              data should be open. They supply us with enormous data feeds,
              including data from radars, weather satellites and weather
              stations. They also provide a lot of more specialised products
              such as road alerts, road risks and marine weather.
            </p>
            <h5>
              Weather data finds their way to d3velopers with Khweather ML model
            </h5>
            <p>
              Before weather data can find its way to businesses, it has to pass
              through the hands of developers, and they have to come to us.{" "}
              <NavLink to={"https://openweathermap.org/api"} target="blank">
                Our weaher products
              </NavLink>{" "}
              are based on open data and open technologies. With our
              convolutional neural networks and ML technologies, we
              significantly enhance fundamental global forecast models with
              radar-based nowcasts, weather satellite data and the vast network
              of weather stations (82,000), rain gauges and other weather
              sensors. Developers access these vast amounts of data via our
              light-speed, elegant APIs.
            </p>
            <h5>
              Openweather ML calculates weather data for any location, for any
              moment, in the past, now, and in the future
            </h5>
            <p>
              With our APIs, you can get data for any location on the globe:
              minutely forecast for the two hours, hourly forecasts for one
              week, current weather, and history for the 40 years back, with a
              vast range of meteorological parameters. All these remarkable
              products are available for free with up to 1 million calls per
              month. For those who are looking for a bigger service, we provide
              several paid subscriptions and a range of historical products.
              <br />
              If you want to know how accurate our weather model is, please read
              our detailed report.
              <br />
              For all requests, please contact us at{" "}
              <NavLink to={"/Contact"}>montukharb868@gmail.com </NavLink>
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
}

export default Technology;
