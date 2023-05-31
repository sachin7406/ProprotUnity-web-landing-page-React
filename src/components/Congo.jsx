import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from './Buttons'


export default function Congo() {
  return (
    <div>
      <div className="container" align="center">
        <div className="row">
            <h1 className="fs-1 text-warning m-2 py-4">Congratulations <span>🎉</span></h1>
            <p className="text-sm-p fs-6 m-2 text-light ">Your Application has been posted succesfully . <br />
            you will soon be contacted by our team ! </p>
        </div>
        <div className="container my-2 pt-4">
        <Link to='/About'><Buttons title={"Explore Properties"}/></Link>
            
        </div>
      </div>
    </div>
  )
}
