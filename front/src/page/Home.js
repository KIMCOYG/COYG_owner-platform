import React from 'react';
import {Container, Button} from 'react-bootstrap';
import Header from '../component/Header';
// import Slider from '../component/Slider';

const Home = () => {
    let address = "경기도 파주시 조리읍"

    return (
        <>
            <Header />
            <Container>
                <Button variant="light" className="border border-dark mt-3" block>{address}</Button>
                {/* <Slider className="mt-3"/> */}
            </Container>
        </>
    );
}

export default Home;