import {Button, Col, Form} from "react-bootstrap";
import React, {useState} from "react";
import axios from "axios";

let lat;
let lon;

let categoryId
const data = [
    {category: "일식",
    id: 10},
    {category: "치킨",
        id: 11},
    {category: "피자",
        id: 12},
    {category: "가전제품",
        id: 13},
    {category: "도시락",
        id: 14},
    {category: "디저트",
        id: 15},
    {category: "마트",
        id: 16},
    {category: "분식",
        id: 17},
    {category: "스포츠",
        id: 18},
    {category: "아시안",
        id: 19},
    {category: "양식",
        id: 20},
    {category: "의류",
        id: 21},
    {category: "주류",
        id: 22}
]
const Categories = ({lists}) => {
    // TODO : 2021.04.20 usestate 글로벌하게 만들기 - sunbo
    const [selected, setSelected] = useState('');

    return (
        <select
            value={selected}
            onChange={(event) => {
                console.log(event.target.value)
                setSelected(event.target.value)
                getCId(event.target.value)
            }}
        >
            {lists.map((list) => (
                <option key={list.name} value={list.category_id} >
                    {list.name}
                </option>
            ))}
        </select>
    );
};

const getCId = (cId) => {
    categoryId = cId
    console.log("categoryId " , categoryId)
}

const handleOnSubmit = async (e) =>{
    console.log("handle", e.target[11].value)
    e.preventDefault()
    console.log("handle", categoryId)

    const data = {
        name: e.target[0].value,
        tel: e.target[1].value,
        register_number: e.target[2].value,
        start_time: e.target[3].value,
        end_time: e.target[4].value,
        holiday: e.target[5].value,
        shop_content: e.target[11].value,
        zonecode: 13245,
        basic_address: "기본주소",
        road_address: "road 주소",
        detail_address: e.target[9].value,
        latitude: lat,
        longitude: lon,
        category_id: categoryId,
        user_id: 1
    }
    axios.post("http://localhost:5000/shop/create", data)
}

const ShopRegister = ({lists, latitude, longitude}) =>{
    lat = latitude
    lon = longitude
    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Group>
                <Form.Label>가게이름</Form.Label>
                <Form.Control type="input"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>전화번호</Form.Label>
                <Form.Control type="input"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>사업자등록번호</Form.Label>
                <Form.Control type="input"/>
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
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Label>주소</Form.Label>
            <Form.Group as={Col}>
                <Form.Control type="input"/>
            </Form.Group>
            <Form.Group as={Col}>
                <button>우편번호</button>
            </Form.Group>
            <Form.Group>
                <Form.Control type="input" defaultValue="찾아서 자동입력"/>
                <Form.Control type="input"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>카테고리</Form.Label>
                <Categories lists={lists}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>상세정보</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>

            <Button type="submit">저장하기</Button>
        </Form>
    )
}

export default ShopRegister