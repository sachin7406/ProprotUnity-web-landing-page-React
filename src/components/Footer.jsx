import React from 'react'
import logo_A1 from '../image/logo A 1.png'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import email from './../image/Vector.svg'
import phonr from './../image/Vector-1.svg'




export default function Footer() {
    return (
        <div className='gu'>
            <div className="my-5 container">

                <footer className="text-white text-center text-lg-start ">

                    <div className="p-4" >

                        <div className="row mt-4">

                            <div className="col-lg-4 col-md-12 mb-4 mb-md-0 border-top">
                                <img src={logo_A1} alt="logo" className='mx-2 fot-box logo_A1' />
                                <p className='fs-5'>Welcome to Proportunity</p>
                                <p className='col-lg-10 m-lg-2 p-1'><span className="mx-2"></span> Discover new properties with expert guidance, and personalized approach for unparalleled success. Elevate your real estate ventures with us.</p>
                            </div>
                            <div className="col-lg-4 col-md-6 p-4 mb-4 mb-md-0 border-top">
                                <h2 className='text-center py-4  font-weight-bold mx-2'>Quick Link</h2>
                                <div className="d-lg-flex flex-row justify-content-between">
                                    <div className='d-grid'>
                                        <Link className='p-1' to="/Home">Home</Link>
                                        <Link className='p-1' to="/Properties">Properties</Link>
                                        <Link className='p-1' to="/Compare">Compare Properties </Link>
                                        <Link className='p-1' to="/Contact">Contact Us</Link>
                                    </div>
                                    <div className='d-grid'>
                                        <Link className='p-1' to="/About">About Us</Link>
                                        <Link className='p-1' to="">Privacy Policy</Link>
                                    </div>
                                </div>
                            </div>
 
                            <div className="col-lg-4 p-4 col-md-6 mb-4  mb-md-0 border-top">
                                <h2 className='text-center py-4  mx-2'>Connect With Us</h2>

                                <div className="col-lg-4 col-md-6 mx-lg-4">
                                    <div className="d-flex social p-2">
                                        <Link><FacebookIcon className='mx-2 bg-dark rounded' /></Link>
                                        <Link><InstagramIcon className='mx-2 bg-dark rounded' /></Link>
                                        <Link><TwitterIcon className='mx-2 bg-dark rounded' /></Link>
                                        <Link><LinkedInIcon className='mx-2 bg-dark rounded' /></Link>
                                    </div>
                                    <div className="container d-flex flex-row justify-content-start ">
                                        <img src={email} alt="" className='px-2 icon-a' />
                                        <div>
                                            <p className="px-5">info@proportunity.in</p>
                                            <p className="px-5">connect@proportunity.in</p>
                                        </div>
                                    </div>
                                    <div className="container d-flex flex-row justify-content-start">
                                        <img src={phonr} alt="" className='px-2 icon-a' />
                                        <p className="px-5">8208338990</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>

            </div>
            <div className="text-center border-top p-3 text-white footer" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                Copyright © 2023 :
                <Link className='p-1' to="">ProprotUnity</Link>
            </div>

        </div>
    )
}
