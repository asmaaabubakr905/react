import React from 'react'
import './Nav.css'
import image from '../assets/Logo (2).svg'

function Nav() {
  return (
   <>
  <div className="announcement-bar">
    <p className="announcement-text">FREE Shipping On Orders Over $100 🎉</p>
</div>

<nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#F9F5EA' }}>
    <div className="container">
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand d-lg-none d-xl-none" href="./index.html">
            <img src={image} alt="Scandleted Logo" />
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="./shop.html">SHOP</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./about.html">ABOUT</a>
                </li>
               <li className="nav-item">
                    <a className="nav-link" href="./about.html">Blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./testimonials.html">TESTIMONIALS</a>
                </li>
            </ul>

            <a className="navbar-brand d-none d-lg-block" href="./index.html">
                <img src={image} alt="Scandleted Logo" />
            </a>

            <div className="navbar-icons">
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-regular fa-user"></i>
                <i className="fa-solid fa-bag-shopping"></i>
                <button className="btn btn-login" data-bs-target="#loginform" data-bs-toggle="modal">LOG IN</button>
            </div>
        </div>
    </div>
</nav>
</>

  )
}

export default Nav
