import React from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../static/image/home.png';

const Header = () => {
    return (
        <Container className="mt-3">
            <Row>
                <Col>
                    <Link to="/">
                        <Image src={logo} ></Image>
                    </Link>
                </Col>
                <Col>
                    <Row className="justify-content-center">
                        <Link to="/login">
                          <Button className="col-xs-5" variant="link" size="sm">로그인</Button>
                        </Link>
                        <div className="pt-1 col-xs-2"> / </div>
                        <Button className="col-xs-5" variant="link" size="sm">회원가입</Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;