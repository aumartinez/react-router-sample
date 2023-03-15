import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from '../pages/Root'
import NotFound from '../pages/NotFound'
import Contact from '../pages/Contact'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />
  },
  {
    path: '/contacts/:id',
    element: <Contact />
  }
])

export default router