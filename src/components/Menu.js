import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => (
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/roster'>Roster</Link></li>
            <li><Link to='/schedule'>Schedule</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
    </nav>
)

export default Menu
