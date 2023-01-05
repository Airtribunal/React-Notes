import React, { useState } from "react";
import { nanoid } from "nanoid";

import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "god damn it",
      date: "15/23/3232",
    },
    {
      id: nanoid(),
      text: "god dadssdmn it",
      date: "15/23/3d232",
    },
    {
      id: nanoid(),
      text: "gosdd damn it",
      date: "15/23sds/3232",
    },
  ]);

  const [noteText, setNoteText] = useState("");

  function handleChange(e) {
    setNoteText(e.target.value);
  }

  function handleAddNote(text) {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotesArray = [...notes, newNote];
    setNotes(newNotesArray);
    setNoteText("");
  }
  return (
    <div className="notes-container">
      <NotesList
        noteText={noteText}
        handleAddNote={handleAddNote}
        handleChange={handleChange}
        notes={notes}
      />
    </div>
  );
};

export default App;
