import React from 'react';
import {BiMap} from 'react-icons/bi';
import {Container, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Header from "./Header";
import CategoryButton from "./CategoryButton";
import Slider from "./Slider";


const Home = ({history, lists}) => {
    let address = '경기도 파주시 조리읍';
    let n = 0;
    return (

                <div className="mt-3">
                    <div className="d-flex mt-2">

                        {/*{lists.map(e => (
                            n === 4? <br/> : <CategoryButton name={e.name} className="mr-3"/>

                        ))

                        }*/}
                        {lists.map(e => {
                            n += 1
                            return (
                                n % 4 === 0 ? <CategoryButton name={e.name} className="mr-3"/>
                                    : <CategoryButton name={e.name} className="mr-3"/>
                            )
                        })}
                    </div>
                </div>

    );
};

export default Home;
