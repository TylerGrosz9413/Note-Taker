import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';

function App() {
  const [notes, setNotes] = useState([]);
  const [count, setCount] = useState(0);

  function addNote(newNote) {
    setNotes(prevNotes => {
      setCount(count + 1);
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      setCount(count - 1);
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className='App'>
      <Header/>
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem, index) => {
        return (
          <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
          />
        );
      })}
      <Footer count={count}/>
    </div>
  );
}

export default App;
