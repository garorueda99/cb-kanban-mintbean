import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";

import COLORS from "./COLORS";
import { toggleBoardForm, updateBoardName } from "../actions";
import { Input } from "@material-ui/core";

const FormModal = () => {
  const dispatch = useDispatch();
  const boardName = useSelector((state) => state.kanbanName);

  // Check if there is a name for the board, only trigers the modal when the
  //field is emtpy
  let hasName = false;
  if (!boardName) {
    hasName = true;
  }

  const handleClose = () => {
    dispatch(toggleBoardForm());
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const name = document.kanbanForm.kanbanName.value;
    dispatch(toggleBoardForm());
    dispatch(updateBoardName(name));
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="warning" open={hasName}>
      <ModalContentWrapper>
        <FormWrapper name="kanbanForm" onSubmit={handleSubmit}>
          <Title>Please enter your new Kanban Board name!</Title>
          <InputField name="kanbanName" type="text" />
          <AddButton type="submit">Submit</AddButton>
        </FormWrapper>
      </ModalContentWrapper>
    </Dialog>
  );
};

const ModalContentWrapper = styled.div`
  padding: 20px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin: 10px 0;
`;

const InputField = styled(Input)`
  width: 50%;
  font-size: 22px;
  margin: 10px 0;
`;

const AddButton = styled.button`
  margin-top: 25px;
  padding: 5px 8px;
  background-color: white;
  color: ${COLORS.btnSecondary};
  cursor: pointer;
  border-radius: 15px;
  border: 3px solid ${COLORS.btnSecondary};
  font-size: 22px;

  &:hover {
    border: 3px solid ${COLORS.btnPrimary};
    background-color: ${COLORS.btnPrimary};
    color: white;
  }

  &:active {
    outline: none;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    border: 3px solid ${COLORS.btnPrimary};
    background-color: ${COLORS.btnPrimary};
    color: white;
  }
`;

export default FormModal;
