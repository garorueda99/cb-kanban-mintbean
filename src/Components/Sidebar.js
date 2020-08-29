import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { FiHome } from "react-icons/fi";

const Sidebar = () => {
  return (
    <StyledAside className="sidebar-nav">
      <StyledDiv>
        <StyledUl>
          <StyledLi>
            <StyledNavLink exact to="/">
              <FiHome style={{ marginRight: "10px" }} />
              Home
            </StyledNavLink>
          </StyledLi>
        </StyledUl>

        <StyledButton>New Column</StyledButton>
        <StyledButton>New Task</StyledButton>
      </StyledDiv>
    </StyledAside>
  );
};

const StyledAside = styled.aside`
  min-width: 180px;
  border-right: 1px solid gainsboro;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  color: #000;
  padding: 10px;

  &:hover {
    background-color: #cab8f8;
    color: blue;
    border-radius: 30px;
    cursor: pointer;
  }

  &.active {
    color: blue;
  }
`;

const StyledUl = styled.ul`
  padding: 0;
`;

const StyledLi = styled.li`
  margin: 5px 0 5px 5px;
  padding: 8px;
`;

const StyledButton = styled.button`
  background-color: blue;
  border-radius: 30px;
  color: white;
  border: none;
  padding: 5px;
  width: 80%;
  margin: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export default Sidebar;
