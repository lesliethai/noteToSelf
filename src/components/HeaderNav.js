import { Link } from 'react-router-dom';

const HeaderNav = () => {

    return (
        <nav>
            <ul className="headerNavLinks">
                <li><Link to="/home-page">Home</Link></li>
                <li><Link to="/notes">Notes</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default HeaderNav;