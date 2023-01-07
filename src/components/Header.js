import { useState } from 'react';

const Header = () => {
    console.log('Header has rendered.');

    const [login, setLogin] = useState(false);

    const handleClick = () => {
        setLogin(!login);
    }

    return (
        <header>
            <h1>NTS</h1>

            <nav>
                <ul>
                    <li> 
                        <p>button</p>
                    </li>
                    <li>
                        <p>user img</p>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;