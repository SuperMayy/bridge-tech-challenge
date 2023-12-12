import './main.css';
import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <div className="top-section">
        <h1>Coding test for Bridge SEA</h1>
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  )
}

export default MainLayout