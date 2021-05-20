import React from 'react';
import { BiMap } from 'react-icons/bi';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Slider from '../component/Slider';
import CategoryButton from '../component/CategoryButton';
import Header from "../component/HeaderCustomer";

const Home = () => {
  let address = '경기도 파주시 조리읍';
  let history = useHistory();

  return (
    <>
      <Header />
      <Container>
        {/* <Link to="/post"> */}
        <Button
          variant="light"
          className="border border-dark mt-3"
          block
          onClick={() => history.push('/post')}
        >
          <BiMap className="mr-3" />
          {address}
        </Button>
        {/* </Link> */}
        <Slider />
        {/* <CategoryButton className="col-1"/> */}

        <div className="mt-3">
          <div className="d-flex mt-2">
            <CategoryButton cId={1} name="좋아요" className="mr-3" />
            <CategoryButton cId={2} name="가전제품" />
            <CategoryButton cId={3} name="도시락" />
            <CategoryButton cId={4} name="디저트" />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton cId={5} name="마트" className="mr-3" />
            <CategoryButton cId={6} name="분식" />
            <CategoryButton cId={7} name="스포츠" />
            <CategoryButton cId={8} name="아시안" />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton cId={9} name="양식" className="mr-3" />
            <CategoryButton cId={10} name="의류" />
            <CategoryButton cId={11} name="일식" />
            <CategoryButton cId={12} name="주류" />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton cId={13} name="치킨" className="mr-3" />
            <CategoryButton cId={14} name="피자" />
            <CategoryButton cId={15} name="휴대폰" />
            <CategoryButton cId={16} name="햄버거" />
          </div>
        </div>
            </Container>
        </>
    );
};

export default Home;
