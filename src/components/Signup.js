import React, { useState } from "react";
import "../componentStyles/Signup.css";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import "../componentStyles/Signup.css";
import { validEmail, validPassword } from "../components/Regex";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
    }
  };
  return (
    <div className="signup">
      <Row>
        <Col md={12} className="border">
          <Row>
            <h1>Sign up</h1>
          </Row>
          <Row>
            <Col md={12}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="form">First Name</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="form">Last Name</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="form">Username</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="form">Email</Form.Label>
                  <Form.Control
                    type="Email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="form">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="*******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="form"> Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="*******" />
                </Form.Group>
              </Form>
              <Row>
                <Col md={7}></Col>
                <Col md={3}>
                  <Button variant="dark" onClick={validate}>Submit</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      {emailErr && <p>Your email is invalid</p>}
      {pwdError && <p>Your password is invalid</p>}
    </div>
  );
};

export default Signup;
