import React from "react";
import styled from "styled-components/macro";

import { Link } from "react-router-dom";

import test from "../../assets/test.gif";

import COLORS from "../COLORS";

export const ContentHero = () => {
  return (
    <Wrapper>
      <CardContainer>
        <Column>
          <Title>
            Simple. Easy. Organized. <h1>Kanban.</h1>
          </Title>
          <Text>
            Introducing the latest Kaban application to the world for your every
            day productivity needs.
          </Text>
          <ButtonContainer>
            <Button type="submit">
              <StyledLink to="/board">Get Started</StyledLink>
            </Button>
          </ButtonContainer>
        </Column>
        <Column>
          <Animation src={test} />
        </Column>
      </CardContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  min-height: 80vh;
`;

const Title = styled.h1`
  margin: 5% 0;
  text-align: left;
  font-weight: 400;
  font-size: 56px;
  font-family: "Roboto", sans-serif;
  & h1 {
    font-weight: 400;
    color: ${COLORS.btnPrimary};
  }

  @media (max-width: 860px) {
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 24px;
`;

const Animation = styled.img`
  position: relative;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  margin: 20px 0;

  @media (max-width: 860px) {
    display: flex;
    justify-content: center;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
  min-height: 80vh;

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
  }
`;

const Column = styled.div`
  position: relative;
  /* border: 5px dashed goldenrod; */
  flex: 1;

  @media (max-width: 860px) {
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Button = styled.button`
  padding: 8px 12px;
  background-color: white;
  color: ${COLORS.btnSecondary};
  cursor: pointer;
  border-radius: 15px;
  border: 3px solid ${COLORS.btnSecondary};
  font-size: 22px;

  &:hover {
    border: 3px solid ${COLORS.btnPrimary};
    background-color: ${COLORS.btnPrimary};
    color: white;
  }

  &:active {
    outline: none;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    border: 3px solid ${COLORS.btnPrimary};
    background-color: ${COLORS.btnPrimary};
    color: white;
  }

  @media (max-width: 860px) {
    text-align: center;
  }
`;
