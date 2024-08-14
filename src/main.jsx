import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ToastContainer } from 'react-toastify';



createRoot(document.getElementById('root')).render(

  
  <StrictMode>
    <App />
    <ToastContainer autoClose={2000} style={{width:"350px" }} draggable />
  </StrictMode>,
)
