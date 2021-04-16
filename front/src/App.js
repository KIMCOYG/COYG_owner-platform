// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./page/Home";
import Login from './page/login/Login';

const App = () => {
  return (

    <BrowserRouter>
      <Route path="/" component={Home} exact/>
      <Route path="/login" component = {Login} />
    </BrowserRouter>
  );
}

export default App;
