// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./page/Home";
import OwnerMainPage from './page/OwnerMainPage';
import OwnerEventDetailPage from './page/OwnerEventDetailPage';
import { useEffect } from 'react';
import OwnerMainPageMobile from './page/OwnerMainPageMobile';
import EvnetRegist from './page/EventRegist';

const App = () => {
  return (

    <BrowserRouter>
      <Route path="/" component={Home} exact/>
    
    
      {/* Owner */}
      <Route path="/owner" component={OwnerMainPage} exact/>
      <Route path="/mobile/owner" component={OwnerMainPageMobile} exact/>
      <Route path="/owner/detail/:id" component={OwnerEventDetailPage} exact/>

      <Route path="/mobile/owner/event/regist" component={EvnetRegist} exact/>


    </BrowserRouter>
  );
}

export default App;
