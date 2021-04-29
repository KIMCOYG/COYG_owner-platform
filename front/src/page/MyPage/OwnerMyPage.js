import React from 'react';
import { Container } from 'react-bootstrap';
import { BsChevronLeft } from 'react-icons/bs';
import Header from '../../component/Header';
import myInfoIcon from '../../static/image/laptop.jpg';
import scrapIcon from '../../static/image/vegetables.jpg';

const OwnerMyPage = () => {
  let customerName = '심선보';
  return (
    <>
      <Header />
      <Container className="mt-3">
        <div className="row">
          <div className="col-xs-2 pl-3 text-center">
            <button onClick={() => window.history.back()}>
              <BsChevronLeft className="text-dark" />
            </button>
          </div>
          <h5 className="ml-4 pt-1 font-weight-bold">{`${customerName}님 환영합니다.`}</h5>
        </div>
        <div className="row mt-5">
          <div className="col-6">
            <div className="d-flex flex-column">
              <button type="button" className="btn btn-link">
                <a href="/owner/mypage/userinfo">
                  <img
                    src={myInfoIcon}
                    className="rounded"
                    alt=""
                    style={{ width: '100%', height: '100%' }}
                  />
                </a>
              </button>
              <div className="text-center">내 정보 수정</div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-column">
              <button type="button" className="btn btn-link">
                <a href="/owner/mypage/eventlist">
                  <img
                    src={scrapIcon}
                    className="rounded"
                    alt=""
                    style={{ width: '100%', height: '100%' }}
                  />
                </a>
              </button>
              <div className="text-center">이벤트관리</div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
        <div className="col-6">
            <div className="d-flex flex-column">
              <button type="button" className="btn btn-link">
                <a href="/owner/mypage/manageshop">
                  <img
                    src={scrapIcon}
                    className="rounded"
                    alt=""
                    style={{ width: '100%', height: '100%' }}
                  />
                </a>
              </button>
              <div className="text-center">가게관리</div>
            </div>
          </div>
        </div>
        
      </Container>
    </>
  );
};

export default OwnerMyPage;
