import React, { useState } from "react";
import { Button, Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../componentStyles/Login.css";
const Login = () => {
  // const initialValues = { username: "", email: "", password: "" };
  // const [formValues, setFormValues] = useState(initialValues);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  //   console.log(formValues);
  // };

  // const handleSubmit = (e)=> {
  //   e.preventDefault();
  // }
  return (
    <div className="login1">
      <Row>
        {/* <pre>{JSON.stringify(form)}</pre> */}
        <Col md={12} className="border">
          <Row className="border">
            <h1>Login Page</h1>
            <Row>
              <Col md={12}>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="*******"  />
                  </Form.Group>
                </Form>
                <Row>
                  <Col md={10}>
                    <Button variant="dark">Forgot Your Password?</Button>
                    <Link to={"/signup"} className="link">
                      <Button variant="dark">Sign up</Button>
                    </Link>
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

// value={formvalues.username} onChange={handleChange}
