import React from 'react'
import Note from './components/Note'


// const NoteList = ({ notes }) => {
//   return(
//     <div><ul>{notes.map(note => <li key={note.id}>{note.content}</li>)}</ul></div>
//   )
// }


const App = ({ notes }) => {

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => <Note note={note} key={note.id} />)}
    </div>
  )
}

export default App
