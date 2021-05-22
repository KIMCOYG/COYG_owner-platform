import React, { useState } from 'react';
import Header from '../component/Header';
import styled from 'styled-components';
import { BsHeart } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';
import { Container } from 'react-bootstrap';
import logo from '../static/image/chicken.jpg';
import KakaoMap from './KakaoMap';

const MinDiv = styled.div`
  font-size: 0.5rem;
`;

const MidDiv = styled.div`
  font-size: 0.7rem;
`;

const DetailEvent = ({ history }) => {
  const [markerPositions, ] = useState([
    [37.50802, 127.062835],
  ]);
  const [mapSize, ] = useState([100, 400]);

  let eventName = '맥도날드 야탑점';

  return (
    <>
      <Header />
      <Container className="mt-3">
        <div className="row">
          <div className="col-xs-2 pl-3 text-center">
            <button
              onClick={() => history.goBack()}
              type="button"
              className="btn btn-link border-dark"
            >
              <BsChevronLeft className="text-dark" />
            </button>
          </div>
          <div className="col-xs-4 pl-3 pt-1 text-center">
            <h5 className="font-weight-bold pt-1">{eventName}</h5>
          </div>
          <div className="col-xs-6 pl-3">
            <button type="button" className="btn btn-link btn-lg">
              <BsHeart style={{ color: 'red' }} />
            </button>
            <button type="button" className="ml-1 btn btn-link border-primary">
              스크랩
            </button>
          </div>
        </div>
        {/* 이미지 시작 */}
        <div className="mt-2">
          <div className="border-bottom pb-2">
            <img
              onClick={() => window.open(logo)}
              src={logo}
              alt="event"
              className="img-fluid"
            />
            <div className="d-flex justify-content-between">
              <MinDiv>*사진 클릭 시 확대</MinDiv>
              <MinDiv>1/2</MinDiv>
            </div>
          </div>
          {/* 이벤트 */}
          <div className="mt-2 border-bottom pb-3">
            <div
              className="border-bottom border-dark pl-3 font-weight-bold"
              style={{ fontSize: '1.2rem' }}
            >
              Event
            </div>
            <div className="d-flex pt-2 border-bottom border-dark">
              <div className="col-3 font-weight-bold">기간</div>
              <MidDiv className="col-9 text-center">
                2021/02/01 ~ 2021/04/30
              </MidDiv>
            </div>
            <div className="border-bottom border-dark pl-3">
              <div className="font-weight-bold">상세</div>
              <MidDiv className="mt-1">
                봄맞이 런치 이벤트 입니다. <br />
                이벤트는 봄 한정 이벤트로 진행되며 30%의 할인율을 제공합니다.
              </MidDiv>
            </div>
          </div>
          {/* 가게 정보 */}
          <div className="mt-2 border-bottom pb-3">
            <div
              className="border-bottom border-dark pl-3 font-weight-bold"
              style={{ fontSize: '1.2rem' }}
            >
              SHOP
            </div>
            <div className="border-bottom border-dark pl-3 font-weight-bold">
              맥도날드 야탑점
            </div>
            <div className="d-flex pt-2 border-bottom border-dark">
              <div className="col-3 font-weight-bold">운영시간</div>
              <MidDiv className="col-9 text-center">10:30 ~ 19:00</MidDiv>
            </div>
            <div className="d-flex pt-2 border-bottom border-dark">
              <div className="col-3 font-weight-bold">휴무일</div>
              <MidDiv className="col-9 text-center">연중무휴</MidDiv>
            </div>
            <div className="d-flex pt-2 border-bottom border-dark">
              <div className="col-3 font-weight-bold">TEL</div>
              <MidDiv className="col-9 text-center">02-333-4323</MidDiv>
            </div>
            <div className="border-bottom border-dark pl-3">
              <div className="font-weight-bold">주소</div>
              <div className="mt-1">
                <MidDiv>서울특별시 관악구 봉천동 942-1</MidDiv>
                <MidDiv>1층 406호</MidDiv>
              </div>
            </div>
            <div className="border-bottom border-dark pl-3">
              <div className="font-weight-bold">상세 설명</div>
              <MidDiv>찾아오시는 길은 봉천역 8번출구 앞입니다.</MidDiv>
            </div>
          </div>
          {/* 지도 */}
          <div className="mt-2 border-bottom pb-3 mb-5">
            <div
              className="border-bottom border-dark pl-3 font-weight-bold"
              style={{ fontSize: '1.2rem' }}
            >
              MAP
            </div>
            <KakaoMap markerPositions={markerPositions} size={mapSize} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default DetailEvent;
