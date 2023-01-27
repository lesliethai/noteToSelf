import { getDatabase, ref, push } from 'firebase/database';
import firebase from '../firebase';
import { useState } from 'react';


const NoteForm = () => {

    // track user input
    const [userInput, setUserInput] = useState('');

    // set user input to state
    const checkInput = (e) => {
        setUserInput(e.target.value);
    }
    
    // push user input to firebase
    const submitHandler = (e) => {
        e.preventDefault();
        const database = getDatabase(firebase);
        const dbRef = ref(database);
        push(dbRef, userInput);
        alert('Note added!');
        setUserInput('');
    }

    return(
        <form action="#" method="#" className="noteInput">
            <label htmlFor="noteInput" className="srOnly">Note:</label>
            <textarea name="noteInput" id="noteInput" cols="30" rows="10" placeholder="note.." onChange={checkInput} value={userInput} className="addNoteInput"></textarea>

            <button className="submitNoteBtn" onClick={submitHandler} disabled={!userInput}>Submit Note</button>
        </form>
    )
}

export default NoteForm;