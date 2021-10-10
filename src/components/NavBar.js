import React from 'react'
import "../App.css";
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <header>
            <Link className="btn" to='/'> Home</Link>
            <Link className="btn" to='/ProductList'> ProductList</Link>
        </header>
    )
}

export default NavBar
