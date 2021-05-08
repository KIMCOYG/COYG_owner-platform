import React, {useEffect} from 'react'

/*global kakao*/

const {kakao} = window;


const MapContainer = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src =
            "//dapi.kakao.com/v2/maps/sdk.js?appkey=cae618549e6e2a83d5a1f0ff0b8c6c17&libraries=LIBRARY";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let container = document.getElementById("map");
                let options = {
                    center: new kakao.maps.LatLng(37.506502, 127.053617),
                    level: 7
                };

                const map = new window.kakao.maps.Map(container, options);

            });
        };
    });


    return (

            <div id="map" style={{width: '100em', height: '100em'}}>
            </div>

    )

}


export default MapContainer