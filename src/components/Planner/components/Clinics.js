import React from "react";
import { Col, Button } from "reactstrap";
import clinic from "../../../assets/listclinic@1x.svg";

import { FaArrowAltCircleDown } from "react-icons/fa";

const Clinics = () => {
  return (
    <React.Fragment>
      <Col xs={{ size: 10, offset: 1 }} md={{ size: 5, offset: 1 }}>
        <h1>List of Clinics</h1>
        <p>
          Save the list of clinics to your phone and you don't have to worry
          about how to find a clinic near by.
        </p>
        <Button color="primary" key="clinic" outline>
          Download
          <FaArrowAltCircleDown />
        </Button>
      </Col>
      <Col xs={{ size: 10, offset: 1 }} md={{ size: 5, offset: 1 }}>
        <img src={clinic} alt="Clinic list" />
      </Col>
    </React.Fragment>
  );
};

export default Clinics;
