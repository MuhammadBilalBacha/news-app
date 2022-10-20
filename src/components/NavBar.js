import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../components/news.css'

export class NavBar extends Component {
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top " id='navbaaar'>
        <div className="container-fluid" id='navbaaar'>
            <Link className="navbar-brand daily" to="General">Daily News</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li className="nav-item">
                <Link className="nav-link linktop" aria-current="page" to="/General">Home</Link>
                </li>
                <li className="nav-item"><Link className="nav-link linktop" to="/Business">Business</Link> </li>
                <li className="nav-item"><Link className="nav-link linktop" to="/Entertainment">Entertainment</Link> </li>
                <li className="nav-item"><Link className="nav-link linktop" to="/General">General</Link> </li>
                <li className="nav-item"><Link className="nav-link linktop" to="/Health">Health</Link> </li>
                <li className="nav-item"><Link className="nav-link linktop" to="/Science">Science</Link> </li>
                <li className="nav-item"><Link className="nav-link linktop" to="/Sports">Sports</Link> </li>
                <li className="nav-item"><Link className="nav-link linktop" to="/Technology">Technology</Link> </li>
               
            </ul>
           
            </div>
        </div>
</nav>
      </div>
    )
  }
}

export default NavBar
