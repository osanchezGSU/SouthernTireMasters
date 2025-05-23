import {Suspense} from 'react'
import {useRoutes} from 'react-router-dom'
import './assets/css/App.css'
import {routesConfig} from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/hooks/ScrollToTop'

function App() {
  const routes = useRoutes(routesConfig);
  return (
    <div className='app-container'>
      <Header />
      <ScrollToTop />
      <main className='app'>
        <Suspense fallback={<div>Loading...</div>}>
          {routes}
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
