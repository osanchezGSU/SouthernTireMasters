import { useState } from 'react'
import {useRoutes} from 'react-router-dom'

import './assets/css/App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from './components/pages/Home'
import ShopTires from './components/pages/ShopTires'
import Services from './components/pages/Services'
import Locations from './components/pages/Locations'
import TipsGuides from './components/pages/TipsGuides'
import Financing from './components/pages/Financing'
import ServicePage from './components/pages/ServicePage'


function App() {
  const [count, setCount] = useState(0)
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/shop-tires',
      element: <ShopTires />
    },
    {
      path: '/services',
      element: <Services />
    },
    {
      path: '/locations',
      element: <Locations />
    },
    {
      path: '/tips-guides',
      element: <TipsGuides />
    },
    {
      path: '/financing',
      element: <Financing />
    },
    {
      path: '/services/:name',
      element: <ServicePage />
    },
  ])


  return (
    <div className='app-container'>
      <Header />
      <main className='app'>
        {routes}
      </main>
      <Footer />
    </div>
  )
}

export default App
