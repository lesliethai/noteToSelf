import LoginBg from './LoginBg';
import HeaderNav from './HeaderNav';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    
    console.log('LoginPage has rendered.');

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
                    <h1>NTS</h1>
                    
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
            {/* <form action="#" method="#" className="loginForm">
                <label htmlFor="username" className="srOnly">username:</label>
                <input type="text" id="username" placeholder="username"/>

                <label htmlFor="password" className="srOnly">password:</label>
                <input type="password" id="password" placeholder="password"></input>
            </form> */}

            {/* if not logged in, display login page */}
            {
                login
                    ? null
                    : <LoginBg />
            } 
        </>
    )
}

export default LoginPage;