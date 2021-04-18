import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Header from '../component/Header';
// import Slider from '../component/Slider';
import CategoryButton from '../component/CategoryButton';

const Home = () => {
  let address = '경기도 파주시 조리읍';

  return (
    <>
      <Header />
      <Container>
        <Button variant="light" className="border border-dark mt-3" block>
          {address}
        </Button>
        {/* <Slider className="mt-3"/> */}
        {/* <CategoryButton className="col-1"/> */}
        <div className="mt-5">
          <div className="d-flex mt-2">
            <CategoryButton className="mr-3" />
            <CategoryButton />
            <CategoryButton />
            <CategoryButton />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton className="mr-3" />
            <CategoryButton />
            <CategoryButton />
            <CategoryButton />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton className="mr-3" />
            <CategoryButton />
            <CategoryButton />
            <CategoryButton />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton className="mr-3" />
            <CategoryButton />
            <CategoryButton />
            <CategoryButton />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
