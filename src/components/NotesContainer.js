import NotesList from './NotesList';
import SideNav from './SideNav';

const NotesContainer = () => {
    console.log('NotesContainer has rendered.');

    const addNote = () => {
        console.log('Adding note');
    }

    return (
        <>
        <section>
            <h2>Notes</h2>
            <button onClick={addNote}>+ Add Note</button>
            <NotesList />
        </section>
        <SideNav />
        </>
    )
}

export default NotesContainer;