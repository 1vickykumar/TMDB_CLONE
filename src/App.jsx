
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'

import Signup from './pages/Signup'
import TrailerCard from './components/TrailerCard'
import MovieCard from './components/MovieCard'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <>
      <Header/>
      <LandingPage/>
      <TrailerCard/>
      {/* <Signup/> */}

       {/* <MovieCard/> */}

      <Footer/>
    </>
  )
}

export default App
