import React from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import { FiPlusCircle, FiXCircle } from "react-icons/fi";

import COLORS from "./COLORS";

const modalOpen = true;

const PurchaseModal = (props) => {
  const handleClose = () => {
    console.log("close");
    // cancelDeletingTasks();
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("click");
    // deleteAllTasks();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="warning" open={modalOpen}>
      <ModalContentWrapper>
        <div style={{ paddingBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{ fontSize: 24 }}>Are you sure?</h1>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p style={{ color: "grey" }}>
              This will delete all tasks from your kanban board.
            </p>
          </div>
        </div>

        <ButtonWrapper>
          <AddButton onClick={handleClick}>
            <FiPlusCircle size={32} />
          </AddButton>

          <ClosedButton onClick={handleClose}>
            <FiXCircle size={32} />
          </ClosedButton>
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

export default PurchaseModal;
