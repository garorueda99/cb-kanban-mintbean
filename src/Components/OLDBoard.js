import React from 'react';
import styled from 'styled-components';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Card from '../components/Card';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import {
  updateColumnPositionH,
  updateColumnPositionV,
  removeColumn,
} from '../actions';
import { useDispatch } from 'react-redux';
import { FiPlusCircle, FiXCircle } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { addCard } from '../actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import COLORS from './COLORS';

const Board = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.columns);

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

  if (!columns) {
    return (
      <Loading>
        <LoadingTitle>Loading App... one moment please...</LoadingTitle>
        <CircularProgress size={100} />
      </Loading>
    );
  }

  return (
    <Wrapper style={{ display: 'flex' }}>
      <Sidebar />
      <BoardContainer>
        <DragDropContext onDragEnd={(result) => onDragEnd(result, columns)}>
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <ColumnContainer key={columnId}>
                <ColumnHeader>
                  <AddButton
                    onClick={() => {
                      // console.log('New Card Added', columnId);
                      dispatch(addCard(columnId));
                    }}
                  >
                    <FiPlusCircle size={32} />
                  </AddButton>

                  <HeaderInput value={column.name} />
                  {/* <div style={{ margin: 8 }}> */}

                  <ClosedButton
                    onClick={() => {
                      console.log('length', columns[columnId].items.length);
                      if (columns[columnId].items.length <= 0) {
                        console.log('column id', columnId);
                        dispatch(removeColumn(columnId));
                      }
                    }}
                  >
                    <FiXCircle size={32} />
                  </ClosedButton>
                </ColumnHeader>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          border: snapshot.isDraggingOver
                            ? '1px solid gainsboro'
                            : '1px solid white',
                          padding: 4,
                          width: 250,
                          minHeight: 500,
                          border: '2px solid green',
                        }}
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
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      position: 'relative',
                                      padding: 16,
                                      margin: '0 0 8px 0',
                                      boxShadow: snapshot.isDragging
                                        ? '0px 0px 13px -1px rgba(168,168,168,0.6)'
                                        : '0px 0px 13px -1px rgba(168,168,168,0.3)',
                                      color: '#000',
                                      borderRadius: '10px',
                                      border: '2px solid pink',
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    <Card item={item} columnId={columnId}>
                                      {item.content}
                                    </Card>
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>

                {/* </div> */}
              </ColumnContainer>
            );
          })}
        </DragDropContext>
      </BoardContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
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
  justify-content: flex-start;
  align-items: center;
  max-height: 100vh;
  /* border: 5px solid goldenrod; */
  overflow: auto;
  padding: 0 20px;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid purple;
`;

const ColumnHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  border: 2px dashed purple;
`;

const HeaderInput = styled.input`
  width: 80%;
  padding: 3%;
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
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

const AddTaskBtn = styled(FiPlusCircle)`
  margin: 5px;
  background-color: blue;
  cursor: pointer;
  &:hover {
    color: #0acc33;
  }
`;

const RemoveColumnBtn = styled(FiXCircle)`
  /* background-color: red; */
  margin: 5px;
  &:hover {
    cursor: pointer;
    color: #0acc33;
  }
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

export default Board;
