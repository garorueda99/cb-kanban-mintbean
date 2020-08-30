import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import uuid from 'uuid/v4';
import { FiPlusCircle } from 'react-icons/fi';

import { addColumn } from '../actions';

const StoreItem = () => {
  const id = uuid();
  let name = 'New column';
  const dispatch = useDispatch();

  const column = {
    name,
    items: [],
  };

  return (
    <IconWrapper>
      <CircleIcon
        onClick={() => {
          dispatch(addColumn(column, id));
        }}
      />
      <IconText>Add new column</IconText>
    </IconWrapper>
  );
};

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleIcon = styled(FiPlusCircle)`
  margin: 5px;
  &:hover {
    cursor: pointer;
    color: #0acc33;
  }
`;

const IconText = styled.span`
  font-size: 12px;
`;

export default StoreItem;
