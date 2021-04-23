import React, { useState } from 'react'
import '../css/LoginScreen.css'
import SigninScreen from './SigninScreen'

function LoginScreen() {
    const [signin, setSignin] = useState(false);
    return (
        <div className="loginscreen">
            <div className="loginscreen__background">
                <img className="loginscreen__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <button className="loginscreen__button" onClick={()=>setSignin(true)}>Signin</button>
                
                <div className="loginscreen__gradient"></div>
            </div>
            <div className="loginscreen__body">
                {signin ? <SigninScreen /> : (
                    <>
                        <h1>Unlimited films,Tv programs and more</h1>
                        <h2>Watch anywhere, Cancel at any time</h2>
                        <h3>Ready to watch?<br />Enter Your email to create or restart your membership</h3>
                
                        <div className="loginscreen__input">
                            <form>
                                <input type="email" placeholder="Email Address" />
                                <button className="loginscreen__getStarted" onClick={() => setSignin(true)}>GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}
              </div>
            
        </div>
    )
}

export default LoginScreen
