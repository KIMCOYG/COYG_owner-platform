import React from "react";
import {BsHeart} from "react-icons/bs";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

const MinDiv = styled.div`
  font-size: 0.5rem;
`;
const MidDiv = styled.div`
  font-size: 0.7rem;
`;

const EventDetail = ({lists}) => {
    let history = useHistory();
    return (
                <>
                    <div className="col-xs-4 pl-3 pt-1 text-center">
                        <h5 className="font-weight-bold pt-1">{lists.name}</h5>
                    </div>
                    <div className="col-xs-6 pl-3">
                        <button type="button" className="btn btn-link btn-lg">
                            <BsHeart style={{color: 'red'}}/>
                        </button>
                        <button type="button" className="ml-1 btn btn-link border-primary">
                            스크랩
                        </button>
                    </div>
                    <div className="mt-2">
                        <div className="border-bottom pb-2">
                            <img onClick={() => window.open(`${lists.image.image_path}`)} //확대
                                 src={lists.image_name} alt="event-image" className="img-fluid"/>
                            <div className="d-flex justify-content-between">
                                <MinDiv>*사진 클릭 시 확대</MinDiv>
                                <MinDiv>1/2</MinDiv>
                            </div>
                        </div>
                        {/* 이벤트 */}
                        <div className="mt-2 border-bottom pb-3">
                            <div
                                className="border-bottom border-dark pl-3 font-weight-bold"
                                style={{fontSize: '1.2rem'}}
                            >
                                이벤트
                            </div>
                            <div className="d-flex pt-2 border-bottom border-dark">
                                <div className="col-3 font-weight-bold">기간</div>
                                <MidDiv className="col-9 text-center">
                                    {lists.start_datetime} ~ {lists.end_datetime}
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
                                가게 {lists.shop_id}
                            </div>
                            {/*<div className="border-bottom border-dark pl-3 font-weight-bold">
                                {lists.shop.name}
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
                            </div>*/}
                        </div>
                    </div>
                </>


    )
};

export default EventDetail;
