import { useState } from 'react'
import { RiMenu3Fill } from 'react-icons/ri'
import { MdOutlineLogin } from 'react-icons/md'

const Header = () => {

    const [ menuOpen, setMenuOpen ] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header>
            <img src="/logo.png" alt="Rendezvos" />

            <nav>
                <ul>
                    <li><MdOutlineLogin size={25}/></li>
                    <li onClick={toggleMenu}><RiMenu3Fill size={25} /></li> 
                </ul>
            </nav>

            {
                menuOpen && (
                    <ul className="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                )
            }
        </header>
    )
}

export default Header

// Explaination for the toggle logic on Markdown docu