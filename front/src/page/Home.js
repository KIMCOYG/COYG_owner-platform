import { React, useEffect, useState } from 'react';
import { BiMap } from 'react-icons/bi';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../component/Header';
import Slider from '../component/Slider';
import CategoryButton from '../component/CategoryButton';
import axios from 'axios';
import { ExpressionService } from 'ag-grid-community';
// import textFit from "textfit";

const Home = () => {
  let address = window.localStorage.getItem('addr');
  let history = useHistory();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const result = await axios('http://localhost:5000/category/read-all');
        await setCategory(result.data);
        console.log(category);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategory();

  }, [category]);//warning 떠서 임의로 수정
  // textFit(document.getElementsByClassName("addr"), {multiLine: true});

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
          <div style = {{ width:"100%",
              height : "20px",
              textOverflow:"ellipsis",
              overflow:"hidden", // 글자 넘치는 것을 자름
              whiteSpace:"nowrap"}}> 
          <BiMap className="mr-3" />
          {address}</div>
        </Button>
        {/* </Link> */}
        <Slider />
        {/* <CategoryButton className="col-1"/> */}
        <div className="mt-3 mb-3">
          <div className="d-flex mt-2">
            <CategoryButton
              image={'uploads/like1621529554334.png'}
              name="좋아요"
              className="col-xs-4"
            />

            <CategoryButton
              image={'uploads/electronic1621529546700.png'}
              name="가전제품"
              className="col-xs-4"
            />

            <CategoryButton
              image={'uploads/dosirac1621529538417.png'}
              name="도시락"
              className="col-xs-4"
            />

            <CategoryButton
              image={'uploads/desert1621529530613.png'}
              name="디저트"
              className="col-xs-4"
            />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton
              image={'uploads/mart1621529558596.png'}
              name="마트"
              className="mr-3"
            />
            <CategoryButton
              image={'uploads/bunsic1621529513166.png'}
              name="분식"
            />
            <CategoryButton
              image={'uploads/sports1621529570250.png'}
              name="스포츠"
            />
            <CategoryButton
              image={'uploads/asian1621529509447.png'}
              name="아시안"
            />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton
              image={'uploads/yangsic1621529578325.png'}
              name="양식"
              className="mr-3"
            />
            <CategoryButton
              image={'uploads/wear1621529574142.png'}
              name="의류"
            />
            <CategoryButton
              image={'uploads/japan1621529550796.png'}
              name="일식"
            />
            <CategoryButton
              image={'uploads/drink1621529542800.png'}
              name="주류"
            />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton
              image={'uploads/chicken1621529353710.jpg'}
              name="치킨"
              className="mr-3"
            />
            <CategoryButton
              image={'uploads/pizza1621529419795.jpg'}
              name="피자"
            />
            <CategoryButton
              image={'uploads/phone1621529562260.png'}
              name="휴대폰"
            />
            <CategoryButton
              image={'uploads/hamburger1621529374043.jpg'}
              name="햄버거"
            />
          </div>
        </div>
        <footer></footer>
      </Container>
    </>
  );
};

export default Home;
