import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import React from "react"
import logo from '../../assets/logoo.jpg'
import Search from '../../assets/search.png'
import Upload from '../../assets/upload.png'
import Profile from '../../assets/jack.png'
import more from '../../assets/more.png'
import Notification from '../../assets/notification.png'
import { useState } from 'react'
import {Link} from 'react-router-dom'

function Navbar({setSidebar}){
    return(
        <>
        <nav className='navbar'>
            <div className='navbar-div'>
            <img  className='menu_icon' onClick={()=>setSidebar((prev )=> !prev)}src={menu_icon}></img>
            <Link to = '/'><img className='logo'src={logo}></img> </Link>
            </div>

            <div className="middle-div">
                <div className='Search-box'>
                    <input type='text' placeholder='Search'></input>
                    <img src = {Search}></img>
                </div>
            </div>

            <div className="right-div">
                <img src = {Upload}></img> 
                <img src = {more}></img>
                <img src = {Notification}></img>
                <img src = {Profile} className='user-icon'></img>
            </div>
        </nav>
        </>
    );
}

export default Navbar