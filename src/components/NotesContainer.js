import NotesList from './NotesList';
import NoteForm from './NoteForm';
import { useState } from 'react';


const NotesContainer = () => {
    console.log('NotesContainer has rendered.');

    // show note input on click
    const handleClick = () => {
        setNoteInput(!noteInput);
    }

    // initalize state to keep track of note input
    const [ noteInput, setNoteInput ] = useState(false);

    return (
        <section className="notesContainer">
            <h2>Notes</h2>
            {/* open note input on click & disable button until note added */}
            <button className="addNoteBtn" onClick={handleClick}>+ add note</button>

            {/* on click, show input */}
            {
                noteInput
                    ? <NoteForm />
                    : null
            }
            <NotesList />
        </section>
    )
}

export default NotesContainer;