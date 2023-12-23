import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'
import NavbarContainer from './Components/Navbar/Navbar.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <NavbarContainer />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
