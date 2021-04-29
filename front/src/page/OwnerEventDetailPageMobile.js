import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BsChevronLeft } from 'react-icons/bs';
import Header from '../component/HeaderOwner'
import logo from '../static/image/chicken.jpg';

const SecondHeader = ({props}) => {
    return(
        <Row>
            <button onClick={() => window.history.back()}>
                <BsChevronLeft className="text-dark" />
            </button>
            {/* <Button>등록</Button> */}
            <h5>점심 할인 특가 이벤트</h5>
            <Button onClick={() => document.getElementById('registEvent').submit()} >이벤트수정</Button>
            {/* <Button onClick={() => this.handleSubmit()}></Button> */}
        </Row>
    )
}

const OwnerEventDetailPageMobile = () =>{
    //TODO:2021.04.18 기획서에 따라서 페이지 제작. customer 상세와 제작이 겹치지 않게 주의 - sunbo
    return(
        <>
            <Header/>
            <SecondHeader/>
            <Container>
                <Row>
                    <div>
                    <img
                    src={logo}
                    alt=""
                    style={{ width: '100%', heigh: '100%' }}
                    />
                    </div>
                    <div>
                        <Col>*사진을 클릭시 확대</Col>
                        <Col>1/2</Col>
                    </div>
                    
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <h6>이벤트</h6>
                        </Row>
                        <Row>
                            <Col>기간</Col>
                            <Col>2021/04/03 ~ 2021/04/09</Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    상세
                                </Row>
                                <Row>
                                    점심에 치킨이 할인 됩니다
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Row>
                        <h6>가게</h6>
                    </Row>
                    <Row>KFC</Row>
                    <Row>
                        <Col>운영시간</Col>
                        <Col>10:30~19:00</Col>
                    </Row>
                    <Row>
                        <Col>휴무일</Col>
                        <Col>연중무휴</Col>
                    </Row>
                    <Row>
                        <Col>TEL</Col>
                        <Col>03-233-4323</Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>주소</Row>
                            <Row>
                                서울특별시 관악구 봉천동 942-1 1층 406호
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>상세설명</Row>
                            <Row>
                                찾아오시는 길은 봉천역 8번출구 앞입니다
                            </Row>
                        </Col>
                    </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <h6>지도</h6>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default OwnerEventDetailPageMobile