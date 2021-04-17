import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import Header from '../component/HeaderOwner'

const RegistHeader = () => {
    return(
        <Row>
            <Button>◁</Button>
            <Button>등록</Button>
            {/* <Button onClick="document.getElementById('registEvent').submit();">등록</Button> */}
        </Row>
    )
}


const EvnetRegist = () => {
    return(
        <Container>
            <Header></Header>
            <RegistHeader></RegistHeader>
            <Form id="registEvent">
                <Form.Group controlId="formShopName">
                    <Form.Label>가게명</Form.Label>
                    <Form.Control type="input" placeholder="가게명 입력"/>
                </Form.Group>

                <Form.Group controlId="formEventName">
                    <Form.Label>이벤트명</Form.Label>
                    <Form.Control type="input" placeholder="이벤트명 입력"/>
                </Form.Group>

                <Form.Group controlId="formEventTerm">
                    <Form.Label>이벤트기간</Form.Label>
                    <Form.Control type="datepicker" />
                    <Form.Control type="datepicker" />
                </Form.Group>

                <Form.Group controlId="formEventDetail">
                    <Form.Label>이벤트 내용</Form.Label>
                    <Form.Control type="textarea"/>
                </Form.Group>

                <Form.Group controlId="formEventDetail">
                    <Form.File id="formFile" label="사진첨부"/>
                </Form.Group>

                <Button variant="primary" type="submit"></Button>
            </Form>
        </Container>
    )
}

export default EvnetRegist