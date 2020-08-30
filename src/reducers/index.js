import uuid from "uuid/v4";
import produce from "immer";

const testItems = [
  { id: uuid(), content: "First task", task: "" },
  { id: uuid(), content: "Second task", task: "" },
  // { id: uuid(), content: 'Third task' },
  // { id: uuid(), content: 'Fourth task' },
  // { id: uuid(), content: 'Fifth task' },
  // { id: uuid(), content: 'TEST' },
];

const initialState = {
  columns: {
    [uuid()]: {
      name: "To do",
      items: testItems,
    },
    [uuid()]: {
      name: "In Progress",
      items: [],
    },
    [uuid()]: {
      name: "Completed",
      items: [],
    },
  },
  openModal: false,
};

export default function columnReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_COLUMN": {
      const { column, id } = action;

      return produce(state, (draftState) => {
        draftState.columns[id] = column;
      });
    }
    case "REMOVE_COLUMN": {
      const { id } = action;

      return produce(state, (draftState) => {
        delete draftState.columns[id];
      });
    }

    case "UPDATE_COLUMN_POSITION_HORIZONTALLY": {
      const {
        columns,
        sourceId,
        sourceColumn,
        sourceItems,
        destinationId,
        destColumn,
        destItems,
      } = action;

      return produce(state, (draftState) => {
        draftState.columns = {
          ...columns,
          [sourceId]: {
            ...sourceColumn,
            items: sourceItems,
          },
          [destinationId]: {
            ...destColumn,
            items: destItems,
          },
        };
      });
    }

    case "UPDATE_COLUMN_POSITION_VERTICALLY": {
      const { columns, sourceId, column, copiedItems } = action;

      return produce(state, (draftState) => {
        draftState.columns = {
          ...columns,
          [sourceId]: {
            ...column,
            items: copiedItems,
          },
        };
      });
    }

    case "ADD_CARD": {
      const { columnId } = action;
      return produce(state, (draftState) => {
        draftState.columns[columnId].items.push({
          id: uuid(),
          content: "New Task",
        });
      });
    }

    case "SAVE_CARD_INFO": {
      const { columnId, item, info, title } = action;

      const objectFinder = (element) => element.id === item.id;
      const index = state.columns[columnId].items.findIndex(objectFinder);

      return produce(state, (draftState) => {
        draftState.columns[columnId].items[index] = {
          ...item,
          content: title,
          task: info,
        };
      });
    }

    case "TOGGLE_WARNING_MODAL": {
      return produce(state, (draftState) => {
        draftState.openModal = !draftState.openModal;
      });
    }

    case "DELETE_ALL_TASKS": {
      return produce(state, (draftState) => {
        const arr = Object.keys(draftState.columns);
        console.log("array", arr);
        arr.forEach((id) => {
          draftState.columns[id].items = [];
        });
      });
    }

    case "CANCEL_DELETE_ALL_TASKS": {
      // TO DO
      console.log("cancel delete all tasks");
      return;
    }

    default:
      return state;
  }
}
