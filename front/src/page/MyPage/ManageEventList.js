import React from 'react';
import { Container, Row } from 'react-bootstrap';
// import {BsChevronLeft} from 'react-icons/bs';
// import {Link} from 'react-router-dom';

import Header from '../../component/HeaderOwner';
import ListPagination from '../../component/ListPagination';
import EventListItem from '../../component/OwnerEventListItem';
import SecondHeader from '../../component/SecondHeader';

/*const SecondHeader = ({props}) => {
    return (
        <Row>
            <button onClick={() => window.history.back()}>
                <BsChevronLeft className="text-dark"/>
            </button>
            {/!* <Button>등록</Button> *!/}

            <h4>이벤트 관리</h4>
            <Link to="/mobile/owner/event/regist">
                <Button>추가</Button>
            </Link>

        </Row>
    )
}*/

const ManageEventList = ({ history }) => {
  //   let listName = '치킨';
  return (
    <>
      <Header />
      <Container className="mt-3">
        <Row className="col-xs-2 pl-3 text-center">
          <SecondHeader
            title="이벤트 관리"
            buttonName="추가"
            link="/mobile/owner/event/regist"
          />
        </Row>
        <div className="row">
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

export default ManageEventList;
