import React, {Component} from 'react';
import {Droppable} from 'react-beautiful-dnd';

import Item from '../item/item.component';

import './column.styles.scss'

export default class Column extends Component {
  render() {
    return (
      <div className="dashboard-column">
        <h3 className="column-title">{this.props.column.title}</h3>
        <div className="droppable-space">
          <Droppable  droppableId={this.props.column.id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {this.props.items.map((item, index) => (
                  <Item key={item.id} item={item} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    );
  }
}
