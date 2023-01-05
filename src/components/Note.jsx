import { MdDeleteForever } from "react-icons/md";

const Note = (props) => {
    const {text, date} = props

  return (
    <div className="note">
      <span className="notes-text">
        {text}
      </span>
      <div className="note-footer">
        <span className="notes-date">{date}</span>
        <MdDeleteForever className="delete-icon" size="2em" />
      </div>
    </div>
  );
};

export default Note;
