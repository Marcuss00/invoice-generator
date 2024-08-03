import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ItemProvider } from './context/ItemContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <ItemProvider>
      <App />
      </ItemProvider> 
   
  </React.StrictMode>,
)
