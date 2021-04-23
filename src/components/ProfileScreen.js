import React from 'react'
import { auth } from '../firebase'
import '../css/ProfileScreen.css'
import Nav from './Nav'
import { useSelector } from 'react-redux'
import FlipMove from 'react-flip-move';
import { selectUser } from '../features/userSlice'

function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
        <>
        <Nav/>
           
        <div className="profilescreen">
             <div className="profilescreen__body">
                <h1>Edit Profile</h1>
                <div className="profilescreen__info">
                    <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
                    <div className="profilescreen__details">
                        <p>{user.email}</p>
                            <div className="profilescreen__plans">
                                <h5>Plans (Current Plan premium)</h5>
                                <p> Expried Date 04/03//2022</p>
                                <div className="subscribtion__box">
                                <FlipMove className="flip-wrapper">

                                <div className="subscribtion1">
                                    <div className="subscribtion__left">
                                        <p>Gold Package</p>
                                        <span>₹10000</span> 
                                    </div>
                                    <div className="subscribtion__right">
                                      <button className="subscribtion__button">Subscribe</button>
                                    </div>
                                </div>
                                
                                <div className="subscribtion1">
                                    <div className="subscribtion__left">
                                        <p>Diamond Package</p>
                                <span>₹3000</span> 
                                    </div>
                                    <div className="subscribtion__right">
                                      <button className="subscribtion__button">Subscribe</button>
                                    </div>
                                </div>
                                
                                <div className="subscribtion1">
                                    <div className="subscribtion__left">
                                        <p>Platinum Package</p>
                                        <span>₹5000</span> 
                                    </div>
                                    <div className="subscribtion__right">
                                      <button className="subscribtion__gray__button">Current Package</button>
                                    </div>
                                        </div>
                                        </FlipMove>
                                    </div>
                                
                            <button onClick={()=>auth.signOut() } className="profilescreen__signOut">Sign Out</button>
                        </div>
                    </div>
                </div>
          </div>
            </div>
            </>
    )
}

export default ProfileScreen
