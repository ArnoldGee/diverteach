import React, {Component} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';

import WelcomeMessage from '../../components/welcome-message/welcome-message.component'
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
    
    let newItemsObject = JSON.parse(JSON.stringify(this.state.items));
    delete newItemsObject[cardIndex];

    let newItemIdsArray = Array.from(this.state.columns[columnIndex].itemIds);
    let newItemIdsArray2 = newItemIdsArray.filter(
      (itemTitle) => cardIndex !== itemTitle
    );
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
    const startColumn = this.state.columns[source.droppableId];
    const finishColumn = this.state.columns[destination.droppableId];

    if (startColumn === finishColumn){ // Moving within the same column
      const newItemIds = Array.from(startColumn.itemIds);
      newItemIds.splice(source.index, 1); // We reorder the array
      newItemIds.splice(destination.index, 0, draggableId); // We reorder the array pt. 2
  
      const newColumn = {
        ...startColumn,
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
      return;
    } else { // Moving from one column to another
      const startItemIds = Array.from(startColumn.itemIds);
      startItemIds.splice(source.index, 1); // We reorder the array
      const newStartColumn = {
        ...startColumn,
        itemIds: startItemIds
      }
      const finishItemIds = Array.from(finishColumn.itemIds);
      finishItemIds.splice(destination.index, 0, draggableId); // We reorder the array pt. 2
      const newFinishColumn = {
        ...finishColumn,
        itemIds: finishItemIds
      }
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newStartColumn.id]: newStartColumn,
          [newFinishColumn.id]: newFinishColumn,
        },
      };
      this.setState(newState);
      return;
    }

  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="dashboard">
          <div className="columns-container">
            {
              this.state.lastIndex ?
              this.state.columnOrder.map((columnId) => {
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
              })
              : <WelcomeMessage />
            }
          </div>
          <DashboardMenu addTool={this.addTool} />
        </div>
      </DragDropContext>
    );
  }
}

export default Dashboard;
