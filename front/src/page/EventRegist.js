import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Header from '../component/HeaderOwner'

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

const handleGoBack = (props) =>{
    props.history.goBack();
}


const handleSubmit = (event) => {
    alert('A name was submitted: ');
    event.preventDefault();
}

const EvnetRegist = () => {
    return(
        <Container>
            <Header></Header>
            <RegistHeader></RegistHeader>
            <Form onSubmit={handleSubmit} id="registEvent">
                <Form.Group controlId="formShopName">
                    <Form.Label>가게명</Form.Label>
                    <Form.Control type="input" placeholder="가게명 입력"/>
                </Form.Group>

                <Form.Group controlId="formEventName">
                    <Form.Label>이벤트명</Form.Label>
                    <Form.Control type="input" placeholder="이벤트명 입력"/>
                </Form.Group>

                <Form.Label>이벤트 기간</Form.Label>
                <Form.Row className="align-items-center">
                    <Form.Group as={Col} controlId="formEventStart">
                        <Form.Label>시작일</Form.Label>
                        <Form.Control  type="date" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formEventEnd">
                        <Form.Label>종료일</Form.Label>
                        <Form.Control  type="date" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formEventDetail">
                    <Form.Label>이벤트 내용</Form.Label>
                    <Form.Control as="textarea" rows={4}/>
                </Form.Group>

                <Form.Group controlId="formEventDetail">
                    <Form.File id="formFile" label="사진첨부"/>
                </Form.Group>
                <Button type="submit">등록</Button>
            </Form>
        </Container>
    )
}

export default EvnetRegist