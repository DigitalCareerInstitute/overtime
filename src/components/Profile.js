import React, { Component } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { FaBirthdayCake } from "react-icons/fa";

export default class Profile extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-3">
          <Col md={4}></Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
              />
              <Card.Body>
                <Card.Title>Welcome {this.props.user.firstName}</Card.Title>
                <Card.Text>
                  This is your profile page. You can check your details here.{" "}
                  <hr />
                </Card.Text>
                <Card.Text style={{ textAlign: "left" }}>
                  Firstname: {this.props.user.firstName}
                  <hr />
                  LastName: {this.props.user.lastName} <hr />
                  <FaBirthdayCake className="mr-3" />
                  {this.props.user.birthDate}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    );
  }
}
