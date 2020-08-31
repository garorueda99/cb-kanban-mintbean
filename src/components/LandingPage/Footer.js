import React from "react";
import styled from "styled-components";
import COLORS from "../COLORS";

const Footer = () => {
  return (
    <Wrapper>
      <FooterTitle>This is only a demo</FooterTitle>
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

export default Footer;
