import { useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TotalWrapper } from "./components/styled/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Articles from "./components/Articles";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import TextEditor from "./components/TextEditor";
import SingleArticle from "./components/SingleArticle";
import { Context } from "./context/Context";

import Routes from "./routes";
function App() {
  const { user } = useContext(Context);
  console.log("jfikuh");
  console.log(user);
  return (
    <Router>
      <Routes />

      {/* <TotalWrapper>
				<Header />
				<Switch>
					<Route exact path="/">
						{user ? <Articles /> : <SignIn />}
					</Route>
					<Route path="/register">{user ? <Articles /> : <SignUp />}</Route>
					<Route path="/articles">{user ? <Articles /> : <SignIn />}</Route>
					<Route path="/create">{user ? <TextEditor /> : <SignIn />}</Route>
					<Route path="/article1/:id">{user ? <SingleArticle /> : <SignIn />}</Route>
				</Switch>
			</TotalWrapper> */}
    </Router>
  );
}

export default App;
