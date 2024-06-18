import HomeIcon from '@mui/icons-material/Home';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import StorageIcon from '@mui/icons-material/Storage';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from './assets/logo.svg'

function Navbar() {

    // const items = [{ id: 1, name: 'Home' }, { id: 2, name: 'Workspaces' }, { id: 3, name: 'Ask your data' }, { id: 4, name: 'Data Sources' }]
    return (
        <>
            <aside id="default-sidebar" className="hidden lg:block fixed top-0 left-0 z-40 w-48 h-screen border-r-4 border-slate-200 " aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto flex flex-col">
                    <div className=' mb-10'>
                        <img src={logo} alt="" />
                    </div>
                    <ul className="space-y-2 font-medium grow">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-purple-100 group">
                                <HomeIcon />
                                <span className="ms-3 text-black">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-purple-100 group">
                                <WorkspacesIcon />
                                <span className="ms-3 text-black">Workspaces</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-purple-100 group">
                                <FindInPageIcon />
                                <span className="ms-3 text-black">Ask your data</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-purple-100 group">
                                <StorageIcon />
                                <span className="ms-3 text-black">Data Sources</span>
                            </a>
                        </li>


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
