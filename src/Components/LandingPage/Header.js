import React from "react";
import styled from "styled-components";

// ### MATERIAL UI IMPORTS ###
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Logo from "../../assets/cbLogo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <NavLogo src={Logo} />
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            The Reducers
          </Typography>
          <Button color="inherit">
            <ButtonLink href="/board">Launch</ButtonLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const NavLogo = styled.img`
  width: 42px;
  height: 42px;
`;

const ButtonLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export default Header;
