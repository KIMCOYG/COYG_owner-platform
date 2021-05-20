// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import React from 'react';
import OwnerMainPageMobile from './page/OwnerMainPageMobile';
import EvnetRegist from './page/EventRegist';
import Login from './page/login/Login';
import CustomerJoin from './page/login/CustomerJoin';
import OwnerJoin from './page/login/OwnerJoin';
import EventModify from './page/EventModify';
import OwnerMyPage from './page/MyPage/OwnerMyPage';
import ManageUserInfo from './page/MyPage/ManageUserInfo';
import ChangePassword from './page/MyPage/ChangePassword';
import ManageShop from './page/MyPage/ManageShop';
import ManageEventList from './page/MyPage/ManageEventList';
import AdminPage from './page/admin/AdminPage';
import AdminCategory from './page/admin/AdminCategory';
import AdminOwner from './page/admin/AdminOwner';
import EventList from './page/EventList';
import CustomerMyPage from './page/MyPage/CustomerMyPage';
import PostSearch from './page/PostSearch';
import DetailEvent from './page/DetailEvent';
import ScrapList from './page/MyPage/ScrapList';
import RegistShop from './page/MyPage/RegistShop';
import OwnerEventDetailPageMobile from './page/OwnerEventDetailPageMobile';
import HomeCustomer from "./page/HomeCustomer";
import HomeOwner from "./page/HomeOwner";
import ManageMyShops from "./page/MyPage/ManageMyShops";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/customer" component={HomeCustomer} exact />
          <Route path="/owner" component={HomeOwner} exact />
          <Route path="/category/:id/event" component={EventList} exact />

          <Route path="/event/detail/:id" component={DetailEvent} exact />

          <Route path="/mypage/customer" component={CustomerMyPage} exact />
          <Route path="/mypage/customer/scrap" component={ScrapList} exact />
          {/* <Route path="/mypage/customer/scrap" component={CustomerScrap} exact /> */}
          <Route path="/post" component={PostSearch} exact />

          {/* Owner */}
          <Route
            path="/mobile/owner/detail/:id"
            component={OwnerEventDetailPageMobile}
            exact
          />

          <Route
            path="/mobile/owner/event/regist"
            component={EvnetRegist}
            exact
          />
          <Route
            path="/mobile/owner/event/:id/modify"
            component={EventModify}
            exact
          />

          {/* Mypage */}
          <Route path="/owner/mypage" component={OwnerMyPage} exact />
          <Route
            path="/owner/mypage/userinfo"
            component={ManageUserInfo}
            exact
          />
          <Route
            path="/owner/mypage/changepw"
            component={ChangePassword}
            exact
          />
                    <Route
                        path="/owner/mypage/manageshop/:id"
                        component={ManageShop}
                        exact
                    />
                    <Route
                        path="/owner/mypage/myshops"
                        component={ManageMyShops}
                        exact
                    />
                    <Route
                        path="/owner/mypage/registshop"
                        component={RegistShop}
                        exact
                    />
          <Route
            path="/owner/mypage/eventlist"
            component={ManageEventList}
            exact
          />

          <Route path="/login" component={Login} />
          <Route path="/customer/join" component={CustomerJoin} />
          <Route path="/owner/join" component={OwnerJoin} />
          <Route path="/admin" component={AdminPage} exact />
          <Route path="/admin/category" component={AdminCategory} exact />
          <Route path="/admin/owner" component={AdminOwner} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
