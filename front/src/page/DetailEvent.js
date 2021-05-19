import React, { useState } from 'react';
import Header from '../component/Header';
import { BsChevronLeft } from 'react-icons/bs';
import { Container } from 'react-bootstrap';
import KakaoMap from "./KakaoMap"
import {useHistory} from "react-router-dom";
import EventDetailContainer from "../container/EventDetailContainer";

const DetailEvent = (match) => {
  let history = useHistory();

  const [markerPositions, setMarkerPositions] = useState([[37.50802, 127.062835]]);
  const [mapSize, setMapSize] = useState([100, 400]);


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
        <EventDetailContainer params={match.params.id}/>
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
