import { React } from 'react';
import { BiMap } from 'react-icons/bi';
import { Container, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Header from '../component/Header';
import Slider from '../component/Slider';
import CategoryButton from '../component/CategoryButton';

const Home = () => {
  let address = "DB에 저장된 유저 위치정보";
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
            <CategoryButton name="좋아요" className="mr-3" />
            <CategoryButton name="가전제품" />
            <CategoryButton name="도시락" />
            <CategoryButton name="디저트" />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton name="마트" className="mr-3" />
            <CategoryButton name="분식" />
            <CategoryButton name="스포츠" />
            <CategoryButton name="아시안" />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton name="양식" className="mr-3" />
            <CategoryButton name="의류" />
            <CategoryButton name="일식" />
            <CategoryButton name="주류" />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton name="치킨" className="mr-3" />
            <CategoryButton name="피자" />
            <CategoryButton name="휴대폰" />
            <CategoryButton name="햄버거" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
