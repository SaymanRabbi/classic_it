
import './App.css'
import { Routes,Route } from 'react-router-dom'
import ProductPage from './Components/ProductPage/ProductPage'
function App() {


  return (
   <>
    <Routes>
        <Route path="/" element={<ProductPage />} />
    </Routes>
    </>
  )
}

export default App
