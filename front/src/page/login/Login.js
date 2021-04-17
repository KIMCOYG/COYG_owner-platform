import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Form, Button} from 'react-bootstrap';
import '../../App.css';
import Header from '../../component/Header';

const Login = () => {
    return (
        <>
            <Header />
            <Container>
                <div className="mt-5">
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
                        <div className="d-flex justify-content-center mt-3">
                            <Button variant="link" className="mr-3">이메일 찾기</Button>
                            <Button variant="link" className="mr-3">비밀번호 찾기</Button>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <Link to="/customer/join">
                                <Button variant="link" className="mr-3">고객 회원가입</Button>
                            </Link>
                            <Link to="/owner/join">
                                <Button variant="link">사장님 회원가입</Button>
                            </Link>
                        </div>
                </div>
            </Container>
        </>
    );
}

export default Login;
