import React from 'react'
import {Button, Container, Form, Row} from 'react-bootstrap'
import {BsChevronLeft} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import Header from '../../component/HeaderOwner';
import userData from "../../dummy/dummyDataUser";

const SecondHeader = ({props}) => {
    return (
        <Row>
            <button onClick={() => window.history.back()}>
                <BsChevronLeft className="text-dark"/>
            </button>
            {/* <Button onClick={() => window.history.back()}>◁</Button> */}
            {/* <Button>등록</Button> */}
            <h4>내 정보 수정</h4>
        </Row>
    )
}

const ManageUserInfo = () => {
    const userInfo = userData[0]
    return (
        <>
            <Header/>
            <SecondHeader/>
            <Container className="mt-3">

                <Form>
                    <Form.Group>
                        <Form.Label>이름</Form.Label>
                        <Form.Control type="input" defaultValue={userInfo.name} onChange={(event) => {
                            userInfo.name = event.target.value
                        }}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>전화번호</Form.Label>
                        <Form.Control type="input" defaultValue={userInfo.phone} onChange={(event) => {
                            userInfo.phone = event.target.value
                        }}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type="email" value={userInfo.email} disabled></Form.Control>
                    </Form.Group>
                    <Row>
                        <Link to="/owner/mypage/changepw">비밀번호 변경</Link>
                    </Row>
                    <Row>
                        <Button type="submit">적용하기</Button>
                    </Row>
                </Form>
            </Container>
            <Link to="owner/change-password"></Link>
        </>
    )
}

export default ManageUserInfo