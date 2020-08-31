import uuid from 'uuid/v4';
import produce from 'immer';

const testItems = [
  // { id: uuid(), content: "First task", task: "" },
  // { id: uuid(), content: "Second task", task: "" },
  // { id: uuid(), content: 'Third task' },
  // { id: uuid(), content: 'Fourth task' },
  // { id: uuid(), content: 'Fifth task' },
  // { id: uuid(), content: 'TEST' },
];

const initialState = JSON.parse(
  window.localStorage.getItem('persistedState')
) || {
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
  openModal: false,
  kanbanForm: false,
  kanbanName: undefined,
  toggleDelete: false,
  openClearAllModal: false,
  cardModal: false,
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

    case 'ADD_CARD': {
      const { columnId, newCardId } = action;
      return produce(state, (draftState) => {
        draftState.columns[columnId].items.push({
          id: newCardId,
          content: 'New Task',
        });
      });
    }

    case 'SAVE_CARD_INFO': {
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

    case 'DELETE_CARD': {
      const { columnId, itemId } = action;
      const objectFinder = (element) => element.id === itemId;
      const index = state.columns[columnId].items.findIndex(objectFinder);
      return produce(state, (draftState) => {
        draftState.columns[columnId].items.splice(index, 1);
      });
    }

    case 'TOGGLE_WARNING_MODAL': {
      return produce(state, (draftState) => {
        draftState.openModal = !draftState.openModal;
      });
    }

    case 'TOGGLE_REMOVE_COLUMN': {
      return produce(state, (draftState) => {
        draftState.toggleDelete = !draftState.toggleDelete;
      });
    }

    case 'TOGGLE_BOARD_FORM': {
      return produce(state, (draftState) => {
        draftState.kanbanForm = !draftState.kanbanForm;
      });
    }

    case 'TOGGLE_CARD_MODAL': {
      return produce(state, (draftState) => {
        draftState.cardModal = !draftState.cardModal;
      });
    }

    case 'UPDATE_BOARD_NAME': {
      const result = produce(state, (draftState) => {
        draftState.kanbanName = action.name;
      });
      return result;
    }

    case 'DELETE_ALL_TASKS': {
      return produce(state, (draftState) => {
        const arr = Object.keys(draftState.columns);
        arr.forEach((id) => {
          draftState.columns[id].items = [];
        });
      });
    }

    case 'DELETE_EVERYTHING': {
      return {
        columns: {
          [uuid()]: {
            name: 'To do',
            items: [],
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
        openModal: false,
        kanbanForm: false,
        kanbanName: undefined,
        toggleDelete: false,
        openClearAllModal: true,
        cardModal: false,
      };
    }

    case 'TOGGLE_CLEAR_ALL_MODAL': {
      console.log(state.openClearAllModal);
      return produce(state, (draftState) => {
        console.log('in reducer');
        console.log('----', state);
        draftState.openClearAllModal = !draftState.openClearAllModal;
      });
    }

    default:
      return state;
  }
}
