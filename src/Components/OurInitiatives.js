import React, { useEffect } from "react";
import "../Css/Ourinitative.css";
import ourintiatives from "../Image/our_initiatives.png";
import healthcareinit from '../Image/healthcare_initiative.png'
import Footer from "../Components/Fotter";
import opensource from '../Image/open_source_initiative.png'
import weatherstateion from '../Image/weather_station_initiative.png';
import freedata from "../Image/free_data_for_students.png";
function OurInitiatives() {
  useEffect(() => {
    document.title = "khWeather/OurInitiatives";
  });
  return (
    <div className="ourintitaivemain">
      <div className="container-fluid">
        <div className="container" style={{ paddingTop: "1rem" }}>
          <div className="row">
            <h3>Our Initiatives</h3>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid">
        <div className="container">
          <div className="row" style={{ justifyContent: "space-around" }}>
            <div className="col-md-5" id="ourintitext1">
              <h1>
                <b style={{ color: "red", fontSize: "2.7rem" }}>
                  Our Initiatives
                </b>
              </h1>
              <p>
                <b>
                  2020 has uncovered gaps and weaknesses in supply chains that
                  require digital transformation. While the common effort was
                  focused on tackling the pandemic, problems like climate
                  change, extreme droughts and floods, air and water pollution
                  didn’t go away. Now we have a chance to address these perils
                  from the perspective of the new normal.
                </b>
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid ourintitimg"
                src={ourintiatives}
                alt="ourimg"
              />
            </div>
          </div>
          <div className="row text-center">
            <h4>
              <b style={{ color: "red" }}>
                We have launched the initiatives with the climate at their core
              </b>
            </h4>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row" style={{ justifyContent: "space-around" }}>
            <div className="col-md-5">
              <img
                className="img-fluid ourintitimg2"
                src={freedata}
                alt="ourimg"
              />
            </div>
            <div className="col-md-5">
              <h1 style={{ marginTop: "5rem" }}>
                <b style={{ color: "red", fontSize: "2.7rem" }}>Education</b>
              </h1>
              <p>
                <b>
                  We are creating a hub of bright ideas accumulated in one
                  place. Students and educators from all over the world are
                  trusted with the OpenWeather’s data to be used in their
                  research projects. We believe that this will help us to come
                  up with solutions for the better climate, cleaner air and
                  sustainable future.
                </b>
              </p>
              <button id="learnmorebtn">Learn more</button>
            </div>
            
            <div className="col-md-5">
              <h1 style={{ marginTop: "5rem" }}>
                <b style={{ color: "red", fontSize: "2.7rem" }}>Healthcare</b>
              </h1>
              <p>
                <b>
                We would like to carry on supporting the independent research groups that tackle down the current healthcare challenges. The least we could do is to provide a free access to our Medium plan for Historical Weather Collection which includes the atmospheric parameters to consider in modelling the COVID-19 behaviour.
                </b>
              </p>
              <button id="learnmorebtn">Learn more</button>
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid ourintitimg2"
                src={healthcareinit}
                alt="ourimg"
              />
            </div>
              
         

            <div className="col-md-5">
              <img
                className="img-fluid ourintitimg2"
                src={opensource}
                alt="ourimg"
              />
            </div>

            <div className="col-md-5">
              <h1 style={{ marginTop: "5rem" }}>
                <b style={{ color: "red", fontSize: "2.7rem" }}>Open Source</b>
              </h1>
              <p>
                <b>
                Developers across the world benefit from the Open Source software ecosystem and OpenWeather is not an exception. While influenced by the platforms like Wikipedia and OpenStreetMap, we have used the Open Source software in the foundation of our platform. To inspire the Open Source developers and to facilitate the accessibility of weather data, we choose to gear up those who contribute to the Open Source infrastructure.
                </b>
              </p>
           
            </div>

            <div className="col-md-5">
              <h1 style={{ marginTop: "5rem" }}>
                <b style={{ color: "red", fontSize: "2.7rem" }}>Weather stations</b>
              </h1>
              <p>
                <b>
                If you also believe in the significance of climate data in tackling climate and healthcare challenges and would like to contribute to our initiatives, then we invite you to connect your automated weather station to our platform. The accuracy of weather data benefits from enthusiasts from all over the world and we reward these contributions with our Startup plan.
                </b>
              </p>
           
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid ourintitimg2"
                src={weatherstateion}
                alt="ourimg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OurInitiatives;
