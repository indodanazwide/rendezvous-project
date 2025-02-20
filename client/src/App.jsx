import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {

  return (
    <>
      <Header />

      <main><Outlet /></main>

      <Footer />
    </>
  )
}

export default App
