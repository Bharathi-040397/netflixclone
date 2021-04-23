import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import '../css/Nav.css'

function Nav() {
    const [show, handleshow] = useState(false);

    const history = useHistory();

    const transitionNavbar = () => {
        if (window.scrollY > 100)
        {
            handleshow(true);
        }
        else {
            handleshow(false)
        }
    }
    

    useEffect(() => {
        window.addEventListener("scroll",transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
            <img
                onClick={()=>history.push('/')}
                className="nav__logo"
                src="https://plasticoceans.org/wp-content/uploads/2018/09/netflix-logo-1.png"
                alt="Netflix"
            />  
            <img
                onClick={()=>history.push('/profile')}
                className="nav__avatar"
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                alt="Netflix_avatar"
            /> 
            </div>
             
        </div>
    )
}

export default Nav
