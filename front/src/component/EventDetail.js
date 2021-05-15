import {Col, Row} from "react-bootstrap";
import logo from "../static/image/chicken.jpg";
import React from "react";


const EventDetail = ({history, list}) => {
    return (
        <>
            {
                list.map(e => (
                    <>
                        <Row>
                            <div>
                                <img
                                    src={logo}
                                    alt=""
                                    style={{width: '100%', heigh: '100%', marginTop: '1em'}}
                                />
                            </div>
                        </Row>
                        <Row className="section">
                            <Col><small>*사진을 클릭시 확대</small></Col>
                            <Col xs={2}><small>1/2</small></Col>
                        </Row>
                        <Row className="section">
                            <Col>
                                <Row className="divi">
                                    <h5>이벤트</h5>
                                </Row>
                                <Row>
                                    <Col xs={4}>기간</Col>
                                    <Col xs={8}>{e.startTerm} ~ {e.endTerm}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        상세
                                        <Row>
                                            <Col>
                                                {e.상세}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </>

                ))
            }
        </>


    )
        ;
};

export default EventDetail;
