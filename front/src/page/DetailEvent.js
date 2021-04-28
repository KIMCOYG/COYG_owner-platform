import React from 'react';
import Header from '../component/Header';
import { BsChevronLeft } from 'react-icons/bs';
import { Container } from 'react-bootstrap';

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
          <div className="col-xs-4 pl-3 pt-1">
            <h5 className="font-weight-bold">{eventName}</h5>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DetailEvent;
