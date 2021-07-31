import { useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { TotalWrapper } from "./components/styled/index";
import { BrowserRouter as Router } from "react-router-dom";
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
