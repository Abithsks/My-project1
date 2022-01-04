import React, { useState } from 'react';

function SignUp() {
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
    <div>


      <form
        onSubmit={handleFormSubmit}>
        <label>Email</label>
        <input onChange={handleEmailChange} type="email" name='email' className="form-control" id="email" />
        <br /><br />
        {emailError&&<div className='error-msg'>{emailError} </div>}


        <label >Password</label>
        <input onChange={handlePasswordChange} type="password" name='password' className="form-control" id="password" />

        <br /><br />
        {passwordError&&<div className='error-msg'>{passwordError} </div>}  <br /><br />

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    </div>
  )
}

export default SignUp;
