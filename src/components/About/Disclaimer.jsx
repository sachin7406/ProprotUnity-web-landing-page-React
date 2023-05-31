import React from 'react'
import Head from '../Head'
import ContactUs from '../ContactUs'
import Meeting from '../Meeting'

export default function Disclaimer() {
    return (
        <div>
            <div className="pt-5">
                <div className="container-fluid text-white py-4 m-2">
                    <div className="row">
                        <h1 className="text-center text-warning m-2  py-md-0 py-2">Disclaimer</h1>
                    </div>
                    <div className="container">
                        <div className="d-flex flex-row">
                            <div className="container" align="center">
                                <p className="text-sm-h" style={{ fontSize: "22px" }}>MahaRera Registration Number: Maximum City - P51700050827, P51700050828, P51700050829</p> <br />
                                <p className="text-sm-p m-4 mx-ms-2 " style={{ fontSize: "15px" }}>
                                    Thank you for visiting our website. The content provided on this website is for informational purposes only, and should not be construed as legal advice on any subject matter. Without any limitation or qualification, users hereby agree with this Disclaimer, when accessing or using this website.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -------------- */}
                <div className="container-fluid text-white py-3 m-2">
                    <Head color={'warning'} text={"light"} title={"Looking To Buy A New Property"} des={"Fill up the below form and turn your property dreams into reality"} />
                </div>
            </div>
            <div className="container" aligh="center">
                <div className="container p-2">
                    <div className="col-sm-12 d-xs-block d-lg-flex">
                        <div className="m-3 col"><Meeting /></div>
                        <div className="m-3 col"><ContactUs /></div>
                    </div>
                    </div>
                    </div>
        </div>
    )
}
