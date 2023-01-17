import { useState, useEffect } from 'react';
import firebase from '../firebase';
import { getDatabase, ref, onValue, remove, push, update } from 'firebase/database';

const NotesList = (props) => {
    console.log('NotesList has rendered.');

    // initalize state to keep track of adding note
    const [ notes, setNotes ] = useState([]);
    const [ updateNote, setUpdateNote] = useState('');

    // initializing database
    const database = getDatabase(firebase);
    const dbRef = ref(database);

    const handleDelete = (notesKey) => {
        const dbRefDelete = ref(database, `${notesKey}`);
        remove(dbRefDelete);
    }

    // const checkHandleUpdate = (notes) => {
    //     // const dbRefUpdate = ref(database, `${notes.data}`);
    //     update(dbRef, `${notes.data}`);
    // }



    // try doing function to check for change thru state, and then one to update change on submit button (and push thru)

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

    const updateHandler = (e) => {
        e.preventDefault();
        update(dbRef, updateNote);
    }

    const checkUpdate = (e) => {
        console.log(e.target.value);
        setUpdateNote(e.target.value);
    }

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${month} ${day} ${year}`

    return (
        <>
            <ul className="formUl">
                {
                    notes.map((note) => {
                        return (
                            <>
                            <li key={note.key} className="formLi">
                                <form action="#" method="#" className="notesForm">
                                    <label htmlFor="noteTextarea" className="srOnly">note:</label>
                                    <textarea name="input" id="input" cols="30" rows="10" onChange={checkUpdate}>{note.title}</textarea>

                                    <button onClick={() => handleDelete(note.key)} className="deleteButton">Delete</button>

                                    <button onClick= {updateHandler} className="updateButton">Update</button>

                                    <span>Date: </span><span>{currentDate}</span>
                                </form>
                            </li>
                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}
// error: values argument must be an object containing the children to replace -- but if you put in values argument, it's blank
export default NotesList;