import NotesContainer from './NotesContainer';
import SideNav from './SideNav';

const HomePage = () => {
    console.log("HomePage has rendered.");

    return (
        <body className="bodyContainer">
            <SideNav />
            <NotesContainer />
        </body>
    )
}

export default HomePage;