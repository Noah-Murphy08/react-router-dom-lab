import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/mailboxes'>Mailboxes</Link>
                </li>
                <li>
                    <Link to='/new-mailbox'>Create Mailbox</Link>
                </li>
            </ul>
        </nav>
    )
}


export default NavBar
