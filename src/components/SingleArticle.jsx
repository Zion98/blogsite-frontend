import React, { useState, useEffect } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { Link, useLocation } from "react-router-dom";
import SideBar from "../components/Sidebar";
import Footer from "../components/Footer";
const SingleArticle = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [article, setArticle] = useState([]);

  let x = localStorage.getItem("user");
  let token = JSON.parse(x).token;
  const PF = process.env.REACT_APP_BACKEND_URL;
  const baseURL = PF + "/get/" + path;

  useEffect(() => {
    fetch(baseURL, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [token, baseURL]);

  return (
    <>
      <OneWrapper>
        <div className="article-img">
          <img src={PF + "/images/" + article.photo} alt="article/img" />
        </div>

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
                <span> 4 mins read</span>
              </p>
            </div>
          </div>
          <div className="links">
            {/* <a href={article?.facebook[0]} target="_blank" rel="noreferrer">
            <i class="fab fa-facebook"></i>
            </a>
            <a href={'www.google.com'} target="_blank" rel="noreferrer">
            <i class="fab fa-twitter"></i>
            </a> */}
          </div>
        </div>
        <div className="total-content">
          <h2 className="single-title">{article.title}</h2>

          <div class="article-content">{parse(`${article.desc}`)}</div>
        </div>
        {/* <div className="footer-details">
          <div className="author-img">
            <img src="/assets/main.jpg" alt="article/img" />
          </div>

          <div className="mini-details">
            <p className="footer-name">
              <span>Setryl Svanlip</span>Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Id illo recusandae odio ut? Aperiam dolorem
              dicta perspiciatis omnis sint amet hic quidem, voluptatum
              necessitatibus eos?
            </p>
          </div>
        </div> */}
        {/* <div>
          <span>Edit</span>
          <span>Delete</span>
        </div> */}
      </OneWrapper>
      <SideBar />

      <Footer />
    </>
  );
};

const OneWrapper = styled.div`
  grid-area: content;
  padding: 2rem;

  .article-img {
    width: 100%;
    margin: 0 auto;
    margin-top: 8rem;
  }

  .article-img img {
    width: 100%;
    height: 100%;
  }

  .single-title {
    margin: 1rem 0;
    text-align: center;
    color: #76323f;
    text-transform: uppercase;
    font-weight: 900;
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
    align-items:flex-start;
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
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0;
    text-decoration: none;
    color: #76323f;
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
  }
`;

export default SingleArticle;
