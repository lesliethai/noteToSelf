import NotesContainer from './NotesContainer';

const Body = () => {
    console.log('Body has rendered.');

    return (
        <main>
            <p>body</p>
            <NotesContainer />
        </main>
    )
}

export default Body;