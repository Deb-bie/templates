import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {FaBars} from "react-icons/fa"
import {MdClose} from "react-icons/md"



const NavbarWithButtons = () => {
    const [mobile, setMobile] = useState(false);

    const handleMobile = () => {
        (mobile) ? setMobile(false) : setMobile(true)
    }

    return (
        <div className="h-[100px] w-500px bg-green-500 flex flex-row " >
            <div className="flex flex-row items-center content-center justify-around h-[100px] w-full bg-green-500  ">
                <div className="flex text-32 w-1/4 bg-orange-500 justify-center">
                    <div className="flex">MyLogo</div>
                </div>

                <div className="flex flex-row justify-between content-center items-center w-1/2 bg-rose-500">
                    <ul className="hidden lg:flex flex-row w-full justify-between">
                        <Link to="#" className="flex">Home</Link>
                        <Link to="#" className="flex">About Us</Link>
                        <Link to="#" className="flex">Services</Link>
                        <Link to="#" className="flex">Contact Us</Link>
                    </ul>
                </div>

                <div className="hidden lg:flex flex-row w-1/4 justify-around content-center items-center bg-yellow-500">
                    <button className="flex bg-white">SignUp</button>
                    <button className="flex bg-teal-500">SignIn</button>
                </div>

                <div className="lg:hidden bg-yellow-500" onClick={handleMobile}>
                    {(mobile) ? <MdClose className="bg-purple-500 p-0 m-0" /> : <FaBars className="bg-white" /> }
                </div>
                {
                    (mobile) 
                    ? 
                    <div className="fixed right-0 top-[100px] h-screen sm:w-1/3 4xs:w-screen 4xs:overflow:hidden flex flex-col justify-start content-center items-stretch bg-blue-200">
                        <div className="flex flex-col justify-center content-center items-center">
                            <div className="flex flex-col h-[30vh] ">
                                <ul className="flex flex-col justify-evenly items-center content-start h-full">
                                    <Link to="#" className="flex" onClick={handleMobile}>Home</Link>
                                    <Link to="#" className="flex" onClick={handleMobile}>About Us</Link>
                                    <Link to="#" className="flex" onClick={handleMobile}>Services</Link>
                                    <Link to="#" className="flex" onClick={handleMobile}>Contact Us</Link>
                                </ul>
                            </div>
            
                            <div className="flex flex-col h-[20vh] justify-evenly">
                                <button className="flex bg-green-100 border-2 p-4">Sign In</button>
                                <button className="flex bg-red-100 border-2 p-4">Sign Up</button>
                            </div>
                        </div>
                    </div>
                    : ""
                }
            </div>
        </div>
    )
}


export default NavbarWithButtons;











// export default function NavbarWithoutButtons() {

//     //We will use react hooks for toggLinkng the menu
//     const [isSideMenuOpen, setisSideMenuOpen] = useState(false)

//     const showSideMenu = () => {
//         (isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)
//     }

//     return (
//         <div className="fixed w-full h-8 bg-blue-400 text-gray-200 flex flex-row justify-between items-center">
//             <div className="brand-logo text-sm font-bold px-2">rhombus</div>
//             <ul className="hidden menu-Linkst lg:flex lg:flex-row text-xs font-bold">
//                 <Link className="menu-Linkst-item px-2"><a href="#">Home</a></Link>
//                 <Link className="menu-Linkst-item px-2"><a href="#">Profile</a></Link>
//                 <Link className="menu-Linkst-item px-2"><a href="#">Settings</a></Link>
//             </ul>
            
//             <button onCLinkck={()=>{showSideMenu()}} className="lg:hidden menu-button">
//                 {(isSideMenuOpen) ? <MdClose className="w-8 h-8 px-2" /> : <FaBars className="w-8 h-8 px-2" />}
//             </button>
//             {(isSideMenuOpen) ? SideMenu() : ''}
//         </div>
//     )

   
// }

// function SideMenu(){
//     return(
//         <div className="fixed h-screen w-1/2 sm:w-1/4 lg:hidden bg-blue-500 top-8 right-0 ">
//             <ul className="menu-Linkst flex flex-col text-xs font-bold">
//                 <Link className="menu-Linkst-item py-2 hover:bg-white hover:text-blue-700"><a href="#">Home</a></Link>
//                 <Link className="menu-Linkst-item py-2 hover:bg-white hover:text-blue-700"><a href="#">Profile</a></Link>
//                 <Link className="menu-Linkst-item py-2 hover:bg-white hover:text-blue-700"><a href="#">Settings</a></Link>
//             </ul>
//         </div>
//     )
// }
