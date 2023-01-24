import { useState, useEffect } from 'react';
import firebase from '../firebase';
import { getDatabase, ref, onValue, remove, set } from 'firebase/database';
import Filter from './Filter';

const NotesList = () => {
    console.log('NotesList has rendered.');

    // initalize state to keep track of adding note
    const [ notes, setNotes ] = useState([]);
    const [ updateNote, setUpdateNote] = useState('');
    const [ filter, setFilter ] = useState('');
    
    // initializing database
    const database = getDatabase(firebase);
    const dbRef = ref(database);
    
    const handleDelete = (notesKey) => {
        const dbRefChild = ref(database, `${notesKey}`);
        remove(dbRefChild);
    }

    // utilize useEffect to run on component load to gather current information in da
    useEffect(() => {
        // access database information in object
        onValue(dbRef, (noteData) => {
            // empty array to hold generated li
            const notesArray = [];

            // attach database values to variable 
            const data = noteData.val();

            // loop through object and append items on page
            for (let key in data) {
                notesArray.push({
                    key: key,
                    title: data[key]});
            }

            // attach array to state function
            setNotes(notesArray);
            setUpdateNote(notesArray);
        })
    }, []);

    const updateHandler = (e, notesKey) => {
        e.preventDefault();
        const dbRefChild = ref(database, `${notesKey}`);;
        alert('Updated!');
        return set(dbRefChild, updateNote);
    }

    const checkUpdate = (e) => {
        setUpdateNote(e.target.value);
    }

    // make filtered array based on searched term
    let search = notes.filter(term => term.title.includes(filter));

    return (
        <>
        <Filter array={notes} filterState={setFilter} filter={filter} />
            <ul className="formUl wrapper">
                {
                    search.map((note) => {
                        return (
                            <li key={note.key} className="formLi">
                                <form action="#" method="#" className="notesForm">
                                    <button onClick={() => handleDelete(note.key)} className="deleteButton"><i className="fa-solid fa-xmark fa-lg"></i></button>

                                    <label htmlFor="noteTextarea" className="srOnly">note:</label>
                                    <textarea name="input" id="input" cols="30" rows="10" onChange={checkUpdate} value={updateNote.title} defaultValue={note.title} />

                                    <div className="notesRight">
                                        <button onClick= {(e) => updateHandler(e, note.key)} className="saveButton">Save</button>
                                    </div>
                                </form>
                            </li>
                        )
                    })
                } 
            </ul>
        </>
    )
}

export default NotesList;