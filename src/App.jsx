import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Genres from './pages/Genres'
import Feedback from './pages/Feedback'
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
