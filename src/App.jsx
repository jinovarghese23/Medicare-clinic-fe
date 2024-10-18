import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Contact from './pages/Contact'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import Appointments from './pages/Appointments'
import DocAppointments from './pages/DocAppointments'

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors/:speciality' element={<Doctors/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/appointments' element={<Appointments/>} />
        <Route path='/appointments/:docId' element={<DocAppointments/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App