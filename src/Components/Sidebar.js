import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import uuid from "uuid/v4";
import CreateColumn from "./CreateColumn";
import { addColumn } from "../actions";
import COLORS from "./COLORS";
import { FiArrowLeft, FiEdit, FiTrash2 } from "react-icons/fi";

// ## TIPPY TOOLTIPS ##
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import "tippy.js/animations/scale-subtle.css";

const Sidebar = () => {
  const id = uuid();
  let name = "New column";
  const dispatch = useDispatch();

  const column = {
    name,
    items: [],
  };

  return (
    <Wrapper>
      <Container>
        <SidebarList>
          <li>
            <Tippy
              content={"Back"}
              placement="right"
              animation="scale-subtle"
              theme="material"
              arrow={true}
              duration={200}
              delay={[400, 0]}
              distance={8}
            >
              <StyledNavLink exact to="/">
                <FiArrowLeft size={36} />
              </StyledNavLink>
            </Tippy>
          </li>
          <li>
            <Tippy
              content={"New column"}
              placement="right"
              animation="scale-subtle"
              theme="material"
              arrow={true}
              duration={200}
              delay={[400, 0]}
              distance={8}
            >
              <Button onClick={() => dispatch(addColumn(column, id))}>
                <FiEdit size={36} />
              </Button>
            </Tippy>
          </li>
          <li>
            <Tippy
              content={"Clear all tasks"}
              placement="right"
              animation="scale-subtle"
              theme="material"
              arrow={true}
              duration={200}
              delay={[400, 0]}
              distance={8}
            >
              <Button onClick={() => console.log("Clear All Tasks")}>
                <FiTrash2 size={36} />
              </Button>
            </Tippy>
          </li>
        </SidebarList>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  min-width: 100px;
  min-height: 100vh;
  padding: 5%;
  /* border: 1px solid red; */

  box-shadow: 0px 2px 2px 2px rgba(211, 211, 211, 0.75);
  border-right: 1px solid gainsboro;
`;

const SidebarList = styled.ul`
  padding: 5%;
  /* border: 3px dashed red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 15% 0;
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    color: ${COLORS.btnSecondary};
  }

  &:focus {
    color: ${COLORS.btnSecondary};
  }

  &:active {
    transform: scale(1.3);
    color: ${COLORS.btnSecondary};
  }
`;

const StyledNavLink = styled(Link)`
  /* color: ${COLORS.btnSecondary}; */

  &:hover {
    color: ${COLORS.btnSecondary};
    border-radius: 30px;
    cursor: pointer;
  }

  &:focus {
    outline: none;
    /* transform: scale(1.5); */
    color: ${COLORS.btnSecondary};
  }

  &:active {
    transform: scale(1.3);
    color: ${COLORS.btnSecondary};
  }
`;

export default Sidebar;
