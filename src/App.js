
import "./App.css";
import Guide from "./Components/Guide";
import Header from "./Components/Header";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Pricing from "./Components/Pricing";
import Maps from "./Components/Maps";
import OurInitiatives from "./Components/OurInitiatives";
import Partners from "./Components/Partners";
import Signin from "./Components/Signin";
// import CreateNewAccount from "./Components/CreateNewAccount";
import Login from './Components/Login';
import FAQ from "./Components/FAQ";
import AskAQuestion from "./Components/AskAQuestion";
import Headsearch from "./Components/Headsearch";
import Technology from "./Components/Technology";
import Privacypolicy from "./Components/Privacypolicy";
import Aboutus from "./Components/Aboutus";
import Contact from "./Components/Contact";
// import Eightdayforecast from "./Components/Eightdayforecast";
import { useEffect,useState } from "react";
import { Navigate } from "react-router-dom";

// const checkAuth = async () => {
//     const response = await fetch("http://localhost:4000/auth/dashboard", {
//         method: "GET",
//         credentials: "include"
//     });

//     const result = await response.json();
//     return result.isAuthenticated;
// };


function App() {
 const [authUser, setAuthUser] = useState(null);
    useEffect(()=>{
    const authentication = async()=>{
      const backurl = process.env.REACT_APP_SERVICE_URL;
      // alert(backurl);
          const checkAuth = await fetch(`${backurl}/auth/chek-auth`,{
            method:"GET",
            credentials:"include"
          
          })
          if(checkAuth.ok){
            const result = await checkAuth.json();
            setAuthUser(result.message);
            console.log(result.message);
            // alert(result.message) 
          }
          else
          {
            const result = await checkAuth.json();
            setAuthUser(null);
            console.log(result.message);
            // alert(result.message)
          }
         
        }
  
        authentication();
      },[])
  return (
    <div>
      <BrowserRouter>
        <Header authUser={authUser} setAuthUser={setAuthUser} />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Guide" element={<Guide />} />
          <Route path="/*" element={<Home />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Maps" element={<Maps />} />
          <Route path="/OurInitiatives" element={<OurInitiatives />} />
          <Route path="/Partners" element={<Partners />} />
          {/* <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Login" element={<Login />} /> */}
        
         {/* <Route path="/Login" element={<Login setAuthUser={setAuthUser} />} /> */}
                {/* <Route path="/Signin" element={<Signin setAuthUser={setAuthUser} />} /> */}
















  <Route
            path="/Login"
            element={
              authUser ? (
                <Navigate to="/Dashboard" replace={true} />
              ) : (
                <Login setAuthUser={setAuthUser} />
              )
            }
          />
          {/* <Route path="/Login" element={} /> */}

          <Route
            path="/Signin"
            element={
              authUser ? (
                <Navigate to="/Dashboard" replace={true} />
              ) : (
                <Signin setAuthUser={setAuthUser} />
              )
            }
          />













                <Route path="/Dashboard" element={authUser ? <Dashboard authUser={authUser} setAuthUser={setAuthUser} /> : <Login setAuthUser={setAuthUser} />} />




          {/* <Route path="/CreateNewAccount" element={<CreateNewAccount />} /> */}
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Headsearch" element={<Headsearch />} />
          <Route path="/AskAQuestion" element={<AskAQuestion />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/Privacypolicy" element={<Privacypolicy />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;