import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const Card = ({ article }) => {
  const PF = process.env.REACT_APP_BACKEND_URL;
  return (
    <CardWrapper>
      <div className="card-img">
        <img src={PF + "/images/" + article.photo} alt="cardImg" />
      </div>
      <div className="cat">
        {article.categories.map((single, index) => {
          return (
            <p key={index} className="category">
              Category: {single.toUpperCase()}
            </p>
          );
        })}
      </div>

      <Link to={`/article1/${article._id}`} className="content">
        <h2 className="art-desc">{article.title}</h2>
        <p className="time">{new Date(article.createdAt).toDateString()}</p>
        <p className="content-summary">{parse(article.desc)}</p>
      </Link>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  margin: 0 auto;
  box-shadow: 1px 1px 1px 0px;
  background-color: #c09f80;
  .card-img {
    height: 350px;
  }
  .card-img img {
    width: 100%;
    height: 100%;
  }

  .cat {
    display: flex;
    justify-content: center;
  }

  .category {
    font-style: italic;
    font-weight: 400;
    color: #565656;
  }

  .cat p {
    padding: 0.5rem;
    margin: 0;
  }

  .time {
    text-align: center;
    font-size: 0.8rem;
    font-style: italic;
    margin: 0;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  .art-desc {
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
  }

  .content-summary {
    padding: 1rem;
    margin: 0;
    overflow: hidden;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export default Card;
