import React from "react";
import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../componentStyles/Login.css";
const Login = () => {
  return (
    <div className="login1">
      <Row>
        <Col md={12} className="border">
          <Row className="border">
            <h1>Login Page</h1>
            <Row>
              <Col md={12}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Email
                  </InputGroup.Text>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Password
                  </InputGroup.Text>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
                <Row>
                  <Col md={10}>
                  <Button variant="dark">Forgot Your Password?</Button>
                    <Button variant="dark"><Link to={"/signup"} className="link">Sign up</Link></Button>
                  </Col>

                  <Col md={2}>
                  <Button variant="dark">Submit</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
