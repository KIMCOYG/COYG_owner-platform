import React from 'react';
// import styled from 'styled-components';
import { useHistory} from 'react-router-dom';

// const ImgBtn = styled.div`
//     background-image : url(${props => props.url});
//     background-position: "center";
//     background-size: co
// `;

const CategoryButton = ({ name, image }) => {
  let history = useHistory();
  return (
    <>
      <div className="container">
        <div className="row">
          {/* <Link to="/event"> */}
            <button type="button" className="btn btn-link" onClick = {() => history.push("/event")}>
              <img
                src={image}
                alt=""
                className="rounded"
                style={{ width: '100%', height: '100%' }}
              />
            </button>
          {/* </Link> */}
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
};

export default CategoryButton;
