import React from 'react';
import CategoryButton from "./CategoryButton";


const Home = ({history, lists}) => {
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
