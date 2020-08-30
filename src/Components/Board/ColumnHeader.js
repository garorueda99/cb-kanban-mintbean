import React from "react";
import styled from "styled-components";

import { addCard, removeColumn } from "../../actions";
import { useDispatch } from "react-redux";
import { FiPlusCircle, FiXCircle } from "react-icons/fi";
import COLORS from "../COLORS";

export const ColumnHeader = ({ id, name, isEmpty }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <AddButton
        onClick={() => {
          // console.log('New Card Added', columnId);
          dispatch(addCard(id));
        }}
      >
        <FiPlusCircle size={32} />
      </AddButton>

      <HeaderInput value={name} />
      {/* <div style={{ margin: 8 }}> */}

      <ClosedButton
        onClick={() => {
          if (isEmpty) {
            dispatch(removeColumn(id));
          }
        }}
      >
        <FiXCircle size={32} />
      </ClosedButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 8px; */
  /* border: 2px dashed purple; */
  border-bottom: 5px solid ${COLORS.btnPrimary};
`;

const HeaderInput = styled.input`
  width: 80%;
  margin: 3%;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.6;
  text-align: center;
  border: none;
  &:focus {
    outline: 1px solid ${COLORS.outlineSecondary};
  }
`;

const AddButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    color: ${COLORS.btnAdd};
  }

  &:focus {
    color: ${COLORS.btnAdd};
  }

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

  &:hover {
    color: ${COLORS.btnClose};
  }

  &:focus {
    color: ${COLORS.btnClose};
  }

  &:active {
    transform: scale(1.1);
    color: ${COLORS.btnClose};
  }
`;
