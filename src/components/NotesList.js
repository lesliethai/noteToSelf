import { useState, useEffect } from 'react';
import firebase from '../firebase';
import { getDatabase, ref, onValue } from 'firebase/database';

const NotesList = () => {
    console.log('NotesList has rendered.');

    // initalize state to keep track of adding note
    const [notes, setNotes] = useState([]);

    // utilize useEffect to run on component load to gather current information in da
    useEffect(() => {
        // initializing database
        const database = getDatabase(firebase);
        const dbRef = ref(database);

        // access database information in object
        onValue(dbRef, (noteData) => {
            console.log(noteData.val());

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
        })
    }, []);

    const test = notes.map((note) => {
        return (
            <li>{note}</li>
        )
    })

    console.log(test)
    return (
        <>
            <ul>
                {
                    notes.map((note) => {
                        return (
                            <li key={note.key}>{note.title}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default NotesList;