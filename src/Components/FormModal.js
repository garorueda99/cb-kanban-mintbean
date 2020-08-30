import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
// import { FiPlusCircle, FiXCircle } from "react-icons/fi";
// import Tippy from "@tippyjs/react";
// import "tippy.js/dist/tippy.css";
// import "tippy.js/themes/material.css";
// import "tippy.js/animations/scale-subtle.css";

import COLORS from "./COLORS";
import { toggleBoardForm, updateBoardName } from "../actions";
import { Input } from "@material-ui/core";

const FormModal = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

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
    <Dialog
      onClose={handleClose}
      aria-labelledby="warning"
      open={state.kanbanForm}
    >
      <ModalContentWrapper>
        <FormWrapper name="kanbanForm" onSubmit={handleSubmit}>
          {/* <FormHeader> */}
          <Title>Please enter your new Kanban Board name!</Title>
          {/* </FormHeader> */}
          {/* <FormInput> */}
          <InputField name="kanbanName" type="text" />
          {/* </FormInput> */}
          <AddButton type="submit">Submit</AddButton>
        </FormWrapper>

        {/* <ButtonWrapper> */}
        {/* <AddButton onClick={handleClick}>Submit</AddButton> */}
        {/* </ButtonWrapper> */}
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

const FormHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin: 10px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const FormInput = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
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
