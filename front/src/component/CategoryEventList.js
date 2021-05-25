import logo from '../static/image/chicken.jpg';
import { AiFillHeart } from 'react-icons/ai';
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import logo1 from '../static/image/upload/버거킹1621554310515.jpg'
import logo2 from '../static/image/upload/버거헌터 더위사냥.jpg'
import logo3 from '../static/image/upload/노브랜드버거이벤트.jpg'
import logo4 from '../static/image/upload/네파X버거보이.jpg'
import logo5 from '../static/image/upload/30주년 한정메뉴.jpg'
import logo6 from '../static/image/upload/굿바이보스버거.jpg'
import logo7 from '../static/image/upload/싸이버거 배달주문.jpg'
import logo8 from '../static/image/upload/와퍼주니어1900원.jpg'


const MinDiv = styled.div`
  font-size: 0.5rem;
`;

const CategoryEventList = ({ lists }) => {
  let history = useHistory();
  return (
    <>
      {lists.map((e) => (
        <div
          key={e.event_id}
          className="d-flex"
          onClick={() =>
            history.push({
              pathname: `/event/detail/${e.event_id}`,
              state: { eName: e.name },
            })
          }
        >
          <div className="col-4">
            <img src={logo} alt="" style={{ width: '100%', heigh: '100%' }} />
          </div>
          <div className="col-8">
            <div className="font-weight-bold">
              <h5>{e.name}</h5>
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column mr-5">
                {/*<MinDiv>{e.shop.name}</MinDiv>*/}
                <MinDiv>
                  {e.start_datetime.toString().split(/T/)[0]} ~{' '}
                  {e.end_datetime.toString().split(/T/)[0]}
                </MinDiv>
                <MinDiv>{e.created_datetime.toString().split(/T/)[0]}</MinDiv>
              </div>
              <div className="d-flex flex-column justify-content-end">
                <div className="d-flex">
                  <AiFillHeart className="text-danger mr-1" />
                  <MinDiv>{e.likes_count}</MinDiv>
                </div>
                {/*거리계산*/}
                <MinDiv>150m</MinDiv>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryEventList;
