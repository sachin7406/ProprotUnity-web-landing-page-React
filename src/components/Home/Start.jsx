import React from 'react'
import { Link } from 'react-router-dom'
import line from '../../image/Line 11.svg'
import Buttons from '../Buttons'

export default function Start() {
    return (
        <div>
        <div className="background_A "></div>
      <div className="gu">
      <div className='home container py-5' >
            <div className="row col-md-6  d-flex justify-content-start ">
                <div className="m-2 text-warning">
                    <h1 className='py-2 '> Discover the Key to<br />
                        Your Dream Home</h1>
                <p className='py-2 fs-lg-6  text-white letter-spacing'>Elevate Your Property With Mumbai's Top Real Estate Advisor</p>
                </div>
                <div className="col p-3 d-flex flex-row justify-content-start ">
                    <Link className='fs-sm-6' to='/About'><Buttons title={"Explore Properties"}/></Link>
                    <Link className='fs-sm-6' to='/Contact'><Buttons title={"Contact Us"}/></Link>
                </div>
            </div>
            <div className=" py-lg-4 d-flex text-center flex-row justify-content-between col-lg-6 col-md-10">
                <div className="col-lg m-1">
                    <h2 className='text-warning fs-5'> 35 Years+</h2>
                    <p className='text-light text-sm-p opacity-40 letter-spacing'>Experience</p>
                </div>
                <img src={line} alt="" />
                <div className="col-lg ">
                    <h2 className='text-warning fs-5'> 10,000  Cr+</h2>
                    <p className='text-light text-sm-p opacity-40 letter-spacing'>Inventory Sold</p>
                </div>
                <img src={line} alt="" />
                <div className="col-lg m-1">
                    <h2 className='text-warning fs-5'> 5000+</h2>
                    <p className='text-light text-sm-p opacity-40 letter-spacing'>Happy Customers Served</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
