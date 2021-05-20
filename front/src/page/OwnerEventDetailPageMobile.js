import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsChevronLeft } from 'react-icons/bs';
import Header from '../component/HeaderOwner';
import '../static/css/OwnerEventDetailPageMobile.css';
import SecondHeader from '../component/SecondHeader';
import KakaoMap from './KakaoMap';
import EventDetailContainer from '../container/EventDetailContainer';
import { useHistory } from 'react-router-dom';

/*const SecondHeader = ({props}) => {
    return (
        <Row>
            <Col xs={1}>
                <button onClick={() => window.history.back()}>
                    <BsChevronLeft className="text-dark"/>
                </button>
            </Col>
            {/!* <Button>등록</Button> *!/}
            <Col xs={8}>
                <h4 style={{fontSize: '20px'}}>점심 할인 특가 이벤트</h4>
            </Col>
            <Col xs={3}>
                <Link to="/mobile/owner/event/modify"><Button style={{fontSize: '6px', blockSize: '5em'}}>수정</Button></Link>
            </Col>

            {/!* <Button onClick={() => this.handleSubmit()}></Button> *!/}
        </Row>
    )
}*/

const OwnerEventDetailPageMobile = ({ match }) => {
  let history = useHistory();

  const [markerPositions, setMarkerPositions] = useState([
    [37.50802, 127.062835],
  ]);
  const [mapSize, setMapSize] = useState([100, 400]);
  const { id } = match.params; // URL 파라미터 조회하기
  console.log('match.params', id);

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
        </div>
        {/* 이미지 시작 */}
        <EventDetailContainer eId={parseInt(id, 10)} />
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

export default OwnerEventDetailPageMobile;
