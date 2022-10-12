import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-white bg-green">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
      
      {/* logo img */}
      {/* <img src="/piepier.png" width="200" height="120"  border="0px"/> */}
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li></li>
          
          {/* <li className="nav-item">
            <a className="nav" aria-current="page" href="/">Home</a>
          </li> */}
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
   </nav>
        </div>
    )
}
// What is the spefic value of title string or number that is shown here 
Navbar.propTypes= {title: PropTypes.string.isRequired}


// default value of title 
Navbar.defaultProps = {
    title: 'Raees03'
  };