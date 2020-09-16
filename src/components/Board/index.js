import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Card from '../Card';
import Sidebar from '../Sidebar';
import { useSelector } from 'react-redux';
import {
  updateColumnPositionH,
  updateColumnPositionV,
  toggleBoardForm,
  updateBoardName,
  deleteCard,
} from '../../actions';
import { useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import COLORS from '../COLORS';
import { BiEdit } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';

//## COMPONENTS ##
import { ColumnHeader } from './ColumnHeader';

// ## TIPPY TOOLTIPS ##
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';
import 'tippy.js/animations/scale-subtle.css';

const Board = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.columns);
  const [cardStatus, setCardStatus] = useState(false);
  const [cardItem, setCardItem] = useState(false);
  const [columnCard, setColumnCard] = useState(null);
  const boardName = useSelector((state) => {
    return state.kanbanName;
  });

  const state = useSelector((state) => state);

  const onDragEnd = (result, columns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const sourceId = source.droppableId;
    const destinationId = destination.droppableId;
    const sourceColumn = columns[sourceId];
    const destColumn = columns[destinationId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);

    if (sourceId !== destinationId) {
      destItems.splice(destination.index, 0, removed);

      dispatch(
        updateColumnPositionH(
          columns,
          sourceId,
          sourceColumn,
          sourceItems,
          destinationId,
          destColumn,
          destItems
        )
      );
    } else {
      const column = columns[sourceId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      dispatch(updateColumnPositionV(columns, sourceId, column, copiedItems));
    }
  };

  React.useEffect(() => {
    if (window.location.pathname === '/board') {
      dispatch(toggleBoardForm());
    }
  }, []);

  if (!columns) {
    return (
      <Loading>
        <LoadingTitle>Loading App... one moment please...</LoadingTitle>
        <CircularProgress size={100} />
      </Loading>
    );
  }

  return (
    <Wrapper>
      <Sidebar />
      <BoardContainer>
        <BoardTitle
          onChange={(ev) => dispatch(updateBoardName(ev.target.value))}
          type='text'
          value={boardName}
          placeholder={'Enter Project Name'}
        />
        <ColumnsContainer>
          <DragDropContext onDragEnd={(result) => onDragEnd(result, columns)}>
            {Object.entries(columns).map(([columnId, column], index) => {
              const hasTasks = columns[columnId].items.length <= 0;
              return (
                <ColumnContainer key={columnId}>
                  <ColumnHeader
                    id={columnId}
                    name={column.name}
                    isEmpty={hasTasks}
                    setCardStatus={setCardStatus}
                    setCardItem={setCardItem}
                    setColumnCard={setColumnCard}
                    columnCard={columnCard}
                  />
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <TasksContainer
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          // style={{
                          //   background: snapshot.isDraggingOver
                          //     ? "gainsboro"
                          //     : "white",
                          // }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <TaskItem
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        boxShadow: snapshot.isDragging
                                          ? '0px 0px 13px -1px rgba(168,168,168,0.6)'
                                          : '0px 0px 13px -1px rgba(168,168,168,0.3)',
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {/* <Card item={item} columnId={columnId}> */}
                                      <TaskWrapper>
                                        <span
                                          style={{
                                            minWidth: '190px',
                                          }}
                                        >
                                          {item.content}
                                        </span>
                                        <Tippy
                                          content={'Delete Task'}
                                          placement='top'
                                          animation='scale-subtle'
                                          theme='material'
                                          arrow={true}
                                          duration={200}
                                          delay={[1000, 0]}
                                          distance={8}
                                        >
                                          <MiniButton
                                            onClick={() => {
                                              dispatch(
                                                deleteCard(columnId, item.id)
                                              );
                                            }}
                                          >
                                            <AiOutlineDelete />
                                          </MiniButton>
                                        </Tippy>
                                        <Tippy
                                          content={'Edit Task'}
                                          placement='top'
                                          animation='scale-subtle'
                                          theme='material'
                                          arrow={true}
                                          duration={200}
                                          delay={[1000, 0]}
                                          distance={8}
                                        >
                                          <MiniButton
                                            onClick={() => {
                                              setCardStatus((n) => !n);
                                              setCardItem(item);
                                              setColumnCard(columnId);
                                            }}
                                          >
                                            <BiEdit />
                                          </MiniButton>
                                        </Tippy>
                                      </TaskWrapper>
                                      {/* </Card> */}
                                    </TaskItem>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </TasksContainer>
                      );
                    }}
                  </Droppable>
                </ColumnContainer>
              );
            })}
          </DragDropContext>
        </ColumnsContainer>
      </BoardContainer>
      {cardStatus && (
        <Card
          item={cardItem}
          cardStatus={cardStatus}
          setCardStatus={setCardStatus}
          columnId={columnCard}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  /* align-items: center; */
  /* overflow: visible; */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 5px solid red; */
`;

const BoardTitle = styled.input`
  text-align: center;
  padding: 12px;
  font-size: 32px;
  outline: none;
  border: none;
  color: ${COLORS.textPrimary};
  font-weight: 500;
  min-width: 200px;
  &::placeholder {
    opacity: 0.4;
  }
  &:active {
    outline: initial;
    border-bottom: 1px solid ${COLORS.outlineGrey};
  }
  &:focus {
    outline: initial;
    border-bottom: 1px solid ${COLORS.outlineGrey};
  }
`;

const ColumnsContainer = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  align-items: flex-start;
  max-height: 100vh;
  overflow: auto;
  padding: 0 20px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  / &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  @media (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  /* @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  } */
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gainsboro;
  border-radius: 5px;
  margin: 12px;
  padding: 20px;
  width: 350px;
  box-shadow: 0px 2px 2px 2px rgba(211, 211, 211, 0.75);
`;

const TasksContainer = styled.div`
  padding: 4px;
  min-width: 350px;
  min-height: 400px;
  max-height: 650px;
  margin: 5px;
  overflow: auto;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  @media (max-width: 1200px) {
    min-width: 300px;
    min-height: 50vh;
    max-height: 300px;
  }
`;

const TaskItem = styled.div`
  position: relative;
  padding: 16px;
  /* margin: 0 0 20px 0; */
  margin: 20px;
  color: #000;
  border-radius: 4px;
  border: 2px solid ${COLORS.btnPrimary};
  border: 2px solid ${COLORS.outlinePrimary};
`;

const TaskWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

const LoadingTitle = styled.h1`
  font-size: 22px;
  margin: 50px 0;
`;

const MiniButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 24px;
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    color: ${COLORS.btnPrimary};
  }
  &:active {
    outline: none;
    transform: scale(1.1);
  }
  &:focus {
    outline: none;
    color: ${COLORS.btnPrimary};
  }
`;

export default Board;
