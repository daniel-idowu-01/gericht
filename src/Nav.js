import { useState } from "react"
import { Link } from "react-router-dom"
import './index.css'
import { FaBars } from "react-icons/fa"
import { VscChromeClose } from "react-icons/vsc"

const Nav = () => {

    /* Navigation Bar Toggle */
    const [showSideBar, setShowSideBar] = useState(false)
    const navLinkStyle = "hidden md:block text-base hover:opacity-75"

    const sideBar = () => {
        setShowSideBar(!showSideBar)
    }

    //to close sidebar when a sidebar link is clicked
    const closeBar = () => {
        setShowSideBar(false)
    }

    return (
        <nav className="flex justify-between p-10 sm:px-32 bg-black text-white">
            <div>
                <Link to='/'> <p className="text-xl font-bold">GERICHT</p> </Link>
            </div>
            
            <div>
                {/* Desktop View sideBar */}
                <ul className="flex gap-14">
                    <li className={navLinkStyle}> <Link to="/">Home</Link> </li>
                    <li className={navLinkStyle}> <Link to="/food">Food</Link> </li>
                    <li className={navLinkStyle}> <Link to="/contact">Contact Us</Link> </li>
                    <li className={navLinkStyle}> <Link to="/blog">Blog</Link> </li>
                    <button
                        className="md:hidden text-2xl px-3 py-0.5"
                        onClick={sideBar}
                    >
                        {showSideBar ? <VscChromeClose /> : <FaBars />}
                    </button>
                </ul>
            </div>

            <div className="hidden md:block">
                <li className={navLinkStyle}> <Link to="/login">Login / Registration</Link> </li>
            </div>

            {/* Mobile View sideBar */}
            <div className={` ${showSideBar ? 'block' : 'hidden'} space-y-8 md:hidden absolute top-16 right-0.5 bg-black p-12 px-16 h-fit w-80 pb-20 text-center items-center ` }> {/* String literals */}
                <Link onClick={closeBar} to="/" className="block text-lg">Home</Link>
                <Link onClick={closeBar} to="/food" className="block text-lg">Food</Link> 
                <Link onClick={closeBar} to="/contact" className="block text-lg">Contact</Link>
                <Link onClick={closeBar} to="/blog" className="block text-lg">Blog</Link>
                <Link onClick={closeBar} to="/login" className="block text-lg">Login / Register</Link>
            </div>

        </nav>
    )
}

export default Nav