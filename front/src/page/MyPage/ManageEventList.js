import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { BsChevronLeft } from 'react-icons/bs';
import EventListItem from '../../component/EventListItem';
import Header from '../../component/HeaderOwner';
import ListPagination from '../../component/ListPagination';

const SecondHeader = ({props}) => {
    return(
        <Row>
            <Button onClick={() => window.history.back()}>◁</Button>
            {/* <Button>등록</Button> */}
            
            <h5>가게 관리</h5>
            <Button >추가</Button>
        </Row>
    )
}

const ManageEventList = () => {
  let listName = '생활용품';
  return (
    <>
      <Header />
      <SecondHeader/>
      <Container className="mt-3">
        <div className="row">
          <div className="col-xs-2 pl-3 text-center">
            <button type="button" className="btn btn-link border-dark">
              <BsChevronLeft className="text-dark" />
            </button>
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
        </div>
      </Container>
    </>
  );
};

export default ManageEventList