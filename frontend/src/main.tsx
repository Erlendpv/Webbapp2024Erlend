import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import HomePage from './Features/Projects/Pages/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <HomePage/>
    </App>
  </StrictMode>,
)
