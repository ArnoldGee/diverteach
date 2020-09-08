import React, { Component } from 'react'
import {Draggable} from 'react-beautiful-dnd'

import './item.styles.scss'

export default class Item extends Component {
  render(){
    return(
      <Draggable draggableId={this.props.item.id} index={this.props.index}>
        {provided=>(
          <div className="draggable-item"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.item.content}
          </div>
        )}
      </Draggable>
    )
  }
}