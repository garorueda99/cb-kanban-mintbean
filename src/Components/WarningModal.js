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
import { deleteAllTasks, toggleWarningModal } from "../actions";

const PurchaseModal = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleClose = () => {
    dispatch(toggleWarningModal());
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(toggleWarningModal());
    dispatch(deleteAllTasks());
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="warning"
      open={state.openModal}
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
            <h1 style={{ fontSize: 24 }}>Are you sure?</h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 30,
            }}
          >
            <p style={{ color: "grey" }}>
              This will delete all tasks from your kanban board.
            </p>
          </div>
        </div>

        <ButtonWrapper>
          <Tippy
            content={"Yes"}
            placement="top"
            animation="scale-subtle"
            theme="material"
            arrow={true}
            duration={200}
            delay={[400, 0]}
            distance={8}
          >
            <AddButton onClick={handleClick}>
              <FiPlusCircle size={32} />
            </AddButton>
          </Tippy>

          <Tippy
            content={"Cancel"}
            placement="top"
            animation="scale-subtle"
            theme="material"
            arrow={true}
            duration={200}
            delay={[400, 0]}
            distance={8}
          >
            <ClosedButton onClick={handleClose}>
              <FiXCircle size={32} />
            </ClosedButton>
          </Tippy>
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
  background: transparent;
  border: none;
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
  cursor: pointer;
  color: ${COLORS.btnClose};

  &:active {
    transform: scale(1.1);
    color: ${COLORS.btnClose};
  }
`;

export default PurchaseModal;
