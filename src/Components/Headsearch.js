import React, { useState, useEffect } from "react";
import "../Css/Headsearch.css";

import sunicon from "../Image/sun.png";
import scatteredclouds from "../Image/scatteredclouds.png";

import { RiSendPlaneLine } from "react-icons/ri";
import dummycloud from "../Image/clouddummy.png";
import { TiTick } from "react-icons/ti";

import Fotter from "./Fotter";
import fewclouds from "../Image/2698213.png";
import brokenclouds from "../Image/broken.png";
import showerrain from "../Image/showerrain.png";
import rain from "../Image/rain.png";
import thunderstrom from "../Image/thunderstrom.png";
import snow from "../Image/snow.png";
import mist from "../Image/mist.png";


function Headsearch() {
  const [temp, setemp] = useState("29");
  const [feelike, setfeelike] = useState("33");
  const [typeofweather, settypeofweather] = useState("party-cloud");
  const [Humidity, Sethumidity] = useState("65");
  const [visibility, setvisibility] = useState("9");
  const [pressure, setpressure] = useState("1009");
  const [windspeed, setwindspeed] = useState("2.1");
  const [winddirection, setwinddirection] = useState("N");
  const [windgust, setwindgust] = useState("11");
  const [country, setcountry] = useState("GB");
  const [cityName, setcityName] = useState("London");
  const [date, setdate] = useState("");
  const [weathericon, setweathericon] = useState("");
  const [latitude, setlatitude] = useState("29.1333");
  const [logitude, setlogitude] = useState("76.7");
  const [countries_code, setcountries_code] = useState('gb')
  useEffect(() => {
    document.title = "khWeather/home";
  }, []);

  async function cityoperation2() {
    const apikey = "7f3ca5bdbaea3efdc35238230e8c2211&units=metric";
   let localinput = localStorage.getItem('city2')

    let defaultinput = localinput;


    let userinput = document.getElementById("headicty");
    let userinput2 = userinput.value.toUpperCase();
    // console.log(userinput2);
    if (userinput2 === "") {
      try {
        const cityname = defaultinput;
        let response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`
        );
        const viewdata = await response.json();
        if (viewdata.cod === "404") {
          alert("i am apologize for this inconvenience");
        } else {
          let flo = Math.floor(viewdata.main.temp);
          setfeelike(viewdata.main.feels_like);
          settypeofweather(viewdata.weather[0].description);
          setemp(flo);

          let dates = new Date();
          let properdate = dates + " ";
          setdate(properdate);
          Sethumidity(viewdata.main.humidity);
          const meter = viewdata.visibility;
          const km = meter / 1000;
          setvisibility(km);
          setlatitude(viewdata.coord.lat)
          setlogitude(viewdata.coord.lon)
          setcountry(viewdata.sys.country);
          setcityName(viewdata.name);
          let smaltext = viewdata.sys.country.toLowerCase();
          setcountries_code(smaltext)
          setpressure(viewdata.main.pressure);
          setwindspeed(viewdata.wind.speed);
          setwindgust(viewdata.wind.gust);
          setweathericon(viewdata.weather[0].icon);
          const windnumber = viewdata.wind.deg;
          if (windnumber === 0) {
            setwinddirection("N");
          } else if (windnumber >= 1 && windnumber <= 22.5) {
            setwinddirection("NNE");
          } else if (windnumber >= 22.6 && windnumber <= 45) {
            setwinddirection("NE");
          } else if (windnumber >= 46 && windnumber <= 67.5) {
            setwinddirection("ENE");
          } else if (windnumber >= 67.6 && windnumber <= 90) {
            setwinddirection("E");
          } else if (windnumber >= 91 && windnumber <= 112.5) {
            setwinddirection("ESE");
          } else if (windnumber >= 112.6 && windnumber <= 135) {
            setwinddirection("SE");
          } else if (windnumber >= 136 && windnumber <= 157.5) {
            setwinddirection("SSE");
          } else if (windnumber >= 157.6 && windnumber <= 180) {
            setwinddirection("S");
          } else if (windnumber >= 181 && windnumber <= 202.5) {
            setwinddirection("SSW");
          } else if (windnumber >= 202.6 && windnumber <= 225) {
            setwinddirection("SW");
          } else if (windnumber >= 226 && windnumber <= 247.5) {
            setwinddirection("WSW");
          } else if (windnumber >= 247.6 && windnumber <= 270) {
            setwinddirection("W");
          } else if (windnumber >= 271 && windnumber <= 292.5) {
            setwinddirection("WNW");
          } else if (windnumber >= 292.6 && windnumber <= 315) {
            setwinddirection("NW");
          } else if (windnumber >= 316 && windnumber <= 337.5) {
            setwinddirection("NNW");
          } else if (windnumber >= 337.6 && windnumber <= 360) {
            setwinddirection("NNE");
          } else if (windnumber >= 361) {
            setwinddirection("err");
          }
        }
      } catch (e) {
        console.log("not found");
      }
    } else {
      try {
        const cityname = userinput2;
        let response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`
        );
        const viewdata = await response.json();

        if (viewdata.cod === "404") {
          alert("i am apologize for this inconvenience");
        } else {
          let flo = Math.floor(viewdata.main.temp);
          setfeelike(viewdata.main.feels_like);
          settypeofweather(viewdata.weather[0].description);
          setemp(flo);
          // console.log(viewdata);
          let dates = new Date();
          let properdate = dates + " ";
          setdate(properdate);
          Sethumidity(viewdata.main.humidity);
          const meter = viewdata.visibility;
          const km = meter / 1000;
          setvisibility(km);
          setcountry(viewdata.sys.country);
          setcityName(viewdata.name);
          setpressure(viewdata.main.pressure);
          setwindspeed(viewdata.wind.speed);
          setwindgust(viewdata.wind.gust);
          setlatitude(viewdata.coord.lat)
          setlogitude(viewdata.coord.lon)
          let smaltext = viewdata.sys.country.toLowerCase();
          setcountries_code(smaltext)
          setweathericon(viewdata.weather[0].icon);

          const windnumber = viewdata.wind.deg;
          if (windnumber === 0) {
            setwinddirection("N");
          } else if (windnumber >= 1 && windnumber <= 22.5) {
            setwinddirection("NNE");
          } else if (windnumber >= 22.6 && windnumber <= 45) {
            setwinddirection("NE");
          } else if (windnumber >= 46 && windnumber <= 67.5) {
            setwinddirection("ENE");
          } else if (windnumber >= 67.6 && windnumber <= 90) {
            setwinddirection("E");
          } else if (windnumber >= 91 && windnumber <= 112.5) {
            setwinddirection("ESE");
          } else if (windnumber >= 112.6 && windnumber <= 135) {
            setwinddirection("SE");
          } else if (windnumber >= 136 && windnumber <= 157.5) {
            setwinddirection("SSE");
          } else if (windnumber >= 157.6 && windnumber <= 180) {
            setwinddirection("S");
          } else if (windnumber >= 181 && windnumber <= 202.5) {
            setwinddirection("SSW");
          } else if (windnumber >= 202.6 && windnumber <= 225) {
            setwinddirection("SW");
          } else if (windnumber >= 226 && windnumber <= 247.5) {
            setwinddirection("WSW");
          } else if (windnumber >= 247.6 && windnumber <= 270) {
            setwinddirection("W");
          } else if (windnumber >= 271 && windnumber <= 292.5) {
            setwinddirection("WNW");
          } else if (windnumber >= 292.6 && windnumber <= 315) {
            setwinddirection("NW");
          } else if (windnumber >= 316 && windnumber <= 337.5) {
            setwinddirection("NNW");
          } else if (windnumber >= 337.6 && windnumber <= 360) {
            setwinddirection("NNE");
          } else if (windnumber >= 361) {
            setwinddirection("err");
          }
        }
      } catch (e) {
        console.log("Not found");
      }
    }
  }
  function makeimg() {
    if (weathericon === "01d") {
      document.getElementById("cloudimg1").setAttribute("src", sunicon);
      document.getElementById("cloudimg1").setAttribute("alt", "cloud");
    } else if (weathericon === "02d") {
      document.getElementById("cloudimg1").setAttribute("src", fewclouds);
      document.getElementById("cloudimg1").setAttribute("alt", "cloud");
    } else if (weathericon === "03d") {
      document.getElementById("cloudimg1").setAttribute("src", scatteredclouds);
      document.getElementById("cloudimg1").setAttribute("alt", "cloud");
    } else if (weathericon === "04d") {
      document.getElementById("cloudimg1").setAttribute("src", brokenclouds);
      document.getElementById("cloudimg1").setAttribute("alt", "cloud");
    } else if (weathericon === "09d") {
      document.getElementById("cloudimg1").setAttribute("src", showerrain);
      document.getElementById("cloudimg1").setAttribute("alt", "cloud");
    } else if (weathericon === "10d") {
      document.getElementById("cloudimg1").setAttribute("src", rain);
      document.getElementById("cloudimg1").setAttribute("alt", "cloud");
    } else if (weathericon === "11d") {
      document.getElementById("cloudimg1").setAttribute("src", thunderstrom);
      document.getElementById("cloudimg1").setAttribute("alt", "cloud");
    } else if (weathericon === "13d") {
      document.getElementById("cloudimg1").setAttribute("src", snow);
      document.getElementById("cloudimg1").setAttribute("alt", "cloud");
    } else if (weathericon === "50d") {
      document.getElementById("cloudimg1").setAttribute("src", mist);
      document.getElementById("cloudimg1").setAttribute("alt", "cloud");
    }
  }
  
  makeimg();
  function headsearch()
  {
   cityoperation2();
  }
  useEffect(()=>{
    
    cityoperation2();
  },[])
 
  return (
    <>
    <div className="Headsearchmain">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2 style={{ paddingTop: "1rem" }}>Weather in your city</h2>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="contaier-fluid" id="hebigcontci">
        <div className="container">
          <div className="row">
            <div className="col-md-12" style={{ justifyContent: "center" }}>
              <span id="sebutnparent">
                <input type="search" placeholder="Enter city" id="headicty" />
                <button id="headsebtn" onClick={headsearch}>Search</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    <div className="container-fluid" style={{ marginTop: "2rem" }}>
        <div className="container">
          <hr />
          <div className="row">
            <h4 style={{ color: "red" }}>
              {cityName}, <span>{country}</span>
              <img
                id="countryimage"
                className="img-fluid"
                src={`https://flagcdn.com/48x36/${countries_code}.png`}
                alt="..."
              />
              <i style={{ color: "black" }}> {typeofweather}</i>{" "}
            </h4>
          </div>
        
        <div className="row weatherrow1"style={{justifyContent:"space-around"}}>
          <div className="col-xl-4 wrdiv1">
            <span className="date">{date}</span>
            <p id="cityname">
              {cityName},{country}
            </p>
            <p>
              <img id="cloudimg1" src={dummycloud} alt="cloud" />

              <span className="tempcont"> {temp} &#8451;</span>
            </p>
            
            <h6>
              Feels like {feelike} &#8451;
              <span style={{ paddingLeft: "1rem" }}>{typeofweather}</span>
            </h6>
            <p id="line2pate">
              {" "}
              <i id="sharedata">{<RiSendPlaneLine />}</i>{" "}
              <span>
                {windspeed} met/sec W-D :: {winddirection}
              </span>{" "}
              <span id="ticknPa">
                {<TiTick />}Pressure {pressure}hpa
              </span>
            </p>
            <p>
              <span>Humidity: {Humidity}%</span>
            </p>
            <p>
              <span>Wind gust: {windgust} m/s</span>{" "}
              <span id="visibility">Visibility: {visibility} km</span>
            </p>
          </div>
          <div className="col-md-6">
   
<img
  id="countryimage2"
  className="img-fluid"
  src={`https://flagcdn.com/256x192/${countries_code}.png`}
  alt="country"></img>
            <br/>
            <br/>
            <h6>Lon: {logitude}</h6>
            <h6>Lot: {latitude}</h6>
          </div>
        </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <br/>

        <div className="row">
          <h3>Search engine is very flexible.How it Works:</h3>
          <nav>
            <ul>
              <li><b>. </b>To make it more precise put the city's name, comma, 2-letter country code (ISO3166). You will get all proper cities in chosen country.
The order is important - the first is city name then comma then country. Example - London, GB or New York, US.</li>
            </ul>
          </nav>
        </div>
        </div>
      </div>
      <div className="container-fluid">
        {/* <div className="container"> */}
        <div className="col-xl-12 wrdiv3">
              <iframe
                title="forcast map"
                src="https://embed.windy.com/embed2.html?lat=26.471&lon=76.816&detailLat=29.967&detailLon=76.836&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1"
              >
                {" "}
              </iframe>
            {/* </div> */}
        </div>
      </div>
      <Fotter/>
    </>
  );
}

export default Headsearch;
