import React, { Component } from 'react'

import './tool-notes.styles.scss'

export default class ToolNotes extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentIndex: 0,
      nextId: 2,
      notes: [{id: 1, color:"000000", title: "Hello", content: "Write here"}]
    }
  }

  handleChangeNote(index){
    console.log(index)
    this.setState({
      currentIndex: index
    })
  }

  handleChangeText(index, section, event){
    const {value} = event.target
    const newNotes = Array.from(this.state.notes)
    newNotes[index] = {...newNotes[index], [section]: value}
    this.setState(prevState =>({
      ...prevState,
      notes: newNotes
    }))
  }
  
  render() {
    const {notes, currentIndex} = this.state
    const {title, content} = this.state.notes[currentIndex]
    return (
      <div className="tool-notes">
        <div className="notes-selector">
          {
            notes.map((note, index) => (
              <span key={note.id} onClick={() => this.handleChangeNote(index)}>{note.title}</span>
            ))
          }
        </div>
        <div className="notes-container">
        
              <input className="note-title" name="title"  type="text" value={title} onChange={e => this.handleChangeText(currentIndex, "title", e)}/>
              <textarea className='note-content' name="content"  value={content} onChange={e => this.handleChangeText(currentIndex, "content", e)}></textarea>
        
        </div>
      </div>
    )
  }
}
