import React from 'react'
import Card from 'react-bootstrap/Card';
import '../css/project.css'
import { Link } from 'react-router-dom';
import Buttons from '../Buttons'

export default function ProjectItem(props) {
  let { name, price, area, layout, status, address, imageUrl } = props;
  return (
    <div className='container c card-box'>
      <Card >
        <img src={imageUrl} alt="Error" className='top img-fluid border border-bottom' />
        <Card.Body >
          <div className="container">
            <div className="row ">
              <div className="col">
                <h4 className="py-2" style={{height:"130px"}}>{name}</h4>
                <div className="py-2">
                <h6>Starting From</h6>
                <h5>{price}</h5>
                </div>
              </div>
              {/* ############################## */}
              <div className="col side-main py-3">
                {/* ############################## */}
                <div className="col side-icon">
                  <div className="item d-flex justify-content-between">
                    <div className="d-flex flex-row one-Item">
                      <p><i className="fa-solid fa-chart-area"></i></p>
                      <p className='p'>Area</p>
                    </div>
                    <div>
                      <p>{area}</p>
                    </div>
                  </div>
                </div>
                <div className="col side-icon">
                  <div className="item d-flex justify-content-between">
                    <div className="font-weigt-bold d-flex flex-row one-Item">
                      <p><i className="fa-solid fa-chart-area"></i></p>
                      <p className='p'>Layout</p>
                    </div>
                    <div>
                      <p>{layout} </p>
                    </div>
                  </div>
                </div>
                <div className="col side-icon">
                  <div className="item d-flex justify-content-between">
                    <div className="font-weigt-bold d-flex flex-row one-Item">
                      <p><i className="fa-solid fa-chart-area"></i></p>
                      <p className='p'>Status</p>
                    </div>
                    <div>
                      <p>{status}</p>
                    </div>
                  </div>
                </div>
                <div className="col side-icon">
                  <div className="item d-flex justify-content-between">
                    <div className="font-weigt-bold d-flex flex-row one-Item">
                      <p><i className="fa-solid fa-chart-area"></i></p>
                      <p className='p'>Address</p>
                    </div>
                    <div>
                      <p>{address}</p>
                    </div>
                  </div>
                </div>
            
                {/* ################################# */}
              </div>
                {/* ###########font-weigt-bold ###################### */}

            </div>
          </div>
          <div className="border-top border-3 p-lg-3 mt-2 fs-6 d-flex flex-row justify-content-center">
            <Link to=''><Buttons title={"View Property"} /></Link>
            <Link to='/Contact'><Buttons style={{padding:"1px"}} title={"Call Advisor"}/></Link>
            </div>
        </Card.Body>
      </Card>
    </div>
  )
}



