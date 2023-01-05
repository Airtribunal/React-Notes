import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NotesList from "./components/NotesList";
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState([]); // Array of Notes
  const [noteText, setNoteText] = useState(""); // Text of note
  const characterLimit = 200; // For Character Couner

  // Controlled Text of Note
  function handleChange(e) {
    const value = e.target.value;

    if (characterLimit - value.length >= 0) {
      setNoteText(value);
    }
  }

  // Add Note Function
  function handleAddNote(text) {
    if (noteText.trim().length > 0) {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString(),
      };
      const newNotesArray = [...notes, newNote];
      setNotes(newNotesArray);
      setNoteText("");
    } else {
      toast.error("Type in something to add note!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  // Delete Note
  function handleDeleteNote(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  // Searching Notes
  const [searchText, setSearchText] = useState("");

  // Dark Mode
  const [darkMode, setDarkMode] = useState(true);
  function handleToggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  // Local Storaging Notes
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("air-notes"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("air-notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={darkMode ? "dark-bg bg" : "light-bg bg"}>
      <div className="notes-container">
        <Header
          handleToggleDarkMode={handleToggleDarkMode}
          darkMode={darkMode}
        />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          noteText={noteText}
          handleAddNote={handleAddNote}
          handleChange={handleChange}
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          characterLimit={characterLimit}
          handleDeleteNote={handleDeleteNote}
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
