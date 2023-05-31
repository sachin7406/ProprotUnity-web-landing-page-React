import React from 'react'
import Svg1 from './../../image/Residence.svg'
import img from './../../image/quezon-city-ph-dec-grace-christian-college-playground-december-philippines-192834700 1.jpg'

export default function Amenities() {
    return (
        <div className='container p-4 pb-sm-'>
            <div className="container-fluid ">
                <div className="row ">
                    <div className="card">
                        <h1 className="text-dark text-center py-2 m-2">Project Amenities</h1>
                        {/* <div align="center" className="Svg-Item text-dark col-md-12 col-sm-6 mx-lg-2 d-lg-flex justify-content-around"> */}
                        <div align="center" className="Svg-Item col d-lg-flex justify-content-around">

                            <div className="m-1">
                                <img src={Svg1} alt="" className='svg' />
                                <p className='py-2 svg-text text-center '>Gym</p>
                            </div>
                            <div className="m-1">
                                <img src={Svg1} alt="" className='svg' />
                                <p className="py-2 svg-text text-center ">Gaming Zone</p>

                            </div>
                            <div className="m-1">
                                <img src={Svg1} alt="" className='svg' />
                                <p className="py-2 svg-text text-center ">Multipurpose Hall</p>
                            </div>
                            <div className="m-1">
                                <img src={Svg1} alt="" className='svg' />
                                <p className="py-2 svg-text text-center ">Yoga Zone</p>
                            </div>
                            <div className="m-1">
                                <img src={Svg1} alt="" className='svg' />
                                <p className="py-2 svg-text text-center ">Kids Play Area </p>
                            </div>
                            <div className="m-1">
                                <img src={Svg1} alt="" className='svg' />
                                <p className="py-2 svg-text text-center ">Indoor Heated Pool</p>
                            </div>
                        </div>
                        <div className="">
                            <img className='mx-auto  img-fluid d-sm-block rounded ' src={img} alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
