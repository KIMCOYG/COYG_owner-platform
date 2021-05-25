import { React, useEffect, useState, useCallback } from 'react';
import { BiMap } from 'react-icons/bi';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../component/Header';
import Slider from '../component/Slider';
import CategoryButton from '../component/CategoryButton';
import axios from 'axios';

import like from '../static/image/upload/like1621529554334.png'
import elec from '../static/image/upload/electronic1621529546700.png'
import dosirac from '../static/image/upload/dosirac1621529538417.png'
import desert from '../static/image/upload/desert1621529530613.png'

import mart from '../static/image/upload/mart1621529558596.png'
import bunsic from '../static/image/upload/bunsic1621529513166.png'
import sports from '../static/image/upload/sports1621529570250.png'
import asian from '../static/image/upload/asian1621529509447.png'

import yangsic from '../static/image/upload/yangsic1621529578325.png'
import wear from '../static/image/upload/wear1621529574142.png'
import japan from '../static/image/upload/japan1621529550796.png'
import drink from '../static/image/upload/drink1621529542800.png'

import chicken from '../static/image/upload/chicken1621529524444.png'
import pizza from '../static/image/upload/pizza1621529566724.png'
import phone from '../static/image/upload/phone1621529562260.png'
import hamburger from '../static/image/upload/hamburger1621529374043.jpg'






const Home = () => {
<<<<<<< HEAD
  let address = '경기도 용인시 처인구 모현읍 외대로 81';
=======
  let address = window.localStorage.getItem('addr');
>>>>>>> d3a12a0c2f8369fa7d0b55b21cb591f6f1adb094
  let history = useHistory();
  const [category, setCategory] = useState([]);

  const fetchCategory = useCallback(async () => {
    try {
      const result = await axios.get('http://localhost:5000/category/read-all');
      setCategory(result.data);
      console.log(category);
    } catch (err) {
      console.log(err);
    }
  }, [category]);

  useEffect(() => {
    fetchCategory();
    return () => {
      console.log('dsf');
    };
  }, []); //warning 떠서 임의로 수정
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
          <div
            style={{
              width: '100%',
              height: '20px',
              textOverflow: 'ellipsis',
              overflow: 'hidden', // 글자 넘치는 것을 자름
              whiteSpace: 'nowrap',
            }}
          >
            <BiMap className="mr-3" />
            {address}
          </div>
        </Button>
        {/* </Link> */}
        <Slider />
        {/* <CategoryButton className="col-1"/> */}
        <div className="mt-3 mb-3">
          <div className="d-flex mt-2">
<<<<<<< HEAD
            <CategoryButton cId={1}
              image={like}
=======
            <CategoryButton
              image={'uploads/like1621529554334.png'}
>>>>>>> d3a12a0c2f8369fa7d0b55b21cb591f6f1adb094
              name="좋아요"
              className="col-xs-4"
              cId={2}
            />
<<<<<<< HEAD
            <CategoryButton cId={2}
              image={elec}
=======

            <CategoryButton
              image={'uploads/electronic1621529546700.png'}
>>>>>>> d3a12a0c2f8369fa7d0b55b21cb591f6f1adb094
              name="가전제품"
              className="col-xs-4"
              cId={3}
            />
<<<<<<< HEAD
            <CategoryButton cId={3}
              image={dosirac}
=======

            <CategoryButton
              image={'uploads/dosirac1621529538417.png'}
>>>>>>> d3a12a0c2f8369fa7d0b55b21cb591f6f1adb094
              name="도시락"
              className="col-xs-4"
              cId={4}
            />
<<<<<<< HEAD
            <CategoryButton cId={4}
              image={desert}
=======

            <CategoryButton
              image={'uploads/desert1621529530613.png'}
>>>>>>> d3a12a0c2f8369fa7d0b55b21cb591f6f1adb094
              name="디저트"
              className="col-xs-4"
              cId={5}
            />
          </div>
          <div className="d-flex mt-2">
<<<<<<< HEAD
            <CategoryButton cId={5}
              image={mart}
=======
            <CategoryButton
              image={'uploads/mart1621529558596.png'}
>>>>>>> d3a12a0c2f8369fa7d0b55b21cb591f6f1adb094
              name="마트"
              className="mr-3"
              cId={6}
            />
            <CategoryButton
              image={'uploads/bunsic1621529513166.png'}
              name="분식"
            />
<<<<<<< HEAD
            <CategoryButton cId={6} image={bunsic} name="분식" />
            <CategoryButton cId={7}
              image={sports}
=======
            <CategoryButton
              image={'uploads/sports1621529570250.png'}
>>>>>>> d3a12a0c2f8369fa7d0b55b21cb591f6f1adb094
              name="스포츠"
              cId={7}
            />
<<<<<<< HEAD
            <CategoryButton cId={8}
              image={asian}
=======
            <CategoryButton
              image={'uploads/asian1621529509447.png'}
>>>>>>> d3a12a0c2f8369fa7d0b55b21cb591f6f1adb094
              name="아시안"
              cId={8}
            />
          </div>
          <div className="d-flex mt-2">
<<<<<<< HEAD
            <CategoryButton cId={9}
              image={yangsic}
=======
            <CategoryButton
              image={'uploads/yangsic1621529578325.png'}
>>>>>>> d3a12a0c2f8369fa7d0b55b21cb591f6f1adb094
              name="양식"
              className="mr-3"
              cId={9}
            />
            <CategoryButton
              image={'uploads/wear1621529574142.png'}
              name="의류"
              cId={10}
            />
            <CategoryButton
              image={'uploads/japan1621529550796.png'}
              name="일식"
              cId={11}
            />
            <CategoryButton
              image={'uploads/drink1621529542800.png'}
              name="주류"
              cId={12}
            />
<<<<<<< HEAD
            <CategoryButton cId={10} image={wear} name="의류" />
            <CategoryButton cId={11} image={japan} name="일식" />
            <CategoryButton cId={12} image={drink} name="주류" />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton cId={13}
              image={chicken}
=======
          </div>
          <div className="d-flex mt-2">
            <CategoryButton
              image={'uploads/chicken1621529353710.jpg'}
>>>>>>> d3a12a0c2f8369fa7d0b55b21cb591f6f1adb094
              name="치킨"
              className="mr-3"
              cId={13}
            />
            <CategoryButton
              image={'uploads/pizza1621529419795.jpg'}
              name="피자"
              cId={14}
            />
<<<<<<< HEAD
            <CategoryButton cId={14} image={pizza} name="피자" />
            <CategoryButton cId={15}
              image={phone}
=======
            <CategoryButton
              image={'uploads/phone1621529562260.png'}
>>>>>>> d3a12a0c2f8369fa7d0b55b21cb591f6f1adb094
              name="휴대폰"
              cId={15}
            />
<<<<<<< HEAD
            <CategoryButton cId={16}
              image={hamburger}
=======
            <CategoryButton
              image={'uploads/hamburger1621529374043.jpg'}
>>>>>>> d3a12a0c2f8369fa7d0b55b21cb591f6f1adb094
              name="햄버거"
              cId={16}
            />
          </div>
        </div>
        <footer></footer>
      </Container>
    </>
  );
};

export default Home;
