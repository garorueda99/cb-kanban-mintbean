import React from "react";
import styled from "styled-components";

import test from "../../assets/test.gif";

import COLORS from "../COLORS";

export const ContentHero = () => {
  return (
    <Wrapper>
      <CardContainer>
        <Column>
          <Title>Simple. Easy. Organized. Kanban.</Title>
          <p>Introducing the latest Kaban application to the world</p>
          <Form action="/board">
            <Button type="submit">Get Started</Button>
          </Form>
        </Column>
        <Column>
          <Animation src={test} />
        </Column>
      </CardContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 5px solid red; */
  background: white;
  min-height: 80vh;
`;

const Title = styled.h1`
  margin: 5% 0;
  text-align: left;
  font-weight: 400;
  font-size: 56px;
  font-family: "Roboto", sans-serif;
`;

const Animation = styled.img`
  position: relative;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  margin: 20px 0;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
  /* margin: 5% 0; */
  min-height: 80vh;

  /* Optional Card or Not */
  /* box-shadow: 0px 2px 2px 2px rgba(211, 211, 211, 0.75);
      border: 1px solid lightgray;
      border-radius: 12px; */
`;

const Column = styled.div`
  position: relative;
  /* border: 5px dashed goldenrod; */
  flex: 1;
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
`;
