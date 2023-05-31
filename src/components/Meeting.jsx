import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Call from './../image/call-sm.svg'
import Email from './../image/email-sm.svg'
import Map from './../image/locaion.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Meeting() {
    const [phoneNumber, setphoneNumber] = useState("+91 82022338990")
    const handleCallClick = () => {
        const telLink = `tel:${phoneNumber}`;
        window.open(telLink);
      };
    return (
        <div>
            <div className="container m-2 " >
                <div className="row rounded p mb-2  sec1">
                    <div className="container  text-dark mx-4 m-3">
                        <h2 className="mb-3 font-weight-bold">Arrange a Meeting</h2>
                        <p className="mb-3 letter-spacing">Unlock the door to your new home</p>
                    </div>
                    <div className="container text-dark bg-white sec2">
                        <div className=" m-2">
                            <h6> Discover your perfect home today! Explore our diverse listings and turn your dream of buying a new property into a reality.</h6>
                        </div>
                        <div className="m-2 p-2 py-lg-1" >
                            <h4>Contact Details</h4>
                            <div className="">
                                <Link onClick={handleCallClick} className="d-flex text-sm-p flex-row px-lg-4 px-md-3"> <img src={Call} alt="" className='p-lg-2 m-lg-1 m-md-2' /> <span className="text-dark px-2">{phoneNumber}</span></Link>

                                <div className="d-flex flex-row">
                                <Link to='mailto:info@proportunity.in' className="d-flex text-sm-p flex-row px-lg-4 px-md-3"> <img src={Email} alt="" className='p-lg-2 m-lg-1 m-md-2' /> <span className="text-dark px-2">info@proportunity.in</span></Link>
                                </div>
                                <div className="d-flex flex-row">
                                <Link to='https://goo.gl/maps/zGoyjQp3HBB6uaYQ8?coh=178571&entry=tt' className="d-flex text-sm-p flex-row px-lg-4 px-md-3"> <img src={Map} alt="" className='p-lg-2 m-lg-1 m-md-2' /> <span className="text-dark px-2">Highland Corporate Center, SB-19, 2nd Floor, Kapurbawdi Junction, Majiwade, Thane 400607</span></Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="m-3">
                            <h5>Follow Us On</h5>
                            <div className="d-flex social p-2">
                                <Link><FacebookIcon className='mx-2  bg-dark rounded'/></Link>
                                <Link><InstagramIcon className='mx-2  bg-dark rounded'/></Link>
                                <Link><TwitterIcon className='mx-2  bg-dark rounded'/></Link>
                                <Link><LinkedInIcon className='mx-2  bg-dark rounded'/></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
