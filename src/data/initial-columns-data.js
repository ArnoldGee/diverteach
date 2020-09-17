const initialColumnsData = {
  lastIndex: 0,
  items: {},
  columns: {
    'column-1': {id: 'column-1', title: 'Columna 1', itemIds: []},
    'column-2': {id: 'column-2', title: 'Columna 2', itemIds: []}
  },
  // Facilitate reordering of the columns :)
  columnOrder: ['column-1', 'column-2']
}

export default initialColumnsData

/***************************************************
 * SAMPLE DATA

const initialColumnsData = {
  lastIndex: 3,
  items: {
    'item-1': {id: 'item-1', content: 'timer'},
    'item-2': {id: 'item-2', content: 'silence'},
    'item-3': {id: 'item-3', content: 'notes'},
  },
  columns: {
    'column-1': {id: 'column-1', title: 'Columna 1', itemIds: ['item-1']},
    'column-2': {id: 'column-2', title: 'Columna 2', itemIds: ['item-2', 'item-3']}
  },
  // Facilitate reordering of the columns :)
  columnOrder: ['column-1', 'column-2']
}

***************************************************/