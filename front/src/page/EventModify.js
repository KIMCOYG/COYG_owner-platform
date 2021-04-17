import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Header from '../component/HeaderOwner'
import data from '../dummy/dummyDataforOwner'


const RegistHeader = ({props}) => {
    return(
        <Row>
            <Button onClick={() => window.history.back()}>◁</Button>
            {/* <Button>등록</Button> */}
            <Button onClick={() => document.getElementById('registEvent').submit()} >등록</Button>
            {/* <Button onClick={() => this.handleSubmit()}></Button> */}
        </Row>
    )
}


const handleSubmit = (event) => {
    alert('A name was submitted: ');
    event.preventDefault();
}

const EvnetModify = () => {
    const url = window.location.href // 현재페이지 url 가져오기
    const current_id = url.split("/")[7] // 현재 페이지 url에서 id 값만 가져오기

    const info = data[current_id-1]
    return(
        <Container>
            <Header></Header>
            <RegistHeader></RegistHeader>
            <Form onSubmit={handleSubmit} id="registEvent">
                <Form.Group controlId="formShopName">
                    <Form.Label>가게명</Form.Label>
                    <Form.Control type="input" value={info.shopName} disabled/>
                </Form.Group>

                <Form.Group controlId="formEventName">
                    <Form.Label>이벤트명</Form.Label>
                    <Form.Control type="input" value={info.shopName}/>
                </Form.Group>

                <Form.Label>이벤트 기간</Form.Label>
                <Form.Row className="align-items-center">
                    {/*TODO: 2021.04.18 date의 format에 따라서 값 불러오기. 실패시 react-datePicker 사용 -sunbo*/}
                    <Form.Group as={Col} controlId="formEventStart" value={info.startTerm}>
                        <Form.Label>시작일</Form.Label>
                        <Form.Control  type="date" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formEventEnd" value={info.endTerm}>
                        <Form.Label>종료일</Form.Label>
                        <Form.Control  type="date" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formEventDetail">
                    <Form.Label>이벤트 내용</Form.Label>
                    <Form.Control as="textarea" rows={4} value={info.eventDetail}/>
                </Form.Group>

                <Form.Group controlId="formEventDetail">
                    <Form.File id="formFile" label="사진첨부"/>
                </Form.Group>
                <Button type="submit">등록</Button>
            </Form>
        </Container>
    )
}

export default EvnetModify