import React from "react";
import styled from "styled-components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Card from "../../components/Card";
import Sidebar from "../Sidebar";
import { useSelector } from "react-redux";
import { updateColumnPositionH, updateColumnPositionV } from "../../actions";
import { useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import COLORS from "../COLORS";

//## COMPONENTS ##
import { ColumnHeader } from "./ColumnHeader";

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
    <Wrapper>
      <Sidebar />
      <BoardContainer>
        <DragDropContext onDragEnd={(result) => onDragEnd(result, columns)}>
          {Object.entries(columns).map(([columnId, column], index) => {
            const hasTasks = columns[columnId].items.length <= 0;
            return (
              <ColumnContainer key={columnId}>
                <ColumnHeader
                  id={columnId}
                  name={column.name}
                  isEmpty={hasTasks}
                />
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <TasksContainer
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          border: snapshot.isDraggingOver
                            ? "1px solid gainsboro"
                            : "1px solid white",
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
                                  <TaskItem
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      boxShadow: snapshot.isDragging
                                        ? "0px 0px 13px -1px rgba(168,168,168,0.6)"
                                        : "0px 0px 13px -1px rgba(168,168,168,0.3)",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    <Card item={item} columnId={columnId}>
                                      {item.content}
                                    </Card>
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
      </BoardContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
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
  border: 4px solid ${COLORS.btnPrimary};
  border-radius: 20px;
  margin: 2%;
`;

const TasksContainer = styled.div`
  padding: 4px;
  width: 250px;
  min-height: 500px;
  border: 5px solid green;
`;

const TaskItem = styled.div`
  position: relative;
  padding: 16px;
  margin: 0 0 8px 0;
  color: #000;
  border-radius: 10px;
  border: 2px solid pink;
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
