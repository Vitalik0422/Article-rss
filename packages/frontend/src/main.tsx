import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import { Login } from './pages/auth/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <StrictMode>
    <Login />
  </StrictMode>,
  </Provider>
)
