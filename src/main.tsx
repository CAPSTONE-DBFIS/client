import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// css
import './app/styles'
// routing
import AppRouter from './app/routes/AppRouter'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppRouter />
    </StrictMode>
)
