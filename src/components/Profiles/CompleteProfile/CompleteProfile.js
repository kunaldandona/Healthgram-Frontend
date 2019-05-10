import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { PostData } from "../services/PostData";
import "./CompleteProfile.css";

import {
  Alert,
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle
} from "reactstrap";
// import JumbotronComplete from "./Jumbo";

class CompleteProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,
      name: "",
      date_of_birth: "",
      currentpassword: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      country: "",
      id: "",
      toProfile: false
    };

    this.getUserFeed = this.getUserFeed.bind(this);
    this.complete = this.complete.bind(this);
    this.onChange = this.onChange.bind(this);
    this.validate = this.validate.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    if (sessionStorage.getItem("userData")) {
      this.getUserFeed();
    } else {
      this.setState({ redirectToReferrer: true });
    }
  }

  getUserFeed() {
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = {
      id: data.id,
      username: data.username,
      email: data.email,
      address: data.address,
      name: data.name,
      phone: data.phone,
      date_of_birth: data.date_of_birth,
      postal_code: data.postal_code,
      city: data.city,
      country: data.country
    };
    this.setState(postData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  logout() {
    sessionStorage.setItem("userData", "");
    sessionStorage.clear();
    this.setState({ redirectToReferrer: true });
  }

  validate = () => {
    let isError = false;
    const errors = {
      usernameError: "",
      passwordError: "",
      emailError: "",
      nameError: "",
      alertBox: false
    };

    if (this.state.currentpassword === "") {
      isError = true;
      errors.alertBox = true;
      errors.passwordError = "Password Cannot be empty";
    }

    const letters = /^[a-zA-Z\s]*$/;

    if (!this.state.name.match(letters)) {
      isError = true;
      errors.alertBox = true;
      errors.nameError = "Your name should contain letters only";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  complete(e) {
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

      PostData("complete", this.state).then(result => {
        let responseJson = result;
        if (responseJson.redirectToReferrer === true) {
          sessionStorage.setItem("userData", JSON.stringify(responseJson));
          this.setState({ redirectToReferrer: true });
        } else if (responseJson.passwordError === true) {
          errors.alertBox = true;
          errors.passwordError = "Password Does not match";
          this.setState({ ...this.state, ...errors });
        }
      });
    }
  }

  handleSubmit = () => {
    this.setState(() => ({
      toProfile: true
    }));
  };

  render() {
    if (this.state.toProfile === true) {
      return <Redirect to="/Profile" />;
    }

    if (this.state.redirectToReferrer) {
      return <Redirect to={"/Profile"} />;
    }

    const style = this.state.alertBox
      ? { display: "block" }
      : { display: "none" };

    return (
      <div>
        {/* <JumbotronComplete name={this.state.name} /> */}
        <Container>
          <Row className="justify-content-sm-center mb-5">
            <Col xs="12" lg="8">
              <Card className="widthcard">
                {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
                <CardBody>
                  <CardTitle>Update Your Profile</CardTitle>
                  <hr />

                  <Alert className="alert" style={style} color="danger">
                    <div className="block">{this.state.emailError}</div>
                    <div className="block">{this.state.nameError}</div>
                    <div className="block">{this.state.usernameError}</div>
                    <div className="block">{this.state.passwordError}</div>
                  </Alert>

                  <Form>
                    <FormGroup row>
                      <Label for="name" className="text-right" sm={3}>
                        Name
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          name="name"
                          placeholder={this.state.name}
                          onChange={this.onChange}
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Label for="phone" className="text-right" sm={3}>
                        Phone
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="tel"
                          name="phone"
                          placeholder={this.state.phone}
                          onChange={this.onChange}
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Label for="date_of_birth" className="text-right" sm={3}>
                        Birthday
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="date"
                          name="date_of_birth"
                          placeholder={this.state.date_of_birth}
                          onChange={this.onChange}
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Label className="text-right" for="address" sm={3}>
                        Address
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          name="address"
                          placeholder={this.state.address}
                          onChange={this.onChange}
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Label className="text-right" for="city" sm={3}>
                        City
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          name="city"
                          placeholder={this.state.city}
                          onChange={this.onChange}
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Label className="text-right" for="country" sm={3}>
                        Country
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          name="country"
                          placeholder={this.state.country}
                          onChange={this.onChange}
                        />
                      </Col>
                    </FormGroup>
                    <hr />
                    <FormGroup row>
                      <Label
                        className="text-right"
                        for="currentpassword"
                        sm={3}
                      >
                        Current Password
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="password"
                          name="currentpassword"
                          placeholder="Password"
                          onChange={this.onChange}
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup check row>
                      <Row>
                        <Col xs="12">
                          <Button
                            type="submit"
                            className="btn-success"
                            onClick={this.complete}
                          >
                            Update Profile
                          </Button>
                        </Col>
                      </Row>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" lg="4">
              <div>
                <Card body className="text-center">
                  <CardTitle>Profile Overview</CardTitle>
                  <hr />
                  <p>Name: {this.state.name}</p>
                  <p>Phone: {this.state.phone}</p>
                  <p>Birthday: {this.state.date_of_birth}</p>
                  <p>Address: {this.state.address}</p>
                  <p>City: {this.state.city}</p>
                  <p>Country: {this.state.country}</p>
                  <p>Email: {this.state.email}</p>

                  <Button
                    className="btn-primary mb-3"
                    onClick={this.handleSubmit}
                  >
                    Go back to profile
                  </Button>
                  <p>Or</p>
                  <Button className="btn-danger" onClick={this.logout}>
                    Logout
                  </Button>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="row " id="Body">
          <div className="medium-12 columns" />
        </div>
      </div>
    );
  }
}

export default CompleteProfile;
