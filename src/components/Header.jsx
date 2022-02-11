import React, { useContext } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../context/Context";

const Header = () => {
  const { dispatch } = useContext(Context);

  const handleSignOut = () => {
    dispatch({ type: "LOGOUT" });
    sessionStorage.setItem("user", "");
    window.location.href = "/";
  };
  return (
    <>
      <HeaderWrapper>
        <nav className="navbar navbar-expand-lg navbar-light containers">
          <Link to="/articles" className="logo navbar-brand decagon-logo">
            The Info
          </Link>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav list-items ml-auto">
              <li className="nav-item">
                <NavLink
                  to="/app/articles"
                  className="nav-link header-options"
                  activeclassname="active"
                >
                  HOME{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/app/create"
                  className="nav-link header-options"
                  activeclassname="active"
                >
                  CREATE CONTENT{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/nav/faqs"
                  className="nav-link header-options"
                  activeclassname="active"
                >
                  FAQ{" "}
                </NavLink>
              </li>

              <li
                onClick={handleSignOut}
                className="download-btn signout latest nav-item nav-link header-options"
                activeclassname="active"
              >
                SIGN OUT{" "}
              </li>
            </ul>
          </div>
        </nav>

        <div className="text-header">
          <p>
            We offer our <span>insights</span> on engineering and business.
          </p>
        </div>
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  grid-area: header;
  padding: 0.5rem 2rem;
  color: #565656;
  font-weight: 600;
  background-color: #000000;
  width: 100%;
  z-index: 999;

  .custom-toggler.navbar-toggler {
    border-color: lightgreen;
    background-color: white;
  }
  .custom-toggler .navbar-toggler-icon {
    background-color: white;
    /* background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 128, 0, 0.8)' stroke-width='1' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 23h22'/%3E%3C/svg%3E"); */
  }

  nav {
    background-color: transparent !important;
  }

  .navbar-links {
    color: #fff !important;
  }

  #lists li a {
    color: red !important;
  }

  #trans {
    color: #fff !important;
    text-decoration: none;
  }
  .logo {
    text-align: center;
    font-size: 1rem;
    width: 81px;
    height: 81px;
    background: linear-gradient(96.67deg, #34a853 0%, #b8d344 100%);
    color: #fff !important;
    border-radius: 50px;
    line-height: 71px;
  }

  .latest {
    color: #565656 !important;
    font-weight: 800;
  }

  .logo-name,
  .navbar ul li a {
    font-weight: 800;
    font-size: 1rem;
    margin-right: 1rem !important;
    color: #fff !important;
    transition: all 1s ease-in;
    border-radius: 2px;

    &:hover {
      background: linear-gradient(96.67deg, #34a853 0%, #b8d344 100%);
      color: #fff;
    }
  }

  .signout {
    color: #fff !important;
    cursor: pointer;
  }

  .text-header p {
    text-align: center;
    color: #fff;
    width: 70%;
    margin: 1.5rem auto;
    font-size: 3rem;
  }

  .text-header span {
    color: #34a853;
  }

  @media screen and (max-width: 768px) {
    .text-header p {
      font-size: 1.2rem;
    }
  }
`;

export default Header;
