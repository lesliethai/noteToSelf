import HomePage from './HomePage';
import LoginBg from './LoginBg';
import { useState } from 'react';

const LoginPage = () => {
    
    console.log('LoginPage has rendered.');

    const [login, setLogin] = useState(false);

    const handleClick = () => {
        setLogin(!login);
    }

    return (
        <>
            <header className="headerNav">
                <div className="wrapper">
                    <h1>NTS</h1>
                    
                    {/* if logged in, show user img; if not, show nothing*/}
                    {
                        login
                        ? 'user img here'
                        : null
                    }

                    {/* change button text depending on login state */}
                    <button className="loginBtn" onClick={handleClick}>{
                        login
                            ? 'Log out'
                            : 'Log in'
                    }</button>
                </div>
            </header>
            {/* <form action="#" method="#" className="loginForm">
                <label htmlFor="username" className="srOnly">username:</label>
                <input type="text" id="username" placeholder="username"/>

                <label htmlFor="password" className="srOnly">password:</label>
                <input type="password" id="password" placeholder="password"></input>
            </form> */}

            {/* if logged in, display home page - else, display login page */}
            {
                login
                    ? <HomePage />
                    : <LoginBg />
            } 
        </>
    )
}

export default LoginPage;