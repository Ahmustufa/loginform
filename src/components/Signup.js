import React from "react";
import "../componentStyles/Signup.css";
import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import "../componentStyles/Signup.css";
const Signup = () => {
  return (
    <div className="signup">
      <Row>
        <Col md={12} className="border">
          <Row>
            <h1>Sign up</h1>
          </Row>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                 First Name
                </InputGroup.Text>
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                 Last Name
                </InputGroup.Text>
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
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
                 Confirm Email
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
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                 Confirm Password
                </InputGroup.Text>
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
             <Row>
                 <Col md={9}></Col>
                 <Col md={2}><Button variant="dark">Submit</Button></Col>
             </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
