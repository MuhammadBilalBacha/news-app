// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
   Route,
  Routes
} from "react-router-dom";


export default class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
        
        <NavBar/> 
        {/* <News pageSize="6" country="us" category="sports"/> */}
        <Routes>
          <Route path='/Sports' element={<News pageSize="6" country="us" category="sports"/>}></Route>
        
        </Routes>
        <Routes>
        <Route path='/Business' element={<News pageSize="6" country="us" category="business"/>}></Route>
        </Routes>
        <Routes>
        <Route path='/Health' element={<News pageSize="6" country="us" category="health"/>}></Route>
        </Routes>
        <Routes>
        <Route path='/Entertainment' element={<News pageSize="6" country="us" category="entertainment"/>}></Route>
        </Routes>
        <Routes>
        <Route path='/Science' element={<News pageSize="6" country="us" category="science"/>}></Route>
        </Routes>
        <Routes>
        <Route path='/Technology' element={<News pageSize="6" country="us" category="technology"/>}></Route>
        </Routes>
        <Routes>
        <Route path='/General' element={<News pageSize="6" country="us" category="general"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
