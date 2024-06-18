import Navbar from './Navbar'
import Banner from './Banner'
import Dashboard from './Dashboard'
import Header from './Header'
import WavingHandIcon from '@mui/icons-material/WavingHand';

const styles = {

  largeIcon: {
    width: 30,
    height: 45,
  },

};

function App() {

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
        <Dashboard />
      </div>
    </>
  )
}

export default App
