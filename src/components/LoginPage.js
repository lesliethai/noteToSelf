import Footer from './Footer';
import HeaderNav from './HeaderNav';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
    
    // track if user clicks log in/log out
    const [login, setLogin] = useState(false);

    const handleClick = () => {
        setLogin(!login);

        // change url based on login state
        if (login === false) {
            navigate('/home-page');
        } else if (login === true) {
            navigate('/');
        }
    }

    const navigate = useNavigate();

    return (
        <>
            <header className="headerNav">
                <div className="wrapper">
                    {/* direct to home page or login page based on login status */}
                    {
                        login
                        ? <Link to="/home-page"><h1>NTS</h1></Link>
                        : <Link to="/"><h1>NTS</h1></Link>
                    }
                    
                    <div className="headerRightContainer">
                        {
                            login
                            ? <HeaderNav />
                            : null
                        }

                        {/* change button text depending on login state */}
                        <button className="loginBtn" onClick={handleClick}>{
                            login
                                ? 'Log out'
                                : 'Log in'
                        }</button>
                    </div>
                </div>
            </header>

            {/* if not logged in, display login page */}
            {
                login
                    ? null
                    : <><main><section className="loginBgContainer">
                            <div className="wrapper">
                                <h2>a little note app for your daily needs</h2>
                                <img className="loginImg" src={require("../assets/loginPgImg2.png")} alt="An individual surrounded by various objects, such as browsers, documents, and schedules." />
                            </div>
                        </section>
                        </main>
                        <Footer />
                    </>
            } 
        </>
    )
}

export default LoginPage;