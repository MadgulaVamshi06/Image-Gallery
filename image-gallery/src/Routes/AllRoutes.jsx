import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from '../components/About'
import Home from '../components/Home';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/contact' element ={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes