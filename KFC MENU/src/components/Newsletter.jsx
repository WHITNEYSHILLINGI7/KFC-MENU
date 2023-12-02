import React from "react";
import styled from "styled-components";
import { TitleStyles } from "./ReusableStyles";

const KFCLoginPage = () => {
  return (
    <LoginPage>
      <div className="title">
        <h1>
          <span>Welcome to</span> KFC Login
        </h1>
        <p>Please enter your credentials to log in.</p>
      </div>
      <div className="container">
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button>Login</button>
      </div>
    </LoginPage>
  );
};

const LoginPage = styled.section`
  border: 0.01rem solid black;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  ${TitleStyles};

  .container {
    background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
    padding: 0.3vw;

    .input-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;

      label {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }

      input {
        border: none;
        padding: 1.5rem;
        font-size: 1.3rem;

        &:focus {
          outline: none;
        }
      }
    }

    button {
      padding: 1rem 5rem;
      background-color: transparent;
      border: none;
      font-size: 1.3rem;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        letter-spacing: 0.6rem;
        padding: 1rem 4.7rem;
      }
    }
  }

  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      padding: 0.8rem;
      border-radius: 0.5rem;

      .input-group {
        input {
          width: 75vw;
          padding: 0.5rem;
          border-radius: 0.5rem;
        }
      }

      button {
        margin-top: 0.5rem;
        width: 100%;
        padding: 0.5rem;

        &:hover {
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;

export default KFCLoginPage;
