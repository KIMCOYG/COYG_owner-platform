import React from 'react'
import {Button, Container, Form, Row} from 'react-bootstrap'
import {BsChevronLeft} from 'react-icons/bs';
import Header from '../../component/HeaderOwner';
import SecondHeader from "../../component/SecondHeader";

// const SecondHeader = ({props}) => {
//     return (
//         <Row>
//             <button onClick={() => window.history.back()}>
//                 <BsChevronLeft className="text-dark"/>
//             </button>
//             {/* <Button>등록</Button> */}
//             <h4>비밀번호 변경</h4>
//         </Row>
//     )
// }

const checkPW = () => {
    const pw1 = document.getElementById('pw1').value;
    const pw2 = document.getElementById('pw2').value;
    const pwText = document.getElementById('pw2Text');

    if (pw1 == pw2) {
        pwText.innerHTML = '비밀번호가 일치합니다'
    } else {
        pwText.innerHTML = '비밀번호가 일치하지 않습니다'
    }
}

const ChangePassword = () => {
    return (
        <>
            <Header/>
            <Container className="mt-3">
                <Row className="col-xs-2 pl-3 text-center">
                    <SecondHeader title="비밀번호 변경"></SecondHeader>
                </Row>
                <Form>
                    <Form.Group>
                        <Form.Label>신규 비밀번호</Form.Label>
                        <Form.Control id="pw1" type="password"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>비밀번호 확인</Form.Label>
                        <Form.Control id="pw2" type="password" onChange={checkPW}></Form.Control>
                        <Form.Text id="pw2Text" className="text-muted"></Form.Text>
                    </Form.Group>

                    <Button type="submit">변경하기</Button>
                </Form>
            </Container>
        </>
    )
}
export default ChangePassword