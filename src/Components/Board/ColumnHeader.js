import React, { useState, useEffect } from "react";
import styled from "styled-components";
import uuid from "uuid/v4";

import { addCard, removeColumn, toggleRemoveColumn } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { FiPlusCircle, FiXCircle } from "react-icons/fi";
import COLORS from "../COLORS";

// ## FOR SNACKBAR MESSAGES
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

//## TOOLTIPS
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import "tippy.js/animations/scale-subtle.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export const ColumnHeader = ({
  id,
  name,
  isEmpty,
  setCardStatus,
  setCardItem,
  setColumnCard,
}) => {
  const columns = useSelector((state) => state.columns);
  const toggleDelete = useSelector((state) => state.toggleDelete);

  const [formName, setFormName] = useState(name);
  const [toggleWarning, setToggleWarning] = React.useState(false);
  const [toggleRemove, setToggleRemove] = React.useState(false);

  const dispatch = useDispatch();
  const classes = useStyles();

  const warningMsgOpen = () => {
    setToggleWarning(true);
  };

  const warningMsgClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToggleWarning(false);
  };

  //############################# DELETE MODAL ###############################

  const deleteMsgOpen = () => {
    console.log("Hello there");
    setToggleRemove(true);
  };

  const deleteMsgClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToggleRemove(false);
  };

  //######################################################################

  return (
    <Wrapper>
      <Tippy
        content={"New task"}
        placement="top"
        animation="scale-subtle"
        theme="material"
        arrow={true}
        duration={200}
        delay={[400, 0]}
        distance={8}
      >
        <AddButton
          onClick={() => {
            const newCardId = uuid();
            dispatch(addCard(id, newCardId));
            setColumnCard(id);
            setCardItem({
              id: newCardId,
              content: "New Task",
            });
            setCardStatus((n) => !n);
          }}
        >
          <FiPlusCircle size={32} />
        </AddButton>
      </Tippy>

      <HeaderInput
        value={formName}
        onChange={(e) => {
          setFormName(e.target.value);
        }}
      />
      {/* <div style={{ margin: 8 }}> */}

      <Tippy
        content={"Close"}
        placement="top"
        animation="scale-subtle"
        theme="material"
        arrow={true}
        duration={200}
        delay={[400, 0]}
        distance={8}
      >
        <ClosedButton
          onClick={() => {
            if (isEmpty) {
              dispatch(removeColumn(id));
              dispatch(toggleRemoveColumn());
            } else {
              warningMsgOpen();
            }
          }}
        >
          <FiXCircle size={32} />
        </ClosedButton>
      </Tippy>
      <Snackbar
        open={toggleWarning}
        autoHideDuration={2000}
        onClose={warningMsgClose}
      >
        <Alert onClose={warningMsgClose} severity="warning">
          Unable to remove, there are tasks in this column.
        </Alert>
      </Snackbar>
      <Snackbar
        open={toggleDelete}
        autoHideDuration={2000}
        onClose={() => dispatch(toggleRemoveColumn())}
      >
        <Alert onClose={() => dispatch(toggleRemoveColumn())} severity="error">
          Column was removed.
        </Alert>
      </Snackbar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const HeaderInput = styled.input`
  width: 80%;
  margin: 3%;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.6;
  text-align: center;
  border: none;
  color: ${COLORS.textPrimary};
  outline: none;
  background-color: inherit;
  &:focus {
    color: grey;
    border-bottom: 1px solid ${COLORS.outlineGrey};
  }
`;

const AddButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${COLORS.btnAdd};

  &:active {
    transform: scale(1.1);
    color: ${COLORS.btnAdd};
  }
`;

const ClosedButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${COLORS.btnClose};

  &:active {
    transform: scale(1.1);
    color: ${COLORS.btnClose};
  }
`;
