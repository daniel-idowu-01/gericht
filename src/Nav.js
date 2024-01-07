import { useState } from "react"
import { Link } from "react-router-dom"
import './index.css'
import { FaBars } from "react-icons/fa"
import { VscChromeClose } from "react-icons/vsc"

const Nav = () => {

    // navigation Bar Toggle
    const [showSideBar, setShowSideBar] = useState(false)
    const navLinkStyle = "hidden md:block text-base hover:opacity-75"

    const sideBar = () => {
        setShowSideBar(!showSideBar)
    }

    // to close sidebar when a sidebar link is clicked
    const closeBar = () => {
        setShowSideBar(false)
    }

    const links = [
        {
            id: 1,
            linkName: 'Home',
            link: '/'
        },
        {
            id: 2,
            linkName: 'Food',
            link: '/food'
        },
        {
            id: 3,
            linkName: 'Contact Us',
            link: '/contact'
        },
        {
            id: 4,
            linkName: 'Blog',
            link: '/blog'
        },
    ]
    return (
        <nav className="flex justify-between p-10 md:px-32 bg-black text-white">
            <div>
                <Link to='/'> <p className="text-xl font-bold">GERICHT</p> </Link>
            </div>
            
            <div>
                {/* Desktop View sideBar */}
                <ul className="flex gap-14">
                    {
                        links.map(link => (
                            <li key={link.id} className={navLinkStyle}>
                                <Link to={link.link}>{link.linkName}</Link>
                            </li>
                        ))
                    }
                    <button
                        className="md:hidden text-2xl px-3 py-0.5"
                        onClick={sideBar}
                    >
                        {showSideBar
                            ?
                            <VscChromeClose />
                            :
                            <FaBars />
                        }
                    </button>
                </ul>
            </div>

            <div className="hidden md:block">
                <li className={navLinkStyle}> <Link to="/login">Login / Registration</Link> </li>
            </div>

            {/* Mobile View sideBar */}
            <div
                className={` ${showSideBar ? 'block' : 'hidden'} space-y-8 md:hidden absolute top-16 right-0.5 bg-black p-12 px-16 h-fit w-80 pb-20 text-center items-center `}
            >
                {
                    links.map(link => (
                        <Link onClick={closeBar} to={link.link} className="block text-lg">
                            {link.linkName}
                        </Link>
                    ))
                }
            </div>

        </nav>
    )
}

export default Nav