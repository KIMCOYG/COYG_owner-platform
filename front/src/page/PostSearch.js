import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import Header from '../component/Header';

const postCodeStyle = {
  display: 'block',
  position: 'absolute',
  //   top: '50%',
  width: '400px',
  height: '500px',
  padding: '7px',
};

const PostSearch = () => {
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
      <div className="mt-2">
        <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
      </div>
    </>
  );
};

export default PostSearch;
