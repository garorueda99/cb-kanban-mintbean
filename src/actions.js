export const addColumn = (column, id) => ({
  type: "ADD_ITEM",
  column,
  id,
});

export const removeColumn = (id) => ({
  type: "REMOVE_ITEM",
  id,
});
