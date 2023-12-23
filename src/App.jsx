
import './App.css'
import { Routes,Route } from 'react-router-dom'
import ProductPage from './Components/ProductPage/ProductPage'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
function App() {


  return (
   <div className=' max-w-[1170px] mx-auto py-4'>
    <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/product" element={<ProductPage />} />
        {/* <Route path="/product/:id" element={<ProductPage />} /> */}
        {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
    </Routes>
    </div>
  )
}

export default App
