import { useState } from 'react';

const LoginPage = () => {
    
    console.log('LoginPage has rendered.');

    const [ login, setLogin ] = useState(false);

    const handleClick = () => {
        setLogin(!login);
    }

    return (
        <header>
            <h1>NTS</h1>
            <img src="http://placekitten.com/g/200/200" alt="img placeholder" />
            <h2>Login</h2>
            <form action="#" method="#" className="loginForm">
                <label htmlFor="username" className="srOnly">username:</label>
                <input type="text" id="username" placeholder="username"/>

                <label htmlFor="password" className="srOnly">password:</label>
                <input type="password" id="password" placeholder="password"></input>

                <button onClick={handleClick}>Login</button>
            </form>
        </header>
    )
}

export default LoginPage;