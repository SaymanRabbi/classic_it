
import './App.css'
import { Routes,Route } from 'react-router-dom'
import ProductPage from './Components/ProductPage/ProductPage'
function App() {


  return (
   <div className=' max-w-[1170px] mx-auto'>
    <Routes>
        <Route path="/" element={<ProductPage />} />
    </Routes>
    </div>
  )
}

export default App
