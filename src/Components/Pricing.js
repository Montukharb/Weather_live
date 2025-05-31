import React, { useEffect } from "react";
import "../Css/Pricing.css";
import Footer from '../Components/Fotter'
import { NavLink } from "react-router-dom";
function Pricing() {
    useEffect(()=>{
document.title="khWeather/Pricing"
    },[])
  return (
    <div className="pricingmain">
      <div className="container-fluid" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div className="row">
            <h2>
              <b>Pricing</b>
            </h2>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <p>
              Get weather data for any location on the globe immediately with
              our superb API! Just subscribe with your email and start using
              minute forecasts, hourly forecasts, history and other weather data
              in your applications. For more functionality, please consider our
              professional subscriptions.
            </p>
          </div>
          <div className="row">
            <h3 style={{ color: "red" }}>
              "One Call by Call subscription plan
            </h3>
            <hr />
            <p>
              One Call API 3.0 is included to the “One call by call”
              subscription plan only, users pay for the actual use of the
              product. There are no limits on the number of API calls, but you
              can set API calls limit per day in the{" "}
              <NavLink>"Billing plans" tab</NavLink> in your Personal account.
            </p>
            <p>
              Please note, that you do not need to subscribe to any other
              OpenWeather subscription plans to get access to the One Call API
              3.0. Read more about this subscription plan in the{" "}
              <NavLink>FAQ</NavLink>.
            </p>
          </div>
          <div className="row oncalapirow">
            <div className="col-md-5">
              <h3>
                <b style={{ color: "red" }}>One Call API 3.0</b>
              </h3>
              <p>Make an API call to receive access to the various data:</p>
              <nav>
                <ul>
                  <li>
                    <b>Current weather and forecasts:</b>
                  <ul>
                  <li>Minute forecast for 1 hour</li>
                    <li>Hourly forecst for 48 hours</li>
                    <li>
                      daily forecast for 8 days and government weather alerts
                    </li></ul> 
                  </li>

                  <li>
                    <NavLink>Weather data for any timestamp</NavLink> for 40+
                    years historical archive and 4 days ahead forecast
                  </li>
                  <li>
                    <NavLink>Daily aggregation</NavLink> of weather data for 40+
                    years archive and 1.5 years ahead forecast
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-5">
              <h3>Pay as you call</h3>
              <h2>
                <b style={{ color: "red" }}>
                  1,000 API calls per day for free <br />
                  0.0012 GBP{" "}
                </b>
                per Api call over the daily limit
              </h2>
              <br />
              <br />
              <button className="subscribe">Subscribe</button>
            </div>
         
          </div>
          <div className="row"style={{margin:"2rem 0 1rem 0"}}>
                <h3 style={{color:"red"}}>Professional collections</h3>
                <hr/>
                <p>For professionals and specialists with middle sized project, we recommend our professional subscriptions. The Professional API collections include several products in each subscription plan. Unlike "One Call by Call" subscription, professional subscriptions have the fix price per month and API call limits (number of API calls per minute and number of API call per month).
<br/>
<br/>
The Professional API collections contain access to weather historical data, current and various forecasts. These collections also allows users to request weather maps and get weather data not only via API, but with other instruments.</p>
            </div>
        </div>
      </div>
  <div className="container-fluid">
    <div className="container">
       </div>
  </div>
  <Footer/>
    </div>
  );
}

export default Pricing;
