import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import Header from "../component/HeaderOwner"

const OwnerEventDetailPage = ({props}) => {
    const url = window.location.href
    const current_id = url.split("/")[5]
    return (
        <Container className="mt-3">
            <Header></Header>
            <Row>
                <Col>
                    이벤트 상세
                </Col>
                <Col>
                    <Button className="col-xs-5" variant="link" value="수정">수정</Button>
                    <Button className="col-xs-5" variant="link" value="삭제">삭제</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    props.thumbnail
                    {url}
                    {current_id}
                    
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row>
                                eventName
                            </Row>
                            <Row>
                                term
                            </Row>
                            <Row>
                                eventDetail
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                shopName
                            </Row>
                            <Row>
                                time
                            </Row>
                            <Row>
                                휴무일
                            </Row>        
                            <Row>
                                tel
                            </Row> 
                            <Row>
                                주소
                            </Row> 
                            <Row>
                                상세설명
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                MAP
            </Row>
        </Container>
    )
}

export default OwnerEventDetailPage