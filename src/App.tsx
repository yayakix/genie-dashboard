import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import Banner from './Banner'
import Dashboard from './Dashboard'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='overflow-hidden	'>
        <Header />
        <Navbar />
        <Banner />
        <h4 className='text-center mb-10 text-purple-600 text-3xl mt-10 lg:ml-44 '>Icon Lets get started!</h4>
        <Dashboard />
      </div>



    </>
  )
}

export default App
