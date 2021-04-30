import React from 'react';
import {Container, Row} from 'react-bootstrap';
import { BsChevronLeft } from 'react-icons/bs';
import EventListItem from '../../component/EventListItemScrap';
import Header from '../../component/Header';
import ListPagination from '../../component/ListPagination';

const SecondHeader = ({props}) => {
  return (
      <Row>
        <button onClick={() => window.history.back()}>
          <BsChevronLeft className="text-dark"/>
        </button>
        {/* <Button>등록</Button> */}
        <h4>스크랩</h4>
      </Row>
  )
}


const CustomerScrap = () => {
  let listName = '생활용품';

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
            <h5 className="font-weight-bold">{listName}</h5>
          </div>
          <div className="col-xs-6 pl-4 pt-1">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                등록순
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                마감기한
              </label>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <EventListItem />
          <EventListItem />
          <EventListItem />
          <EventListItem />
          <EventListItem />
          <EventListItem />
          <EventListItem />
          <EventListItem />
          <EventListItem />
          <EventListItem />
        </div>
        <div className="d-flex justify-content-center mt-3">
          <ListPagination />
        </div>
      </Container>
    </>
  );
};

export default CustomerScrap;
