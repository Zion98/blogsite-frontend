import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  let x = sessionStorage.getItem("user");
  let token = JSON.parse(x).token;

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/cat/get", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);


  return (
    <SideBarWrapper>
      <div className="contain">
        <h2 className="sidebar-title">About Me</h2>
        <div className="sidebar-img">
          <img src="/assets/main.jpg" alt="sidebar" />
        </div>

        <div className="side-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae eaque
          debitis aperiam vel quia non, veniam ut atque ad in repellat earum eos
          nam magnam id voluptate harum! Quaerat perferendis hic quidem
          corporis. Deserunt temporibus corporis a molestiae tempore recusandae
          sapiente ab ipsum inventore. Omnis doloremque eligendi dignissimos hic
          magnam.
        </div>
        <div className="category">
          <h2 className="cat-title">Categories</h2>
          <ul className="side-lists">
            {categories.length>0 ? (
              categories?.map((single, index) => {
                return (
                  <Link to={`/nav/home/?cat=${single.name}`}>
                    <li key={index}>{single.name}</li>
                  </Link>
                );
              })
            ) : (
              <p>No Categories presently</p>
            )}
          </ul>
        </div>

        <div className="social">
          <h2 className="follow-title">Follow Us</h2>
          <div className="follow-media">
            <Link>Life</Link>
            <Link>Tech</Link>
            <Link>Politics</Link>
          </div>
        </div>
      </div>
    </SideBarWrapper>
  );
};

const SideBarWrapper = styled.div`
  margin: 2rem;
  margin-top: 10rem;
  grid-area: side;
  z-index: 444;

  .contain {
    padding: 3rem 2rem;
    border: none;
    border-radius: 30px;
    background: linear-gradient(96.67deg, #34A853 0%, #B8D344 100%);
    color: #fff;
  }

  .sidebar-title,
  .cat-title,
  .follow-title {
    text-align: center;
    font-size: 1.5rem;
    padding: 1rem 0;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }

  .sidebar-img {
    width: 400px;
    margin: 0 auto;
  }
  .sidebar-img img {
    width: 100%;
    height: 100%;
  }

  .side-content {
    margin: 1rem 0;
    font-size: 1rem;
  }
  .side-lists {
    list-style: none;
    /* width: 50%; */
    /* margin: 0 auto; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  .side-lists li {
    margin: 1rem;
    display: inline-block;
    color: #fff;
    width: 50%;
  }

  .category,
  .social {
    margin-top: 2rem;
  }

  .follow-media {
    margin: 3rem 0;
    display: flex;
    justify-content: center;
  }

  .follow-media a {
    color: #fff;
    text-decoration: none;
    margin: 0 1rem;
  }

  @media only screen and (max-width: 768px) {
    display: none !important;
  }
`;

export default Sidebar;
