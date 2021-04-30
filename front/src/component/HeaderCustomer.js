import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../static/image/home.png';

const Header = () => {
    return (
        <Container className="mt-3">
            <Row>
                <Col>
                    <Link to="/">
                        <Image src={logo}></Image>
                    </Link>
                </Col>
                <Col className="text-center">
                    <Link to="/mypage/customer">
                        <Button
                            className="col-xs-5"
                            variant="link"
                            style={{ color: 'black' }}
                        >
                            마이페이지
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
