import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import SideBar from "../components/Sidebar";
import Footer from "../components/Footer";

const Articles = () => {
  const [allArticles, setAllArticles] = useState([]);
  let x = localStorage.getItem("user");
  let token = JSON.parse(x).token;

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL+"/get", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllArticles(data);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },[token]);

  return (
    <>
      <ArticlesWrapper>
        <h2 className="titler">All Articles</h2>

        <div className="box-content">
          {allArticles.map((single) => (
            <Card article={single} />
          ))}
        </div>
      </ArticlesWrapper>

      <SideBar />

      <Footer />
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
    color: #fff;
    border-bottom: 1px solid #c0c0c0;
    padding: 1rem 0;
    margin: 6rem 0;
  }

  .box-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    justify-items: center;
    align-items: center;
  }

  @media only screen and (max-width: 765px) {
    .box-content {
      grid-template-columns: 1fr;
      grid-gap: 1rem;
    }
  }
`;

export default Articles;
