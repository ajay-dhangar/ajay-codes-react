// About.js
import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Introduction = styled.p`
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  max-width: 600px;
  margin-bottom: 30px;
`;

const Quotation = styled.blockquote`
  font-style: italic;
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  max-width: 600px;
  margin-bottom: 30px;
`;

const GitHubLink = styled.a`
  color: #a8ef18;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #7dbb17;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <ProfileImage
        src="https://avatars.githubusercontent.com/Ajay-Dhangar"
        alt="Ajay Dhangar"
      />
      <Introduction>
        Hi, I'm Ajay Dhangar, a passionate web developer. I love working with
        React and exploring new technologies. Check out my projects and
        contributions on{" "}
        <GitHubLink href="https://github.com/Ajay-Dhangar" target="_blank">
          GitHub
        </GitHubLink>
        .
      </Introduction>
      <Quotation>
        "Coding is not just about writing lines of code; it's about creating
        solutions, solving problems, and bringing ideas to life."
      </Quotation>
      <Quotation>
        "Coding is not just my profession; it's my way of turning ideas into
        reality."
      </Quotation>
    </AboutContainer>
  );
};

export default About;
