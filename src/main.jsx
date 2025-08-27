import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Daimo imports
import { DaimoProvider } from "@daimo/pay/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DaimoProvider
      projectId="pay-demo"   // replace with your Daimo projectId
      environment="sandbox"         // "sandbox" for testing, "production" later
    >
      <App />
    </DaimoProvider>
  </StrictMode>,
)
