import React, {Component} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';

import Column from '../../components/column/column.component';
import DashboardMenu from '../../components/dashboard-menu/dashboard-menu.component';

import initialColumnsData from '../../data/initial-columns-data';

import './dashboard.styles.scss';

class Dashboard extends Component {
  state = initialColumnsData;

  addTool = (toolName) => {
    const itemId = 'item-' + (this.state.lastIndex + 1);

    this.setState((prevState) => ({
      lastIndex: prevState.lastIndex + 1,
      items: {
        ...prevState.items,
        [itemId]: {id: itemId, content: toolName},
      },
      columns: {
        ...prevState.columns,
        'column-1': {
          ...prevState.columns['column-1'],
          itemIds: [...prevState.columns['column-1'].itemIds, itemId],
        },
      },
    }));
  };

  deleteTool = (cardIndex, columnIndex) => {
    console.log(
      'card index is ' + cardIndex + ' and column index is ' + columnIndex
    );
    let newItemsObject = JSON.parse(JSON.stringify(this.state.items));
    delete newItemsObject[cardIndex];

    let newItemIdsArray = Array.from(this.state.columns[columnIndex].itemIds);
    console.log(newItemIdsArray);
    let newItemIdsArray2 = newItemIdsArray.filter(
      (itemTitle) => cardIndex !== itemTitle
    ); /// Aquí està l'error, en el mètode de filtre!!!
    console.log(newItemIdsArray);
    this.setState({
      items: newItemsObject,
      columns: {
        ...this.state.columns,
        [columnIndex]: {
          ...this.state.columns[columnIndex],
          itemIds: newItemIdsArray2,
        },
      },
    });
  };

  onDragEnd = (result) => {
    const {destination, source, draggableId} = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const column = this.state.columns[source.droppableId];
    const newItemIds = Array.from(column.itemIds);
    newItemIds.splice(source.index, 1); // We reorder the array
    newItemIds.splice(destination.index, 0, draggableId); // We reorder the array pt. 2

    const newColumn = {
      ...column,
      itemIds: newItemIds,
    };
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };
    this.setState(newState);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="dashboard">
          <div className="columns-container">
            {this.state.columnOrder.map((columnId) => {
              const column = this.state.columns[columnId];
              const items = column.itemIds.map(
                (itemId) => this.state.items[itemId]
              );

              return (
                <Column
                  key={column.id}
                  column={column}
                  items={items}
                  deleteTool={this.deleteTool}
                />
              );
            })}
          </div>
          <DashboardMenu addTool={this.addTool} />
        </div>
      </DragDropContext>
    );
  }
}

export default Dashboard;
