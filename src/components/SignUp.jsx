import React, { useState, useContext } from "react";
import { Context } from "../context/Context";
// import { Form } from './styled/index';
import styled, { css } from "styled-components";
const Signup = () => {
  const initials = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    profilePicture: "",
    password: "",
  };

  const { dispatch } = useContext(Context);
  const [state, setState] = useState(initials);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    // dispatch({ type: 'SIGNIN_SUCCESS', payload: data.data });
    // const baseURL = 'http://localhost:3000';
    fetch(process.env.REACT_APP_BACKEND_URL + "/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => {
        console.log(res.json());
        setState({
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          profilePicture: "",
          password: "",
        });
      })
      .then((data) => {
        // localStorage.setItem("user", JSON.stringify(data.data));
        window.location.href = "/";
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  };
  return (
    <Form>
      <p class="logo">The Info</p>
      <h2 class="sign-in-title">Sign up</h2>
      <p class="proceed">Please enter your credentials to proceed</p>
      <form class="forms" onSubmit={handleSubmit}>
        <p class="address mail">*FIRSTNAME</p>
        <input
          type="text"
          className="inputs"
          name="firstname"
          value={state.firstname}
          onChange={handleChange}
        />
        <p class="address mail">*LASTNAME</p>
        <input
          type="text"
          className="inputs"
          name="lastname"
          value={state.lastname}
          onChange={handleChange}
        />
        <p class="address mail">*USERNAME</p>
        <input
          type="text"
          className="inputs"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        <p class="address mail">*EMAIL ADDRESS</p>
        <input
          type="email"
          className="inputs"
          name="email"
          autocomplete="email"
          value={state.email}
          onChange={handleChange}
        />
        <p class="address mail">Upload your Profile Picture</p>
        <input type="file" name="file" />
        <div class="password-title">
          <p class="password">*PASSWORD</p>
        </div>
        <input
          type="password"
          className="inputs"
          name="password"
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
        {/* {error && <span style={{ color: "red" }}>Something went wrong</span>} */}
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
  p {
    margin: 0 !important;
  }
  .logo {
    text-align: center;
    width: 71px;
    height: 71px;
    margin: 10px auto;
    border: 1px solid #ffffff;
    background: #4c60eb;
    font-size: 15px;
    color: #fff;
    border-radius: 50px;
    line-height: 71px;
  }

  a {
    text-decoration: none;
  }

  .sign-in-title {
    font-weight: 300;
    font-size: 34px;
    text-align: left;
    margin-bottom: 5px;
    color: #405169;
  }
  .proceed {
    font-size: 15px;
    color: rgba(64, 81, 105, 0.5);
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
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 1.125px;
    text-transform: uppercase;
    color: #405169;
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
    background: rgba(76, 141, 235, 0.10077);
    border: 1px solid rgba(76, 141, 235, 0.10077);
    border-radius: 5px;
    margin-bottom: 10px;
  }

  button {
    margin-top: 20px;
    font-size: 15px;
    color: #fff;
    background: #4c60eb;
  }

  .have-account {
    text-align: center;
    font-size: 15px;
    color: #b0bac9;
  }

  .have-account span {
    color: #4c60eb;
  }

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export default Signup;
