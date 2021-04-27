// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './page/Home';
import OwnerMainPage from './page/OwnerMainPage';
import OwnerEventDetailPage from './page/OwnerEventDetailPage';
import React from 'react';
import OwnerMainPageMobile from './page/OwnerMainPageMobile';
import EvnetRegist from './page/EventRegist';
import Login from './page/login/Login';
import CustomerJoin from './page/login/CustomerJoin';
import OwnerJoin from './page/login/OwnerJoin';
import AdminPage from './page/admin/AdminPage';
import AdminCategory from './page/admin/AdminCategory';
import AdminOwner from './page/admin/AdminOwner';
import EventList from './page/EventList';
import CustomerMyPage from './page/MyPage/CustomerMyPage';
import PostSearch from './page/PostSearch';
import DetailEvent from './page/DetailEvent';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/event" component={EventList} exact />

      <Route path="/event/detail" component={DetailEvent} exact />

      <Route path="/mypage/customer" component={CustomerMyPage} exact />
      <Route path="/post" component={PostSearch} exact />

      {/* Owner */}
      <Route path="/owner" component={OwnerMainPage} exact />
      <Route path="/mobile/owner" component={OwnerMainPageMobile} exact />
      <Route path="/owner/detail/:id" component={OwnerEventDetailPage} exact />

      <Route path="/mobile/owner/event/regist" component={EvnetRegist} exact />

      <Route path="/login" component={Login} />
      <Route path="/customer/join" component={CustomerJoin}></Route>
      <Route path="/owner/join" component={OwnerJoin}></Route>
      <Route path="/admin" component={AdminPage} exact />
      <Route path="/admin/category" component={AdminCategory} exact />
      <Route path="/admin/owner" component={AdminOwner} exact />
    </BrowserRouter>
  );
};

export default App;
