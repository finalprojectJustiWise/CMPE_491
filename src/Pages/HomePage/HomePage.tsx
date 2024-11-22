import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import justice from '../../Assets/justice.webp'
import '../HomePage/HomePage.css'


const HomePage = () => {
  return (
    <><Navbar/><div className="image-container">
    <img id='justiceimg' src= {justice} alt="Adalet mülkün temelidir" />
    <div className="overlay-text">
    <h1>Project Overview</h1>
    <div>Metin Girin</div>
    <h1>Project Objective</h1>
    <div>Cicikuş</div>
    <h1>Features</h1>
    <ul><li>Merhaba nasılsın burnun kapıya kısılsın</li></ul>
    <h1>Technologies</h1>
    <ul><li>Merhaba nasılsın burnun kapıya kısılsın</li></ul>
    <h1>Conclusion</h1>
    </div>
    </div></>
  )
}
export default HomePage