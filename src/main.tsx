import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { LandingContentProvider } from './lib/landingContent'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LandingContentProvider>
        <App />
      </LandingContentProvider>
    </BrowserRouter>
  </StrictMode>,
)
