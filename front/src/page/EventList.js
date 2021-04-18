import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { BsChevronLeft } from 'react-icons/bs';
import Header from '../component/Header';
import EventListItem from '../component/EventListItem';
import ListPagination from '../component/ListPagination';

const EventList = () => {
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
                좋아요
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
                신규
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
                거리
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

export default EventList;
