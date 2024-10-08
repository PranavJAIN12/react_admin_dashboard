
import { Routes, Route } from 'react-router-dom'
import Overview from './pages/Overview'
import Product from './pages/Product'
import './App.css'
import Sidebar from './components/Sidebar'
import Users from './pages/Users'
import Sales from './pages/Sales'
import Orders from './pages/Orders'
import Analytics from './pages/Analytics'
// import Header from './components/Header'

function App() {
  

  return (
    <>
      <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>

      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'/>
        <div className='absolute inset-0 ' />
      </div>

      <Sidebar/>
      {/* <Header/> */}
        <Routes>
          <Route path='/' element={<Overview />}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/users' element={<Users />}/>
          <Route path='/sales' element={<Sales/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/analytics' element={ <Analytics/>}/>
        </Routes>
        
      </div>
    </>
  )
}

export default App
