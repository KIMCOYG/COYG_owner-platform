import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../static/image/chicken.jpg'; //절대 경로로 받아와야함

// const ImgBtn = styled.div`
//     background-image : url(${props => props.url});
//     background-position: "center";
//     background-size: co
// `;

const CategoryButton = ({ name, image }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Link to="/event">
            <button type="button" className="btn btn-link">
              <img
                src={logo}
                alt=""
                className="rounded"
                style={{ width: '100%', height: '100%' }}
              />
            </button>
          </Link>
        </div>
        <div className="row justify-content-center">
          <span className="text-center">{name}</span>
        </div>
      </div>
    </>
  );
};

CategoryButton.defaultProps = {
  name: '카테고리',
  image: 'chicken',
};

export default CategoryButton;
