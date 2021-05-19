import React from 'react'
import { Col, Container, Form} from 'react-bootstrap'
import Header from '../component/HeaderOwner'
import SecondHeader from '../component/SecondHeader'




const handleSubmit = (event) => {
    alert('A name was submitted: ');
    event.preventDefault();
}

const EventModify = (match) => {
    const url = window.location.href // 현재페이지 url 가져오기

    return (
        <>
            <Header/>
            <Container className="mt-3">
                    <SecondHeader title="이벤트수정" link="/" buttonName="저장" />
                <Form onSubmit={handleSubmit} id="registEvent">
                    <Form.Group controlId="formShopName">
                        <Form.Label>가게명</Form.Label>
                        <Form.Control type="input" defaultValue={"KFC"} disabled></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formEventName">
                        <Form.Label>이벤트명</Form.Label>
                        <Form.Control type="input" defaultValue={"점심 할인 특가 이벤트"}></Form.Control>
                    </Form.Group>

                    <Form.Label>이벤트 기간</Form.Label>
                    <Form.Row className="align-items-center">
                        {/*TODO: 2021.04.18 date의 format에 따라서 값 불러오기. 실패시 react-datePicker 사용 -sunbo*/}
                        <Form.Group as={Col} controlId="formEventStart" value="info.startTerm">
                            <Form.Label>시작일</Form.Label>
                            <Form.Control type="date" value="2021-04-03"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formEventEnd" value="info.endTerm">
                            <Form.Label>종료일</Form.Label>
                            <Form.Control type="date" value="2021-04-09"/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formEventDetail">
                        <Form.Label>이벤트 내용</Form.Label>
                        <Form.Control as="textarea" rows={4} value="점심에 치킨이 할인됩니다"/>
                    </Form.Group>

                    <Form.Group controlId="formEventDetail">
                        <Form.File id="formFile" label="사진첨부"/>
                    </Form.Group>
                    {/*<Button type="submit">등록</Button>*/}
                </Form>
            </Container>
        </>
    )
}

export default EventModify