import React,{useState} from 'react'
// import './navbar.css'
import './navbar.scss'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
  const [active, setActive] = useState('navBar')
  // Function to toggle navBar
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }
  // Function to remove navBar
  const removeNavbar = ()=>{
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
      <header className='header flex'>

        <div className='logoDiv'>
          <a href="#a" className='logo flex'>
            <h1><MdOutlineTravelExplore className="icon"/>Travelia.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#a" className="navLink">Home</a>
            </li>
            <li className='navItem'>
              <a href="#a" className="navLink">Packges</a>
            </li>
            <li className='navItem'>
              <a href="#a" className="navLink">Shop</a>
            </li>
            <li className='navItem'>
              <a href="#a" className="navLink">About</a>
            </li>
            <li className='navItem'>
              <a href="#a" className="navLink">Pages</a>
            </li>
            <li className='navItem'>
              <a href="#a" className="navLink">Contact</a>
            </li>

            <button className='btn'>
              <a href="#a">BOOK NOW</a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>

          
        </div>
        <div onClick={showNav} className="toggleNavbar" >
            <TbGridDots className='icon'/>
          </div>
      </header>
    </section>
  )
}

export default Navbar