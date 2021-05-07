import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { Button, Container } from 'react-bootstrap';
import DaumPostcode from 'react-daum-postcode';
import Header from '../component/Header';

const postCodeStyle = {
  display: 'block',
  position: 'absolute',
  //   top: '50%',
  width: '100%',
  height: '100%',
  padding: '7px',
};

const PostSearch = ({history}) => {
  const goBack = () => {
    history.goBack();
  }
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  return (
    <>
      <Header />
      <div className="mt-4">
        <div className="row">
          <div className="col-2 pl-3 text-center">
            <button type="button" className="btn btn-link border-dark" onClick={goBack}>
              <BsChevronLeft className="text-dark" />
            </button>
          </div>
          <div className="col-9 text-center">
            <Button
              variant="light"
              className="border border-dark w-100"
              style={{ width: '100%' }}
              block
            >
              <BiMap className="mr-3" />
              현재 위치
            </Button>
          </div>
        </div>
        <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
      </div>
    </>
  );
};

export default PostSearch;
