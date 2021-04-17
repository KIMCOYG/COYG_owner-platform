import React, { useEffect } from 'react'
const {kakao} = window;


const MapContainer = () => {
    useEffect(() => {
        
        // const script = document.createElement("script");
        // script.async = true;
        // script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=cae618549e6e2a83d5a1f0ff0b8c6c17'
        // document.head.appendChild(script);


    
        const container = document.getElementById("map");
        let options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };
        kakao.maps.load(() => {
            const map = new window.kakao.maps.Map(container, options);
        })
        
    })
    return (
        <div id='map' style={{
            width: '500px', 
            height: '500px'
        }}></div>
    );
}

export default MapContainer