import React from 'react'
import "../style/Footer.css"
import { Container, Row, Col } from 'reactstrap';

function Footer() {
    return (
        <div className = "footer">
            <Container>
            <Row>
                <Col sm="6">
                    <h1>About</h1>
                    <p>This is T.E Project made by students of Theem College Of Engineering
                        for guiding people to beautiful places surrounding them.
                    </p>
                </Col>
                <Col  sm="3">
                <h1>links</h1>
                <a href = "/"> Home</a><br />
                <a href = "/"> Advisor</a><br />
                <a href = "/"> Info</a>
                  
                </Col>
                <Col  sm="3">
                <h1>Contact</h1>
                  <p>Email : traveladvisor@gmail.com</p>
                  <p>Address : Mumbai, India</p>
                </Col>
                
            </Row>
            </Container>
        </div>
    )
}

export default Footer
