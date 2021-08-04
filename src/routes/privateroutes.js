import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TotalWrapper } from "../components/styled/index";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "../components/Header";
import Articles from "../components/Articles";
import TextEditor from "../components/TextEditor";
import SingleArticle from "../components/SingleArticle";
import PrivateRoute from "./PrivateRoute";
function App() {
  return (
    <Router>
      <TotalWrapper>
        <Header />
        <Switch>
          <PrivateRoute exact path="/articles">
            <Articles />
          </PrivateRoute>
          <PrivateRoute exact path="/create">
            <TextEditor />
          </PrivateRoute>
          <Route exact path="/article1/:id">
            <SingleArticle />{" "}
          </Route>
          <Redirect to="/articles" />
        </Switch>
      </TotalWrapper>
    </Router>
  );
}

export default App;
