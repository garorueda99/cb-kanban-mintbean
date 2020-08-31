export const addColumn = (column, id) => ({
  type: 'ADD_COLUMN',
  column,
  id,
});

export const addCard = (columnId, newCardId) => ({
  type: 'ADD_CARD',
  columnId,
  newCardId,
});

export const saveCardInfo = (columnId, item, info, title) => ({
  type: 'SAVE_CARD_INFO',
  columnId,
  item,
  info,
  title,
});

export const removeColumn = (id) => ({
  type: 'REMOVE_COLUMN',
  id,
});

export const deleteCard = (columnId, itemId) => ({
  type: 'DELETE_CARD',
  columnId,
  itemId,
});

export const updateColumnPositionH = (
  columns,
  sourceId,
  sourceColumn,
  sourceItems,
  destinationId,
  destColumn,
  destItems
) => ({
  type: 'UPDATE_COLUMN_POSITION_HORIZONTALLY',
  columns,
  sourceId,
  sourceColumn,
  sourceItems,
  destinationId,
  destColumn,
  destItems,
});

export const updateColumnPositionV = (
  columns,
  sourceId,
  column,
  copiedItems
) => ({
  type: 'UPDATE_COLUMN_POSITION_VERTICALLY',
  columns,
  sourceId,
  column,
  copiedItems,
});

export const toggleWarningModal = () => ({
  type: 'TOGGLE_WARNING_MODAL',
});

export const toggleBoardForm = () => ({
  type: 'TOGGLE_BOARD_FORM',
});

export const updateBoardName = (name) => ({
  type: 'UPDATE_BOARD_NAME',
  name,
});

export const deleteAllTasks = () => ({
  type: 'DELETE_ALL_TASKS',
});
