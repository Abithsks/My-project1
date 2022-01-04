import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';



const Hero = () => {

    let navigate = useNavigate();

    function handleClick() {
        
        if (email === 'abithaks999@gmail.com' && password === "abithaks") {
            navigate('/MyCards') 
        }
    }

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')


    const handleEmailChange = (e) => {

        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {

        setPassword(e.target.value);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (email === 'abithaks999@gmail.com') {
            setEmailError('')
        }
        else {
            setEmailError('invalid email')
        }


        if (password === 'abithaks') {
            setPasswordError('')
        }

        else {
            setPasswordError('invalid password')
        }


    }


    return (
        <div className="forms">


            <div className="signin">
                <h2 className="colors signin-center" >Sign in</h2>
                <div className="margin-10">
                    <input className="padding-10 font-bold" type="text" name="firstName" placeholder="Firstname" required />
                </div>
                <div className="margin-10">
                    <input className="padding-10 font-bold" type="text" name="lastName" placeholder="Lastname" required />
                </div>
                <div className="margin-10">
                    <input className="padding-10 font-bold" type="number" name="phoneNumber" placeholder="Phone number" required />

                </div>

                <div className="margin-10">
                    <input className="padding-10 font-bold" type="text" name="email" placeholder="Email" required />
                </div>
                <div className="margin-10">
                    <input className="padding-10 font-bold" type="password" name="password" placeholder="Password" required />
                </div>
                <div className="margin-10">
                    <input className="padding-10 font-bold" type="password" name="confirmPassword" placeholder="Confirm password" required />
                </div>
                <div className="margin-10 membership">
                    <label for="membership"> Select membership: </label>
                    <select className="membership-select" id="membership" name="membership">
                        <option value="3-month">3-month</option>
                        <option value="6-month">6-month</option>
                        <option value="9-month">9-month</option>
                        <option value="1-year">1-year</option>
                    </select>

                </div>
                <div className="margin-10 membership">

                    <input type="radio" name="gender" value="Male" />
                    <label> Male </label>
                    <input type="radio" name="gender" value="Female" />
                    <label >Female </label>
                </div>
                <div className="margin-10 membership">
                    <input type="file" id="myFile" name="filename" />
                </div>
                <div className="margin-10 membership">
                    <label > I agree all the terms and conditions </label>
                    <input type="checkbox" />


                </div>

                <div className="margin-10">
                    <button type="submit" className="padding-11">SIGN IN</button>
                </div>



            </div>
            {/* login form */}
            <div className="login-form">
                <div className="login-border">

                    <label className="color-green">Already Registerd? </label>
                    <div className="login-box">
                        <h2 className="colors" >Login/Register</h2>
                    </div>
                    <form onSubmit={handleFormSubmit}>
                        <div className="margin-10">

                            <div>

                                <input onChange={handleEmailChange} value={email} className="padding-10 font-bold" type="text" name="email" placeholder="Email" required="required" />

                            </div>
                            {emailError && <div className="error-msg">{emailError} </div>}
                        </div>
                        <div className="margin-10">

                            <div>
                                <input onChange={handlePasswordChange} className="padding-10 font-bold" type="password" name="password" placeholder="Password" required />

                            </div>
                            {passwordError && <div className="error-msg">{passwordError} </div>}
                        </div>
                        <div className="margin-10">
                            <button onClick={handleClick} type="submit" className="padding-11 log-color" > LOGIN </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default Hero;