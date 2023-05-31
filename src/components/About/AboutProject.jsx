import React from 'react'
import IMG1 from './../../image/Rectangle 8552.png'
import Svg1 from './../../image/Residence.svg'
import Svg3 from './../../image/Building.svg'
import Svg4 from './../../image/Apartment.svg'
import Svg6 from './../../image/Residence.svg'
import Svg5 from './../../image/Map Marker.svg'
import Cons from './../../image/image 2.png'


import Head from '../Head'
export default function AboutProject() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <Head color={'warning'} text={"light"} title={"About Project"} des={"Welcome to Raunak’s Maximum City"} />
                    <div className="col-lg-12  md-mb-0 m-2 p-2 d-lg-flex mx-md-auto flex-row d-sm-block">

                        <div className="col text-light p-4 my-4">
                            <p className='paragraph'><span className="p-4"></span> Raunak Group, a prominent real estate company, has meticulously crafted residential apartments in a highly sought-after location in Thane West, near Ghodbunder Road.  Raunak Maximum City offers a variety of affordable, comfortable and well-ventilated apartment units. It is a 30 Storey Tower, part of a 20-acre Mega opulent township located at the prime location of the Thane West. </p>
                            <p className='paragraph'><span className="p-2"></span>These apartments offer affordable and comfortable 1 BHK units with a carpet area of 450-500 sqft, and 2 BHK units with a carpet area of 610-622 sqft. The possession is expected in 3-4* years. Raunak Maximum City boasts multiple amenities and is part of a 20-acre township.</p>
                            <div className='list-image '>
                                <ul>
                                    <li className='m-1'>Fully-furnished 1 & 2 BHKs designed for big space</li>
                                    <li className='m-1'> Multi-Zone Life created to bring nature & leisure together </li>
                                    <li className='m-1'>Ghodbunder Lifestyle Belt where you get all the best infrastructure on one main road</li>
                                    <li className='m-1'>Your nature at maximum with a 30-acres layout at Yeoor foothills</li>
                                </ul>
                            </div>
                            <p className='paragraph'> <span className="p-4"></span>Maximum City is rightly named because you will find that every important feature and amenity has been innovated to the maximum. A Jacuzzi is not a Jacuzzi, it's a Skyline Jacuzzi. A leisure walkway is not a walkway, it's a tropical forest track.</p>
                        </div>
                        <div className="col d-flex justify-content-center p-md-2 p-4">
                            <img src={IMG1} alt="" className=" img-fluid box-a-600" />
                        </div>
                    </div>
                </div>
                {/* ##########################33 */}
               <div className="py-5">
              <div className="row">
              {/* <div align="center" className="Svg-Item col-md-12 col-sm-6 mx-2 d-lg-flex justify-content-around"> */}
              <div align="center" className="Svg-Item col col-md d-lg-flex justify-content-around">

                    <div className="col-md m-1 text-light">
                        <img src={Svg1} alt="" className='svg' />
                        <p className='py-2 text-center '>Property Residential</p>
                    </div>
                    <div className="col-md m-1 text-light">
                        <img src={Svg1} alt="" className='svg' />
                        <p className="py-2 text-center ">Land Size32 Acres</p>

                    </div>
                    <div className="col-md m-1 text-light">
                        <img src={Svg3} alt="" className='svg' />
                        <p className="py-2 text-center ">Floors30 Storey</p>
                    </div>
                    <div className="col-md m-1 text-light">
                        <img src={Svg4} alt="" className='svg' />
                        <p className="py-2 text-center ">Apartments 1,3 & 3 BHK</p>
                    </div>
                    <div className="col-md m-1 text-light">
                        <img src={Svg5} alt="" className='svg' />
                        <p className="py-2 text-center ">Area 435 - 660 sq ft</p>
                    </div>
                    <div className="col-md m-1 text-light">
                        <img src={Svg6} alt="" className='svg' />
                        <p className="py-2 text-center ">Possession Jul 2027</p>
                    </div>

              </div>
                </div>
               </div>
                {/* ########################### */}
                <div className="col  d-lg-flex justify-content-between">
                        <h3 className="text-warning text-center py-4 ">Configuration</h3>
                    <div className="tabel m-2 mx-md-5 px-md-5">
                        <table className="text-white" align='center'>
                            <thead >
                                <tr>
                                    <th scope="col-2"><h4>Type</h4></th>
                                    <th scope="col-2"><h4>Carpet Area</h4></th>
                                    <th scope="col-2"><h4>Price</h4></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">1 BHK</td>
                                    <td>435 sq ft</td>
                                    <td>58 Lacs*</td>
                                </tr>
                                <tr>
                                    <td scope="row">2 BHK</td>
                                    <td>610 - 650 sq ft</td>
                                    <td>87 Lacs*</td>

                                </tr>
                                <tr>
                                    <td scope="row">3 BHK</td>
                                    <td>860 sq ft</td>
                                    <td>1.21 Cr*</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="py-4">
                        <div className="m-2">
                    <h3 className="text-warning  my-2  text-center">Floor Plan</h3>
                    <img className='mx-auto  img-fluid d-sm-block rounded-A  p-4 '  src={Cons} alt="" />
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

