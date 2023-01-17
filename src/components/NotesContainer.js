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
    const [userInput, setUserInput] = useState('');

    return (
        <>
        <section>
            <h2>Notes</h2>
            {/* open note input on click & disable button until note added */}
            <button onClick={handleClick}>+ add note</button>

            {/* on click, show input */}
            {
                noteInput
                    ? <NoteForm userInput={userInput} setUserInput={setUserInput}/>
                    : null
            }
            <NotesList userInput={userInput} setUserInput={setUserInput}/>
        </section>
        </>
    )
}

export default NotesContainer;