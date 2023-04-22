
import {BsInstagram,BsTwitter} from 'react-icons/bs'
import {AiOutlineFacebook} from 'react-icons/ai'
import {BiCopyright} from 'react-icons/bi'
import './index.css'

const Home=()=>(
<>
    <div className="home-bg-container">
     
     <h1 className='main-heading'>Keep <span className='special-text'>e-waste</span><br/> out of your <span className='special-text'>trash!</span></h1>
     
     <form className="from-bg-container">

       <div className='widget-bg-container'>
        <label htmlFor='name' className='label name-label'>Name</label>
        <input className='input name-input' id="name" type="text" placeholder='Enter your name'/>
       </div>

       <div className='widget-bg-container'>
        <label htmlFor='name' className='label name-label'>E-mail</label>
        <input className='input name-input' id="name" type="text" placeholder='Enter your Email'/>
       </div>

       <div className='widget-bg-container'>
        <label htmlFor='name' className='label name-label'>Contact Number</label>
        <input className='input name-input' id="name" type="text" placeholder='Enter your Number'/>
       </div>

       <div className='widget-bg-container'>
        <label htmlFor='name' className='label name-label'>Message</label>
        <input className='input name-input' id="name" type="text" placeholder='Enter your Message'/>
       </div>
       <button className='submit-btn'>
        Send
       </button>

     </form>

    </div>

    <div className='aboutus-bg-container'>
        <div className='aboutus-text-container'>
            <h1 className='about-heading'>About Us</h1>
            <p className='about-para'>Remine India is a recognized startup working on recycling e-Waste and Li Batteries.</p>
            <button  className='about-btn'>View more</button>
        </div>
        <img className='about-image' src="https://res.cloudinary.com/dldcgj0mx/image/upload/v1682182654/new_ndtdfd.png"/>



    </div>

    

    <footer className='footer-bg-container'>
        <h1 className='followus-heading'>Follow Us</h1>
       <div className='icons-bg-container'>
        <BsTwitter className='social-icon'/>
        <AiOutlineFacebook className='social-icon'/>
        <BsInstagram className='social-icon'/>

       </div>
       <p className='terms-policy-para'> Terms of Use . Privacy Policy</p>
       <p className='copywite-heading'><BiCopyright className='copywite-icon'/>2020 Clarity Money</p>
    </footer>




    </>
    

)
export default Home