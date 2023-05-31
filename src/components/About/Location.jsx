import React from 'react'
import Vid from './../../image/singapore-2706849_1920-768x512 1.png'
import Head from '../Head'
import IMG from './../../image/Rectangle 8503.png'



export default function Location() {
    return (

        <div>
            <div className="container">
                <div className="row ">
                    <div className="abs1 "></div>
                    <img src={Vid} alt="" className="mx-auto rounded-A img-fluid m-2" />
                    <div className="abs text-dark font-weight-bold">
                        <h1 className="m-2 py-2 text-sm-h text-dark">Lorem ipsum <br />
                            dolor sit amet</h1>
                        <div className=" container-fluid dispalayNone">
                            <div className="d-flex  text-sm-p px-4 ">
                                <p className="mx-1 ">ico</p>
                                <p className="mx-1 ">+Lorem Ipsum </p>
                            </div>
                            <div className="d-flex text-sm-p  px-4 ">
                                <p className="mx-1 ">ico</p>
                                <p className="mx-1 ">(123) 456- 7890 </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row ">
                    <div className="container-fluid py-2">
                        <Head color={'warning'} text={"light"} title={" Location Advantages"} des={"Experience the joy of unparalleled connectivity"} />
                    </div>
                    <div className="text-light d-lg-flex col m-2 mb-md-0">
                        <div className="row col-md col m-2 py-2">
                            <div className="col-sm-6 p-2 ">
                                <h4 className="text-sm-h">Schools </h4>
                                <ul className='loaction'>
                                    <li><p className='text-sm-p m-1'>New Horizon Scholar School 5 min</p></li>
                                    <li><p className='text-sm-p m-1'>Podar International School 5 min</p></li>
                                    <li><p className='text-sm-p m-1'>School of Law 10 min</p></li>
                                    <li><p className='text-sm-p m-1'>Rustomjee Cambridge International School 10 min</p></li>
                                    <li><p className='text-sm-p m-1'>D.A.V. Public School 10 min</p></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 p-2 ">
                                <h4 className="text-sm-h">Malls </h4>
                                <ul className='loaction'>
                                    <li><p className='text-sm-p m-1'>Big Shopping Centre 5 min</p></li>
                                    <li><p className='text-sm-p m-1'>Hypercity 5 min</p></li>
                                    <li><p className='text-sm-p m-1'>D-Mart 5 min</p></li>
                                    <li><p className='text-sm-p m-1'>Wonder Mall 10 min</p></li>
                                    <li><p className='text-sm-p m-1'>High Street Mall 10 min</p></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 p-2 ">
                                <h4 className="text-sm-h">Healthcare </h4>
                                <ul className='loaction'>
                                    <li><p className='text-sm-p m-1'>Hiranandani Hospital 5 min</p></li>
                                    <li><p className='text-sm-p m-1'>Dhanwantri Multi-Speciality</p></li>
                                    <li><p className='text-sm-p m-1'>Currae Hospital 5 min</p></li>
                                    <li><p className='text-sm-p m-1'>Vedant Hospital 5 min</p></li>
                                    <li><p className='text-sm-p m-1'>Highland Hospital 20 min</p></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 p-2 ">
                                <h4 className="text-sm-h"> Religious Places</h4>
                                <ul className='loaction'>
                                    <li><p className='text-sm-p m-1'>Shakti Peeth Mandir 5 min</p></li>
                                    <li><p className='text-sm-p m-1'>Datta Mandir 20 min</p></li>
                                </ul>



                            </div>
                        </div>
                        <div className=" row col-sm-6 mx-auto img-fluid">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.4924336741055!2d72.97849391490337!3d19.217359087006933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b94592ba0f01%3A0x64c5976843693c91!2sHighland%20Corporate%20Center!5e0!3m2!1sen!2sin!4v1685468281173!5m2!1sen!2sin"
                                width={600}
                                height={450}
                                style={{ border: 0, borderRadius: "10px" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                align="center" className='p-2 rounded img-fluid'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
