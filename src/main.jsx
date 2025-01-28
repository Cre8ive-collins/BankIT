import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginForm from './LoginForm.jsx'
import TransactionHistory from './TransactionHistory.jsx'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { LoginProvider } from '../context/LoginContext.jsx'
import { ToastContainer } from 'react-toastify';



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
    <LoginProvider>
      <RouterProvider router={router} />
      <ToastContainer autoClose={3000} position="top-center" theme="colored" />
    </LoginProvider>
  </StrictMode>,
)
