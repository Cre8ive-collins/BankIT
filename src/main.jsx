import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginForm from './LoginForm.jsx'
import TransactionHistory from './TransactionHistory.jsx'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';



const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/transactions",
    element: <TransactionHistory />,
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
