export const addColumn = (column) => ({
  type: "ADD_ITEM",
  column,
});

export const removeColumn = (id) => ({
  type: "REMOVE_ITEM",
  id,
});
