import React, {useState} from 'react'
import {Button, Col, Container, Form, Row} from 'react-bootstrap'
import {AiOutlineTeam} from 'react-icons/ai'
import {BsChevronLeft} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import Header from '../../component/HeaderOwner'
import SecondHeader from "../../component/SecondHeader";

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

const SelectShop = () => {
    return (
        <select>
            {shopname.map((shopname) => <option key={shopname.name} value={shopname.name}>{shopname.name}</option>)}
        </select>
    )
}
const Categories = (props) => {
    // TODO : 2021.04.20 usestate 글로벌하게 만들기 - sunbo
    const [selected, setSelected] = useState("");
    console.log(selected)

    return (
        <select value={selected} onChange={(event) => setSelected(event.target.value)}>
            {data.map((list) => <option key={list.category} value={list.category}>{list.category}</option>)}
        </select>
    )

}


const ManageShop = () => {
    return (
        <>
            <Header/>
            <Container className="mt-3">
                <SecondHeader title="가게 관리" link="/owner/mypage/registshop" buttonName="추가"/>

                <Form.Label>가게 선택</Form.Label>
                <SelectShop></SelectShop>


                <Form>
                    <Form.Group>
                        <Form.Label>가게이름</Form.Label>
                        <Form.Control type="input" defaultValue={"정호네 꽃가게"} onChange={(event) => {
                            shopname.name = event.target.value
                        }}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>전화번호</Form.Label>
                        <Form.Control type="input" defaultValue={"031-111-5656"} onChange={(event) => {
                            shopname.name = event.target.value
                        }}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>사업자등록번호</Form.Label>
                        <Form.Control value="121-11-25656" disabled></Form.Control>
                    </Form.Group>
                    <Form.Row className="align-items-center">
                        {/*TODO: 2021.04.28 여기도 date의 format에 따라서 값 불러오기. 실패시 react-datePicker 사용 -sunbo*/}
                        <Form.Label>영업시간</Form.Label>
                        <Form.Group as={Col} controlId="formEventStart" value="19:00">
                            <Form.Label>시작시간</Form.Label>
                            <Form.Control type="time"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formEventEnd" value="21:00">
                            <Form.Label>종료시간</Form.Label>
                            <Form.Control type="time"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>휴무일</Form.Label>
                        <Form.Control type="text" defaultValue={"매주 목요일"} onChange={(event) => {
                            shopname.name = event.target.value
                        }}></Form.Control>
                    </Form.Group>
                    <Form.Label>주소</Form.Label>
                    <Form.Group as={Col}>
                        <Form.Control type="input" value="찾아서 자동입력"></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Link>우편번호</Link>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="input" value="경기도 성남시 분당구 판교역로 235" onChange={(event) => {
                            shopname.name = event.target.value
                        }}></Form.Control>
                        <Form.Control type="input" value="상세주소" onChange={(event) => {
                            shopname.name = event.target.value
                        }}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>카테고리</Form.Label>
                        <Categories></Categories>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>상세정보</Form.Label>
                        <Form.Control type="text" defaultValue={"화환배달 가능합니다"} onChange={(event) => {
                            shopname.name = event.target.value
                        }}></Form.Control>
                    </Form.Group>

                    <Row>
                        <Button type="submit">수정하기</Button>
                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default ManageShop