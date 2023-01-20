import { getDatabase, ref, push } from 'firebase/database';
import firebase from '../firebase';
import { useState } from 'react';


const NoteForm = () => {
    console.log('NoteForm rendered.');

    const [userInput, setUserInput] = useState('');

    const checkInput = (e) => {
        setUserInput(e.target.value);
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        const database = getDatabase(firebase);
        const dbRef = ref(database);
        push(dbRef, userInput);
        setUserInput('');
    }


    return(
        <form action="#" method="#" className="noteInput">
            <label htmlFor="noteInput" className="srOnly">note:</label>
            <textarea name="noteInput" id="noteInput" cols="30" rows="10" placeholder="note.." onChange={checkInput} value={userInput} className="addNoteInput"></textarea>

            <button className="submitNoteBtn" onClick={submitHandler} disabled={!userInput}>Submit Note</button>
        </form>
    )
}

export default NoteForm;