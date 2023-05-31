// eslint-disable-next-line 
import React ,{useState}  from 'react'
import { Link } from 'react-router-dom'
import logo_A1 from '../image/logo A 1.png'
import './css/navbar.css'
import Buttons from './Buttons'
// npm install @mui/material @emotion/react @emotion/styled
const Navbar = props => {
    
    return (
        <nav className={"navbar navbar-expand-lg navbar-dark shadow-5-strong postion-fixed top-0"}>
            <div className="container-fluid">
            <Link to='/'><img src={logo_A1} alt="logo" className='mx-2 logo_A1 click'/></Link>
                <Link className="navbar-brand" to="/Home">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse  navbar-collapse text-white" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <Link className="nav-link " activeClassName="active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " activeClassName="active" to="/Projects">Properties</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " activeClassName="active" to="/Compare">Compare Properties</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " activeClassName="active" to="/About">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " activeClassName="active" to="/Contact">Contact Us</Link>
                        </li>
                    </ul>
                    <div className="px-5">
                        <form action="" method='post'>
                            {/* <button className="btn border click text-white"><Link to="/Feedback"><span>Talk To Our Adviser</span></Link></button> */}
                            <Link to='/Feedback'><Buttons title={"Talk To Our Adviser"}/></Link>
                            
                        </form>
                    </div>

                </div>
            </div>
        </nav>
    )
}


export default Navbar