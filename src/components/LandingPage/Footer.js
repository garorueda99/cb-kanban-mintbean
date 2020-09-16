import React from "react";
import styled from "styled-components";
import COLORS from "../COLORS";

const Footer = () => {
  return (
    <Wrapper>
      <FooterTitle>
        Reduced by the Reducers{": "}
        <Link href="https://github.com/garorueda99" target="_blank">
          Andres Rueda
        </Link>
        ,{" "}
        <Link href="https://github.com/donnyesq" target="_blank">
          Adonis Lahlou
        </Link>
        , and{" "}
        <Link href="https://github.com/g-thinh" target="_blank">
          Gia Thinh Nguyen
        </Link>
      </FooterTitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  /* border: 5px solid pink; */
  display: flex;
  position: relative;
  /* bottom: 0; */
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.btnPrimary};
  height: 10vh;
`;

const FooterTitle = styled.h1`
  color: white;
  font-size: 16px;
  font-weight: 400;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;
