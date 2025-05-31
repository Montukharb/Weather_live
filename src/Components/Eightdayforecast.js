import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Collapse from "react-bootstrap/Collapse";
import { TiWeatherDownpour } from "react-icons/ti";
import { FaLocationArrow } from "react-icons/fa";
import dummycloud from "../Image/clouddummy.png";
import "../Css/Eightdayforecast.css";
function Eightdayforecast() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  return (
    <div>
      <h5>8-day forecast</h5>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        id="eightdayforecast-list"
      >
        <p id="listdata">
          {" "}
          Wed,Sep 20 <img id="img1" src={dummycloud} alt="cloud img" />{" "}
          20/15&#8451;{" "}
          <span id="rain">
            heavy intesity rain <i>{<MdOutlineArrowDropDown />}</i>{" "}
          </span>{" "}
        </p>
      </Button>
      <div style={{ minHeight: "10px" }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card
              body
              style={{ width: "100%", wordBreak: "break-all" }}
              id="card"
            >
              <img id="img1" src={dummycloud} alt="sin" />
              <span id="checksky">Clear sky.Light breeze</span>
              <p id="highlow">
                The high will be 36 &#8451;, the low will be 28&#8451;
              </p>
              <p id="listview">
                <span>{<TiWeatherDownpour />}23%</span>
                <span>{<FaLocationArrow />} 2.5m/s ENE</span>
                <span>1007hPa</span>
                <br />
                <span>Humidity:47%</span>
                <span>UV:8</span>
                <span>Dew point 22&#8451;</span>
              </p>
              <table id="table">
                <thead id="head">
                  <tr>
                    <th>Sno.</th>
                    <th>Morning</th>
                    <th>Afternoon</th>
                    <th>Evening</th>
                    <th>Night</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>TEMPERATURE</td>
                    <td> 28&#8451;</td>
                    <td> 35&#8451;</td>
                    <td> 33&#8451;</td>
                    <td> 32&#8451;</td>
                  </tr>
                  <tr>
                    <td>FEELS LIKE</td>
                    <td> 31&#8451;</td>
                    <td> 39&#8451;</td>
                    <td> 36&#8451;</td>
                    <td> 35&#8451;</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </div>
        </Collapse>
      </div>

      <Button
        onClick={() => setOpen2(!open2)}
        aria-controls="example-collapse-text"
        aria-expanded={open2}
        id="eightdayforecast-list"
      >
        <p id="listdata">
          {" "}
          Wed,Sep 20 <img id="img1" src={dummycloud} alt="cloud img" />{" "}
          20/15&#8451;{" "}
          <span id="rain">
            heavy intesity rain <i>{<MdOutlineArrowDropDown />}</i>{" "}
          </span>{" "}
        </p>
      </Button>
      <div style={{ minHeight: "10px" }}>
        <Collapse in={open2} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: "400px" }} id="card">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
          </div>
        </Collapse>
      </div>
      <Button
        onClick={() => setOpen3(!open3)}
        aria-controls="example-collapse-text"
        aria-expanded={open3}
        id="eightdayforecast-list"
      >
        <p id="listdata">
          {" "}
          Wed,Sep 20 <img id="img1" src={dummycloud} alt="cloud img" />{" "}
          20/15&#8451;{" "}
          <span id="rain">
            heavy intesity rain <i>{<MdOutlineArrowDropDown />}</i>{" "}
          </span>{" "}
        </p>
      </Button>
      <div style={{ minHeight: "10px" }}>
        <Collapse in={open3} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: "400px" }} id="card">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
          </div>
        </Collapse>
      </div>
      <Button
        onClick={() => setOpen4(!open4)}
        aria-controls="example-collapse-text"
        aria-expanded={open4}
        id="eightdayforecast-list"
      >
        <p id="listdata">
          {" "}
          Wed,Sep 20 <img id="img1" src={dummycloud} alt="cloud img" />{" "}
          20/15&#8451;{" "}
          <span id="rain">
            heavy intesity rain <i>{<MdOutlineArrowDropDown />}</i>{" "}
          </span>{" "}
        </p>
      </Button>
      <div style={{ minHeight: "10px" }}>
        <Collapse in={open4} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: "400px" }} id="card">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
          </div>
        </Collapse>
      </div>
      <Button
        onClick={() => setOpen5(!open5)}
        aria-controls="example-collapse-text"
        aria-expanded={open5}
        id="eightdayforecast-list"
      >
        <p id="listdata">
          {" "}
          Wed,Sep 20 <img id="img1" src={dummycloud} alt="cloud img" />{" "}
          20/15&#8451;{" "}
          <span id="rain">
            heavy intesity rain <i>{<MdOutlineArrowDropDown />}</i>{" "}
          </span>{" "}
        </p>
      </Button>
      <div style={{ minHeight: "10px" }}>
        <Collapse in={open5} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: "400px" }} id="card">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
          </div>
        </Collapse>
      </div>

      <Button
        onClick={() => setOpen6(!open6)}
        aria-controls="example-collapse-text"
        aria-expanded={open6}
        id="eightdayforecast-list"
      >
        <p id="listdata">
          {" "}
          Wed,Sep 20 <img id="img1" src={dummycloud} alt="cloud img" />{" "}
          20/15&#8451;{" "}
          <span id="rain">
            heavy intesity rain <i>{<MdOutlineArrowDropDown />}</i>{" "}
          </span>{" "}
        </p>
      </Button>
      <div style={{ minHeight: "10px" }}>
        <Collapse in={open6} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: "400px" }} id="card">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
          </div>
        </Collapse>
      </div>
      <Button
        onClick={() => setOpen7(!open7)}
        aria-controls="example-collapse-text"
        aria-expanded={open7}
        id="eightdayforecast-list"
      >
        <p id="listdata">
          {" "}
          Wed,Sep 20 <img id="img1" src={dummycloud} alt="cloud img" />{" "}
          20/15&#8451;{" "}
          <span id="rain">
            heavy intesity rain <i>{<MdOutlineArrowDropDown />}</i>{" "}
          </span>{" "}
        </p>
      </Button>
      <div style={{ minHeight: "10px" }}>
        <Collapse in={open7} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: "400px" }} id="card">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
          </div>
        </Collapse>
      </div>
      <Button
        onClick={() => setOpen8(!open8)}
        aria-controls="example-collapse-text"
        aria-expanded={open8}
        id="eightdayforecast-list"
      >
        <p id="listdata">
          {" "}
          Wed,Sep 20 <img id="img1" src={dummycloud} alt="cloud img" />{" "}
          20/15&#8451;{" "}
          <span id="rain">
            heavy intesity rain <i>{<MdOutlineArrowDropDown />}</i>{" "}
          </span>{" "}
        </p>
      </Button>
      <div style={{ minHeight: "10px" }}>
        <Collapse in={open8} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: "400px" }} id="card">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default Eightdayforecast;
