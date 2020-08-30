export const addColumn = (column, id) => ({
  type: 'ADD_COLUMN',
  column,
  id,
});

export const addCard = (columnId) => ({
  type: 'ADD_CARD',
  columnId,
});

export const saveCardInfo = (columnId, item, info) => ({
  type: 'SAVE_CARD_INFO',
  columnId,
  item,
  info,
});

export const removeColumn = (id) => ({
  type: 'REMOVE_COLUMN',
  id,
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
