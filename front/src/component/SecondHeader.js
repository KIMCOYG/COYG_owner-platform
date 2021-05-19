import React from 'react'
import {Button, Col, Row} from "react-bootstrap";
import {BsChevronLeft} from "react-icons/bs";
import {Link} from "react-router-dom";

const SecondHeader = ({history, title, buttonName, link, what}) => {
    return (
        <Row>
            <Col xs={1}>
                <button onClick={() => window.history.back()}>
                    <BsChevronLeft className="text-dark"/>
                </button>
            </Col>
            {/* <Button>등록</Button> */}
            <Col xs={8}>
                <h4 style={{marginLeft:'10px', fontSize: '20px'}}>{title}</h4>
            </Col>
            <Col xs={3}>
                <button style={{fontSize: '6px'}} onClick={() => history.push(link)}>{buttonName}</button>
            </Col>

            {/* <Button onClick={() => this.handleSubmit()}></Button> */}
        </Row>
    )
}

export default SecondHeader