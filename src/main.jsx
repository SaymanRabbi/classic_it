import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavbarContainer from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import toast, { Toaster } from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <NavbarContainer />
      <App />
      <Footer />
      <Toaster position='top-right'/>
    </BrowserRouter>
  </React.StrictMode>,
)
