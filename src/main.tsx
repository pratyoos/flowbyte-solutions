import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { StrictMode } from 'react'

const container = document.getElementById('root')

if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
} 
else {
  throw new Error('Root container not found')
}
