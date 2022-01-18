import React, { useState, useEffect } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { Link, useLocation } from "react-router-dom";
import SideBar from "../components/Sidebar";
import Footer from "../components/Footer";
import Loader from "./Loader";
const SingleArticle = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[3];
  const [loading, setloading] = useState(false);
  const [article, setArticle] = useState([]);

  let x = localStorage.getItem("user");
  let token = JSON.parse(x).token;
  const PF = process.env.REACT_APP_BACKEND_URL;
  const baseURL = PF + "/get/" + path;
  // console.log(baseURL);
  useEffect(() => {
    setloading(true);
    fetch(baseURL, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        setloading(false);
      })
      .catch(function (error) {
        console.log(error);
        setloading(false);
      });
  }, [token, baseURL]);

  // console.log(article);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <OneWrapper>
            <div className="article-img">
              <h2 className="single-title">{article.title}</h2>
              <p className="article-cat">{article.categories[0]}</p>
              <div className="all-details">
                <div className="article-details">
                  <div className="author-img">
                    <img src="/assets/main.jpg" alt="article/img" />
                  </div>
                  <div className="mini-details">
                    <Link
                      to={`/nav/home/?user=${article.username}`}
                      className="author-name"
                    >
                      {article.username}
                    </Link>
                    <p className="number">
                      <date>{new Date(article.createdAt).toDateString()} </date>
                    </p>
                  </div>
                </div>
                <div className="links">
                  <a href={article?.facebook} target="_blank" rel="noreferrer">
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a href={article?.twitter} target="_blank" rel="noreferrer">
                    <i class="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
              <div>
                <img src={PF + "/images/" + article.photo} alt="article/img" />
              </div>
            </div>

            <div className="total-content">
              <div class="article-content">{parse(`${article.desc}`)}</div>
            </div>

            {/* <div>
          <span>Edit</span>
          <span>Delete</span>
        </div> */}
          </OneWrapper>
          <SideBar />

          <Footer />
        </>
      )}
    </>
  );
};

const OneWrapper = styled.div`
  grid-area: content;
  padding: 2rem;
  margin-top: 5rem;

  .article-cat {
    font-size: 1rem;
    color: #000;
    opacity: 0.7;
  }

  .article-img {
    margin: 0 auto;
  }

  .article-img img {
    width: 350px;
    height: 350px;
    object-fit: contain;
  }

  .single-title {
    margin: 0;
    color: #000;
    opacity: 0.9;
    font-weight: 900;
    font-size: 2.5rem;
    width: 80%;
  }

  .all-details {
    margin: 2rem auto;
  }

  .all-details,
  .article-details,
  .links,
  .footer-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .article-details {
    justify-content: flex-start;
  }
  .footer-details {
    margin-top: 1.5rem;
    padding: 1rem;
    background-color: #76323f;
    justify-content: flex-end !important;
    align-items: flex-start;
  }
  .author-img {
    width: 50px;
    height: 50px;
  }

  .author-img img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  .mini-details {
    margin-left: 1rem;
  }

  .author-name {
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
    text-decoration: none;
    color: #000;
  }
  .number {
    font-size: 0.8rem;
    font-weight: 300;
    margin: 0.4rem 0;
  }
  .links {
    margin-left: 25rem;
  }

  .links a {
    color: #000;
    margin: 0;
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    background-color: #fff;
    box-shadow: 0px 1px 5px 1px;
  }

  .total-content {
    padding: 2rem 0;
    background-color: #fff;
  }

  .article-content {
    background-color: #fff;
    padding: 2rem;
    margin: 1rem 0;
    line-height: 1.6rem;
  }

  .article-content::first-letter {
    margin-left: 0.7rem;
    font-size: 4rem;
    min-width: 600px;
  }

  .footer-name {
    width: 60%;
    font-size: 0.7rem;
    font-weight: 600;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 1rem;
    .single-title {
      font-size: 1.5rem;
    }

    .article-content {
      background-color: #fff;
      padding: 0rem;
    }
  }
`;

export default SingleArticle;
