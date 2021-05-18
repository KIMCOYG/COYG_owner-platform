import React, {useState} from 'react'
import {Button, Col, Container, Form, Row} from 'react-bootstrap'
import {BsChevronLeft} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import Header from '../../component/HeaderOwner'
import SecondHeader from "../../component/SecondHeader";
import SelectShop from "../../component/SelectShop";

/*const SecondHeader = ({props}) => {
    return (
        <Row>
            <button onClick={() => window.history.back()}>
                <BsChevronLeft className="text-dark"/>
            </button>

            <h4>가게 관리</h4>
            <Link to="/owner/mypage/registshop">
                <Button>추가</Button>
            </Link>

        </Row>
    )
}*/

const data = [
    {category: "생활용품"},
    {category: "치킨"},
    {category: "피자"}
]

const shopname = [
    {name: "정호네 꽃가게"},
    {name: "유진이네 햄버거"}
]



const ManageShop = ({history}) => {
    return (
        <>
            <Header/>
            <Container className="mt-3">
                <Row className="col-xs-2 pl-3 text-center">
                    <button onClick={() => history.goBack()} type="button" className="btn btn-link border-dark">
                        <BsChevronLeft className="text-dark" />
                    </button>
                    <SecondHeader title="가게 관리" link="/owner/mypage/registshop" buttonName="추가"/>
                </Row>

                <Form.Label>가게 선택</Form.Label>
                <SelectShop></SelectShop>

            </Container>
        </>
    )
}

export default ManageShop