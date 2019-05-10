import React, { Component } from "react";
import Styled from "styled-components";
import { PostData } from "../services/PostData";
import { Redirect } from "react-router-dom";
import "./Signup.css";
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

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      name: "",
      redirectToReferrer: false,
      toSignin: false
    };

    this.signup = this.signup.bind(this);
    this.validate = this.validate.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit = () => {
    this.setState(() => ({
      toSignin: true
    }));
  };

  validateEmail = mail => {
    // let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
  };

  validate = () => {
    let isError = false;
    const errors = {
      usernameError: "",
      passwordError: "",
      emailError: "",
      nameError: "",
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

    if (this.state.name === "") {
      isError = true;
      errors.alertBox = true;
      errors.nameError = "Name Cannot be empty";
    }

    const letters = /^[a-zA-Z\s]*$/;

    if (!this.state.name.match(letters)) {
      isError = true;
      errors.alertBox = true;
      errors.nameError = "Your name should contain letters only";
    }

    if (this.state.password !== this.state.confirmPassword) {
      isError = true;
      errors.alertBox = true;
      errors.passwordError = "Password Needs to be same";
    }

    const emailValid = this.validateEmail(this.state.email);
    if (!emailValid) {
      isError = true;
      errors.alertBox = true;
      errors.emailError = "Email is not correct";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  signup(e) {
    e.preventDefault();
    const err = this.validate();

    if (!err) {
      const errors = {
        usernameError: "",
        passwordError: "",
        emailError: "",
        nameError: "",
        alertBox: false
      };

      PostData("register", this.state).then(result => {
        this.setState({
          usernameError: "",
          passwordError: "",
          emailError: "",
          nameError: "",
          alertBox: false
        });

        let responseJson = result;
        // console.log(responseJson.usernameError===true);
        if (responseJson.redirectToReferrer === true) {
          sessionStorage.setItem("userData", JSON.stringify(responseJson));
          this.setState({ redirectToReferrer: true });
        }
        if (responseJson.usernameError === true) {
          errors.alertBox = true;
          errors.usernameError = "Username Already Taken";
          this.setState({ ...this.state, ...errors });
        }

        if (responseJson.emailError === true) {
          errors.alertBox = true;
          errors.emailError = "Email Already In Use";
          this.setState({ ...this.state, ...errors });
        }
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.state.toSignin === true) {
      return <Redirect to="/signin" />;
    }

    if (this.state.redirectToReferrer || sessionStorage.getItem("userData")) {
      return <Redirect to={"/profile"} />;
    }

    const style = this.state.alertBox
      ? { display: "block" }
      : { display: "none" };

    return (
      <div>
        <Container className="signup">
          <Row className="justify-content-sm-center mb-5">
            <Col xs="12" md={{ size: 5 }}>
              <div className="br-1">
                <Card className="widthcard p-5">
                  <CardBody>
                    <h1>Sign up</h1>
                    <Alert className="alert" style={style} color="danger">
                      <div className="block">{this.state.usernameError}</div>
                      <div className="block">{this.state.nameError}</div>
                      <div className="block">{this.state.emailError}</div>
                      <div className="block">{this.state.passwordError}</div>
                    </Alert>

                    <Form>
                      <TheInput>
                        <div className="testInput">
                          <Input
                            name="username"
                            type="text"
                            placeholder="Username*"
                            onChange={this.onChange}
                          />
                          <label> Username*</label>
                        </div>
                      </TheInput>
                      <TheInput>
                        <div className="testInput">
                          <Input
                            name="name"
                            type="text"
                            placeholder="Full Name*"
                            onChange={this.onChange}
                          />
                          <label> Full Name*</label>
                        </div>
                      </TheInput>
                      <TheInput>
                        <div className="testInput">
                          <Input
                            name="email"
                            type="text"
                            placeholder="Email*"
                            onChange={this.onChange}
                          />
                          <label> Email*</label>
                        </div>
                      </TheInput>
                      <TheInput>
                        <div className="testInput">
                          <Input
                            name="password"
                            type="password"
                            placeholder="Password*"
                            onChange={this.onChange}
                          />
                          <label> Password*</label>
                        </div>
                      </TheInput>
                      <TheInput>
                        <div className="testInput">
                          <Input
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm Password*"
                            onChange={this.onChange}
                          />
                          <label> Confirm Password*</label>
                        </div>
                      </TheInput>

                      <Button
                        color="primary"
                        outline
                        type="submit"
                        onClick={this.signup}
                      >
                        Sign Up
                      </Button>
                    </Form>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col
              xs="12"
              md={{ size: 4, offset: 1 }}
              className="justify-content-center align-self-center"
            >
              <h1 className="display-5">Already registered?</h1>

              <Button
                color="primary"
                onClick={this.handleSubmit}
                outline
                size="lg"
              >
                Sign in
              </Button>
              <br/>
              <br/>
              <a className="button" href="/forgot">
                Forgot Password?
                    </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Signup;
