import React from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../Components/UserProvider';
import { useNavigate } from 'react-router-dom';
import ecodeLogo from '../assets/ecode.png';

function NavBar() {

    const {user, setUser} = useUserContext()
    const navigate = useNavigate()

    function logOut(){
        setUser(null);
        localStorage.removeItem('user')
        navigate('/')
    }

    return (
        <header className='NavBar'>
            {/* cambio el texto Bonos por el logo con link */}
            <Link to="/" ><img src={ecodeLogo} alt="Ecode Logo" className="logo" /></Link>
            <nav>
                <Link to="/about-us" >About Us</Link>
                <Link to="/social-impact" >Social Impact</Link>
                <Link to="/contact" >Contact Us</Link>
                {
                    user ?
                        <button onClick={logOut}>Logout</button>

                        :

                        <>
                            <Link to="/login" >Login</Link>
                            <Link to="/register" >Register</Link>
                        </>
                }

            </nav>
        </header>
    )
}

export default NavBar
