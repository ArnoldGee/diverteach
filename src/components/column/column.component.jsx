import React, {Component} from 'react';
import {Droppable} from 'react-beautiful-dnd';

import Item from '../item/item.component';

import './column.styles.scss'

export default class Column extends Component {
  
  render() {
    return (
      <div className="dashboard-column">
        <div className="droppable-space">
          <Droppable  droppableId={this.props.column.id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="columns-styling"
              >
                <div className="test-space"></div>
                {this.props.items.map((item, index) => (
                  <Item key={item.id} item={item} index={index} deleteTool={this.props.deleteTool} columnId={this.props.column.id} itemId={item.id}/>
                ))}
                {provided.placeholder}
                <div className="test-space"></div>
              </div>
            )}
          </Droppable>
        </div>
      </div>
    );
  }
}
