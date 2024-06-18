import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ReorderIcon from '@mui/icons-material/Reorder';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';

function Dashboard() {

    return (
        <>
            {/* Banner */}
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



        </>
    )
}

export default Dashboard
