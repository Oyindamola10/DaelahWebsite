import React from 'react'
import Form from 'react-bootstrap/Form'
import './Login.css'

const SignUp = () => {
  return (
    <>
    <div className='signup'>
       <div className='signs'>
        <h1>DaelahCollectibles</h1>
        <h3>Create Account.</h3>
        <div>
            <Form.Label>Fullname*</Form.Label>
            <Form.Control id='input' size='lg' type='text' placeholder='Enter Your Fullname'/>
        </div>
        <div>
            <Form.Label>Username*</Form.Label>
            <Form.Control id='input' size='lg' type='text' placeholder='Enter Your Username'/>
        </div>
        <div>
            <Form.Label>Email*</Form.Label>
            <Form.Control id='input' size='lg' type='emal' placeholder='Enter Your Email'/>
        </div>
        <div>
            <Form.Label>Phone*</Form.Label>
            <Form.Control id='input' size='lg' type='number' placeholder='Enter Your Phone Number'/>
        </div>
        <div>
            <Form.Label>Password*</Form.Label>
            <Form.Control id='input' size='lg' type='passwprd' placeholder='Enter Your Password'/>
        </div>
        <div>
            <Form.Label>Confirm Password*</Form.Label>
            <Form.Control id='input' size='lg' type='password' placeholder='Enter Your Password'/>
        </div>
        <div>
            <input type='checkbox' id='terms'/>
        </div>
            <button>Create My Account</button>
            <p>Already have an account? <a href="/Login">Sign In</a></p>
       </div>
    </div>
    </>
  )
}

export default SignUp