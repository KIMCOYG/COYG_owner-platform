import React, {useState} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import {Link} from "react-router-dom";
import SelectCategory from "./SelectCategory";




const ShopManage = ({history, list}) => {
    return (
        <>
            {list.map(e =>(
                <Form>
                    <Form.Group>
                        <Form.Label>가게이름</Form.Label>
                        <Form.Control type="input" defaultValue={e.name} onChange={(event) => {
                            e.name = event.target.value
                        }}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>전화번호</Form.Label>
                        <Form.Control type="input" defaultValue={e.tel} onChange={(event) => {
                            e.tel = event.target.value
                        }}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>사업자등록번호</Form.Label>
                        <Form.Control value={e.register_number} disabled></Form.Control>
                    </Form.Group>
                    <Form.Row className="align-items-center">
                        {/*TODO: 2021.04.28 여기도 date의 format에 따라서 값 불러오기. 실패시 react-datePicker 사용 -sunbo*/}
                        <Form.Label>영업시간</Form.Label>
                        <Form.Group as={Col} controlId="formEventStart" value={e.start_time}>
                            <Form.Label>시작시간</Form.Label>
                            <Form.Control type="time"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formEventEnd" value={e.end_time}>
                            <Form.Label>종료시간</Form.Label>
                            <Form.Control type="time"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>휴무일</Form.Label>
                        <Form.Control type="text" defaultValue={e.holiday} onChange={(event) => {
                            e.holiday = event.target.value
                        }}></Form.Control>
                    </Form.Group>
                    <Form.Label>주소</Form.Label>
                    <Form.Group as={Col}>
                        <Form.Control type="input" value={e.zonecode}></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Link>우편번호</Link>
                    </Form.Group>
                    <Form.Group>
                        {/*basic address + road address 변수가 필요*/}
                        <Form.Control type="input" value={e.basic_address} onChange={(event) => {
                            e.basic_address = event.target.value
                        }}></Form.Control>
                        <Form.Control type="input" value={e.detail_address} onChange={(event) => {
                            e.detail_address = event.target.value
                        }}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>카테고리</Form.Label>
                        <SelectCategory/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>상세정보</Form.Label>
                        <Form.Control type="text" defaultValue={e.shop_content} onChange={(event) => {
                            e.shop_content = event.target.value
                        }}></Form.Control>
                    </Form.Group>

                    <Row>
                        <Button type="submit">수정하기</Button>
                    </Row>
                </Form>
            ))}

        </>

    );
};

export default ShopManage;
