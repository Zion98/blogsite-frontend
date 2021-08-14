import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
              {single.toUpperCase()}
            </p>
          );
        })}
      </div>

      <Link to={`/article1/${article._id}`} className="content">
        <h2 className="art-desc">{article.title}</h2>
        {/* <p className="time">{new Date(article.createdAt).toDateString()}</p> */}
      </Link>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  margin: 0 auto;
  /* box-shadow: 1px 1px 1px 34px; */

  .card-img {
    height: 350px;
  }
  .card-img img {
    width: 100%;
    height: 100%;
  }

  .cat {
    /* display: flex;
    justify-content: center; */
  }

  .category {
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: #000000;
    opacity: 0.5;
  }

  .cat p {
    padding: 0.5rem 0;
    margin: 0.5rem 0;
  }

  .time {
    text-align: center;
    font-size: 0.8rem;
    font-style: italic;
    margin: 0;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  .art-desc {
    /* text-align: center; */
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
