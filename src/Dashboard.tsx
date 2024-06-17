import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import Banner from './Banner'
function Dashboard() {
    const [count, setCount] = useState(0)
    const content = [{
        icon: '',
        title: "New Workspace",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
    }, {
        icon: '',
        title: "Add Data Sources",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
        icon: '',
        title: "Invite teammates",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
        icon: '',
        title: "Learn about Genie",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }]

    return (
        <>
            {/* Banner */}
            <div className='flex flex-col  mt-10 '>
                <div className='flex flex-wrap gap-4 space-between	ml-48 pl-16'>
                    {content.map((item) => {
                        return <div className=' border-2  border-violet-200 my-0 w-5/12 rounded-xl p-4 flex flex-row '>
                            <div className='mr-4'>icon</div>
                            <div>
                                <div>{item.title}</div>
                                <p>{item.desc}</p>
                            </div>



                        </div>
                    })}
                </div>

            </div>



        </>
    )
}

export default Dashboard
