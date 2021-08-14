import styled, { css } from "styled-components";

export const TotalWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "content content side"
    "content content side"
    "footer footer footer";
  grid-template-columns: 2fr 2fr 1fr;
  grid-gap: 0px 10px;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    grid-template-areas:
      "header header header"
      "content content content"
      "content content content"
      "footer footer footer";
  }
`;

const CenterPosition = css`
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f9faff;
  padding: 50px 50px;
  min-width: 32%;
`;

export const Form = styled.div`
  ${CenterPosition}
  background: #34a853;
  z-index: 999;
  p {
    margin: 0;
  }
  .logo {
    text-align: center;
    width: 81px;
    height: 81px;
    margin: 10px auto;
    font-size: 15px;
    font-weight:800;
    background: linear-gradient(96.67deg, #34a853 0%, #b8d344 100%);
    color: #fff !important;
    border-radius: 50px;
    line-height: 81px;
  }

  a {
    text-decoration: none;
  }

  .sign-in-title {
    font-weight: 500;
    font-size: 34px;
    text-align: left;
    margin-bottom: 5px;
    color: #fff !important;
  }
  .proceed {
    font-size: 15px;
    color: #fff !important;
  }

  form {
    padding: 10px 5px;
    font-size: 12px;
  }

  .mail,
  .password-title {
    margin: 10px 0;
  }

  .mail {
    margin-top: 40px;
  }

  .address,
  .password {
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 1.125px;
    text-transform: uppercase;
    color: #fff !important;
  }

  .password-title {
    display: flex;
    justify-content: space-between;
  }

  .forgot {
    font-size: 15px;
    /* color: hsla(215.1219512195122, 24.2603550295858%, 33.13725490196078%, 0.5); */
    color: #fff !important;
  }

  input,
  button {
    width: 100%;
    height: 45px;
    outline: none;
    background: rgba(219, 226, 236, 0.101);
    border: 1px solid rgba(76, 141, 235, 0.10077);
    border-radius: 5px;
    margin-bottom: 10px;
  }

  button {
    margin-top: 20px;
    font-size: 15px;
    color: #fff;
    font-weight:800;
    background: #b8d344;
  }

  .have-account {
    text-align: center;
    font-size: 15px;
    color: #fff;
  }
.error2{
  font-weight: 800;
}
  .have-account span {
    color: #76323f;
  }
  @media only screen and (max-width: 768px) {
    min-width: 90%;
  }
`;

export const VideoWrapper = styled.div`
  position: fixed;
  z-index: -1;
  @media (min-aspect-ratio: 16/9) {
    #videoBG {
      width: 100%;
      height: auto;
    }
  }

  @media (max-aspect-ratio: 16/9) {
    #videoBG {
      height: 100%;
      width: auto;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 90%;

    #videoBG {
      display: none;
      background-color: red;
    }
  }
`;
