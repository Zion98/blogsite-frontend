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
                  activeClassName="active"
                >
                  HOME{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/create"
                  className="nav-link header-options"
                  activeClassName="active"
                >
                  CREATE CONTENT{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/nav/faqs"
                  className="nav-link header-options"
                  activeClassName="active"
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
                activeClassName="active"
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
  color: #000;
  font-weight: 600;
  background-color: #2f2fa2;
  /* background-color:${(props) => (props.pageType === "/" ? "red" : "")}; */
  position: fixed;
  width: 100%;
  z-index: 999;

  nav {
    background-color: transparent !important;
  }



  /* .navbar-expand-lg .navbar-collapse {
    display: flex!important;
    flex-basis: auto;
    justify-content: flex-end !important;
} */


  .navbar-links {
    color: #000 !important;
    /* margin-left: 40rem; */
  }

  #lists li a {
    color: #fff !important;
  }

  #trans {
    color: #fff !important;
    text-decoration: none;
  }
  .logo {
    text-align: center;
    width: 81px;
    height: 81px;
    /* margin: 5px auto; */
    background: #4c60eb;
    font-size: 15px;
    color: #fff !important;
    border-radius: 50px;
    line-height: 71px;
  }

  .latest {
    color: #fff !important;
  }



  .logo-name,
.navbar ul li a {
  font-weight: 400;
  font-size: 1.1rem;
  margin-right: 1rem !important;
  color: #ffffff !important;
}


@media screen and(max-width:991px){

}
`;

export default Header;
