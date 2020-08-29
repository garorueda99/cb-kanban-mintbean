import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <List>
        <li>
          <Link target="_blank" href="https://concordiabootcamps.ca/">
            Concordia Bootcamp
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://www.mintbean.io/">
            Mintbean
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://featurepeek.com/">
            FeaturePeek
          </Link>
        </li>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  /* border: 5px solid pink; */
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: #3f51b5;
  height: 10vh;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & li {
    padding: 0 20px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;
