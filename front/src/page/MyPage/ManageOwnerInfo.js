import React from 'react'
import {Button, Container, Form, Row} from 'react-bootstrap'
import {BsChevronLeft} from 'react-icons/bs';
import {useHistory} from 'react-router-dom';
import Header from '../../component/HeaderOwner';
import userData from "../../dummy/dummyDataUser";

const SecondHeader = ({history}) => {
    return (
        <Row>
            <button onClick={() => history.goBack()} type="button" className="btn btn-link border-dark">
              <BsChevronLeft className="text-dark" />
            </button>
            {/* <Button onClick={() => window.history.back()}>◁</Button> */}
            {/* <Button>등록</Button> */}
            <h4>내 정보 수정</h4>
        </Row>
    )
}

const ManageUserInfo = () => {
    let history = useHistory();
    const userInfo = userData[0]
    return (
        <>
            <Header/>
            <Container className="mt-3">
                <Row className="col-xs-2 pl-3 text-center">
                    <SecondHeader/>
                </Row>
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
                        <Button onClick={() => history.push("/owner/mypage/changepw")}>비밀번호 변경</Button>
                    </Row>
                    <Row>
                        <Button type="submit">적용하기</Button>
                    </Row>
                </Form>
            </Container>
            <Button onClick={() => history.push("owner/change-password")}></Button>)
        </>
    )
}

export default ManageUserInfo