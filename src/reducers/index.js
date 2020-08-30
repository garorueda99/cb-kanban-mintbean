import uuid from 'uuid/v4';
import produce from 'immer';

const testItems = [
  { id: uuid(), content: 'First task' },
  { id: uuid(), content: 'Second task' },
  // { id: uuid(), content: 'Third task' },
  // { id: uuid(), content: 'Fourth task' },
  // { id: uuid(), content: 'Fifth task' },
  // { id: uuid(), content: 'TEST' },
];

const initialState = {
  columns: {
    [uuid()]: {
      name: 'To do',
      items: testItems,
    },
    [uuid()]: {
      name: 'In Progress',
      items: [],
    },
    [uuid()]: {
      name: 'Completed',
      items: [],
    },
  },
};

export default function columnReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_COLUMN': {
      const { column, id } = action;

      return produce(state, (draftState) => {
        draftState.columns[id] = column;
      });
    }
    case 'REMOVE_COLUMN': {
      const { id } = action;

      return produce(state, (draftState) => {
        delete draftState.columns[id];
      });
    }

    case 'ADD_CARD': {
      const { columnId } = action;
      return produce(state, (draftState) => {
        draftState.columns[columnId].items.push({
          id: uuid(),
          content: 'New Task',
        });
      });
    }

    case 'SAVE_CARD_INFO': {
      const { columnId, item, info } = action;

      const objectFinder = (element) => element.id === item.id;
      const index = state.columns[columnId].items.findIndex(objectFinder);
      console.log(state, columnId, index);
      return produce(state, (draftState) => {
        draftState.columns[columnId].items[index] = {
          ...item,
          task: info,
        };
      });
    }

    case 'UPDATE_COLUMN_POSITION_HORIZONTALLY': {
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
    case 'UPDATE_COLUMN_POSITION_VERTICALLY': {
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
    default:
      return state;
  }
}
