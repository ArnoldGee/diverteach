const initialColumnsData = {
  items: {
    'item-1': {id: 'item-1', content: 'timer'},
    'item-2': {id: 'item-2', content: 'I can move!'},
    'item-3': {id: 'item-3', content: 'notes'},
    'item-4': {id: 'item-4', content: 'And I can move too! Wiiii!'},
  },
  columns: {
    'column-1': {id: 'column-1', title: 'Columna 1', itemIds: ['item-1', 'item-2']},
    'column-2': {id: 'column-2', title: 'Columna 2', itemIds: ['item-3', 'item-4']}
  },
  // Facilitate reordering of the columns :)
  columnOrder: ['column-1', 'column-2']
}

export default initialColumnsData