import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  Alert,
} from "react-bootstrap";
import "./LoginPage.css";
import { validateForm } from "./Validation";
import { useNavigate } from "react-router-dom";
import loginImage from "../../../../assets/images/login.jpg";

export const LoginPage = () => {
  const navigate = useNavigate();

  const initialState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const signinTrigger = (e) => {
    e.preventDefault();
    setSuccessMessage("");

    const { isValid, newErrors } = validateForm(formData);

    if (isValid) {
      setSuccessMessage("Sign-in successful!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
      setFormData({ email: "", password: "" });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Container fluid className="login-container">
      <Row className="h-100">
        <Col md={6} className="login-form-container">
          <Form className="w-75" onSubmit={signinTrigger}>
            <h1 className="signin-head mb-3">Sign In</h1>
            <h6 className="mb-3">
              New user?
              <span className="create-link"> Create an account</span>
            </h6>

            {successMessage && (
              <Alert variant="success" className="mb-3">
                {successMessage}
              </Alert>
            )}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                placeholder="Username or email"
                onChange={handleInputChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleInputChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
              <Form.Check
                type="checkbox"
                label="Keep me signed in"
                className="mt-3"
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Col>

        <Col md={6} className="login-image-container">
          <Image className="img-login" src={loginImage} alt="Login" fluid />
        </Col>
      </Row>
    </Container>
  );
};
