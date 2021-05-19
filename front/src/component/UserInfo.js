import React from 'react';
import { Button, Form, Row} from 'react-bootstrap';
import {useHistory} from "react-router-dom";


const UserInfo = ({list}) => {
    let history = useHistory();

    return (
        <>
            {list.map(e =>(
                <Form>
                    <Form.Group>
                        <Form.Label>이름</Form.Label>
                        <Form.Control type="input" defaultValue={e.name} onChange={(event) => {
                            e.name = event.target.value
                        }}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>전화번호</Form.Label>
                        <Form.Control type="input" defaultValue={e.phone} onChange={(event) => {
                            e.phone = event.target.value
                        }}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type="email" value={e.email} disabled></Form.Control>
                    </Form.Group>
                    <Row>
                        <Button onClick={() => history.push(`/owner/mypage/changepw`)}>비밀번호 변경</Button>
                    </Row>
                    <Row>
                        <Button type="submit">적용하기</Button>
                    </Row>
                </Form>
            ))}
        
        </>

    );
};

export default UserInfo;
