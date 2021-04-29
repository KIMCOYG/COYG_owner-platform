import React from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
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
                <Col>
                    <Row className="justify-content-center">
                        <Button className="col-xs-5" variant="link" value="마이페이지">
                            <Link to="/owner/mypage">마이페이지</Link>
                        </Button>
                        <div className="pt-1 col-xs-2"> / </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;