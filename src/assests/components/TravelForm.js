import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "../style/TravelForm.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Link } from "react-router-dom";

function TravelForm(props) {
  return (
    <div className="travelform">
      <Jumbotron fluid>
        <Container fluid className="travelform_main">
          <a href="/advisor" className="travelForm_anc">
            <button className="travelform_backbtn">
              <svg
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 1024 1024"
              >
                <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
              </svg>
              <span>Back</span>
            </button>
          </a>
          <br />

          <h4 className="">Points To Remember While helping us with Reviews</h4>
          <p className="travelForm_instruction">✅ Please Give A Genuine Review </p>
          <p className="travelForm_instruction">
            ✅ Please Provide Proper Link Of the Location via Google Map{" "}
          </p>
          <p className="travelForm_instruction">✅ Please Give A Genuine Review </p>
          <p className="travelForm_instruction">✅ Please Give A Genuine Review </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://goo.gl/maps/h86FE5EjvsDEPjTK7"
          >
            Get Map Link
          </a>
        </Container>
      </Jumbotron>

      <div className="travelform_form">
        <div className="travelform_form2">
          <Form className="travelform_mainform">
            <br />
            <h1 className = "travelForm_heading">Your Review</h1>
            <FormGroup>
              <Label for="exampleEmail">Name</Label> <br />
              <input
                className="inputform"
                type="name"
                name="name"
                placeholder="e.g John smt"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Location </Label><br />
              <input
                className="inputform"
                type="text"
                name="location"
                placeholder="Paste location link here"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">State</Label><br />
              <input
                className="inputform"
                type="text"
                name="state"
                placeholder="e.g Goa"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">City</Label><br />
              <input
                className="inputform"
                type="text"
                name="city"
                placeholder="e.g Panji"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Overall Review</Label><br />
              <input
                className="inputform"
                type="text"
                name="rating"
                placeholder="e.g 4/5"
              />
            </FormGroup>
            <FormGroup></FormGroup>
            <FormGroup>
              <Label for="exampleText">Remark</Label><br />
              {/* <Input  name="text" id="exampleText" /> */}
              <textarea
                type="textarea"
                className="inputform"
                rows="7"
                placeholder="Write about what you like the most about the place you visited Do mention about hotels, restaurant, attractions you like the most"
              />
            </FormGroup>{" "}
            <br />
            <FormGroup>
              <Label for="exampleFile">File</Label>{" "}
              <Input type="file" name="file" id="exampleFile" multiple />
              <FormText color="muted">
                Some Pictures of the Location (optional)
              </FormText>
            </FormGroup>
            <br />
            {/* FORM TWO */}
            <button className="travel_form_btn">Submit</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default TravelForm;
