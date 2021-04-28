import React from 'react';
import Header from '../component/Header';
import styled from 'styled-components';
import { BsHeart } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';
import { Container } from 'react-bootstrap';
import logo from '../static/image/chicken.jpg';

const MinDiv = styled.div`
  font-size: 0.5rem;
`;

const DetailEvent = () => {
  let eventName = '맥도날드 야탑점';

  return (
    <>
      <Header />
      <Container className="mt-3">
        <div className="row">
          <div className="col-xs-2 pl-3 text-center">
            <button type="button" className="btn btn-link border-dark">
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
        <div className="mt-2">
          <div>
            <img src={logo} alt="event-image" className="img-fluid" />
            <div className="d-flex justify-content-between">
              <MinDiv>*사진 클릭 시 확대</MinDiv>
              <MinDiv>1/2</MinDiv>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DetailEvent;
