import React, { useEffect, useState } from "react";
import "../Css/Home.css";
import sunicon from "../Image/sun.png";
import scatteredclouds from "../Image/scatteredclouds.png";
import forcsteddata from "../Image/forecasted_weather_data.png";
import onecallimg from "../Image/one_call_apiimg.png";
import historicalimg from "../Image/historical_data_any_location.png";
import icononecall from "../Image/icon-one-call.jpg";
import solarpanel from "../Image/icon-solar-panel.png";
import alertpush from "../Image/icon-alerts-push.png";
import historicaldata2 from "../Image/current.png";
import { RiSendPlaneLine } from "react-icons/ri";
import dummycloud from "../Image/clouddummy.png";
import { TiTick } from "react-icons/ti";
import historicaldata from "../Image/historical_data.png";
// chart import files from recharts react
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import Marquee from "react-fast-marquee";
import icon1 from "../Image/icon-1.png";
import icon2 from "../Image/icon-2.png";
import icon3 from "../Image/icon-3.png";
import icon4 from "../Image/icon-4.png";
import icon5 from "../Image/icon-5.png";
import { NavLink } from "react-router-dom";
import Companyimg from "../Image/Companysliderad.png";
// import Eightdayforecast from "./Eightdayforecast";
import Fotter from "./Fotter";
import fewclouds from "../Image/2698213.png";
import brokenclouds from "../Image/broken.png";
import showerrain from "../Image/showerrain.png";
import rain from "../Image/rain.png";
import thunderstrom from "../Image/thunderstrom.png";
import snow from "../Image/snow.png";
import mist from "../Image/mist.png";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const data = [
  {
    name: "Light rain",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "light rain",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "heavy rain",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "moderate ",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "moderate rain",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "light rain",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "modrate rain",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

function Home() {
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
  const [tempmax, settempmax] = useState("37");
  const [tempmin, settempmin] = useState("21");
  const [countries_code, setcountries_code] = useState("gb");
  const [defaultapi, setapi] = useState("metric");

  const [deg, setdeg] = useState(0);
  useEffect(() => {
    document.title = "khWeather/home";
  }, []);
  // metric
  const apikey = `7f3ca5bdbaea3efdc35238230e8c2211&units=${defaultapi}`;
  async function cityoperation() {
    let defaultinput = "Mumbai";
    let userinput = document.getElementById("citysearch");
    let userinput2 = userinput.value.toUpperCase();
    console.log(userinput2);
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
          let smaltext = viewdata.sys.country.toLowerCase();
          setcountries_code(smaltext);
          setcountry(viewdata.sys.country);
          setcityName(viewdata.name);
          setpressure(viewdata.main.pressure);
          setwindspeed(viewdata.wind.speed);
          setwindgust(viewdata.wind.gust);
          settempmax(viewdata.main.temp_max);
          settempmin(viewdata.main.temp_min);
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
          console.log(viewdata);
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
          settempmax(viewdata.main.temp_max);
          settempmin(viewdata.main.temp_min);
          let smaltext = viewdata.sys.country.toLowerCase();
          setcountries_code(smaltext);
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
  // async function callapi() {
  //   const apikey = "7f3ca5bdbaea3efdc35238230e8c2211&units=metric";

  //   const cityname = "Rohtak";
  //   let response = await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`
  //   );
  //   const viewdata = await response.json();
  //   console.log(viewdata);
  //   let flo = Math.floor(viewdata.main.temp);
  //   setfeelike(viewdata.main.feels_like);
  //   settypeofweather(viewdata.weather[0].description);
  //   setemp(flo);

  // let dates = new Date()
  // let properdate = dates + " "
  // setdate(properdate);
  //   Sethumidity(viewdata.main.humidity);
  //   const meter = viewdata.visibility;
  //   const km = meter / 1000;
  //   setvisibility(km);
  //   setcountry(viewdata.sys.country);
  //   setcityName(viewdata.name);
  //   setpressure(viewdata.main.pressure);
  //   setwindspeed(viewdata.wind.speed);
  //   setwindgust(viewdata.wind.gust);
  //   const windnumber = viewdata.wind.deg;
  //   if (windnumber === 0) {
  //     setwinddirection("N");
  //   } else if (windnumber >= 1 && windnumber <= 22.5) {
  //     setwinddirection("NNE");
  //   } else if (windnumber >= 22.6 && windnumber <= 45) {
  //     setwinddirection("NE");
  //   } else if (windnumber >= 46 && windnumber <= 67.5) {
  //     setwinddirection("ENE");
  //   } else if (windnumber >= 67.6 && windnumber <= 90) {
  //     setwinddirection("E");
  //   } else if (windnumber >= 91 && windnumber <= 112.5) {
  //     setwinddirection("ESE");
  //   } else if (windnumber >= 112.6 && windnumber <= 135) {
  //     setwinddirection("SE");
  //   } else if (windnumber >= 136 && windnumber <= 157.5) {
  //     setwinddirection("SSE");
  //   } else if (windnumber >= 157.6 && windnumber <= 180) {
  //     setwinddirection("S");
  //   } else if (windnumber >= 181 && windnumber <= 202.5) {
  //     setwinddirection("SSW");
  //   } else if (windnumber >= 202.6 && windnumber <= 225) {
  //     setwinddirection("SW");
  //   } else if (windnumber >= 226 && windnumber <= 247.5) {
  //     setwinddirection("WSW");
  //   } else if (windnumber >= 247.6 && windnumber <= 270) {
  //     setwinddirection("W");
  //   } else if (windnumber >= 271 && windnumber <= 292.5) {
  //     setwinddirection("WNW");
  //   } else if (windnumber >= 292.6 && windnumber <= 315) {
  //     setwinddirection("NW");
  //   } else if (windnumber >= 316 && windnumber <= 337.5) {
  //     setwinddirection("NNW");
  //   }
  //   else if(windnumber>=337.6&&windnumber<=360)
  //   {   setwinddirection  ('NNE')
  //   }
  //   else if(windnumber>=361)
  //   {   setwinddirection  ('err')
  //   }

  // }
  // useEffect(() => {
  //   // callapi();
  // });
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
  function doubleoperation() {
    cityoperation();
    // makeimg();
  }
  useEffect(() => {
    doubleoperation();
  });
  makeimg();

  function differentweather() {
    alert(
      "Different weather is unsupported in this time so .i promise different weather is available as soon as possible ,Thank you"
    );
  }

  function metric() {
    setapi("metric");
    setdeg(1);
  }

  function imperial() {
    setapi("imperial");
    setdeg(2);
  }
  return (
    <div className="Homemain">
      <div className="container-fluid hcont">
        <div className="row hrow1">
          <p>
            <span id="khwe">Weather-Forecasting</span> <br />
            <span id="wtext">
              Weather forecasts, nowcasts and <br />
              history in a fast and elegant way
            </span>
          </p>
        </div>
      </div>
      <div className="continer-fluid Hcont2">
        <div className="container">
          <div className="row HsearchR">
            <div className="col-xl-5 Hdiv1">
              <input type="search" id="citysearch" placeholder="Search city" />
              <button
                id="citybutn"
                onKeyUp={doubleoperation}
                onClick={doubleoperation}
              >
                Search
              </button>
            </div>
            <div className="col-xl-5 Hdiv2">
              <i>{<RiSendPlaneLine />}</i>
              <span onClick={differentweather}>Different Weather?</span>
              <span onClick={metric}>Metric: &#8451;, m/s</span>
              <span onClick={imperial}>Imperial: &#8457;,mph</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid weatherbigcont1">
        <div className="container weathercont1">
          <div className="row weatherrow1">
            <div className="col-xl-4 wrdiv1">
              <span className="date">{date}</span>
              <p id="cityname">
                {cityName},{country}
                <br />
                <img
                  id="countryimage"
                  className="img-fluid"
                  src={`https://flagcdn.com/48x36/${countries_code}.png`}
                  alt="..."
                />
              </p>
              <p>
                <img id="cloudimg1" src={dummycloud} alt="cloud" />

                <span className="tempcont">
                  {" "}
                  {temp}{" "}
                  {(() => {
                    if (deg === 0) {
                      return <>&#8451;</>;
                    } else if (deg === 1) {
                      return <>&#8451;</>;
                    } else if (deg === 2) {
                      return <>&#8457;</>;
                    }
                  })()}
                </span>
              </p>
              <h6>
                Feels like {feelike}{" "}
                {(() => {
                  if (deg === 0) {
                    return <>&#8451;</>;
                  } else if (deg === 1) {
                    return <>&#8451;</>;
                  } else if (deg === 2) {
                    return <>&#8457;</>;
                  }
                })()}
                ;<span style={{ paddingLeft: "1rem" }}>{typeofweather}</span>
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
                <br />
                <span id="visibility">
                  Feels like: {feelike}{" "}
                  {(() => {
                    if (deg === 0) {
                      return <>&#8451;</>;
                    } else if (deg === 1) {
                      return <>&#8451;</>;
                    } else if (deg === 2) {
                      return <>&#8457;</>;
                    }
                  })()}
                </span>
                <span id="visibility">
                  Temp max: {tempmax}{" "}
                  {(() => {
                    if (deg === 0) {
                      return <>&#8451;</>;
                    } else if (deg === 1) {
                      return <>&#8451;</>;
                    } else if (deg === 2) {
                      return <>&#8457;</>;
                    }
                  })()}
                </span>
                <span id="visibility">
                  Temp min: {tempmin}{" "}
                  {(() => {
                    if (deg === 0) {
                      return <>&#8451;</>;
                    } else if (deg === 1) {
                      return <>&#8451;</>;
                    } else if (deg === 2) {
                      return <>&#8457;</>;
                    }
                  })()}
                </span>
              </p>
            </div>

            <div className="col-xl-8 wrdiv2">
              <iframe
                title="forcast map"
                src="https://embed.windy.com/embed2.html?lat=26.471&lon=76.816&detailLat=29.967&detailLon=76.836&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1"
              >
                {" "}
              </iframe>
            </div>
          </div>
          <div className="row forecastrow" style={{ display: "none" }}>
            <div className="col-xl-5 Hourlydiv">
              <h5>Hourly forecast</h5>
              <BarChart
                width={700}
                id="barchart"
                height={300}
                data={data}
                margin={{
                  top: 20,
                  right: 0,
                  left: -15,
                  bottom: 8,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar
                  dataKey="uv"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                  ))}
                </Bar>
              </BarChart>
            </div>
            <div className="col-xl-5 Eightdaydiv">
              {/* <Eightdayforecast /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid companyslidercontainer">
        <div className="container">
          <div className="row">
            <Marquee>
              <img id="markqueimg" src={Companyimg} alt="liked_company" />
            </Marquee>
          </div>
        </div>
      </div>
      <div className="contaner-fluid textcontainer2">
        <div className="container">
          <div className="row">
            <p>
              Leaving everything behind, people are fleeing conflict in Ukraine.
              They need shelter, food, and water. When you{" "}
              <NavLink to={"/Pricing"}>subscribe to our</NavLink> service, you
              can join us to help with donation of just of £20. Openweather will
              add £40 to each donation and send it to
              <NavLink
                to={"https://www.dec.org.uk/appeal/ukraine-humanitarian-appeal"}
                target="blank"
              >
                {" "}
                Disasters Emergency Committee’s (DEC)
              </NavLink>{" "}
              Ukrainian Humanitarian Appeal.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row onecalapirow">
            <div className="col-xl-5">
              <span style={{ color: "red" }}>APIs</span>
              <NavLink
                id="one3.0"
                to={"https://openweathermap.org/api/one-call-3"}
                target="blank"
              >
                <h4>One Call API 3.0</h4>
              </NavLink>
              <p>
                Choose the subscription plan{" "}
                <NavLink to={"/Pricing"}>"One call by Call"</NavLink>and get
                access to the various data for any coordinates{" "}
                <NavLink
                  to={"https://openweathermap.org/api/one-call-3"}
                  target="blank"
                >
                  with One call API .0
                </NavLink>
                <br />
                1,000 API calls per day for free!
                <NavLink to={"/Pricing"}>Pay as you call.</NavLink>
              </p>
              <table className="onecalltable">
                <tbody>
                  <tr>
                    <th>Included data</th>
                    <th>Time</th>
                  </tr>
                  <tr>
                    <td>
                      <b>Current</b> weather
                    </td>
                    <td>Now</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Minute</b> forecast
                    </td>
                    <td>Next hour</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Hourly</b> forecast
                    </td>
                    <td>Next 48 hours</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Daily</b> forecast
                    </td>
                    <td>Next 8 days</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Weather data</b> by any timestamp
                    </td>
                    <td>40+ years back - 4 days ahead forecast</td>
                  </tr>
                  <tr>
                    <td>National weather alerts</td>
                    <td>All available data</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Daily aggregation</b>
                    </td>
                    <td>40+ years back - 1,5 years ahead forecast</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-xl-5">
              <img className="img-fluid oneimg" src={onecallimg} alt="pic" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid extendecontainer">
        <div className="container">
          <div className="row profrow">
            <h3>
              Use our{" "}
              <NavLink to={"https://openweathermap.org/api#pro"} target="blank">
                {" "}
                Professional collections
              </NavLink>{" "}
              to get extended weather data for any <br />
              coordinates on the globe
            </h3>
            <p>
              For professionals and specialists with middle and large sized
              project, we recommend our Professional collections. They include
              either an extended data sets, or various tools for receiving and
              displaying data, etc.
            </p>
          </div>
          <div className="row controw5">
            <div className="col-md-2">
              <img className="img-fluid clkimg" src={icon1} alt="icon" />
              <NavLink
                id="curlink"
                target="blank"
                to={"https://openweathermap.org/current"}
              >
                <h5>
                  Current <br />
                  Weather{" "}
                </h5>
                <span>(current)</span>
              </NavLink>
            </div>
            <div className="col-md-2">
              <img className="img-fluid clkimg" src={icon2} alt="icon" />
              <NavLink
                target="blank"
                id="curlink"
                to={"https://openweathermap.org/api/hourly-forecast"}
              >
                <h5>
                  Hourly <br />
                  forecast{" "}
                </h5>
                <span>(4 days)</span>
              </NavLink>
            </div>
            <div className="col-md-2">
              <img className="img-fluid clkimg" src={icon3} alt="icon" />
              <NavLink
                id="curlink"
                target="blank"
                to={"https://openweathermap.org/api/hourly-forecast"}
              >
                <h5>
                  daily <br />
                  forecast{" "}
                </h5>
                <span>(16days)</span>
              </NavLink>
            </div>
            <div className="col-md-2">
              <img className="img-fluid clkimg" src={icon4} alt="icon" />
              <NavLink
                target="blank"
                to={"https://openweathermap.org/api/forecast30"}
                id="curlink"
              >
                <h5>
                  climate <br />
                  forecast{" "}
                </h5>
                <span>(30 days)</span>
              </NavLink>
            </div>
            <div className="col-md-2">
              <img className="img-fluid clkimg" src={icon5} alt="icon" />
              <NavLink
                id="curlink"
                to={"https://openweathermap.org/history"}
                target="blank"
              >
                <h5>
                  historical <br />
                  weather{" "}
                </h5>
                <span>(40+ years back)</span>
              </NavLink>
            </div>
          </div>
          <div className="row">
            <span id="called">Called by:</span>
            <p id="geo">
              geographic coordinates, zip/post code, city name, city ID, number
              of cities (only in current weather and forecast APIs)
            </p>
          </div>
          <NavLink to={"https://openweathermap.org/api#pro"} target="blank">
            <button id="learnmorebtn">Learn more</button>
          </NavLink>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row georow2">
            <div className="col-md-4">
              <span>
                For each point on the globe, we provide historical, current and
                forecasted weather data via light-speed APIs.
              </span>
              <br />
              <br />
              <span>
                <b>Minute-by-minute forecast</b>
              </span>
              <br />
              <br />
              <b>Other forecasts:</b>
              <br />
              <span>
                hourly(4-day), daily (16-day), 30-day climate forecast
              </span>
              <br />
              <br />
              <b>Historical data</b>
              <br />
              <span>with 40-year archive for any coordinates</span>
              <hr />
            </div>
            <div className="col-md-4 geoimgcol4">
              <span>Weather data</span>
              <h4>
                Weather for <span>any</span> geographic <br />
                Coordinates on the globe
              </h4>
              <img
                src={historicalimg}
                className="img-fluid hisimg"
                alt="historica_img"
              />
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ background: "#F2F2F2" }}>
        <div className="container">
          <div className="row line1">
            <div className="col-md-5">
              <span id="wedata">Weather data</span>
              <h4 id="forewedat1">Forecasted weather data</h4>
              <img
                src={forcsteddata}
                className="img-fluid foricmg"
                alt="forcastedata"
              />
            </div>
            <div className="col-md-5" id="obtain">
              <span id="detforecast">
                Detailed forecast available by city name, city ID,geographic
                coordinates or postal/ZIP code.
              </span>
              <br />
              <span>
                <br />
                <h2>How to obtain</h2>
                <br />
                <b>
                  <span>
                    API <br />
                    Bulks
                  </span>
                </b>
                <br />
                <span>
                  A variety of subscriptions with various limits on calls/min,
                  data availability, and service
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row line2">
            <div className="col-md-5">
              <p>
                Our technology <b>Time Machine</b>,has allowed us to enhance
                data in the Historical Weather Collection:historical weather
                data is now available for any coordinates and the depth of
                historical data has been extended to 40 years.
              </p>
              <h4>
                <b>How to obtain</b>
              </h4>
              <h4>Marketplace of prepared data sets</h4>
              <span>(cities, zip codes, grids)</span>
              <br />
              <br />
              <h4>On-the-fly bulks</h4>
              <span>for customized lists of coordinates</span>
              <br />
              <br />
              <b>APIs</b>
              <span style={{ marginLeft: "1rem" }}>
                (city-based, up to 1 year back; subscriptions with various
                limits on calls/min, data availability, and service)
              </span>
            </div>

            <div className="col-md-5">
              <span style={{ color: "red" }}>
                <b>Weather data</b>
              </span>
              <h2>
                <b>Historical weather data</b>
              </h2>
              <img
                src={historicaldata}
                className="img-fluid hisda1img"
                alt="historical"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ background: "#F2F2F2" }}>
        <div className="container">
          <div className="row linerow2">
            <div className="col-md-5">
              <span style={{ color: "red" }}>
                <b>Weather data</b>
              </span>
              <h2>
                <b>Current weather data</b>
              </h2>
              <img
                src={historicaldata2}
                className="img-fluid hisda2img"
                alt="historical"
              />
            </div>
            <div
              className="col-md-5"
              style={{ borderLeft: "2px solid red", paddingLeft: "1.2rem" }}
            >
              <span style={{ color: "black", fontWeight: "400" }}>
                Access current weather data for any location on Earth including
                over 200,000 cities! The data is frequently updated based on the
                global and local weather models, satellites, radars and a vast
                network of weather stations.
              </span>
              <br />
              <span>
                <br />
                <h2>How to obtain</h2>
                <br />
                <b>
                  <span>
                    API <br />
                    Bulks
                  </span>
                </b>
                <br />
                <span>
                  A variety of subscriptions with various limits on calls/min,
                  data availability, and service
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container" style={{ padding: "2rem 0rem 1rem 0rem" }}>
          <div className="row" style={{ textAlign: "center" }}>
            <h2>
              Our <b style={{ color: "red" }}>new</b> products
            </h2>
          </div>
          <div className="row linerow3">
            <div className="col-md-3">
              <img
                src={solarpanel}
                className="img-fluid newproducticon"
                alt="solar_icon"
              />
              <div id="cardnewproducts">
                <NavLink
                  to={
                    "https://openweathermap.org/api/solar-panels-and-energy-prediction"
                  }
                  target="blank"
                >
                  <p>Solar Panel Energy Prediction</p>
                </NavLink>
                <p>
                  This product provides users with current, forecast and
                  historical solar panel power output data based on the panel’s
                  technical characteristics for any coordinates on the globe. In
                  addition each response includes essential solar irradiance
                  data (DNI, GHI and DHI).
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img
                src={icononecall}
                className="img-fluid newproducticon"
                alt="solar_icon"
              />
              <div id="cardnewproducts">
                <NavLink
                  to={"https://openweathermap.org/api/solar-energy-prediction"}
                  target="blank"
                >
                  <p>Solar Irradiance API</p>
                </NavLink>
                <p>
                  This product provides users with current, forecast and
                  historical solar radiation data for any coordinates on the
                  globe. It includes DNI, DHI and GHI indices for the Clear Sky
                  and Cloudy Sky models.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img
                src={alertpush}
                className="img-fluid newproducticon"
                alt="solar_icon"
              />
              <div id="cardnewproducts">
                <NavLink
                  to={"https://openweathermap.org/api/push-weather-alerts"}
                  target="blank"
                >
                  <p>Global weather alerts via push notifications</p>
                </NavLink>
                <p>
                  This product collects weather warnings from the major weather
                  warning systems and presents them in a uniform and convenient
                  data format. Push notification mechanism will allow to get
                  timely notifications about severe weather.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{ background: "#F2F2F2", padding: "2rem 0rem 1rem 0rem" }}
      >
        <div className="container">
          <div className="row" style={{ justifyContent: "space-around" }}>
            <div className="col-md-6">
              <span style={{ color: "red" }}>
                <b>Ai and satellite imagery</b>
              </span>
              <h3>
                <b>Agriculture analytics</b>
              </h3>
              <p>
                Based on large amount of processing satellite and climate data,
                we provide <b>analytical reports</b>and <b>detailed datasets</b>
                for crop monitoring:
              </p>
              <nav>
                <ul id="agriul">
                  <li>Crop map (soy,corn,wheat,etc.)</li>
                  <li>Recognised field boundaries</li>
                  <li>
                    Vegetation indices statistics by each recognised field{" "}
                  </li>
                  <li>Climate data for regions and particular field</li>
                  <li>Soil and weather data</li>
                </ul>
                <NavLink to={"https://openagro.uk/"} target="blank">
                  <button id="learnmorebtn">Learn more</button>
                </NavLink>
              </nav>
            </div>
            <div className="col-md-6 Aiandsateliteimagery">
              <span style={{ color: "red" }}>
                <b>Ai and satellite imagery</b>{" "}
              </span>
              <h4>
                <b>Agro Dashboard</b>
              </h4>
              <p>
                Dashboard is a visual service where you can easily work with
                satellite imagery and weather data for your fields. It is the
                visual demonstration of the data we provide through our{" "}
                <NavLink to={"https://agromonitoring.com/"} target="blank">
                  Agro API:
                </NavLink>{" "}
              </p>
              <nav>
                <ul id="agriul">
                  <li>New satellitye imagery every 2-4 days</li>
                  <li>HIstorical satellite data archive</li>
                  <li>Vegetation indices and Historical NDVI chart</li>
                  <li>Current,Forecast and Historical weather data</li>
                </ul>
                <NavLink
                  to={"https://home.agromonitoring.com/auth/sign-up"}
                  target="blank"
                >
                  <button id="learnmorebtn">Learn more</button>
                </NavLink>
              </nav>
            </div>
            <div className="col-md-6 Aiandsateliteimagery2"></div>
            <div className="col-md-6" style={{ paddingTop: "2rem" }}>
              <span style={{ color: "red" }}>
                <b>Weather maps</b>
              </span>
              <h3>
                <b>Forecast, Current and Historical</b>
              </h3>
              <p>
                Using only one API call, you can get Forecast (for 10 days with
                3-hour step), Historical, and Current weather maps.
              </p>
              <p>
                <NavLink
                  to={"https://openweathermap.org/api/weather-map-2"}
                  target="blank"
                >
                  15 map layers
                </NavLink>{" "}
                include the most useful data, such as precipitation, clouds,
                pressure, temperature, wind, and many more.
              </p>
              <p>
                <NavLink
                  target="blank"
                  to={
                    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=30&lon=-20&zoom=5"
                  }
                >
                  Interactive weather map
                </NavLink>
                allows you to watch for current temperature and weather
                conditions in your city or any other location on the interactive
                global map.
              </p>
              <NavLink
                to={"https://openweathermap.org/api/weather-map-2"}
                target="blank"
              >
                <button id="learnmorebtn">Learn more</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{ padding: "2rem 0rem 2rem 0rem" }}
      >
        <div className="container">
          <div className="row" style={{ justifyContent: "space-around" }}>
            <div className="col-md-5 com1400">
              <h4>
                <b>
                  <NavLink to={"/Partners"}>
                    14,000+ OpenWeatherMap weather API repositories on GitHub
                  </NavLink>
                </b>
              </h4>
              <p>
                Find lots of workouts with our weather APIs on PHP, Java,
                Python, Go and many others on the Partners page together with
                14,000+ repositories on GitHub
              </p>
              <NavLink to={"/Partners"}>
                <button id="learnmorebtn">Learn more</button>
              </NavLink>
            </div>
            <div className="col-md-5 com1400">
              <h4>
                <b>
                  <NavLink>
                    Google Weather-Based Campaign Management with OpenWeatherMap
                    API
                  </NavLink>
                </b>
              </h4>
              <p>
                Run your advertising campaign with the OpenWeatherMap API
                through Google AdWords
              </p>
              <NavLink
                to={"https://openweathermap.org/examples#google1"}
                target="blank"
              >
                <button id="learnmorebtn">Learn more</button>
              </NavLink>
            </div>
            <div className="col-md-5 com14002">
              <h4>
                <b>
                  <NavLink
                    target="blank"
                    to={"https://openweathermap.org/stations"}
                  >
                    Connect your weather station to OpenWeatherMap
                  </NavLink>
                </b>
              </h4>
              <p>
                We are glad to invite you to join our network of private weather
                stations. Today we have more than 80,000 weather stations around
                the world.
              </p>
              <NavLink
                to={"https://openweathermap.org/stations"}
                target="blank"
              >
                <button id="learnmorebtn">Learn more</button>
              </NavLink>
            </div>
            <div className="col-md-5 com14002">
              <h4>
                <b>
                  <NavLink
                    to={"https://openweathermap.org/stations"}
                    target="blank"
                  >
                    Get weather data for free for open source project
                  </NavLink>
                </b>
              </h4>
              <p>
                We are happy to support open projects with open source code. If
                you need to make a large number of API calls and you have
                published your code on GitHub or BitBucket, please contact us
                and we will provide you with extended conditions.
              </p>
              <NavLink
                to={"https://openweathermap.org/stations"}
                target="blank"
              >
                <button id="learnmorebtn">Learn more</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
}

export default Home;
