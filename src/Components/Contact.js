import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Css/Contact.css";
import Fotter from "./Fotter";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_a0wy5w3",
        "template_ik0cu7o",
        form.current,
        "eCvcXipDEHV7gRWXB"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been sent successfully");
          handleSubmit();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    message: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    email: yup.string().email(),
    terms: yup.bool().required().oneOf([true], "terms must be accepted"),
  });
  // , { resetForm }
  function handleSubmit(values) {
    console.log("Form submitted:", values);
  }

  const onChange = () => {
    document.getElementById("datasubrbtn").disabled = false;
  };
  useEffect(() => {
    document.getElementById("datasubrbtn").disabled = true;
  }, []);

  return (
    <div className="Contactmain">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-7" style={{ marginTop: "1rem" }}>
              <h2>Contact Us.</h2>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="container-fluid" style={{ marginBottom: "3rem" }}>
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-md-7">
              <Formik
                validationSchema={schema}
                onSubmit={handleSubmit}
                initialValues={{
                  firstName: "",
                  lastName: "",
                  username: "",
                  city: "",
                  state: "",
                  zip: "",
                  email: "",
                  message: "",
                  terms: false,
                }}
              >
                {({
                  handleSubmit,
                  handleChange,

                  values,
                  touched,
                  errors,
                }) => (
                  <Form onSubmit={sendEmail} ref={form}>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik101"
                        className="position-relative"
                      >
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          placeholder="Enter first name"
                          value={values.firstName}
                          onChange={handleChange}
                          id="allfieldnull"
                          isValid={touched.firstName && !errors.firstName}
                        />
                        <Form.Control.Feedback tooltip>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik102"
                        className="position-relative"
                      >
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter last name"
                          name="lastName"
                          value={values.lastName}
                          id="allfieldnull"
                          className="fie"
                          onChange={handleChange}
                          isValid={touched.lastName && !errors.lastName}
                        />

                        <Form.Control.Feedback tooltip>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormikUsername2"
                      >
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend">
                            @
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            name="username"
                            value={values.username}
                            id="allfieldnull"
                            onChange={handleChange}
                            isInvalid={!!errors.username}
                          />
                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.username}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik103"
                        className="position-relative"
                      >
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="City"
                          name="city"
                          value={values.city}
                          onChange={handleChange}
                          id="allfieldnull"
                          isInvalid={!!errors.city}
                        />

                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.city}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationFormik104"
                        className="position-relative"
                      >
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="State"
                          name="state"
                          value={values.state}
                          id="allfieldnull"
                          onChange={handleChange}
                          isInvalid={!!errors.state}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.state}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationFormik105"
                        className="position-relative"
                      >
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Zip"
                          name="zip"
                          id="allfieldnull"
                          value={values.zip}
                          onChange={handleChange}
                          isInvalid={!!errors.zip}
                        />

                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.zip}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Form.Group className="position-relative mb-3">
                      <Form.Check
                        required
                        name="terms"
                        label="Agree to terms and conditions"
                        onChange={handleChange}
                        isInvalid={!!errors.terms}
                        feedback={errors.terms}
                        feedbackType="invalid"
                        id="validationFormik106"
                        feedbackTooltip
                      />
                    </Form.Group>

                    <Form.Group className="position-relative mb-3">
                      <Form.Label>Enter your message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        onChange={handleChange}
                        id="allfieldnull"
                        placeholder="Enter any useful message..."
                        isInvalid={!!errors.message}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="position-relative mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        required
                        name="email"
                        id="allfieldnull"
                        placeholder="Enter email address..."
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <ReCAPTCHA
                      id="recaptcha"
                      sitekey="6LedGUooAAAAAOo75bxay4ONE7cUBbc23tI2KIlg"
                      onChange={onChange}
                    />
                    <Button type="submit" id="datasubrbtn">
                      Submit form
                    </Button>
                    <Button
                      type="reset"
                      className="btn btn-danger"
                      id="dangerbtn"
                      style={{ marginLeft: "0.5rem" }}
                    >
                      Reset form
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>

      <Fotter />
    </div>
  );
}

export default Contact;
