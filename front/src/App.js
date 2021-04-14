// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./page/Home";

const App = () => {
  return (

    <BrowserRouter>
      <Route path="/" component={Home} exact/>
    </BrowserRouter>
  );
}

export default App;
