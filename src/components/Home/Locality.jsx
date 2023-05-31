import React from 'react'
import Rg4 from './../../image/Rectangle 13.jpg'
import Rg5 from './../../image/Rectangle 14.jpg'
import Rg6 from './../../image/Rectangle 15.jpg'
import Rg7 from './../../image/Rectangle 16.jpg'
import Head from '../Head'
 
export default function Locality(props) {
    let photo = [
        { "slNo": "1", "image": Rg4 ,"city":"Thane" }, { "slNo": "2", "image": Rg5,"city":"Mulund"  }, { "slNo": "3", "image": Rg6 ,"city":"Chembur" }, { "slNo": "4", "image": Rg7 ,"city":"Powai" }
    ]

    return (
        <>
        
            <div className="Loacl" ></div>
            <div className=' container ' align="center">
                <div className="cotainer py-4 ">
                    <Head color={'dark'} text={"dark"} title={"Top Localities"} des={"Uncover finest properties in exclusive localities"}/>
                </div>
                <div className="container">
                    <div className="row">
                    {photo.map((ele) => {
                        return (
                            <div className="d-flex flex-start justify-content-center col-md-6  col-lg-3 col-sm " key={ele.slNo}>
                                    <div className=" col-md-6 py-lg-4 m-md-3 m-2 d-flex flex-start justify-content-center ">
                                        <img src={ele.image} className='rounded col box-a' alt="" />
                                    <div className="orvalay "><h2>{ele.city}</h2></div>
                                    </div>
                                </div>
                        )
                    })}
                    </div>
                </div>

            </div>
        </>
    )
}
