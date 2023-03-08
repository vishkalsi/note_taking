
import React, { useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';
  

function NotesList (){
    const [notes, setNotes] = useState([]);
const [selectedNoteId, setSelectedNoteId] = useState(null);

const addNote = (note) => {
  setNotes([...notes, note]);
};

const selectNote = (id) => {
  setSelectedNoteId(id);
};
    return (<div className="app">
    <Header />
    <Navbar notes={notes} addNote={addNote} selectNote={selectNote} />
  </div>);
    
        

    
}
  
export default NotesList;