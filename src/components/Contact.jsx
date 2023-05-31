import React, { useContext , createContext} from 'react';
import { ContactFormContext } from './ContactFormProvider';
import ContactUs from './ContactUs'
import Congo from './Congo'
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import { Link , useNavigate} from 'react-router-dom'
import CallIcon from '@mui/icons-material/Call';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

export default function Contact() {
  const navigate = useNavigate();
  const {
    setIsSubmitting,
    handleSubmit,

  } = useContext(ContactFormContext);

  let size = window.screen !== "600px" ? '100%' : '50%';
  return (
    <div >
 {!setIsSubmitting ? (  
    <div className='container  ' align="center">


      <div className="container text-center py-2 ">
        <div className="row ">
          <h5 className="text-warning fs-2  m-lg-2 py-1">Get In Touch</h5> <br />
          <h1 className="text-light fs-1 letter-spacing py-lg-1 m-lg-2">Feel Free To <span className="text-primary">Get In Touch</span>With Us,</h1>
        </div>
      </div>



      <div className="container m-2 p-4 ">
        <div className="row">
          <div className="collg-12- d-lg-flex d-md-flex my-sm-4 flex-row " >

            <Link to='tel:8208338990' className="txt-sm-p px-lg-4 card col fs-6 m-2 "> <AttachEmailIcon className='text-dark hove mx-auto' style={{ height: "80px" }} />
              <span className="text-dark p-2">+91 8208338990</span>
            </Link>


            <Link to='https://goo.gl/maps/zGoyjQp3HBB6uaYQ8?coh=178571&entry=tt' className="txt-sm-p px-lg-4 card col fs-6 m-2 "> <AddLocationAltIcon className='text-dark hove mx-auto' style={{ height: "80px" }} />
              <span className="text-dark p-2">Highland Corporate Center, SB-19, 2nd Floor, Kapurbawdi Junction, Majiwade, Thane 400607</span>
            </Link>


            <Link to='mailto:info@proportunity.in' className="txt-sm-p px-lg-4 card col fs-6 m-2 "> <CallIcon className='text-dark hove mx-auto' style={{ height: "80px" }} />
              <span className="text-dark p-2">info@proportunity.in</span>
            </Link>



          </div>
        </div>
      </div>
      {/* -----------------map */}
      <div className="container" aligh="center">
        <div className="row p-2">
          <h5 className="text-warning fs-2  m-lg-2 py-2">Locaton</h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.4924336741055!2d72.97849391490337!3d19.217359087006933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b94592ba0f01%3A0x64c5976843693c91!2sHighland%20Corporate%20Center!5e0!3m2!1sen!2sin!4v1685468281173!5m2!1sen!2sin"
            width={600}
            height={450}
            style={{ border: 0 , borderRadius:"10px"}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            align="center" className='p-2 rounded img-fluid'
          />
        </div>
      </div>
      {/* ----------------------from */}

      <div className="container" aligh="center">
        <div className="container row p-2">
          <div className="row">
            <div className=" m-2 ">
              <h5 className="fs-5 text-light m-2">We'd Love To Hear From You!</h5>
              <p className="text-light text-sm-p px-2">Brief us your requirements below and lets connect</p>
            </div>
          </div>
          <div className="col-sm-12 d-xs-block d-lg-flex">
                  <div className="m-3 col" > <ContactUs handleSubmit={ handleSubmit} width={size} />
            </div>
          </div>
          <p className="text-light fs-6 p-2">We respect your privacy . We promise we won't spam you</p>
        </div>
      </div>
    </div>) : ( navigate('/Congo'))}
    </div>
  )
}
