import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { PokemonProvider } from './context/PokemonProvider.jsx'

import './index.css'
import App from './App.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <PokemonProvider>
          <App />
        </PokemonProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
