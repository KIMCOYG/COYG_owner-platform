import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { AiOutlineTeam } from 'react-icons/ai'
import Header from '../../component/HeaderOwner'

const SecondHeader = ({props}) => {
    return(
        <Row>
            <Button onClick={() => window.history.back()}>◁</Button>
            
            <h5>가게 관리</h5>
            {/* TODO: 2021.04.28 가게 추가 페이지 만들고 링크 연결 -sunbo */}
            <Button>추가</Button>
        </Row>
    )
}

const data = [
    {category : "생활용품"},
    {category : "치킨"},
    {category : "피자"}
]
const Categories = (props) => {
    // TODO : 2021.04.20 usestate 글로벌하게 만들기 - sunbo
    const [selected, setSelected] = useState("");
    console.log(selected)

    return(
            <select value={selected} onChange={(event) => setSelected(event.target.value)}>
                {data.map((list) => <option key={list.category} value={list.category}>{list.category}</option>)}
            </select>
    )
    
}


const ManageShop = () => {
    return (
        <Container>
            <Header></Header>
            <SecondHeader></SecondHeader>
            <Form>
                <Form.Group>
                    <Form.Label>가게이름</Form.Label>
                    <Form.Control defaultValue="정호네꽃가게"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>전화번호</Form.Label>
                    <Form.Control defaultValue="정호네꽃가게"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>사업자등록번호</Form.Label>
                    <Form.Control value="정호네꽃가게"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>영업시간</Form.Label>
                    <Form.Control defaultValue="정호네꽃가게"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>휴무일</Form.Label>
                    <Form.Control defaultValue="정호네꽃가게"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>주소</Form.Label>
                    <Form.Control defaultValue="정호네꽃가게"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>카테고리</Form.Label>
                        <Categories ></Categories>
                </Form.Group>
                <Form.Group>
                    <Form.Label>상세정보</Form.Label>
                    <Form.Control defaultValue="정호네꽃가게"></Form.Control>
                </Form.Group>
                
                <Row>
                    <Button type="submit">수정하기</Button>
                </Row>
            </Form>
        </Container>
    )
}

export default ManageShop