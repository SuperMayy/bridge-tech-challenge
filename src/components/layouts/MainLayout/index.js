import './main.css';
import React from 'react'

const MainLayout = ({ children, isResultPage }) => {
  return (
    <div className="layout">
      <div className="top-section">
        <h1>CALCULATING YOUR TOTAL COSTS {isResultPage && "- YOUR RESULT"}</h1>
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  )
}

export default MainLayout