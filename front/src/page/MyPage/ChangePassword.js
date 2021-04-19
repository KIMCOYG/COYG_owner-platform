import React from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'
import Header from '../../component/HeaderOwner';

const SecondHeader = ({props}) => {
    return(
        <Row>
            <Button onClick={() => window.history.back()}>◁</Button>
            {/* <Button>등록</Button> */}
            <h5>비밀번호 변경</h5>
        </Row>
    )
}

const checkPW = () =>{
    const pw1 = document.getElementById('pw1').value;
    const pw2 = document.getElementById('pw2').value;
    const pwText = document.getElementById('pw2Text');

    if(pw1 == pw2){
        pwText.innerHTML = '비밀번호가 일치합니다'
    }
    else{
        pwText.innerHTML = '비밀번호가 일치하지 않습니다'
    }
}

const ChangePassword = () =>{
    return (
        <Container>
            <Header></Header>
            <SecondHeader></SecondHeader>
            <Form>
                <Form.Group>
                    <Form.Label>신규 비밀번호</Form.Label>
                    <Form.Control id="pw1" type="password"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>비밀번호 확인</Form.Label>
                    <Form.Control id="pw2" type="password" onChange={checkPW}></Form.Control>
                    <Form.Text id="pw2Text" className="text-muted" ></Form.Text>
                </Form.Group>
                
                <Button type="submit">변경하기</Button>
            </Form>
        </Container>
    )
}
export default ChangePassword