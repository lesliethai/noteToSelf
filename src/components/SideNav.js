import { Link } from 'react-router-dom';

const SideNav = () => {
    console.log('SideNav has rendered.');

    return (
        <aside class="sideNav">
            <nav>
                <ul>
                    <Link to="/"><li>Overview</li></Link>
                    <Link to="/contact-us"><li>Contact Us</li></Link>
                </ul>
            </nav>
        </aside>
    )
}

export default SideNav;