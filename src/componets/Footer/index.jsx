import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #100116;
  padding: 30px 0;
  text-align: center;
  color: #fff;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

const FooterSection = styled.div`
  max-width: 330px;
  margin-bottom: 20px;

  h2 {
    color: #fff;
    border-bottom: 1px solid #fff;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  p {
    color: #ccc;
    font-size: 1rem;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 8px;
    }

    a {
      text-decoration: none;
      color: #a8ef18;
      font-weight: bold;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #fff;
      }
    }
  }
`;

const ContactInfo = styled.div`
  h2 {
    color: #fff;
    border-bottom: 1px solid #fff;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  p {
    color: #ccc;
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const Copyright = styled.p`
  color: #ccc;
  font-size: 1.2rem;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h2>About Us</h2>
          <p>
            CodesReact is a platform dedicated to providing high-quality
            resources to help developers enhance their skills. Our mission is to
            empower individuals on their coding journey and contribute to the
            developer community.
          </p>
        </FooterSection>
        <FooterSection>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/ajay-codes-react/about">About</a>
            </li>
            <li>
              <a href="/ajay-codes-react/courses">Courses</a>
            </li>
            <li>
              <a href="/ajay-codes-react/contact">Contact</a>
            </li>
          </ul>
        </FooterSection>
        <ContactInfo>
          <h2>Contact Us</h2>
          <p>
            Email: <a href="mailto:dhangarajay13@gmail.com">dhangarajay13@gmail.com</a>
            <br />
            Phone: +91 7XX X5X XX05
          </p>
        </ContactInfo>
      </FooterContent>
      <Copyright>&copy; 2024 AjayCodesReact. All Rights Reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
