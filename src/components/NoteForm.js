import { getDatabase, ref, push } from 'firebase/database';
import firebase from '../firebase';


const NoteForm = (props) => {
    console.log('NoteForm rendered.');

    const checkInput = (e) => {
        props.setUserInput(e.target.value);
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        const database = getDatabase(firebase);
        const dbRef = ref(database);
        push(dbRef, props.userInput);
        props.setUserInput('');
    }


    return(
        <form action="#" method="#" className="noteInput">
            <label htmlFor="noteInput" className="srOnly">note:</label>
            <textarea name="noteInput" id="noteInput" cols="30" rows="10" placeholder="note.." onChange={checkInput} value={props.userInput} className="addNoteInput"></textarea>

            <button onClick={submitHandler} disabled={!props.userInput}>Submit Note</button>
        </form>
    )
}

export default NoteForm;