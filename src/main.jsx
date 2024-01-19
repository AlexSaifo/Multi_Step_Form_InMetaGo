import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
import { StepProvider } from './contextAPI/StepContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StepProvider>
    <App />
  </StepProvider>
)
