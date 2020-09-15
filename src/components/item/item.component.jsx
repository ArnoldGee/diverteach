import React, { Component } from 'react'
import {Draggable} from 'react-beautiful-dnd'

import './item.styles.scss'
import ToolTimer from '../tool-timer/tool-timer.component'
import ToolNotes from '../tool-notes/tool-notes.component'
import ToolSilence from '../tool-silence/tool-silence.component'

const tools = {
  timer: <ToolTimer />,
  notes: <ToolNotes />,
  silence: <ToolSilence />,
}

export default class Item extends Component {
  render(){
    return(
      <Draggable draggableId={this.props.item.id} index={this.props.index}>
      
        {provided=>(
          <div className="item-container">
          <div className="draggable-item"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className="close-button">×</div>
            {
              tools[this.props.item.content]&&tools[this.props.item.content]
            }
          </div>
          </div>
        )}
      </Draggable>
    )
  }
}