
// import React from 'react'
import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetail from '../pages/Doctors/DoctorDetail';

import {Routes, Route} from 'react-router-dom'

const Router = () => {
  return <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/home' element={<Home />}></Route>
    <Route path='/doctors' element={<Doctors />}></Route>
    <Route path='/doctors/:id' element={<DoctorDetail />}></Route>
    <Route path='/services' element={<Services />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/register' element={<Signup />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
  </Routes>
}

export default Router