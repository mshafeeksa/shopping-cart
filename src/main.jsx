import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes/Routes'
import './styles/index.css'
import './styles/custom.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
)
