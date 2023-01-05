import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = (props) => {
  const { notes, noteText, handleAddNote, handleChange } = props;

  const notesList = notes.map((note) => {
    return <Note key={note.id} text={note.text} date={note.date} />;
  });

  return (
    <div className="notes-list">
      {notesList}
      <AddNote
        handleChange={handleChange}
        handleAddNote={handleAddNote}
        noteText={noteText}
      />
    </div>
  );
};

export default NotesList;
