import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Pss from './input.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pss />
  </StrictMode>,
)
