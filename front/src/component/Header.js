import React from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import logo from '../static/image/home.png';

const Header = () => {
    return (
        <Container className="mt-3">
            <Row>
                <Col>
                    <Image src={logo}></Image>
                </Col>
                <Col>
                    <Row className="justify-content-center">
                        <Button className="col-xs-5" variant="link" size="sm">로그인</Button>
                        <div className="pt-1 col-xs-2"> / </div>
                        <Button className="col-xs-5" variant="link" size="sm">회원가입</Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;