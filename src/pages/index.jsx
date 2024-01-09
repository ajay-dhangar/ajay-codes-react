// Home.js
import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const WelcomeText = styled.h1`
  font-size: 2.5rem;
  align-items: center;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
`;

const CallToAction = styled.button`
  padding: 10px 20px;
  width: 180px;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #a8ef18;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #7dbb17;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <WelcomeText>Welcome to CodesReact!</WelcomeText>
      <Description>
        CodesReact is your go-to resource for learning and mastering React.js.
        Whether you are a beginner or an experienced developer, our courses and
        resources are designed to help you level up your React skills.
      </Description>
      <Description>
        Explore our courses, dive into the world of React, and unlock the
        potential of building modern, interactive web applications.
      </Description>
      <Description>
        Explore the world of React and enhance your web development skills with
        our high-quality courses and resources.
      </Description>
      <CallToAction>Get Started</CallToAction>
    </HomeContainer>
  );
};

export default Home;
