import React from 'react'

export const Header = () => {
  return (
    <div className='header'>
      <div className="container">
      <div className='top-content'>
      <div className="top-content__logo">
        <img src="./agency.png" alt="logo" />
        <span>Agency</span>
      </div>
      <div className="top-content__nav-panel">
        <ul className="top-content__nav-list">
          <li className="top-content__nav-item">About</li>
          <li className="top-content__nav-item">Services</li>
          <li className="top-content__nav-item">Pricing</li>
          <li className="top-content__nav-item">Blog</li>
        </ul>
      </div>
      <div className="top-content__button">
        contacts
      </div>
      </div>
      <div className="bottom-content">
          <h1>Portfolio</h1>
          <p>Agency provides a full service range including technical skills, design, business understanding.</p>
      </div>
    </div>
      </div>
  )
}
