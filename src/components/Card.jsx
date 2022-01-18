import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import Articles from "./Articles";

const Card = ({ article }) => {
  const PF = process.env.REACT_APP_BACKEND_URL;
  return (
    <>
      <Link to={`/app/article1/${article._id}`} className="content">
        <CardWrapper>
          <div className="card-img">
            <img src={PF + "/images/" + article.photo} alt="cardImg" />
          </div>
          <div className="all">
            <div className="cat">
              {article.categories.map((single, index) => {
                return (
                  <p key={index} className="category">
                    Category: {single.toUpperCase()}
                  </p>
                );
              })}
            </div>

            <h2 className="art-desc" style={{ textDecoration: "none" }}>
              {article.title}
            </h2>
            <p className="time">{new Date(article.createdAt).toDateString()}</p>
          </div>
        </CardWrapper>
      </Link>
    </>
  );
};

const CardWrapper = styled.div`
  margin: 0 auto;

  box-shadow: 1px 0.5px 0.5px 1px #000;

  .all {
    border-top: 1px solid #34a853;
    padding: 1rem;
  }

  .card-img {
    padding: 1rem;
    height: 350px;
    width: 350px;
    transform: scale(85%);

    &:hover {
      transform: scale(100%);
      transition: all ease-out 1s;
    }
  }
  .card-img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .category {
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: #000000;
    margin: 0 !important;
    padding: 0 !important;
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
    text-decoration: none !important;
    font-weight: 800;
    font-size: 1.5rem;
    color: #34a853;
  }

  .time {
    color: #000;
    font-weight: 600;
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
