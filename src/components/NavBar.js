import React from 'react'
import "../App.css";
import {Link , Redirect} from 'react-router-dom'

function NavBar() {
    return (
        <header>
            <Link to='/'>
            <img className='logo' src={'https://cdn-icons.flaticon.com/png/128/1330/premium/1330387.png?token=exp=1633886566~hmac=cf6bc98a04747592feb8b7ec0bf830e0'} />
             </Link>
            <Link className="btn" to='/'> Home</Link>
            <Link className="btn" to='/ProductList'> ProductList</Link>
        </header>
    )
}

export default NavBar
