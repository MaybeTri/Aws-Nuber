import './App.css';
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Account } from './components/Account';
import Status from './components/Status';
import Driverhome from './components/driverhome';
import Home from './components/home';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Account>
            <Status />
            <Route exact path="/" component={Signup}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/driver-home" component={Driverhome}></Route>
          </Account>
        </div>
      </Switch>
    </Router>

  );
}

export default App;
