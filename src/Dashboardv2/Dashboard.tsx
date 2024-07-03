import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ReorderIcon from '@mui/icons-material/Reorder';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Header from '../Dashboardv2/Header';
import Navbar from '../Dashboardv2/Navbar';
import Banner from '../Dashboardv2/Banner';

function Dashboard() {
    const styles = {

        largeIcon: {
            width: 30,
            height: 45,
        },

    };

    return (
        <>
            <div className='overflow-hidden	'>
                <Header />
                <Navbar />
                <Banner />
                <h4 className='text-center mb-10 text-purple-600 text-3xl mt-10 lg:ml-44 '>
                    <span className='mx-2 '>
                        <WavingHandIcon style={styles.largeIcon} />

                    </span>
                    Lets get started!</h4>
                {/* thing */}
                {/* <Dashboard /> */}
                <div className='flex flex-col mt-10 '>
                    <div className='flex flex-wrap gap-2 space-between justify-center lg:ml-48 lg:pl-16'>
                        <div className=' border-2  border-violet-200 my-0 w-5/12 rounded-xl p-2 lg:p-4 flex flex-row lg:p-6 '>
                            <div className='mr-4 hidden md:block'>
                                <AddCircleOutlineIcon />
                            </div>
                            <div>
                                <div className='font-bold'>New Workspace</div>
                                <p className='text-sm lg:text-md'>For individuals or teams to collaborate, communicate, and carry out tasks efficiently. Create reports, dashboards or just get insights.</p>
                            </div>
                        </div>

                        <div className=' border-2  border-violet-200 my-0 w-5/12 rounded-xl p-2 lg:p-4 flex flex-row lg:p-6 '>
                            <div className='mr-4 hidden md:block'>
                                <ReorderIcon />
                            </div>
                            <div>
                                <div className='font-bold'>Add Data Sources</div>
                                <p className='text-sm lg:text-md'>For individuals or teams to collaborate, communicate, and carry out tasks efficiently.</p>
                            </div>
                        </div>
                        <div className=' border-2  border-violet-200 my-0 w-5/12 rounded-xl p-2 lg:p-4 flex flex-row lg:p-6 '>
                            <div className='mr-4 hidden md:block'>
                                <PersonAddAltIcon />
                            </div>
                            <div>
                                <div className='font-bold'>Invite teammates</div>
                                <p className='text-sm lg:text-md'>Share a link or add their email. You can invite them to Genie or add them to a specific workplace. You can add guest visitors by workspace.</p>
                            </div>
                        </div>
                        <div className=' border-2  border-violet-200 my-0 w-5/12 rounded-xl p-2 lg:p-4 flex flex-row lg:p-6 '>
                            <div className='mr-4 hidden md:block'>
                                <PermDeviceInformationIcon />
                            </div>
                            <div>
                                <div className='font-bold'>Learn about Genie</div>
                                <p className='text-sm lg:text-md'>For individuals or teams to collaborate, communicate, and carry out tasks efficiently.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <span className='hidden md:block absolute right-4 bottom-4'>Need help? Book a <span className='text-purple-900'>demo.</span> </span>
            </div>
            {/* Banner */}




        </>
    )
}

export default Dashboard
