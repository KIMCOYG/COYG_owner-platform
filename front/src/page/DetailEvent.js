import React, {useState} from 'react';
import Header from '../component/Header';
import {BsChevronLeft, BsHeart} from 'react-icons/bs';
import {Container} from 'react-bootstrap';
import KakaoMap from "./KakaoMap"
import {useHistory} from "react-router-dom";
import EventDetailContainer from "../container/EventDetailContainer";

const DetailEvent = ({match, location}) => {
    console.log("match", match)

    let history = useHistory();
    const eName = location.state.eName;
    const [markerPositions, setMarkerPositions] = useState([[37.50802, 127.062835]]);
    const [mapSize, setMapSize] = useState([100, 400]);
    const {id} = match.params; // URL 파라미터 조회하기

    return (
        <>
            <Header/>
            <Container className="mt-3">
                <div className="row">
                    <div className="col-xs-2 pl-3 text-center">
                        <button onClick={() => history.goBack()} type="button" className="col btn btn-link border-dark">
                            <BsChevronLeft className="text-dark"/>
                        </button>
                        <h5 className="col-xs-4 pl-3 pt-1 font-weight-bold">{eName}</h5>
                        <button type="button" className="col-xs-6 pl-4 pt-1 btn btn-link btn-lg">
                            <BsHeart style={{color: 'red'}}/>
                        </button>

                    </div>
                </div>
                {/* 이미지 시작 */}
                <EventDetailContainer eId={parseInt(id, 10)}/>
                {/* 지도 */}
                <div className="mt-2 border-bottom pb-3 mb-5">
                    <div
                        className="border-bottom border-dark pl-3 font-weight-bold"
                        style={{fontSize: '1.2rem'}}
                    >
                        MAP
                    </div>
                    <KakaoMap markerPositions={markerPositions} size={mapSize}/>
                </div>
            </Container>
        </>
    );
};

export default DetailEvent;
