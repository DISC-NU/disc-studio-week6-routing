import React from 'react'
import ReactDOM from 'react-dom/client'
import CompGuess from './pages/CompGuess.jsx'
import HumanGuess from './pages/HumanGuess.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// create a browser router to route all your pages
// route /compguess to CompGuess, /humanguess to HumanGuess, errors to ErrorPage and / to App
// https://reactrouter.com/en/main/routers/create-browser-router

const router = createBrowserRouter([])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
