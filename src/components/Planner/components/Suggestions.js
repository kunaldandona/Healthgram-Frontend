import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class Suggestions extends Component {
  dataHandle(data) {
    return (
      this.props.info &&
      Object.keys(data.info).map(section => {
        let splitSection = section.split("_").join(" ");
        let formatSection =
          splitSection.charAt(0).toUpperCase() + splitSection.slice(1);
        return data.info[section].length < 4 ? (
          <div key={section}>
            <strong>{formatSection}</strong>
            <ul>
              {data.info[section].map((line, index) => {
                return <li key={index}>{line}</li>;
              })}
            </ul>
          </div>
        ) : (
          <div key={section}>
            <strong>{formatSection}</strong> <p>{data.info[section]}</p>
          </div>
        );
      })
    );
  }

  render() {
    return (
      <Row>
        <Col xs={{ size: 10, offset: 1 }} className="suggestion">
          <div className="left">
            <h1>Be Prepared</h1>
            <img src={this.props.img} alt={this.props.alt} />
          </div>
          <div className="right">{this.dataHandle(this.props.info)}</div>
        </Col>
      </Row>
    );
  }
}

export default Suggestions;
