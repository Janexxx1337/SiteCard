import React, { useEffect } from 'react'

import { Outlet, useLocation } from 'react-router-dom'

import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  const location = useLocation()

  const getPageClass = () => {
    const path = location.pathname.substring(1).split('/')[0]
    if (!path) return 'home'
    return path
  }

  useEffect(() => {
    const pageClass = getPageClass()
    document.body.className = `${pageClass}-page`

    return () => {
      document.body.className = ''
    }
  }, [location])

  return (
      <div className="App">
        <Sidebar />
        <div className="page">
          <span className="tags top-tags">&lt;body&gt;</span>

          <Outlet />
          <span className="tags bottom-tags">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
            &lt;/body&gt;
            <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
        </div>
      </div>
  )
}

export default Layout