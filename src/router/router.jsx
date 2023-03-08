import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from '../pages/Root'
import NotFound from '../pages/NotFound'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />
  }
])

export default router