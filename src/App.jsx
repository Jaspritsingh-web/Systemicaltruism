import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from'./components/Footer'
import Slider from './components/Slider'
import Mainfirst from './components/Mainfirst'
import Room from './components/Room'
function App() {


  return (
    <>
      <div>
        <Navbar></Navbar>
        <Room/>
        <Mainfirst/>
        <Slider/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
