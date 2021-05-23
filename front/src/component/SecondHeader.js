import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BsChevronLeft } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

const SecondHeader = ({ title, buttonName, link }) => {
  let history = useHistory();

  return (
    <Row>
      <Col xs={1}>
        <button
          onClick={() => history.goBack()}
          type="button"
          className="btn btn-link border-dark"
        >
          <BsChevronLeft className="text-dark" />
        </button>
      </Col>
      {/* <Button>등록</Button> */}
      <Col xs={8}>
        <h4 style={{ marginLeft: '10px', fontSize: '20px' }}>{title}</h4>
      </Col>
      <Col xs={2}>
        <button
          className="btn btn-primary"
          style={{ fontSize: '6px' }}
          onClick={() => history.push(link)}
        >
          {buttonName}
        </button>
      </Col>

      {/* <Button onClick={() => this.handleSubmit()}></Button> */}
    </Row>
  );
};

export default SecondHeader;
