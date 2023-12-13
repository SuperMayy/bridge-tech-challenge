import './main.css';
import React, { useEffect } from 'react'
import { gsap } from "gsap";

const MainLayout = ({ children, isResultPage }) => {
  useEffect(() => {
    gsap.fromTo( ".layout-heading",{ x: -200, fill: '#5F259F', }, { x: 0, fill: '#DB2F20' });
  }, []);

  return (
    <div className="layout">
      <div className="top-section">
        <h1 className='layout-heading'>CALCULATING YOUR TOTAL COSTS {isResultPage && "- YOUR RESULT"}</h1>
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  )
}

export default MainLayout