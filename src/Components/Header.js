import "../Css/Header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { HiOutlineSearch } from "react-icons/hi";
import logo from "../Image/weather.png";
import {  useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, useNavigate } from "react-router-dom";

function Header({authUser,setAuthUser}) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // async function handleLogout () {
  //   await fetch("http://localhost:4000/auth/logout", {
  //     method:"POST"
  //   }, { withCredentials: true });
  //   setAuthUser(null);
  //    //  Logout hone ke baad state reset
  //   navigate("/login"); //  Redirect to Login page after logout
  // };
 async function handleLogout (){
    const backurl = process.env.REACT_APP_SERVICE_URL;
        const res = await fetch(`${backurl}/auth/logout`,{
          method:"GET",
          credentials:"include",
        })        
        if (res.ok) {
          const result = await res.json();
          alert("You have been logged out successfully" + result.message);
          setAuthUser(null);
          navigate("/Login")
          
      } else {
        const result = await res.json();
        console.log(result.message);
        alert(result.message);
      }
  }


   
  function mainsearchcity() {
    navigate("/Headsearch");
    let cominut = document.getElementsByClassName("commaninput")[0];
    let cominut10 = cominut.value;
    let upcastdata1 = cominut10;
    localStorage.setItem("city", upcastdata1);
  }

  function mainsearchcity2() {
    navigate("/Headsearch");
    let cominut1 = document.getElementsByClassName("commaninput1")[0];
    let cominut2 = cominut1.value;
    let upcastdata = cominut2;
    localStorage.setItem("city2", upcastdata);
  }



  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top" id="navbar">
        <Container fluid>
          <Navbar.Brand id="logoparent">
            <img src={logo} alt="icn" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "400px" }}
              navbarScroll
            >
              <Form className="d-flex" id="searchbar">
                <input
                  type="search"
                  placeholder="Weather in your city"
                  className="me-2 commaninput"
                  aria-label="search"
                  id="seinput"
                />
                <Button variant="outline-success" onClick={mainsearchcity}>
                  <i>
                    <HiOutlineSearch /> search
                  </i>
                </Button>
              </Form>
              <NavLink className="textcontainer1" to={"/Home"}>
                Home
              </NavLink>
              <NavLink className="textcontainer" to={"/Guide"}>
                Guide
              </NavLink>
             
              <NavLink className="textcontainer" to={"/Pricing"}>
                Pricing
              </NavLink>
              <NavLink className="textcontainer" to={"/Maps"}>
                Maps
              </NavLink>
              <NavLink className="textcontainer" to={"/OurInitiatives"}>
                Our initiatives
              </NavLink>
              <NavLink className="textcontainer" to={"/Partners"}>
                Partners
              </NavLink>
              {!authUser ?
              <NavLink className="textcontainer" to={"/Signin"}>
                Sign-in
              </NavLink>
              :
                <>
               <NavLink className="textcontainer" to={"/Dashboard"}>
                Dashboard
              </NavLink>
               <NavLink className="textcontainer" onClick={handleLogout}>
                Logout
              </NavLink>
               </>
              }

             
            
              <Dropdown>
                <Dropdown.Toggle className="support" id="dropdown-basic">
                  Support
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <NavLink to={"/FAQ"}>FAQ</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink to={"/AskAQuestion"}>Ask a question</NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container-fluid navsecond">
        <img src={logo} alt="icn" id="logoparent2" />
        <input
          type="search"
          placeholder="Weather in your city"
          className="me-2 settings commaninput1"
          aria-label="search"
          id="seinput2"
        />
        <Button
          style={{ color: "white" }}
          variant="outline-success"
          className="set2"
          onClick={mainsearchcity2}
        >
          Search
        </Button>
        <Button
          className="offcanhideshow"
          id="collapse"
          onClick={handleShow}
        >
          <AiOutlineBars />
        </Button>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton id="offhead">
          <Offcanvas.Title>
            {" "}
            <span style={{ color: "red", fontSize: "2rem" }}>Kh</span> Weather
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body id="offbody">
          <nav>
            <ul>
              <NavLink
                to={"/Home"}
                className="textcontainer2"
                onClick={handleClose}
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to={"/Guide"}
                className="textcontainer2"
                onClick={handleClose}
              >
                <li>Guide</li>
              </NavLink>
             
              <NavLink
                to={"/Pricing"}
                className="textcontainer2"
                onClick={handleClose}
              >
                <li>Pricing</li>
              </NavLink>
              <NavLink
                to={"/Maps"}
                className="textcontainer2"
                onClick={handleClose}
              >
                <li>Maps</li>
              </NavLink>
              <NavLink
                to={"/Ourinitiatives"}
                className="textcontainer2"
                onClick={handleClose}
              >
                <li>Our initiatives</li>
              </NavLink>
              <NavLink
                to={"/Partners"}
                className="textcontainer2"
                onClick={handleClose}
              >
                <li>Partners</li>
              </NavLink>
              {!authUser ?
              <NavLink
              className="textcontainer2"
              to={"/Signin"}
              onClick={handleClose}
              >
                <li>Sign-in2</li>
              </NavLink>
            :  
             <NavLink
                to={"/Dashboard"}
                className="textcontainer2"
                onClick={handleClose}
              >
                <li>Dashboard</li>
              </NavLink>
            }
              <Dropdown>
                <Dropdown.Toggle className="support2" id="dropdown-basic">
                  Support
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <NavLink
                      to={"/FAQ"}
                      className="textcontainer2 linkcolor"
                      onClick={handleClose}
                    >
                      FAQ
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink
                      to={"/AskAQuestion"}
                      className="textcontainer2 linkcolor"
                      onClick={handleClose}
                    >
                      Ask a question
                    </NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;