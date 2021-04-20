import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { AiOutlineTeam } from 'react-icons/ai'
import Header from '../../component/HeaderOwner'

const SecondHeader = ({props}) => {
    return(
        <Row>
            <Button onClick={() => window.history.back()}>◁</Button>
            {/* <Button>등록</Button> */}
            <h5>가게 관리</h5>
        </Row>
    )
}

const data = [
    {category : "생활용품"},
    {category : "치킨"},
    {category : "피자"}
]
const Categories = (props) => {
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
                    <Form.Label>상세정보</Form.Label>
                        <Categories ></Categories>
                </Form.Group>
                
                <Row>
                    <Button type="submit">수정하기</Button>
                </Row>
            </Form>
        </Container>
    )
}

export default ManageShop