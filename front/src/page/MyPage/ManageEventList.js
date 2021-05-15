import React from 'react';
import {Container, Row} from 'react-bootstrap';
import {BsChevronLeft} from 'react-icons/bs';

import Header from '../../component/HeaderOwner';
import ListPagination from '../../component/ListPagination';
import SecondHeader from '../../component/SecondHeader';
import PostListContainer from "../../container/PostListContainer";



const ManageEventList = ({history}) => {
    return (
        <>
            <Header/>
            <Container className="mt-3">
                <Row className="col-xs-2 pl-3 text-center">
                    <button onClick={() => history.goBack()} type="button" className="btn btn-link border-dark">
                        <BsChevronLeft className="text-dark" />
                    </button>
                    <SecondHeader title="이벤트 관리" link="/mobile/owner/event/regist" buttonName="추가"/>
                </Row>
                <div className="row">
                    <div className="row mt-3">
                        <PostListContainer/>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <ListPagination/>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ManageEventList