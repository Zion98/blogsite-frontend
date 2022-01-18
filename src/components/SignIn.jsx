import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { Context } from "../context/Context";
import { Form } from "./styled/index";
import * as Yup from "yup";
import Loader from "./Loader";

const Signin = () => {
  const { dispatch, state } = useContext(Context);
  const initialValues = {
    email: "",
    password: "",
  };

  const [error, setError] = useState("");

  const onSubmit = (values) => {
    handleSubmit(values);
  };

  const handleSubmit = (dataValues) => {
    dispatch({ type: "REQUEST_LOGIN" });

    fetch(process.env.REACT_APP_BACKEND_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataValues),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        dispatch({ type: "LOGIN_SUCCESS", payload: data.data });
        localStorage.setItem("user", JSON.stringify(data.data));
        window.location.href = "/app/articles";
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_ERROR" });
        setError("Invalid Email or Password");
      });
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invaild Email Format"),
    password: Yup.string()
      .required("Password is Required")
      .min(5, "Password is too short - should be 5 chars minimum."),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <>
      <Form>
        <div className="containerx">
          <p className="logo">The Info</p>
          <h2 className="sign-in-title">Sign in</h2>
          <p className="proceed">Please enter your credentials to proceed</p>
          <form onSubmit={formik.handleSubmit} className="forms">
            {error && (
              <p className="text-danger error2 font-weight-bold">{error}</p>
            )}

            <div className="">
              <label htmlFor="email" className="address mail">
                EMAIL ADDRESS
              </label>
              <input
                id="email"
                type="email"
                name="email"
                {...formik.getFieldProps("email")}
                autoComplete={true}
              />

              {formik.touched.email && formik.errors.email && (
                <p className="text-danger font-weight-bold">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div className="password-title">
              <label htmlFor="password" className="password">
                PASSWORD
              </label>
              <p className="forgot">Forgot password?</p>
            </div>
            <div className="">
              <input
                type="password"
                {...formik.getFieldProps("password")}
                id="password"
                name="password"
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-danger font-weight-bold">
                  {formik.errors.password}
                </p>
              )}
            </div>
            <button type="submit">Sign in</button>
            {state.loading && <Loader />}
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
