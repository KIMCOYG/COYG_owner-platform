// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./page/Home";
import OwnerMainPage from './page/OwnerMainPage';
import OwnerEventDetailPage from './page/OwnerEventDetailPage';
import { React, useEffect } from 'react';
import OwnerMainPageMobile from './page/OwnerMainPageMobile';
import EvnetRegist from './page/EventRegist';
import Login from './page/login/Login';
import CustomerJoin from './page/login/CustomerJoin';
import OwnerJoin from './page/login/OwnerJoin';

const App = () => {
  return (

    <BrowserRouter>
      <Route path="/" component={Home} exact/>
    
    
      {/* Owner */}
      <Route path="/owner" component={OwnerMainPage} exact/>
      <Route path="/mobile/owner" component={OwnerMainPageMobile} exact/>
      <Route path="/owner/detail/:id" component={OwnerEventDetailPage} exact/>

      <Route path="/mobile/owner/event/regist" component={EvnetRegist} exact/>


      <Route path="/login" component={Login} />
      <Route path="/customer/join" component={CustomerJoin}></Route>
      <Route path="/owner/join" component={OwnerJoin}></Route>
    </BrowserRouter>
  );
}

export default App;
