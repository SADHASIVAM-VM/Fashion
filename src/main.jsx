import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyContext from './Controllers/ShopContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <MyContext>
    <App />
  </MyContext>
  
)
