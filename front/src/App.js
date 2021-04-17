// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./page/Home";
import Login from './page/login/Login';
import CustomerJoin from './page/login/CustomerJoin';
import OwnerJoin from './page/login/OwnerJoin';

const App = () => {
  return (

    <BrowserRouter>
      <Route path="/" component={Home} exact/>
      <Route path="/login" component={Login} />
      <Route path="/customer/join" component={CustomerJoin}></Route>
      <Route path="/owner/join" component={OwnerJoin}></Route>
    </BrowserRouter>
  );
}

export default App;
