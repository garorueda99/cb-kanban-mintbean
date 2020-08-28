import React from "react";
import styled from "styled-components";

const LandingPage = () => {
  return (
    <Wrapper>
      <div>This is the Landing Page!</div>

      <div>
        <LaunchButton>
          <a href="/board">Launch</a>
        </LaunchButton>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid red;
`;

const UnstyledButton = styled.button`
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;

  &:active {
    color: inherit;
  }
`;

const LaunchButton = styled.button`
  width: 300px;
  height: 60px;
  border: 1px solid black;
`;

export default LandingPage;
