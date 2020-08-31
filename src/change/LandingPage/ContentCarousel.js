import React from "react";
import styled from "styled-components";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Step1 from "../../assets/gifs/Step1.gif";
import Step2 from "../../assets/gifs/Step2.gif";
import Step3 from "../../assets/gifs/Step3.gif";
import COLORS from "../COLORS";

export const ContentCarousel = (props) => {
  const items = [
    {
      title: "Step 1.",
      description: "Start by entering your project's name.",
      imgSrc: Step1,
    },
    {
      title: "Step 2.",
      description: "Add any tasks to any column to start working!",
      imgSrc: Step2,
    },
    {
      title: "Step 3.",
      description:
        "Be Productive! Advance your tasks to the next column as it gets completed.",
      imgSrc: Step3,
    },
  ];

  return (
    <Wrapper>
      <MainTitle>How to Start Using Your Board</MainTitle>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Wrapper>
  );
};

function Item(props) {
  return (
    <Paper>
      <Container>
        <Animation src={props.item.imgSrc} alt={props.item.title} />
        <Content>
          <Title>{props.item.title}</Title>
          <Text>{props.item.description}</Text>
        </Content>
      </Container>
    </Paper>
  );
}

const Wrapper = styled.div`
  position: relative;
  /* border: 5px solid red; */
  margin: 10vh 0;
  padding: inherit;
`;

const Animation = styled.img`
  width: 800px;
  flex: 2;

  @media (max-width: 1150px) {
    /* width: 700px; */
    margin: 0 auto;
  }
`;

const Container = styled.div`
  display: flex;

  @media (max-width: 1150px) {
    display: flex;
    flex-direction: column;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin: 20px 0;
  color: ${COLORS.btnPrimary};
`;

const Text = styled.p`
  font-size: 26px;
`;

const MainTitle = styled.h1`
  font-size: 44px;
  text-align: center;
  font-weight: 400;
  margin-bottom: 50px;
  color: ${COLORS.outlineGrey};
`;
