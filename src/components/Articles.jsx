import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import SideBar from "../components/Sidebar";
import Footer from "../components/Footer";
import Loader from "./Loader";

const Articles = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setloading] = useState(false);
  let x = localStorage.getItem("user");
  let token = JSON.parse(x).token;

  useEffect(() => {
    setloading(true);
    fetch(process.env.REACT_APP_BACKEND_URL + "/get", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllArticles(data);
        setloading(false);
      })
      .catch((error) => {
        setloading(true);
        return error;
      });
  }, [token]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ArticlesWrapper>
           
            <h2 className="titler">All Articles</h2>

            <div className="box-content">
              {allArticles.length ? (
                allArticles.map((single) => <Card article={single} />)
              ) : (
                <p>No articles created at the moment</p>
              )}
            </div>
          </ArticlesWrapper>
          <SideBar />
          <Footer />
        </>
      )}
    </>
  );
};

const ArticlesWrapper = styled.div`
  grid-area: content;
  width: 95%;
  margin: 5rem auto;
  margin-top: 2.5rem;

  .titler {
    text-align: center;
    color: #000;
    font-weight: 800;
    border-bottom: 1px solid #c0c0c0;
    padding: 1rem 0;
    margin: 3rem 0;
  }

  .box-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    justify-items: center;
    align-items: center;
  }

  @media only screen and (max-width: 765px) {
    width: 85%;
    margin: 2rem auto;

    .titler {
      margin: 1rem 0;
    }
    .box-content {
      grid-template-columns: 1fr;
      width: 100%;
      grid-gap: 2rem;
    }
  }
`;

export default Articles;
