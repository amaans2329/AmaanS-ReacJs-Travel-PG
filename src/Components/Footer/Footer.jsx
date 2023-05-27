import React from 'react'
import './footer.css'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai"


const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
      <div>
        <h1>Tours and Travels</h1>
        <p>Choose your favourite destination.</p>
      </div>
      </div>   
      <div className="bottom">
      <AiFillFacebook className="icon" />
      <AiFillInstagram className='icon'/>
      <AiFillTwitterSquare className='icon'/>
      </div>
    </div>
  )
}

export default Footer