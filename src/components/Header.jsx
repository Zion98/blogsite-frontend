import React, { useContext } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../context/Context";

const Header = (props) => {
  const { dispatch } = useContext(Context);

  const handleSignOut = () => {
    dispatch({ type: "SIGNOUT" });
  };
  return (
    <>
      <HeaderWrapper>
        <nav className="navbar navbar-expand-lg navbar-light containers">
          <Link to="/articles" className="logo navbar-brand decagon-logo">
            The Info
          </Link>
          <button
            className="navbar-toggler"
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
                  to="/articles"
                  className="nav-link header-options"
                  activeclassname="active"
                >
                  HOME{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/create"
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
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Terms & Conditions
                </a>
              </li>

              <li
                onClick={handleSignOut}
                className="download-btn latest nav-item nav-link header-options"
                activeclassname="active"
              >
                SIGN OUT{" "}
              </li>
            </ul>
          </div>
        </nav>
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  grid-area: header;
  padding: 0.5rem 2rem;
  color: #565656;
  font-weight: 600;
  background-color: #fff;
  /* background-color:${(props) => (props.pageType === "/" ? "red" : "")}; */
  position: fixed;
  width: 100%;
  z-index: 999;

  nav {
    background-color: transparent !important;
  }

  .navbar-links {
    color: #565656 !important;
    /* margin-left: 40rem; */
  }

  #lists li a {
    color: red !important;
  }

  #trans {
    color: #565656 !important;
    text-decoration: none;
  }
  .logo {
    text-align: center;
    width: 81px;
    height: 81px;
    background: #726963;
    font-size: 15px;
    color: #FFF !important;
    border-radius: 50px;
    line-height: 71px;
  }

  .latest {
    color: #565656 !important;
    font-weight: 800;
  }

  .logo-name,
  .navbar ul li a {
    font-weight: 500;
    font-size: 1.1rem;
    margin-right: 1rem !important;
    color: #565656 !important;
  }

  @media screen and(max-width:991px) {
  }
`;

export default Header;
