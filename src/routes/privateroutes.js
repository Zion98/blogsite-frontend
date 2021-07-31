// import { useContext } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TotalWrapper } from "../components/styled/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Articles from "../components/Articles";
import TextEditor from "../components/TextEditor";
import SingleArticle from "../components/SingleArticle";
// import { Context } from "../context/Context";
import PrivateRoute from "./PrivateRoute";
function App() {
//   const { user } = useContext(Context);

  return (
    <Router>
      <TotalWrapper>
        <Header />
        <Switch>
          <PrivateRoute exact path="/articles">
            <Articles />
          </PrivateRoute>
          <PrivateRoute exact path="/create">
            <TextEditor />{" "}
          </PrivateRoute>
          <Route exact path="/article1/:id">
            <SingleArticle />{" "}
          </Route>
        </Switch>
      </TotalWrapper>
    </Router>
  );
}

export default App;
