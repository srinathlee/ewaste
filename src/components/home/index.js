
import {BsInstagram,BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
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

    <div id="about" className='aboutus-bg-container'>
        <div className='aboutus-text-container'>
            <h1 className='about-heading'>About <sapn className="us">Us</sapn></h1>
            <p className='about-para'>REMINE INDIA PRIVATE LIMITED is a UTTARAKHAND based PRIVATE ltd. Company Registered at dated 06-DEC-2022 on Ministry of Corporate Affairs(MCA), The Corporate Identification Number (CIN) of REMINE INDIA PRIVATE LIMITED is U37100UR2022PTC014948 and registration number is U37100UR2022PTC014948 It has been classified as COMPANY LIMITED BY SHARES and is registered under Registrar of Companies UTTARAKHAND India. Authorized share capital of REMINE INDIA PRIVATE LIMITED is Rs. 1000000 and its paid up capital is Rs. 1000000. It aspire to serve in RECYCLING activities across the India.</p>
            <button  className='about-btn'>View more</button>
        </div>
        <img className='about-image' src="https://res.cloudinary.com/dldcgj0mx/image/upload/v1682182654/new_ndtdfd.png"/>



    </div>

    

    <footer id="contact" className='footer-bg-container'>
    <div className='details-bg-container'> 

    <div className='basic-details-container'>
    <div className='b-detail'>
        <h1 className='b-detail-heading'>Company Name : &nbsp;</h1>
        <p className='b-detail-para'> REMINE INDIA PRIVATE LIMITED</p>
    </div>
    <div className='b-detail'>
        <h1 className='b-detail-heading'>Company Activity : &nbsp;</h1>
        <p className='b-detail-para'>RECYCLING</p>
    </div>
    <div className='b-detail'>
        <h1 className='b-detail-heading'> CIN : &nbsp;</h1>
        <p className='b-detail-para'>U37100UR2022PTC014948</p>
    </div>
    <div className='b-detail'>
        <h1 className='b-detail-heading'>Registration Date : &nbsp;</h1>
        <p className='b-detail-para'> 06-DEC-2022</p>
    </div>
    <div className='b-detail'>
        <h1 className='b-detail-heading'>Category : &nbsp;</h1>
        <p className='b-detail-para'> COMPANY LIMITED BY SHARES</p>
    </div>
    <div className='b-detail'>
        <h1 className='b-detail-heading'> Sub Category : &nbsp;</h1>
        <p className='b-detail-para'>NON-GOVT COMPANY</p>
    </div>

    <div className='b-detail'>
        <h1 className='b-detail-heading'>Company Class : &nbsp;</h1>
        <p className='b-detail-para'> PRIVATE</p>
    </div>


    </div>
    <div className='vl'></div>

    <div className='get-on-container'>
        <h1 className='get-app-heading'>GET OUR APP ON &nbsp;</h1>
        <div className="geton-images-bg">
        <img   className='get-on-image' src="https://res.cloudinary.com/dldcgj0mx/image/upload/v1667504648/googleplay_tlgemc.png"/>
        <img    className='get-on-image' src="https://res.cloudinary.com/dldcgj0mx/image/upload/v1667504656/microsoft_r7beqx.png"/>
        </div>
        </div>
        <div className='vl'></div>

    <div className='contact-us-bg'>

        <div>
        <div className='b-detail'>
        <h1 className='b-detail-heading'>State : &nbsp;</h1>
        <p className='b-detail-para'> UTTARAKHAND</p>
        </div>

        <div className='b-detail'>
        <h1 className='b-detail-heading'> PIN Code : &nbsp;</h1>
        <p className='b-detail-para'> 262405</p>
        </div>

        <div className='b-detail'>
        <h1 className='b-detail-heading'>Country : &nbsp;</h1>
        <p className='b-detail-para'> INDIA</p>
        </div>

        <div className='b-detail'>
        <h1 className='b-detail-heading'>Address : &nbsp;</h1>
        <p className='b-detail-para'> WARD NO. 3, SUPRIYA COLONY, SITARGANJ<br/> SITARGANJ UDHAM SINGH NAGAR UR 262405 IN</p>
        </div>

        <div className='b-detail'>
        <h1 className='b-detail-heading'>Email : &nbsp;</h1>
        <p className='b-detail-para'> director@remine.in</p>
        </div>


        </div>
  <h1 className='followus-heading'>Follow Us</h1>
       <div className='icons-bg-container'>
        <BsTwitter className='social-icon'/>
        <FaFacebookF className='social-icon'/>
        <BsInstagram className='social-icon'/>
       </div>

    </div>

    </div>

    <div className='copy-right-bg-container'>
    <p className='terms-policy-para'> Terms of Use . Privacy Policy</p>
    <p className='copywite-heading'><BiCopyright className='copywite-icon'/>2020 Clarity Money</p>

    </div>

   
    </footer>




    </>
    

)
export default Home