import React ,{useState}from 'react'
import Vectore from './../../image/Vector2.svg'
import Vectore3 from './../../image/Vector3.svg'
import ContactUs from '../ContactUs'
import Meeting from '../Meeting'
import Head from '../Head'
import Buttons from '../Buttons'
import { Link } from 'react-router-dom'
import WhatsApp from './../../image/WhatsApp.svg'
import Call from './../../image/call-bg.svg'


export default function Feedback(props) {
    let data = [
        {
            "slNo": "1",
            "name": "Sanket Bolinjkar",
            "feedback": "Professional, knowledgeable, and reliable. Working with them to find my perfect home was a breeze, and their expertise helped me make an informed decision."
        },
        {
            "slNo": "2",
            "name": "Vipul Seth",
            "feedback": "They guided me every step of the way, ensuring a stress-free selling experience. Their market knowledge and negotiation skills resulted in a fantastic outcome."
        },
        {
            "slNo": "3",
            "name": "Gaurav Kadam ",
            "feedback": "Their market knowledge and strategic approach resulted in a quick and successful buying decision at a great price. I highly endorse their services."
        }
    ]
const [phoneNumber, setphoneNumber] = useState("+91 82022338990")
    const handleCallClick = () => {
        const telLink = `tel:${phoneNumber}`;
        window.open(telLink);
      };
    return (
        <div>
            <div className="Loacl-B" ></div>
            <div className=' container ' align="center">
                <div className="cotainer py-md-2 py-4 ">

                    <Head color={'dark'} text={"dark"} title={" Customers Feedback"} des={"Explore the positive feedback from our valued customers"} />

                </div>
                <div className="row ">
                    {data.map((ele) => {
                        return (
                            <div className="col-lg-4 col-md-4 col-sm-6 p-2" key={ele.slNo}>
                                <div className="mb-4 ">
                                    <div className="card card-box" >
                                        <div className='top-right'>
                                            <span className="badge rounded-circle p-4"> <img src={Vectore} alt="" style={{ width: "70%" }} /> </span>
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title py-4">{ele.name}  </h4>
                                            <p className="card-text">{ele.feedback}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="Loacl-B" ></div>
            <div className="container" align="center">
                <div className="cotainer py-4 ">
                    <div className="text-center m-3 py-3">
                        <h2 className="font-weight-bold text-dark py-2">
                            Get In Touch With Us
                        </h2>
                        <div className="d-flex flex-row justify-content-center mb-md-4 py-3 m-lg-2" align='center'>
                            <Link to='https://wa.me/+91820833899' className="d-flex text-sm-p flex-row px-lg-4" target='value'><img src={WhatsApp} alt=""/><Buttons bg={"#0066ff"} title={"Connect On Whatsapp"} /></Link>
                            <Link onClick={handleCallClick} className="d-flex text-sm-p  flex-row px-lg-4 "> <img src={Call} alt="" className='px-lg-1'/> <Buttons bg={"#0066ff"} title={phoneNumber} className=" p-lg-2"/></Link>
      
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" align="center">
                <div className="container py-4 ">
                    <div className="text-center m-2 py-4">
                        <h2 className="font-weight-bold text- py-2">

                        </h2>
                        <p className="letter-spacing py-2 text-"></p>
                    </div>
                    <Head color={'warning'} text={"light"} title={"  A Trusted Partner For Leading Developers"} des={" We collaborate with developers to deliver exceptional results, fostering success in every project"} />

                    <div className="row d-flex justify-content-center mx-2">
                        <div className="col-lg-12 col-md-7 col-sm-4 m-2 md-mb-0 p-2">
                            <img className='mx-2 px-2 py-2' src={Vectore3} alt="" />
                            <img className='mx-2 px-2 py-2' src={Vectore3} alt="" />
                            <img className='mx-2 px-2 py-2' src={Vectore3} alt="" />
                            <img className='mx-2 px-2 py-2' src={Vectore3} alt="" />
                            <img className='mx-2 px-2 py-2' src={Vectore3} alt="" />
                            <img className='mx-2 px-2 py-2' src={Vectore3} alt="" />
                            <img className='mx-2 px-2 dispalayNone400 py-2' src={Vectore3} alt="" />
                            <img className='mx-2 px-2 dispalayNone400 py-2' src={Vectore3} alt="" />


                        </div>
                    </div>

                </div>
            </div>
            <div className="container" aligh="center">
                <div className="container p-2">
                    <Head color={'warning'} text={"light"} title={"Looking To Buy A New Property"} des={"Fill up the below form and turn your property dreams into reality"} />

                    <div className="col-sm-12 d-xs-block d-lg-flex">
                        <div className="m-3 col"><Meeting /></div>
                        <div className="m-3 col"><ContactUs /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
