import React from "react";
import styled from "styled-components";

import { ContentHero } from "./ContentHero";
import { ContentCarousel } from "./ContentCarousel";

const MainContent = () => {
  return (
    <Wrapper>
      <ContentHero />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 85%;
`;

export default MainContent;
