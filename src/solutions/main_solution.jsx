import React from 'react'
import ReactDOM from 'react-dom/client'
import CompGuess from '../pages/CompGuess.jsx'
import HumanGuess from '../pages/HumanGuess.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import App from '../App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "compguess",
        element: <CompGuess />
      },
      {
        path: "humanguess",
        element: <HumanGuess />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
