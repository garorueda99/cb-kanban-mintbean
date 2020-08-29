import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CreateColumn from "./CreateColumn";

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

        <CreateColumn />
      </StyledDiv>
    </StyledAside>
  );
};

const StyledAside = styled.aside`
  min-width: 140px;
  border-right: 1px solid gainsboro;
  margin-right: 40px;
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

export default Sidebar;
