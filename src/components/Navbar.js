import React from 'react';

function Sidebar({ notes, addNote, selectNote }) {
  const handleClick = (note) => {
    selectNote(note.id);
  };

  return (
    <aside>
      <ul>
        {notes.map((note) => (
          <li key={note.id} onClick={() => handleClick(note)}>
            {note.title}
          </li>
        ))}
      </ul>
            <input type="text" id='note' placeholder='Note' />
      <button onClick={() =>{ 
        var t = document.getElementById('note').value;
        document.getElementById('note').value = "";
        addNote({ id: Date.now(), title: t, content: '' })
    }}>
        Add Note
      </button>
    </aside>
  );
}

export default Sidebar;