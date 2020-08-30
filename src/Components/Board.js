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
import { FiPlusCircle } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { addCard } from '../actions';

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

  return !columns ? (
    <div>Loading...</div>
  ) : (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <StyledDiv>
        <DragDropContext onDragEnd={(result) => onDragEnd(result, columns)}>
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  border: '2px solid purple',
                }}
                key={columnId}
              >
                <input value={column.name} />

                <div style={{ margin: 8 }}>
                  <CircleIcon
                    onClick={() => {
                      // console.log('New Card Added', columnId);
                      dispatch(addCard(columnId));
                    }}
                  />
                  <CircleIconX
                    onClick={() => {
                      console.log('length', columns[columnId].items.length);
                      if (columns[columnId].items.length <= 0) {
                        console.log('column id', columnId);
                        dispatch(removeColumn(columnId));
                      }
                    }}
                  />
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
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </StyledDiv>
    </div>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CircleIcon = styled(FiPlusCircle)`
  margin: 5px;
  &:hover {
    cursor: pointer;
    color: #0acc33;
  }
`;

const CircleIconX = styled(AiOutlineCloseCircle)`
  background-color: red;
  margin: 5px;
  &:hover {
    cursor: pointer;
    color: #0acc33;
  }
`;

export default Board;
