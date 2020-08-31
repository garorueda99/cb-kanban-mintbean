import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import { FiPlusCircle, FiXCircle } from "react-icons/fi";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import "tippy.js/animations/scale-subtle.css";

import COLORS from "./COLORS";
import { deleteEverything, toggleClearAllModal } from "../actions";

const ClearAllModal = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleClose = () => {
    dispatch(toggleClearAllModal());
  };

  const handleClick = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    dispatch(deleteEverything());
    dispatch(toggleClearAllModal());
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="warning"
      open={state.openClearAllModal}
    >
      <ModalContentWrapper>
        <div style={{ paddingBottom: 20 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <h1 style={{ fontSize: 24 }}>Reset the Board?</h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 30,
            }}
          >
            <p style={{ color: "grey" }}>
              This will delete all content from your kanban board.
            </p>
          </div>
        </div>

        <ButtonWrapper>
          <AddButton onClick={handleClick}>Okay</AddButton>
          <ClosedButton onClick={handleClose}>Cancel</ClosedButton>
        </ButtonWrapper>
      </ModalContentWrapper>
    </Dialog>
  );
};

const ModalContentWrapper = styled.div`
  padding: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const AddButton = styled.button`
  font-size: 22px;
  padding: 8px 12px;
  background-color: white;
  border: 3px solid transparent;
  cursor: pointer;
  border-radius: 15px;
  color: ${COLORS.btnAdd};

  &:active {
    transform: scale(1.1);
    color: ${COLORS.btnAdd};
  }

  &:hover {
    border: 3px solid ${COLORS.btnAdd};
    background-color: ${COLORS.btnAdd};
    color: white;
  }

  &:focus {
    outline: none;
    border: 3px solid ${COLORS.btnAdd};
    background-color: ${COLORS.btnAdd};
    color: white;
  }
`;

const ClosedButton = styled.button`
  font-size: 22px;
  padding: 8px 12px;
  background-color: white;
  border: 3px solid transparent;
  cursor: pointer;
  border-radius: 15px;
  color: ${COLORS.btnClose};

  &:active {
    transform: scale(1.1);
    color: ${COLORS.btnClose};
  }

  &:hover {
    border: 3px solid ${COLORS.btnClose};
    background-color: ${COLORS.btnClose};
    color: white;
  }

  &:focus {
    outline: none;
    border: 3px solid ${COLORS.btnClose};
    background-color: ${COLORS.btnClose};
    color: white;
  }
`;

export default ClearAllModal;
