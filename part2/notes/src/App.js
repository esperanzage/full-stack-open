import React, {useState} from 'react'
import Note from './components/Note'

const App = (props) => {

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)


  const addNote = (event) => {
    event.preventDefault()
    const noteObject= {
      content: newNote, 
      date: new Date().toISOString(),
      id: notes.length + 1,
      important: Math.random() < 0.5
    }

    setNotes([...notes, noteObject])
    setNewNote('')
  }

  const handleNewNote = (event) =>{
    setNewNote(event.target.value)
  }


  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <input type="checkbox" id="importantNotes" onChange={() => setShowAll(!showAll)}/>
      <label htmlFor="importantNotes" >Show only important notes</label>
      <ul>
      {notesToShow.map(note => <Note note={note} key={note.id} />)}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNewNote} />
        <button type="submit"  > Save Note </button>
      </form>
    </div>
  )
}

export default App
