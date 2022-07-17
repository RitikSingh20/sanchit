import React from 'react'
import yoga from "./images/yoga.jpg"
import running from "./images/running.jpg"
import wo from "./images/wo.jpg"
import { Container, Row, Col, Nav, Navbar, Card, Button } from "react-bootstrap";

function Cardcom() {
  return (
    <>
    <Container>
        <h3>Market Place</h3>
 


      <div style={{ margin: "auto" }}>
        <Row style={{ margin: "auto" }}>

          <Col xs={12} md={12} lg={4} xl={4} style={{ marginTop: "2.5rem" }}>
            <Card style={{ maxWidth: '18rem', margin: "auto" }}>
              <Card.Img variant="top" src={yoga} />
              <Card.Body>
                <Card.Title><b>Yoga Classes</b></Card.Title>
                <Card.Text>
                  by Caroline Abbott
                </Card.Text>
                <div>
                  <p>Rent</p>
                  <b  >$CRL 10/day</b>
                </div>

              </Card.Body>
            </Card>
          </Col>


          <Col xs={12} md={12} lg={4} xl={4} style={{ marginTop: "2.5rem" }}>
            <Card style={{ maxWidth: '18rem', margin: "auto" }}>
              <Card.Img variant="top" src={running} />
              <Card.Body>
                <Card.Title><b>Workout Classes</b></Card.Title>
                <Card.Text>
                  by Caroline Abbott
                </Card.Text>
                <div>
                  <p>Rent</p>
                  <b  >$CRL 10/day</b>
                </div>

              </Card.Body>
            </Card>
          </Col>


          <Col xs={12} md={12} lg={4} xl={4} style={{ marginTop: "2.5rem" }}>
            <Card style={{ maxWidth: '18rem', margin: "auto" }}>
              <Card.Img variant="top" src={wo} />
              <Card.Body>
                <Card.Title><b>Yoga Classes</b></Card.Title>
                <Card.Text>
                  by Caroline Abbott
                </Card.Text>
                <div>
                  <p>Rent</p>
                  <b  >$CRL 10/day</b>
                </div>

              </Card.Body>
            </Card>
          </Col>

           
        </Row>
           {/* 2nd row */}
        <Row style={{ margin: "auto" }}>

          <Col xs={12} md={12} lg={4} xl={4} style={{ marginTop: "2.5rem" }}>
            <Card style={{ maxWidth: '18rem', margin: "auto" }}>
              <Card.Img variant="top" src={yoga} />
              <Card.Body>
                <Card.Title><b>Yoga Classes</b></Card.Title>
                <Card.Text>
                  by Caroline Abbott
                </Card.Text>
                <div>
                  <p>Rent</p>
                  <b  >$CRL 10/day</b>
                </div>

              </Card.Body>
            </Card>
          </Col>


          <Col xs={12} md={12} lg={4} xl={4} style={{ marginTop: "2.5rem" }}>
            <Card style={{ maxWidth: '18rem', margin: "auto" }}>
              <Card.Img variant="top" src={running} />
              <Card.Body>
                <Card.Title><b>Workout Classes</b></Card.Title>
                <Card.Text>
                  by Caroline Abbott
                </Card.Text>
                <div>
                  <p>Rent</p>
                  <b  >$CRL 10/day</b>
                </div>

              </Card.Body>
            </Card>
          </Col>


          <Col xs={12} md={12} lg={4} xl={4} style={{ marginTop: "2.5rem" }}>
            <Card style={{ maxWidth: '18rem', margin: "auto" }}>
              <Card.Img variant="top" src={wo} />
              <Card.Body>
                <Card.Title><b>Yoga Classes</b></Card.Title>
                <Card.Text>
                  by Caroline Abbott
                </Card.Text>
                <div>
                  <p>Rent</p>
                  <b  >$CRL 10/day</b>
                </div>

              </Card.Body>
            </Card>
          </Col>

          
        </Row>
      </div>
      </Container>
    </>

  )
}

export default Cardcom