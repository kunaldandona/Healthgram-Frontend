import React, { Component } from "react";
import Styled from "styled-components";
import { Redirect } from "react-router-dom";
import { PostData } from "../services/PostData";

import {
  Alert,
  Container,
  Row,
  Col,
  Button,
  Form,
  Input,
  Card,
  CardBody
} from "reactstrap";

import "./Login.css";

const TheInput = Styled.div`
  .testInput {
    position: relative;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    display: flex;
    flex-flow: column nowrap;
    width: 100%;

    input, textarea {
      width: 100%;
      font-size: 16px;
      padding: 4px 6px 4px 0;
      border:none;
      &:active{
        outline: none;
      }
      &:focus{
        outline: none;
      }
    }

    input{
      border-bottom: 1px solid black;
      heigth: 50px;
      border-radius: 0;
    }

    label {
      position: absolute;
      top: -12px;
      opacity: 1;
      transform: translateY(0);
      transition: all 0.2s ease-out;
      padding: 16px 0 6px 0;
      z-index: 0;
      color: black;
    }
    input::placeholder, textarea::placeholder {
      color: black;
    }

    input:placeholder-shown + label {
      opacity: 0;
      transform: translateY(1rem);
      z-Index: 1
    }
    textarea:placeholder-shown + label {
      opacity: 0;
      transform: translateY(1rem);
    }
  }

`;

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      redirectToReferrer: false,
      alertBox: false,
      usernameError: "",
      passwordError: "",
      toSignup: false
    };

    this.login = this.login.bind(this);
    this.validate = this.validate.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit = () => {
    this.setState(() => ({
      toSignup: true
    }));
  };

  validate = () => {
    let isError = false;
    const errors = {
      usernameError: "",
      passwordError: "",
      alertBox: false
    };

    if (this.state.username.length < 5) {
      isError = true;
      errors.alertBox = true;
      errors.usernameError = "Username needs to be atleast 5 characters long";
    }
    if (this.state.password === "") {
      isError = true;
      errors.alertBox = true;
      errors.passwordError = "Password Cannot be empty";
    }
    this.setState({
      ...this.state,
      ...errors
    });
    return isError;
  };

  login(e) {
    e.preventDefault();

    const errors = {
      usernameError: "",
      passwordError: "",
      alertBox: false
    };

    const err = this.validate();

    if (!err) {
      this.setState({ usernameError: "", passwordError: "", alertBox: false });
      PostData("login", this.state).then(result => {
        let responseJson = result;
        if (responseJson.redirectToReferrer === true) {
          sessionStorage.setItem("userData", JSON.stringify(responseJson));
          this.setState({ redirectToReferrer: true });
        } else {
          errors.alertBox = true;
          errors.usernameError = "Username/Password is Incorrect";
          this.setState({ ...this.state, ...errors });
        }
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.state.toSignup === true) {
      return <Redirect to="/signup" />;
    }

    if (this.state.redirectToReferrer) {
      return <Redirect to={"/Profile"} />;
    }

    if (sessionStorage.getItem("userData")) {
      return <Redirect to={"/Profile"} />;
    }

    const style = this.state.alertBox
      ? { display: "block" }
      : { display: "none" };

    return (
      <div>
        <Container className="login">
          <Row className="justify-content-sm-center mb-5">
            <Col xs="12" md={{ size: 5 }}>
              <div className="br-1">
                <Card className="widthcard p-5">
                  <CardBody>
                    <h1>Sign in</h1>
                    <Alert className="alert" style={style} color="danger">
                      <div className="block">{this.state.usernameError}</div>
                      <div className="block">{this.state.passwordError}</div>
                    </Alert>

                    <Form>
                      <TheInput>
                        <div className="testInput">
                          <Input
                            name="username"
                            type="text"
                            placeholder="Username"
                            onChange={this.onChange}
                          />
                          <label> Username*</label>
                        </div>
                      </TheInput>
                      <TheInput>
                        <div className="testInput">
                          <Input
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={this.onChange}
                          />
                          <label> Password*</label>
                        </div>
                      </TheInput>
                      <Button
                        color="primary"
                        outline
                        type="submit"
                        onClick={this.login}
                      >
                        Sign In
                      </Button>
                    </Form>
                    <br />
                    <a className="button" href="/forgot">
                      Forgot Password?
                    </a>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col
              xs="12"
              md={{ size: 4, offset: 1 }}
              className="justify-content-center align-self-center"
            >
              <h1 className="display-5 ">Not a member yet?</h1>
              <p>It's free! So why not?</p>

              <Button
                color="primary"
                outline
                onClick={this.handleSubmit}
                size="lg"
              >
                Sign Up
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
