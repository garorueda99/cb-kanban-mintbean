import React, { Children } from 'react';
import styled, { keyframes } from 'styled-components';

const close = keyframes`
0%{
 transform: translate(50%, -50%) scale(0.25);
}
55% {
 transform: translate(-50%, -50%) scale(1.15);
}
`;

// let statePost;

export default function Card({ children, state, setState }) {
  // statePost = state;
  return (
    <CardWrapper
      style={{
        display: !state ? 'inline' : 'none',
      }}
    >
      {children}
      <Button
        onClick={() => {
          setState((n) => !n);
        }}
      >
        SAVE
      </Button>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  position: relative;
  padding: 16;
  margin: 0 0 8px 0;
  border-radius: 10px;
  /* transform: translate(-50%, -50%) scale(1); */
  min-height: 120px;
  min-width: 100%;
  background: rgb(246, 243, 33);
  background: linear-gradient(
    225deg,
    rgba(246, 243, 33, 1) 0%,
    rgba(233, 231, 19, 1) 56%,
    rgba(251, 224, 2, 1) 94%,
    rgba(255, 226, 0, 1) 100%
  );
  animation: ${close} 0.9s cubic-bezier(0.075, 0.82, 0.165, 1);
  animation-fill-mode: forwards;
  border: 2px solid green;
`;

const Button = styled.button`
  top: 90%;
  right: 5%;
`;
