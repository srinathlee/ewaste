import {useRef} from 'react'
import {FaTimes,FaBars} from 'react-icons/fa'
import './index.css'

const Header=()=>{

const nav=useRef()

const responsiveNav=()=>{
  console.log("hello")
  nav.current.classList.toggle("responsive-nav")
}

return(
    <header className='header-bg-container'>

        <h1 className='logo'>EW</h1>
        <nav  ref={nav} className='nav-bg-container'>
          <a  href="/">home</a>
          <a href="/about">aboutUs</a>
          <a href="/contact">contactUs</a>
          <button className='sign-up-button'>SignUp</button>
          <button onClick={responsiveNav} className='nav-btn close-btn'><FaTimes/></button>
        </nav>
        <button onClick={responsiveNav}   className='nav-btn'><FaBars/></button>

      </header>
)
}
export default Header