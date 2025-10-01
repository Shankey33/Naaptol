//React imports
import { useEffect, useState } from "react";

//External imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import {faHouse} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {

    // All logic for small screen handling 
    const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    
    const handleHamburgerClick = () => {
        setIsHamMenuOpen(!isHamMenuOpen);
    }

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [window.innerWidth]);

    
  return (
    <>
    {screenSize >= 768 ? (

        // Navbar logic for big screens
        <div className="bg-green-700 p-4 text-white flex items-center shadow-md">

        <div className="title text-2xl font-bold tracking-wide mr-8">Naaptol</div>

        {/* Navigation Links */}

            <div className="links flex gap-4 text-lg font-semibold mr-8 items-center">
                <a href="/" className="hover:text-green-300 transition">Home <FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}} /></a>
                <a href="/about" className="hover:text-green-300 transition">About <FontAwesomeIcon icon={faBuilding} style={{color: "#ffffff",}} /></a>
            </div>

        {/* Search area and account buttons here */}

            <div className="flex items-center ml-auto">

                <form action="/searc/" method="GET" className="flex gap-2 max-w-md w-full">                                                             
                    <input type="text" placeholder="Search here..." className="px-2 py-1 rounded-md text-gray-900 focus:outline-none w-full" />                                                         
                    <input type="submit" value="Search" className="bg-white text-green-700 px-3 py-1 rounded-md font-semibold hover:bg-green-100 cursor-pointer transition" />
                </form>

                <a href="/login" className="hover:text-green-300 transition ml-8 text-2xl font-semibold mr-3"><FontAwesomeIcon icon={faUserPlus} style={{color: "#ffffff",}} /></a>
            
            </div>

        </div>
    ) 
    :    
    (   
        // Small screens
        <>
        <div className="bg-green-700 p-4 text-white flex items-center justify-between shadow-md">
            <div className="title text-4xl font-bold tracking-wide mr-8">Naaptol</div>
            <div className="text-3xl">
                <FontAwesomeIcon icon={faBars} style={{color: "#ffffff"}} onClick={handleHamburgerClick} />
            </div>
        </div>

        {/* Drawer menu from right */}
        <div
            className={`fixed top-0 right-0 h-full w-64 bg-green-700 text-white shadow-lg z-50 transform transition-transform duration-300 ${
                isHamMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <div className="flex flex-col p-6 space-y-4">

                {/* manual cross sign, might replace it with an icon later*/}
                <button className="self-end text-3xl mb-2 focus:outline-none" onClick={handleHamburgerClick}> &times;</button>

                {/* Search form here */}
                <form action="/search/" method="GET" className="flex gap-2 max-w-md w-full mb-2 mt-8 text-1xl">
                    <input type="text" placeholder="Search here..." className="px-2 py-1 rounded-md text-gray-900 focus:outline-none w-full" />
                    <input type="submit" value="Search" className="bg-white text-green-700 px-3 py-1 rounded-md font-semibold hover:bg-green-100 cursor-pointer transition" />
                </form>
                
                <a href="/login" className="text-3xl hover:text-green-300 transition font-semibold mt-25 px-2">User <FontAwesomeIcon icon={faUserPlus} style={{color: "#ffffff",}} /></a>
                <a href="/about" className="hover:text-green-300 transition text-3xl font-semibold mt-6 px-2">About <FontAwesomeIcon icon={faBuilding} style={{color: "#ffffff",}} /></a>
                <div className=" flex flex-col px-2 w-full text-3xl justify-end gap-6 mt-6">
                    <a href="" className="font-semibold">FAQ <FontAwesomeIcon icon={faComments} style={{color: "#ffffff",}} /></a>
                    <a href='https://www.youtube.com/naaptol' target='_blank'><FontAwesomeIcon icon={faYoutube} style={{color: "#ffffff",}}/></a>
                    <a href="https://x.com/#!/shopatnaaptol" target='_blank'><FontAwesomeIcon icon={faXTwitter} style={{color: "#ffffff",}} /></a>
                </div>
            </div>
        
        </div>

        {/* Overlay to close menu when clicking outside */}
        {isHamMenuOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-40 z-40"
                onClick={handleHamburgerClick}
            />
        )}
        </>
    )
    }
    </>
  )
}

export default Navbar
