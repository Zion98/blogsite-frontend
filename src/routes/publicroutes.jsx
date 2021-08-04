import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TotalWrapper } from "../components/styled/index";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
function Public() {

  return (
    <Router>
      <TotalWrapper>
        <Switch>
          <Route exact path="/">
           <SignIn />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          <Redirect to="/" />
        </Switch>
      </TotalWrapper>
    </Router>
  );
}

export default Public;
