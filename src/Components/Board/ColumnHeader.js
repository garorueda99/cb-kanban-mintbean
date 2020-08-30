import React, { useState } from "react";
import styled from "styled-components";

import { addCard, removeColumn } from "../../actions";
import { useDispatch } from "react-redux";
import { FiPlusCircle, FiXCircle } from "react-icons/fi";
import COLORS from "../COLORS";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import "tippy.js/animations/scale-subtle.css";

export const ColumnHeader = ({ id, name, isEmpty }) => {
  const [formName, setFormName] = useState(name);
  const dispatch = useDispatch();
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
            dispatch(addCard(id));
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
            }
          }}
        >
          <FiXCircle size={32} />
        </ClosedButton>
      </Tippy>
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
