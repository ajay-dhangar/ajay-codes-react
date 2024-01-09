import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const ContactInfo = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  max-width: 600px;
  margin-bottom: 30px;
`;

const GitHubLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const EmailLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactInfo>
        If you have any questions or inquiries, feel free to reach out to us.
        You can also find me on GitHub and email:
        <br />
        GitHub:{" "}
        <GitHubLink href="https://github.com/Ajay-Dhangar" target="_blank" rel="noopener noreferrer">
          Ajay-Dhangar
        </GitHubLink>
        <br />
        Email:{" "}
        <EmailLink href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
          your.email@example.com
        </EmailLink>
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;
