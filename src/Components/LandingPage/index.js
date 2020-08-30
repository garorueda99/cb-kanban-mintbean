import React from "react";
import styled from "styled-components";

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <Wrapper>
      <Header />
      <MainContent />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
`;

export default LandingPage;
