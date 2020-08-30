import React from "react";
import styled from "styled-components";

import { HeaderSponsors } from "./HeaderSponsors";
import COLORS from "../COLORS";

const Header = () => {
  return (
    <Wrapper>
      <Left>
        <PageTitle unselectable="on">The Reducers</PageTitle>
      </Left>
      <Right>
        <HeaderSponsors />
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  height: 80px;
`;

const Left = styled.div`
  margin-left: 5%;
  flex: 4;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
  flex: 6;
`;

const PageTitle = styled.h1`
  user-select: none;
  font-size: 40px;
  font-weight: 500;
  color: ${COLORS.btnPrimary};

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

export default Header;
