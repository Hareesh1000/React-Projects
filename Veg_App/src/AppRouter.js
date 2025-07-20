import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './header'
import Home from './Home'
import Fruits from './Fruits'
import NavBar from './NavBar';
import Vegetables from './Vegetables';
import Sweets from './Sweets';
import Footer from './Footer';



function AppRouter() {
  return (
    <div>
        <Header></Header>
        {/* <NavBar navItems={navBarItems}/> */}
        {/* <Home></Home> */}
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/fruits' element={<Fruits/>}></Route>
            <Route path='/vegetables' element={<Vegetables></Vegetables>}></Route>
            <Route path='/sweets' element={<Sweets></Sweets>}></Route>
        </Routes>

        <Footer></Footer>

    </div>
  )
}

export default AppRouter