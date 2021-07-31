import React, { useRef, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../context/Context";
import { Form } from "./styled/index";
const Signin = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  console.log("rsgethry");
  const history = useHistory();
  console.log(history);
  const { dispatch } = useContext(Context);
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "REQUEST_LOGIN" });

    fetch(process.env.REACT_APP_BACKEND_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("datacvb", data.data);
        dispatch({ type: "LOGIN_SUCCESS", payload: data.data });
        localStorage.setItem("user", JSON.stringify(data.data));
        window.location.href = "/articles";
        // history.push("/articles");
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR" });
        console.log(err);
      });
  };

  return (
    <>
      <Form>
        <div className="containerx">
          <p className="logo">The Info</p>
          <h2 className="sign-in-title">Sign in</h2>
          <p className="proceed">Please enter your credentials to proceed</p>
          <form onSubmit={handleSubmit} className="forms">
            <label className="address mail">EMAIL ADDRESS</label>
            <input
              type="email"
              name="email"
              autoComplete={true}
              ref={userRef}
            />

            <div className="password-title">
              <label className="password">PASSWORD</label>
              <p className="forgot">Forgot password?</p>
            </div>
            <input type="password" name="password" ref={passwordRef} />

            <button type="submit">Sign in</button>

            <p className="have-account">
              Don't have an account?{" "}
              <Link to="/register">
                <span>Sign up</span>
              </Link>
            </p>
          </form>
        </div>
      </Form>
    </>
  );
};

export default Signin;
