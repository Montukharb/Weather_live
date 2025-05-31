import React, { useEffect } from "react";
import "../Css/AskAQuestion.css";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "../Components/Fotter";

function AskAQuestion() {
  const onChange = () => {};
  useEffect(() => {
    document.title = "Khweather/AskAQuestion";
  });
  const handlesubmit = (e) => {
    e.preventDefault();
    let value = document.getElementsByName("fav_language");
    let i;
    for (i = 0; i < value.length; i++) {
      if (value[i].checked) {
        console.log(value[i].value);
      } else if (value[i].unchecked) {
        console.log("not checkedy");
      }
    }
  };
  return (
    <div className="AskAQuestionmain">
      <div className="container-fluid">
        <div className="contaier">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-md-10">
              <h3 style={{ marginTop: "1rem" }}>Ask a question</h3>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-md-7">
              <form onSubmit={handlesubmit}>
                <label>Are you an Khweather user ?</label>
                  <br /> {" "}
                <input
                  type="radio"
                  id="Yes"
                  name="fav_language"
                  value="Yes"
                />  <label htmlFor="Yes">Yes</label>
                <br />
                  <input
                  type="radio"
                  id="No"
                  name="fav_language"
                  value="No"
                />  <label htmlFor="No">No</label>
                <p>We will send a response to the email address specified</p>
                <h6>Email</h6>
                <input type="email" placeholder="Enter email" />
                <h6>Subject</h6>
                <input
                  style={{ margin: "0 0 0 0" }}
                  type="text"
                  placeholder="Enter subject"
                />
                <h6>Message</h6>
                <textarea id="textarea" rows={10}></textarea>
                <br />
                <br />
                <ReCAPTCHA
                  id="recaptcha"
                  sitekey="6LedGUooAAAAAOo75bxay4ONE7cUBbc23tI2KIlg"
                  onChange={onChange}
                />
                <button id="submitbtn">Submit</button>
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AskAQuestion;
