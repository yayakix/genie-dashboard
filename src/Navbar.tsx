/// <reference types="vite-plugin-svgr/client" />

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomeIcon from '@mui/icons-material/Home';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import StorageIcon from '@mui/icons-material/Storage';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from './assets/logo.svg'
// import { ReactComponent as Logo } from "./assets/logo.svg";




function Navbar() {

    const items = [{ id: 1, name: 'Home' }, { id: 2, name: 'Workspaces' }, { id: 3, name: 'Ask your data' }, { id: 4, name: 'Data Sources' }]
    return (
        <>

            <aside id="default-sidebar" className="hidden lg:block fixed top-0 left-0 z-40 w-48 h-screen border-r-4 border-slate-200 " aria-label="Sidebar">

                <div className="h-full px-3 py-4 overflow-y-auto flex flex-col">
                    <div className=' mb-10'>
                        {/* <h1 className='text-5xl mb-10' >LOGO</h1> */}
                        {/* <Logo /> */}
                        <img src={logo} alt="" />


                    </div>
                    <ul className="space-y-2 font-medium grow">
                        {items.map((item, idx) => {
                            return <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-purple-100 group">
                                    {/* <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg> */}

                                    {(() => {
                                        if (idx === 0) {
                                            return (
                                                <HomeIcon />
                                            )
                                        } else if (idx === 1) {
                                            return (
                                                <WorkspacesIcon />
                                            )
                                        }
                                        else if (idx === 2) {
                                            return (
                                                <FindInPageIcon />
                                            )
                                        }
                                        else if (idx === 3) {
                                            return (
                                                <StorageIcon />
                                            )
                                        }
                                        return null;
                                    })()}

                                    <span className="ms-3 text-black">{item.name}</span>
                                </a>
                            </li>
                        })}
                    </ul>
                    <div className='text-black flex flex-1 list-none '>
                        <div className=' flex justify-end flex-col flex-1 w-full  '>
                            <div className='border-t-4'></div>
                            <li className=''>
                                <a href="#" className="flex items-center p-2 text-black rounded-lg hover:bg-purple-100 group">
                                    <PersonOutlineIcon />
                                    <span className="ms-3 text-black">Profile</span>
                                </a>
                            </li>
                            <li className=' '>

                                <a href="#" className="flex items-center p-2 text-black rounded-lg hover:bg-purple-100 group">
                                    <SettingsIcon />
                                    <span className="ms-3 text-black">Settings</span>
                                </a>
                            </li>
                        </div>
                    </div>
                </div>

            </aside>

        </>
    )
}

export default Navbar
