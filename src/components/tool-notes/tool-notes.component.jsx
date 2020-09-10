import React, {Component} from 'react';

import './tool-notes.styles.scss';

const colors = [
  '#264653',
  '#33C1B1',
  '#E9C46A',
  '#F4A261',
  '#E76F51',
  '#fff6e4',
];

export default class ToolNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      nextId: 3,
      notes: [
        {
          id: 1,
          color: '#E76F51',
          title: 'Nova nota',
          content: 'Com estàs avui?',
        },
        {
          id: 2,
          color: '#F4A261',
          title: 'Una altra nova nota',
          content: 'Com estàs avui?',
        },
      ],
    };
    this.handleNewNote = this.handleNewNote.bind(this)
  }

  handleNewNote() {
    this.setState(prevState => ({
      nextId: prevState.nextId + 1,
      notes: prevState.notes.concat([{
        id: prevState.nextId,
        color: colors[Math.floor(Math.random()*colors.length)],
        title: "Nova nota",
        content: 'Escriu aquí',
      }])
    }))
    console.log(this.state)
  }
  handleDeleteNote(index) {
    if(this.state.notes.length === 1) {
      return
    }
    const newNotes = Array.from(this.state.notes)
    newNotes.splice(index, 1)
    this.setState({
      notes: newNotes,
      currentIndex: index < 1 ? index : index - 1,
    })
  }

  handleChangeNote(index) {
    console.log(index);
    this.setState({
      currentIndex: index,
    });
  }

  handleChangeText(index, section, event) {
    const {value} = event.target;
    const newNotes = Array.from(this.state.notes);
    newNotes[index] = {...newNotes[index], [section]: value};
    this.setState((prevState) => ({
      ...prevState,
      notes: newNotes,
    }));
  }

  render() {
    const {notes, currentIndex} = this.state;
    const {title, content, color} = this.state.notes[currentIndex];
    return (
      <div className="tool-notes">
        <div className="notes-selector">
          {notes.map((note, index) => (
            <div className="notes-label" key={note.id} onClick={() => this.handleChangeNote(index)}>
              <div className="label-color" style={{backgroundColor: note.color}} />
              <div className="label-text">
                {note.title}
              </div>
            </div>
          ))}
          <div className="notes-label" onClick={this.handleNewNote}><i className="fa fa-plus" aria-hidden="true"></i></div>
        </div>
        <div className="notes-container">
          <div className="title-container">
            <input
              className="note-title"
              style={{color}}
              placeholder="Nova nota"
              name="title"
              type="text"
              value={title}
              onChange={(e) => this.handleChangeText(currentIndex, 'title', e)}
            />
            <i style={{color}} onClick={() => this.handleDeleteNote(currentIndex)} className="fa fa-trash" aria-hidden="true"></i>
          </div>
          <textarea
            className="note-content"
            placeholder="Com estàs avui?"
            name="content"
            value={content}
            onChange={(e) => this.handleChangeText(currentIndex, 'content', e)}
          ></textarea>
        </div>
      </div>
    );
  }
}
