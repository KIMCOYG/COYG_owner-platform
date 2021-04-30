import React from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'
import {BsChevronLeft} from 'react-icons/bs';
import {Link, Route} from 'react-router-dom';
import Header from '../component/HeaderOwner'
import logo from '../static/image/chicken.jpg';
import map from '../static/image/map.png';
import '../static/css/OwnerEventDetailPageMobile.css'
import SecondHeader from "../component/SecondHeader";

/*const SecondHeader = ({props}) => {
    return (
        <Row>
            <Col xs={1}>
                <button onClick={() => window.history.back()}>
                    <BsChevronLeft className="text-dark"/>
                </button>
            </Col>
            {/!* <Button>등록</Button> *!/}
            <Col xs={8}>
                <h4 style={{fontSize: '20px'}}>점심 할인 특가 이벤트</h4>
            </Col>
            <Col xs={3}>
                <Link to="/mobile/owner/event/modify"><Button style={{fontSize: '6px', blockSize: '5em'}}>수정</Button></Link>
            </Col>

            {/!* <Button onClick={() => this.handleSubmit()}></Button> *!/}
        </Row>
    )
}*/

const OwnerEventDetailPageMobile = () => {
    //TODO:2021.04.18 기획서에 따라서 페이지 제작. customer 상세와 제작이 겹치지 않게 주의 - sunbo
    return (
        <>
            <Header/>
            <Container className="mt-3">
                <Row className="col-xs-2 pl-3 text-center">
                    <SecondHeader title="점심 할인 특가 이벤트" buttonName="수정" link="/mobile/owner/event/modify" />
                </Row>
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
                            <Col xs={8}>2021/04/03 ~ 2021/04/09</Col>
                        </Row>
                        <Row>
                            <Col>
                                상세
                                <Row>
                                    <Col>
                                        점심에 치킨이 할인 됩니다
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="section">
                    <Col>
                        <Row className="divi">
                            <h5>가게</h5>
                        </Row>
                        <Row>KFC</Row>
                        <Row className="divi2">
                            <Col xs={4}>운영시간</Col>
                            <Col>10:30~19:00</Col>
                        </Row>
                        <Row className="divi2">
                            <Col xs={4}>휴무일</Col>
                            <Col>연중무휴</Col>
                        </Row>
                        <Row className="divi2">
                            <Col xs={4}>TEL</Col>
                            <Col>03-233-4323</Col>
                        </Row>
                        <Row>
                            <Col  className="divi2">
                                주소
                                <Row>
                                    <Col >
                                        서울특별시 관악구 봉천동 942-1 1층 406호
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                상세설명
                                <Row>
                                    <Col >
                                        찾아오시는 길은 봉천역 8번출구 앞입니다
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="section">
                    <Col>
                        <Row className="divi">
                            <h5>지도</h5>
                        </Row>
                        <Row>
                            <img src={map} alt="" style={{width: '90%', heigh: '100%', marginBottom: '1em'}}/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default OwnerEventDetailPageMobile