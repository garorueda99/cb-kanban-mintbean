import React from "react";
import styled from "styled-components";

// ### MATERIAL UI ###
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const MainContent = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Title>Simple. Easy. Organized. Kanban.</Title>
      <LaunchContainer className={classes.root}>
        <Button size="large" variant="contained" color="secondary">
          <ButtonLink href="/board">Get Started</ButtonLink>
        </Button>
      </LaunchContainer>
    </Container>
  );
};

const Title = styled.h1`
  margin: 5% 0;
  text-align: center;
  font-weight: 400;
  font-size: 56px;
`;

const LaunchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export default MainContent;
