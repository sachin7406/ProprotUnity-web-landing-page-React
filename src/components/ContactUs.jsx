import React, { useState ,useContext , createContext} from 'react';
import axios from 'axios';
import Buttons from './Buttons'
import Congo from './Congo'
import { ContactFormContext } from './ContactFormProvider';
// const ContactFormContext = createContext();
export default function ContactUs(props) {
  

    const {
        fname,
        setFName,
        lname,
        setLName,
        email,
        setEmail,
        phone,
        setPhone,
        message,
        setMessage,
        isSubmitting,
        submissionStatus,
        handleSubmit,
        resetForm,
      } = useContext(ContactFormContext);
    return (
        <div>
            <div className="container m-2"  >
                <div className="row rounded p mb-2 sec1" style={{ width: `${props.width}` }}>
                    <div className="container  text-dark mx-2 m-3">
                        <h2 className="mb-3 font-weight-bold">Contact US</h2>
                        <p className="mx-3 letter-spacing">Feel Free To Get In Touch With Us</p>
                    </div>
                    <div className="container  bg-white sec2">
                        <form action='https://formspree.io/f/xpzeekpq' className="py-3" onSubmit={handleSubmit} >
                            <div className="mb-3 mb-lg-4 d-flex justify-content-center">
                                <div className='px-4  '>
                                    <input className="form-control" onChange={(e) => setFName(e.target.value)} type="text" name="fname" placeholder='First Name' id="fname" value={fname} required />
                                </div>
                                <div className='px-4  '>
                                    <input className="form-control" onChange={(e) => setLName(e.target.value)} type="text" name="lname" placeholder='Last Name' id="lname" value={lname} required />
                                </div>
                            </div>
                            <div className="mb-3 mb-lg-4 d-flex justify-content-center">
                                <div className="px-4 ">
                                    <input className="form-control" onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' name="email" id="email" value={email} required />

                                </div>
                                <div className="px-4 ">
                                    <input className="form-control" onChange={(e) => setPhone(e.target.value)} type="tel" placeholder=' Phone Noumber' id="phone" name="phone" value={phone} required />
                                </div>
                            </div>
                            <div className="m-3 my-lg-4" >
                                <textarea className="mx-md-5 mx-lg-2 form-control" row="5" style={{ width: '50%' }} value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' name='message' id="message" required />

                            </div>
                            <div className="m-lg-4 mx-md-5"> <Buttons fs={'18px'} type={"submit"} title={"Send Message"} loading="lazy" disabled={isSubmitting} /> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
// {!setIsSubmitting ? (  ) : (<Congo />)}