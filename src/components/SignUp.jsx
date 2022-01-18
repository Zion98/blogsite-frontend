import React, { useState, useContext } from "react";
import { Context } from "../context/Context";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled, { css } from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

const Signup = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    profilePicture: "",
    password: "",
  };
  const validationSchema = Yup.object({
    firstname: Yup.string()
      .min(2, "FirstName is too short!")
      .max(50, "FirstName is too Long!")
      .required("FirstName is Required"),
    lastname: Yup.string()
      .min(2, "LastName is too Short!")
      .max(50, "Last Name is too Long!")
      .required("LastName is Required"),
    username: Yup.string()
      .min(2, "UserName is too Short!")
      .max(50, "UserName is too Long!")
      .required("UserName is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string()
      .required("Password is Required")
      .min(6, "Password is too short - should be 6 chars minimum."),
  });

  const onSubmit = (values) => {
    handleSubmit(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const { dispatch, state } = useContext(Context);
  const [, setStates] = useState(initialValues);
  const [error, setError] = useState(false);

  const handleSubmit = (dataValues) => {
    setError(false);
    dispatch({ type: "REQUEST_LOGIN" });
    fetch(process.env.REACT_APP_BACKEND_URL + "/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataValues),
    })
      .then((res) => {
        setStates({
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          profilePicture: "",
          password: "",
        });
        if (res.status === 201) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        dispatch({ type: "LOGIN_SUCCESS", payload: data.data });
        localStorage.setItem("user", JSON.stringify(data.data));
        window.location.href = "/app/articles";
      })
      .catch((res) => {
        dispatch({ type: "LOGIN_ERROR" });

        res.json().then((data) => setError(data.message));
      });
  };
  return (
    <Form>
      <p className="logo">The Info</p>
      <h2 className="sign-in-title">Sign up</h2>
      <p className="proceed">Please enter your credentials to proceed</p>
      {error && (
        <span style={{ color: "red", fontSize: ".8rem" }}>{error}</span>
      )}
      <form className="forms" onSubmit={formik.handleSubmit}>
        <div>
          <p className="address mail">*FIRSTNAME</p>
          <input
            type="text"
            className="inputs"
            name="firstname"
            value={state.firstname}
            {...formik.getFieldProps("firstname")}
          />
          {formik.touched.firstname && formik.errors.firstname && (
            <p className="text-danger error1 font-weight-bold">
              {formik.errors.firstname}
            </p>
          )}
        </div>
        <div>
          <p class="address mail">*LASTNAME</p>
          <input
            type="text"
            className="inputs"
            name="lastname"
            value={state.lastname}
            {...formik.getFieldProps("lastname")}
          />
          {formik.touched.lastname && formik.errors.lastname && (
            <p className="text-danger error1 font-weight-bold">
              {formik.errors.lastname}
            </p>
          )}
        </div>

        <div>
          <p class="address mail">*USERNAME</p>
          <input
            type="text"
            className="inputs"
            name="username"
            value={state.username}
            {...formik.getFieldProps("username")}
          />
          {formik.touched.username && formik.errors.username && (
            <p className="text-danger error1 font-weight-bold">
              {formik.errors.username}
            </p>
          )}
        </div>

        <div>
          <p class="address mail">*EMAIL ADDRESS</p>
          <input
            type="email"
            className="inputs"
            name="email"
            autocomplete="email"
            value={state.email}
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-danger error1 font-weight-bold">
              {formik.errors.email}
            </p>
          )}
        </div>
        {/* <p class="address mail">Upload your Profile Picture</p>
        <input type="file" name="file" /> */}
        <div>
          <div className="password-title">
            <p className="password">*PASSWORD</p>
          </div>
          <input
            type="password"
            className="inputs"
            name="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-danger error1 font-weight-bold">
              {formik.errors.password}
            </p>
          )}
        </div>

        <button type="submit">Sign Up</button>

        {state.loading && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <ClipLoader color={"#76323f"} size={150} />
          </div>
        )}
      </form>
    </Form>
  );
};

const CenterPosition = css`
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f9faff;
  padding: 1rem 3rem;
  min-width: 30%;
`;

export const Form = styled.div`
  ${CenterPosition}
  background: #34a853;
  p {
    margin: 0 !important;
  }
  .logo {
    text-align: center;
    width: 81px;
    height: 81px;
    margin: 10px auto;
    font-size: 15px;
    font-weight: 800;
    background: linear-gradient(96.67deg, #34a853 0%, #b8d344 100%);
    color: #fff !important;
    border-radius: 50px;
    line-height: 81px;
  }

  a {
    text-decoration: none;
  }

  .sign-in-title {
    font-weight: 700;
    font-size: 34px;
    text-align: left;
    margin-bottom: 5px;
    color: #fff !important;
  }
  .proceed {
    font-size: 15px;
    color: #fff !important;
  }

  form {
    padding: 10px 5px;
    font-size: 12px;
  }

  .mail,
  .password-title {
    margin: 10px 0;
  }

  .mail {
    margin-top: 40px;
  }

  .address,
  .password {
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 1.125px;
    text-transform: uppercase;
    color: #fff !important;
  }

  .password-title {
    margin: 0;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .forgot {
    font-size: 15px;
    color: hsla(215.1219512195122, 24.2603550295858%, 33.13725490196078%, 0.5);
  }

  .inputs,
  button {
    font-size: 1rem;
    width: 100%;
    height: 35px;
    outline: none;
    background: rgba(219, 226, 236, 0.101);
    border: 1px solid rgba(76, 141, 235, 0.10077);
    border-radius: 5px;
    margin-bottom: 10px;
  }

  button {
    margin-top: 20px;
    font-size: 15px;
    color: #fff;
    font-weight: 800;
    background: #b8d344;
  }

  .have-account {
    text-align: center;
    font-size: 15px;
    color: #b0bac9;
  }

  .have-account span {
    color: #4c60eb;
  }
  .error1 {
    margin-bottom: 1rem !important;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export default Signup;
