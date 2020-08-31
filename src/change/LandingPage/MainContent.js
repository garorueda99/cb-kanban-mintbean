import React from "react";
import styled from "styled-components";

import { ContentHero } from "./ContentHero";
import { ContentSponsors } from "./ContentSponsors";
import { ContentCarousel } from "./ContentCarousel";

const MainContent = () => {
  return (
    <Wrapper>
      <ContentHero />
      <ContentCarousel />
      <ContentSponsors />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 85%;
`;

export default MainContent;
