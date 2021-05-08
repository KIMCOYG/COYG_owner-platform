import React from 'react';
import styled from 'styled-components';
import {AiFillHeart} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import logo from '../static/image/chicken.jpg';

const MinDiv = styled.div`
  font-size: 0.5rem;
`;

const EventListItemScrap = ({lists}) => {
    return (
        <>
            <Link to="/event/detail">
                <Container fluid>
                    <div className="border-bottom">
                        <div className="row">
                            <ul>
                                {lists.map(e => (
                                    <div>
                                        <div className="col-4">
                                            <img
                                                src={logo}
                                                alt=""
                                                style={{width: '100%', heigh: '100%'}}
                                            />
                                        </div>
                                        <div className="col-8">
                                            <div className="font-weight-bold">
                                                <h5>{e.title}<Link to="/delete">x</Link></h5>

                                            </div>
                                            <div className="d-flex">
                                                <div className="d-flex flex-column mr-5">
                                                    <MinDiv>{e.shopName}</MinDiv>
                                                    <MinDiv>{e.startTerm} ~ {e.endTerm}</MinDiv>
                                                    <MinDiv>{e.enteredDate}</MinDiv>
                                                </div>
                                                <div className="d-flex flex-column justify-content-end">
                                                    <div className="d-flex">
                                                        <AiFillHeart className="text-danger mr-1"/>
                                                        <MinDiv>256</MinDiv>
                                                    </div>
                                                    <MinDiv>150m</MinDiv>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                )}

                            </ul>
                        </div>
                    </div>
                </Container>
            </Link>
        </>
    );
};

export default EventListItemScrap;
