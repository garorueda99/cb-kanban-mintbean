import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import uuid from "uuid/v4";
import CreateColumn from "./CreateColumn";
import { addColumn, toggleWarningModal } from "../actions";
import COLORS from "./COLORS";
import { FiArrowLeft, FiEdit, FiTrash2 } from "react-icons/fi";

// ## TIPPY TOOLTIPS ##
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import "tippy.js/animations/scale-subtle.css";

// ## SNACKBAR ##
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Sidebar = () => {
  const [isMaxCols, setIsMaxCols] = React.useState(false);
  const [addCol, setAddCol] = React.useState(false);
  const id = uuid();
  let name = "New column";
  const dispatch = useDispatch();

  const column = {
    name,
    items: [],
  };

  const state = useSelector((state) => state);
  // console.log("we have this many columns", Object.keys(state.columns).length);

  const numCols = Object.keys(state.columns).length;

  //############################# MAX COLS MSG #####################

  const maxColsMsgOpen = () => {
    setIsMaxCols(true);
  };

  const maxColsMsgClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsMaxCols(false);
  };

  //########################## NEW COL MSG #########################

  const addColMsgOpen = () => {
    setAddCol(true);
  };

  const addColMsgClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAddCol(false);
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
              <StyledNavLink to="/">
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
              <Button
                onClick={() => {
                  if (numCols < 6) {
                    addColMsgOpen();
                    dispatch(addColumn(column, id));
                  } else {
                    // window.alert("Too many columns");
                    maxColsMsgOpen();
                  }
                }}
              >
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
              <Button
                onClick={() => {
                  dispatch(toggleWarningModal());
                }}
              >
                <FiTrash2 size={36} />
              </Button>
            </Tippy>
          </li>
        </SidebarList>
      </Container>
      <Snackbar
        open={isMaxCols}
        autoHideDuration={2000}
        onClose={maxColsMsgClose}
      >
        <Alert onClose={maxColsMsgClose} severity="info">
          Max Columns Reached.
        </Alert>
      </Snackbar>
      <Snackbar open={addCol} autoHideDuration={2000} onClose={addColMsgClose}>
        <Alert onClose={addColMsgClose} severity="success">
          New Column Added.
        </Alert>
      </Snackbar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const Container = styled.div`
  min-width: 60px;
  min-height: 100vh;
  padding: 5%;

  box-shadow: 0px 2px 2px 2px rgba(211, 211, 211, 0.75);
  border-right: 1px solid gainsboro;
`;

const SidebarList = styled.ul`
  padding: 5%;
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
