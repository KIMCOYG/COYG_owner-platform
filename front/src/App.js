// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./page/Home";
import OwnerMainPage from './page/OwnerMainPage';

const App = () => {
  return (

    <BrowserRouter>
      <Route path="/" component={Home} exact/>
    
    
      {/* Owner */}
      <Route path="/owner" component={OwnerMainPage} exact/>

    </BrowserRouter>
  );
}

export default App;
