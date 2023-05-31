import React from 'react'
import Rg1 from './../../image/Rectangle 10.jpg'
import Rg2 from './../../image/Rectangle 11.jpg'
import Locality from './Locality'
import Head from '../Head'





export default function Compare() {
    return (
        <>
            <div align="center">
                <div className="container">
                    <Head color={'warning'} text={"light"} title={"Compare Properties"} des={"Discover the perfect property that suit your needs"} />
                    <div className=" row">
                        <div className="py-3  text-cetnter text-light">
                            <div className="d-flex ">
                                <div className="col ">
                                    <h6>All Projects </h6>
                                </div>
                                <div className="col">
                                    <h6>Newly Launched </h6>
                                </div>
                                <div className="col">
                                    <h6>OC Ready Homes</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ############################## */}
                    <div className="row m-2">
                        <div className="col m-1">
                            <img src={Rg1} alt="" className='img-fluid rounded' style={{ width: '100%' }} />
                        </div>
                        <div className="col m-1 ">
                            <img src={Rg2} alt="" className='img-fluid rounded' style={{ width: '100%' }} />
                        </div>
                        <div className="col  m-1 ">
                            <img src={Rg2} alt="" className='img-fluid rounded' style={{ width: '100%' }} />
                        </div>
                    </div>

                    <div className="Loacl-A"></div>
                </div>
            </div>
            <Locality hg={"500px"} />
        </>

    )
}
