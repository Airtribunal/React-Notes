import { MdDeleteForever } from "react-icons/md";

const Note = (props) => {
  const { text, date, handleDeleteNote, id } = props;

  return (
    <div className="note">
      <p className="note-text">{text}</p>
      <div className="note-footer">
        <span className="notes-date">{date}</span>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="2em"
        />
      </div>
    </div>
  );
};

export default Note;
