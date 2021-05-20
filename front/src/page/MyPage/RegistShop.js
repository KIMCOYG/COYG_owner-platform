import React, {useState} from 'react'
import {Button, Col, Container, Form, Row} from 'react-bootstrap'
import {BsChevronLeft} from 'react-icons/bs'
import {Link, useHistory} from 'react-router-dom'
import Header from '../../component/HeaderOwner'
import SelectCategoriesContainer from "../../container/SelectCategoriesContainer";

const SecondHeader = () => {
    let history = useHistory();

    return (
        <Row>
            <button onClick={() => history.goBack()} type="button" className="btn btn-link border-dark">
              <BsChevronLeft className="text-dark" />
            </button>
            <h4>가게 등록</h4>
        </Row>
    )
}

const data = [
    {category: "일식"},
    {category: "치킨"},
    {category: "피자"},
    {category: "가전제품"},
    {category: "도시락"},
    {category: "디저트"},
    {category: "마트"},
    {category: "분식"},
    {category: "스포츠"},
    {category: "아시안"},
    {category: "양식"},
    {category: "의류"},
    {category: "주류"}
]


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


const RegistShop = () => {
    return (
        <>
            <Header/>
            <Container className="mt-3">
                <Row className="col-xs-2 pl-3 text-center">
                    <SecondHeader/>
                </Row>

                <Form>
                    <Form.Group>
                        <Form.Label>가게이름</Form.Label>
                        <Form.Control type="input"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>전화번호</Form.Label>
                        <Form.Control type="input"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>사업자등록번호</Form.Label>
                        <Form.Control type="input"></Form.Control>
                    </Form.Group>
                    <Form.Row className="align-items-center">
                        {/*TODO: 2021.04.28 여기도 date의 format에 따라서 값 불러오기. 실패시 react-datePicker 사용 -sunbo*/}
                        <Form.Label>영업시간</Form.Label>
                        <Form.Group as={Col} controlId="formEventStart">
                            <Form.Label>시작시간</Form.Label>
                            <Form.Control type="time"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formEventEnd">
                            <Form.Label>종료시간</Form.Label>
                            <Form.Control type="time"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>휴무일</Form.Label>
                        <Form.Control type="text"></Form.Control>
                    </Form.Group>
                    <Form.Label>주소</Form.Label>
                    <Form.Group as={Col}>
                        <Form.Control type="input"></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Link>우편번호</Link>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="input" defaultValue="찾아서 자동입력"></Form.Control>
                        <Form.Control type="input"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>카테고리</Form.Label>
                        <Categories/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>상세정보</Form.Label>
                        <Form.Control type="text"></Form.Control>
                    </Form.Group>

                    <Row>
                        <Button type="submit">저장하기</Button>
                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default RegistShop