import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = (props) => {
  const {
    notes,
    noteText,
    handleAddNote,
    handleChange,
    characterLimit,
    handleDeleteNote,
  } = props;

  const notesList = notes.map((note) => {
    return (
      <Note
        key={note.id}
        id={note.id}
        text={note.text}
        date={note.date}
        handleDeleteNote={handleDeleteNote}
      />
    );
  });

  return (
    <div className="notes-list">
      {notesList}
      <AddNote
        handleChange={handleChange}
        handleAddNote={handleAddNote}
        noteText={noteText}
        characterLimit={characterLimit}
      />
    </div>
  );
};

export default NotesList;
