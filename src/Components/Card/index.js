import React, { Children } from 'react';
import styled, { keyframes } from 'styled-components';

const close = keyframes`
0%{
 transform: translate(50%, -50%) scale(0.25);
}
55% {
 transform: translate(-50%, -50%) scale(1.15);
}
100% {
 transform: translate(0%, 0%) scale(1);
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
  position: absolute;
  transform: translate(-50%, -50%) scale(1);
  width: 300px;
  height: 400px;
  background: rgb(246, 243, 33);
  background: linear-gradient(
    225deg,
    rgba(246, 243, 33, 1) 0%,
    rgba(233, 231, 19, 1) 56%,
    rgba(251, 224, 2, 1) 94%,
    rgba(255, 226, 0, 1) 100%
  );
  box-shadow: 0 2rem 5rem 0 #888888;
  border-radius: 12px;
  animation: ${close} 0.9s cubic-bezier(0.075, 0.82, 0.165, 1);
  animation-fill-mode: forwards;
`;

const Button = styled.button`
  top: 90%;
  right: 5%;
`;
