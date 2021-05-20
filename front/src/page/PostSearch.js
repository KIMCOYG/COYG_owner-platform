import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { Button } from 'react-bootstrap';
import DaumPostcode from 'react-daum-postcode';
import Header from '../component/Header';
import Geocode from 'react-geocode';

Geocode.setApiKey('AIzaSyCNDPEwEVKChg2oF0Yzb7ttIBmiM-pl-NQ');
Geocode.setLanguage('ko');
Geocode.enableDebug();

const postCodeStyle = {
  display: 'block',
  position: 'absolute',
  //   top: '50%',
  width: '100%',
  height: '100%',
  padding: '7px',
};

const PostSearch = ({ history }) => {
  const goBack = () => {
    history.goBack();
  };
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

  const getAddressFromLatLng = (lat, lon) => {
    Geocode.fromLatLng(lat, lon).then(
      (response) => {
        const address = response.results[0].formatted_address;
        window.alert(address + '\n로 설정되었습니다.');
        return address;
      },
      (error) => {
        console.log(error);
      },
    );
  };

  return (
    <>
      <Header />
      <div className="mt-4">
        <div className="row">
          <div className="col-2 pl-3 text-center">
            <button
              type="button"
              className="btn btn-link border-dark"
              onClick={goBack}
            >
              <BsChevronLeft className="text-dark" />
            </button>
          </div>
          <div className="col-9 text-center">
            <Button
              data-toggle="modal"
              data-target="#PostModal"
              onClick={() => {
                navigator.geolocation.getCurrentPosition(function (pos) {
                  var lat = pos.coords.latitude;
                  var lon = pos.coords.longitude;
                  getAddressFromLatLng(lat, lon);
                });
              }}
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
