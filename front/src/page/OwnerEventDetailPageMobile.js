import React,  {useState} from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import {BsChevronLeft} from 'react-icons/bs';
import Header from '../component/HeaderOwner'
import '../static/css/OwnerEventDetailPageMobile.css'
import SecondHeader from "../component/SecondHeader";
import KakaoMap from "./KakaoMap"
import EventDetailContainer from "../container/EventDetailContainer";
import OwnerShopDetailContainer from "../container/OwnerShopDetailContainer";

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

const OwnerEventDetailPageMobile = ({history, match}) => {
    const [markerPositions, setMarkerPositions] = useState([[37.50802, 127.062835]]);
    const [mapSize, setMapSize] = useState([100, 400]);
    console.log("page", match.params.id)
    //TODO:2021.04.18 기획서에 따라서 페이지 제작. customer 상세와 제작이 겹치지 않게 주의 - sunbo
    return (
        <>
            <Header/>
            <Container className="mt-3">
                <Row className="col-xs-2 pl-3 text-center">
                    
                    <SecondHeader title="점심 할인 특가 이벤트" buttonName="수정" link="/mobile/owner/event/modify" />
                </Row>
                <EventDetailContainer params={match.params.id}/>
                {/*<Row>
                            <div>
                                <img
                                    src={logo}
                                    alt=""
                                    style={{width: '100%', heigh: '100%', marginTop: '1em'}}
                                />
                            </div>
=======
                <Row>
                    <div>
                        <img onClick={()=>window.open(logo)} //확대
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
                        <Row className="section">
                            <Col>
                                <Row className="divi">
                                    <h5>{e.name}</h5>
                                </Row>
                                <Row>KFC</Row>
                                <Row className="divi2">
                                    <Col xs={4}>운영시간</Col>
                                    <Col>{e.startTime} ~ {e.endTime}</Col>
                                </Row>
                                <Row className="divi2">
                                    <Col xs={4}>휴무일</Col>
                                    <Col>{e.holiday}</Col>
                                </Row>
                                <Row className="divi2">
                                    <Col xs={4}>TEL</Col>
                                    <Col>{e.tel}</Col>
                                </Row>
                                <Row>
                                    <Col  className="divi2">
                                        주소
                                        <Row>
                                            <Col >
                                                {e.basic_address}{e.road_address}{e.detail_address}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        상세설명
                                        <Row>
                                            <Col >
                                                {e.shop_content}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>*/}
                <Row className="section">
                    <Col>
                        <Row className="divi">
                            <h5>지도</h5>
                        </Row>
                        <Row>
                            <KakaoMap markerPositions={markerPositions} size={mapSize} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default OwnerEventDetailPageMobile