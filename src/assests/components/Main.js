import React from "react";
import { Container } from "reactstrap";
import "../style/Main.css";
import MainImg from "../images/main.png";
import Hotel from "../images/hotel.jpg";
import Restaurant from "../images/restaurant.jpg";
import Attraction from "../images/attraction.jpg";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col,
} from "reactstrap";

function Main() {
  return (
    <div>
      <Container>
        <div className="main">
          <div className="main_left">
            <h1>Your Travel Guide</h1>
            <p>
              Travelling to your destination is never a place, but a new way of
              seeing things.{" "}
            </p>
            <button>get Started</button>
          </div>
          <div className="main_right">
            <img src={MainImg} alt="home_img" />
          </div>
        </div>
      </Container>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
        <path
          fill="#85FFBD"
          fill-opacity="1"
          d="M0,96L48,106.7C96,117,192,139,288,128C384,117,480,75,576,58.7C672,43,768,53,864,101.3C960,149,1056,235,1152,240C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="places">
        <Container>
          <div>
            <h1 className = "main_places-heading"> Get To Know About</h1>
            <Row className = "places_row">
              <Col sm="4">
                <Card>
                  <CardImg top width="100%" src={Hotel} alt="Card image cap" />
                  <CardBody>
                    <CardTitle tag="h3">Hotel</CardTitle>
                    <CardText>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </Col>

              <Col sm="4">
                <Card>
                  <CardImg
                    bottom
                    width="100%"
                    src={Restaurant}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h3">Restaurant</CardTitle>
                    <CardText>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </Col>

              <Col sm="4">
                <Card>
                  <CardImg
                    bottom
                    width="100%"
                    src={Attraction}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h3">Attraction</CardTitle>
                    <CardText>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Main;
