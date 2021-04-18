import React from 'react';
// import styled from 'styled-components';
import logo from '../static/image/chicken.jpg'; //절대 경로로 받아와야함

// const ImgBtn = styled.div`
//     background-image : url(${props => props.url});
//     background-position: "center";
//     background-size: co
// `;




const CategoryButton = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <button type="button" className="btn btn-link" size="sm">
                        <img src={logo} alt="" className="rounded" style={{width:"100%", height: "100%"}}/>
                    </button>
                </div>
                <div className="row justify-content-center">
                    <span className="text-center">생활 용품</span>
                </div>
            </div>
        </>
    );
}

export default CategoryButton;