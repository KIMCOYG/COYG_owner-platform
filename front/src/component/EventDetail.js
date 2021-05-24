import React from "react";
import styled from "styled-components";
import logo from "../static/image/버거킹1621554310515.jpg"
const MinDiv = styled.div`
  font-size: 0.5rem;
`;
const MidDiv = styled.div`
  font-size: 0.7rem;
`;

const EventDetail = ({lists}) => {
    const sTemp = lists.start_datetime
    const eTemp = lists.end_datetime

    const sDatetime = sTemp.toString().split(/T/)[0]
    const eDatetime = eTemp.toString().split(/T/)[0]
    return (
                <>

                    <div className="mt-2">
                        <div className="border-bottom pb-2">
                            <img  onClick={() => window.open(logo)} //확대
                                 src={logo} alt="event-image" className="img-fluid" />
                            <div className="d-flex justify-content-between">
                                <MinDiv>*사진 클릭 시 확대</MinDiv>
                                <MinDiv>1/2</MinDiv>
                            </div>
                        </div>
                        {/* 이벤트 */}
                        <div className="mt-2 border-bottom pb-3">
                            <img src="uploads/" alt=""/>
                            <div
                                className="border-bottom border-dark pl-3 font-weight-bold"
                                style={{fontSize: '1.2rem'}}
                            >
                                이벤트
                            </div>
                            <div className="d-flex pt-2 border-bottom border-dark">
                                <div className="col-3 font-weight-bold">기간</div>
                                <MidDiv className="col-9 text-center">
                                    {sDatetime} ~ {eDatetime}
                                </MidDiv>
                            </div>
                            <div className="border-bottom border-dark pl-3">
                                <div className="font-weight-bold">상세</div>
                                <MidDiv className="mt-1">
                                    {lists.event_content}
                                </MidDiv>
                            </div>
                        </div>
                        {/* 가게 정보 */}
                        <div className="mt-2 border-bottom pb-3">
                            <div
                                className="border-bottom border-dark pl-3 font-weight-bold"
                                style={{fontSize: '1.2rem'}}
                            >
                                가게
                            </div>
                            <div className="border-bottom border-dark pl-3 font-weight-bold">
                                {/*{lists.shop.name}*/}
                            </div>
                            <div className="d-flex pt-2 border-bottom border-dark">
                                <div className="col-3 font-weight-bold">운영시간</div>
                                <MidDiv
                                    className="col-9 text-center">{lists.shop.start_time} ~ {lists.shop.end_time}</MidDiv>
                            </div>
                            <div className="d-flex pt-2 border-bottom border-dark">
                                <div className="col-3 font-weight-bold">휴무일</div>
                                <MidDiv className="col-9 text-center">{lists.shop.holiday}</MidDiv>
                            </div>
                            <div className="d-flex pt-2 border-bottom border-dark">
                                <div className="col-3 font-weight-bold">TEL</div>
                                <MidDiv className="col-9 text-center">{lists.shop.tel}</MidDiv>
                            </div>
                            <div className="border-bottom border-dark pl-3">
                                <div className="font-weight-bold">주소</div>
                                <div className="mt-1">
                                    <MidDiv>{lists.shop.basic_address}{lists.shop.road_address}</MidDiv>
                                    <MidDiv>{lists.shop.detail_address}</MidDiv>
                                </div>
                            </div>
                            <div className="border-bottom border-dark pl-3">
                                <div className="font-weight-bold">상세 설명</div>
                                <MidDiv>{lists.shop.shop_content}</MidDiv>
                            </div>
                        </div>
                    </div>
                </>


    )
};

export default EventDetail;