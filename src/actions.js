export const addColumn = (column, id) => ({
  type: "ADD_COLUMN",
  column,
  id,
});

export const removeColumn = (id) => ({
  type: "REMOVE_COLUMN",
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
  type: "UPDATE_COLUMN_POSITION_HORIZONTALLY",
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
  type: "UPDATE_COLUMN_POSITION_VERTICALLY",
  columns,
  sourceId,
  column,
  copiedItems,
});
