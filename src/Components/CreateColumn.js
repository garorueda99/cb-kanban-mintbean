import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import uuid from "uuid/v4";

import { addColumn } from "../actions";

const id = uuid();
const name = "New column";

const column = {
  [id]: {
    name,
    items: [],
  },
};

const StoreItem = ({ id, name }) => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(addColumn({ id, column }))}>
      Add column
    </button>
  );
};

export default StoreItem;
