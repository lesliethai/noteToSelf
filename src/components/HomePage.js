import NotesContainer from './NotesContainer';
import SideNav from './SideNav';

const HomePage = () => {
    console.log("HomePage has rendered.");

    return (
        <body>
            <SideNav />
            <NotesContainer />
        </body>
    )
}

export default HomePage;