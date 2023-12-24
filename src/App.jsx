
import './App.css'
import { Routes,Route } from 'react-router-dom'
import ProductPage from './Components/ProductPage/ProductPage'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import ProductDetails from './Components/ProductPage/ProductDetails'
import NotFound from './Components/NotFound/NotFound'
function App() {


  return (
   <div className=' max-w-[1170px] mx-auto py-4'>
    <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
    </Routes>
    </div>
  )
}

export default App
