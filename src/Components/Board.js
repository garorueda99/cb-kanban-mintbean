import React from "react";
import styled from "styled-components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4";
import Card from "../components/Card";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

const Board = () => {
  const state = useSelector((state) => state);

  const [columns, setColumns] = React.useState(state);
  console.log("columns", columns);
  console.log("state", state);

  return !columns ? (
    <div>Loading...</div>
  ) : (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <StyledDiv>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "2px solid purple",
                }}
                key={columnId}
              >
                <input value={column.name} />

                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            border: snapshot.isDraggingOver
                              ? "1px solid gainsboro"
                              : "1px solid white",
                            padding: 4,
                            width: 250,
                            minHeight: 500,
                            border: "2px solid green",
                          }}
                        >
                          {columns.items.map((item, index) => {
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
                                        position: "relative",
                                        // userSelect: 'none',
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        // minHeight: '50px',
                                        boxShadow: snapshot.isDragging
                                          ? "0px 0px 13px -1px rgba(168,168,168,0.6)"
                                          : "0px 0px 13px -1px rgba(168,168,168,0.3)",
                                        color: "#000",
                                        borderRadius: "10px",
                                        border: "2px solid pink",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {/* <Card> */}
                                      {item.content}
                                      {/* </Card> */}
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

export default Board;
