import React, { useState } from 'react';
import Header from '../component/Header';
import styled from 'styled-components';
import { BsHeart } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';
import { Container } from 'react-bootstrap';
import logo from '../static/image/chicken.jpg';
import KakaoMap from "./KakaoMap"
import EventDetail from "../component/EventDetail";

const MinDiv = styled.div`
  font-size: 0.5rem;
`;

const MidDiv = styled.div`
  font-size: 0.7rem;
`;

const DetailEvent = ({history, match}) => {

  const [markerPositions, setMarkerPositions] = useState([[37.50802, 127.062835]]);
  const [mapSize, setMapSize] = useState([100, 400]);

  let eventName = '맥도날드 야탑점';

  return (
    <>
      <Header />
      <Container className="mt-3">
        <div className="row">
          <div className="col-xs-2 pl-3 text-center">
            <button onClick = {() => history.goBack()} type="button" className="btn btn-link border-dark">
              <BsChevronLeft className="text-dark" />
            </button>
          </div>
        </div>
        {/* 이미지 시작 */}
        <EventDetail params={match.params.id}/>
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
      </Container>
    </>
  );
};

export default DetailEvent;
