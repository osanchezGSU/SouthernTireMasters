import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './assets/js/icons';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}

export default App
