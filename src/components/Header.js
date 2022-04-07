import React from 'react'
import { Outlet,Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
         {/* loader  */}
         <div className="loader_bg">
          <div className="loader"><img src="images/loading.gif" alt="#" /></div>
        </div>
        {/* end loader */}
        {/* header */}
        <header>
          {/* header inner */}
          <div className="header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div className="full">
                    <div className="center-desk">
                      <div className="logo">
                        <Link to="/"><img src="images/logo.png" alt="#" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                  <nav className="navigation navbar navbar-expand-md navbar-dark ">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample04">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/about-us">About</Link>
                        </li>
                        {/* <li className="nav-item">
                          <Link className="nav-link" to="">Computer</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="laptop.html">Laptop</Link>
                        </li> */}
                        <li className="nav-item">
                          <Link className="nav-link" to="/product">Products</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/contact-us">Contact Us</Link>
                        </li>
                        <li className="nav-item d_none">
                          <a className="nav-link" href="#"><i className="fa fa-search" aria-hidden="true" /></a>
                        </li>
                        <li className="nav-item d_none">
                          <a className="nav-link" href="#">Login</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* end header inner */}
        {/* end header */}
    </>
  )
}

export default Header