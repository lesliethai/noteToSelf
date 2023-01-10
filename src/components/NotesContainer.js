import NotesList from './NotesList';
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
        <>
        <section>
            <h2>Notes</h2>
            <button onClick={handleClick}>+ add note</button>

            {/* on click, show input */}
            {
                noteInput
                    ? <input type="text" id="note" placeholder="input note"/>
                    : null
            }
            <NotesList />
        </section>
        </>
    )
}

export default NotesContainer;