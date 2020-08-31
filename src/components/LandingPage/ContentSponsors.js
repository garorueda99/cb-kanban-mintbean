import React from "react";
import styled from "styled-components";

import cbLogo from "../../assets/cbLogo.png";
import cuLogo from "../../assets/cuLogo.png";
import fpLogo from "../../assets/fpLogo.png";
import mbLogo from "../../assets/mbLogo.jpg";

import COLORS from "../COLORS";

export const ContentSponsors = () => {
  return (
    <LogoContainer>
      <Title>Our Affiliates</Title>
      <LogoList>
        <li>
          <Link
            target="_blank"
            href="https://concordiabootcamps.ca/"
            alt="Concordia Bootcamp"
          >
            <Logo src={cbLogo} />
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://www.concordia.ca/"
            alt="Concordia University"
          >
            <Logo src={cuLogo} />
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://www.mintbean.io/"
            alt="FeaturePeek"
          >
            <Logo src={fpLogo} />
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://featurepeek.com/" alt="Mintbean">
            <Logo src={mbLogo} />
          </Link>
        </li>
      </LogoList>
    </LogoContainer>
  );
};

const Title = styled.h1`
  font-size: 44px;
  text-align: center;
  font-weight: 400;
  margin-bottom: 50px;
  color: ${COLORS.outlineGrey};
`;

const LogoContainer = styled.div`
  position: relative;
  margin: 20vh 0;
  /* border: 5px solid red; */
  /* background: white; */
  /* min-height: 5vh; */
`;

const LogoList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: 2px solid red; */
  background-color: white;
  padding: 2%;
  margin: 3em 0;

  @media (max-width: 1150px) {
    /* flex-direction: column; */
    flex-wrap: wrap;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: 100%;
  opacity: 0.75;

  @media (max-width: 1150px) {
    /* flex-direction: column; */
    width: 70px;
  }
`;

const Link = styled.a`
  outline: none;
  &:hover {
    & img {
      outline: none;
      opacity: 1;
    }
  }
  &:focus {
    & img {
      opacity: 1;
      outline: none;
      transform: scale(1.1);
    }
  }

  &:active {
    & img {
      opacity: 1;
      outline: none;
      transform: scale(1.1);
    }
  }
`;
