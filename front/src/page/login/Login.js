import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import '../../App.css';

const Login = () => {
    return (
        <Container>
                    <div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label" htmlFor="inlineRadio1">customer</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineRadio2">ownser</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineRadio2">admin</label>
                        </div>
                    </div>
                    <Form className="mt-3">
                        <Form.Group contorlid="formEmail">
                            <Form.Control type="email" placeholder="이메일을 입력해주세요"/>
                        </Form.Group>
                        <Form.Group contorlid="formPassword">
                            <Form.Control type="password" placeholder="비밀번호를 입력해주세요"/>
                        </Form.Group>
                        <Button variant="primary" type="submit" size="sm" block>로그인</Button>
                    </Form>
        </Container>
    );
}

export default Login;
