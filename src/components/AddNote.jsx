const AddNote = (props) => {
  const { noteText, handleChange, handleAddNote, characterLimit } = props;

  return (
    <div className="new note">
      <textarea
        rows="10"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{`${characterLimit - noteText.length} remaining`}</small>
        <button onClick={() => handleAddNote(noteText)} className="save-button">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
