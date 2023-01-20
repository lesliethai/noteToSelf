import NotesContainer from './NotesContainer';
import SideNav from './SideNav';

const HomePage = () => {
    console.log("HomePage has rendered.");

    return (
        <>
        <NotesContainer />
        <SideNav />
        </>
    )
}

export default HomePage;