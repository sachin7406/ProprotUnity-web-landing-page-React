import React from 'react'
import Head from '../Head'
import v1 from './../../image/Star 1.png'
import v2 from './../../image/Vector.png'
import v3 from './../../image/Vector-1.png'
import v4 from './../../image/Vector-2.png'
import v5 from './../../image/Vector-3.svg'
import v6 from './../../image/Vector-4.svg'


export default function Info() {
    let data = [
        {
            "slNo": "1",
            "title": "Premium Quality",
            "dis": "We are dedicated to delivering products of the highest quality, ensuring durability, reliability, and customer satisfaction.",
            "vectore" : v1
        },
        {
            "slNo": "2",
            "title": "Wide Product Range",
            "dis": "We have a diverse range of products, catering to various customer needs providing ample choices to suit individual tastes",
            "vectore" : v2
        },
        {
            "slNo": "3",
            "title": "Best Value For Money",
            "dis": "We offer unmatched value for your money with our thoughtfully selected properties, designed to deliver exceptional returns on your investment. .",
            "vectore" : v3
        },
        {
            "slNo": "4",
            "title": "Zero Brokerage Fee",
            "dis": "We believe in transparency, offering zero cost brokerage fees, ensuring our customers have a clear understanding of the costs involved..",
            "vectore" : v4
        },
        {
            "slNo": "5",
            "title": "Customized Solutions",
            "dis": "We tailor our services to meet customers specific needs, providing customized solutions and personalized attention..",
            "vectore" : v5
        },
        {
            "slNo": "6",
            "title": "Post-Purchase Support",
            "dis": "We offer post-purchase support, assisting customers with any queries, concerns, or additional services they may require in future..",
            "vectore" : v6
        },

    ]
    return (
        <>
            <div className=' py-5'>
                <div className=' container ' align="center">
                    <div className="cotainer py-4 ">
                    <Head color={'warning'} text={"light"} title={" Why Choose Us"} des={"Trust in our expertise and personalized approach for your real estate journey"}/>

                    </div>
                    {/* ####################3 */}
                    <div className="row">
                        {data.map((ele) => {
                            return (
                                <div className="col-sm-4 p-2" key={ele.slNo}>
                                    {/* card */}
                                    <div className="m-2">
                                        <div className="card card-box">
                                            <div className='top-up'>
                                                <span style={{backgroundColor:"lightgray"}} className="badge rounded-circle p-3"><img src={ele.vectore}alt="" className="img-fluid" style={{width:"50%" ,  height:"80%"}} /></span>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">{ele.title}  </h5>
                                                <p className="card-text">{ele.dis}</p>
                                            </div>
                                        </div>
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
