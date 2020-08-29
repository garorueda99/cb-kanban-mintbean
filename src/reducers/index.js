import uuid from 'uuid/v4';
import produce from 'immer';

const testItems = [
  { id: uuid(), content: 'First task' },
  // { id: uuid(), content: 'Second task' },
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
    case 'ADD_ITEM': {
      return produce(state, (draftState) => {
        draftState.columns[action.id] = action.column;
      });
    }
    default:
      return state;
  }
}
