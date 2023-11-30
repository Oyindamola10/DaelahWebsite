import React from 'react'
import Form from 'react-bootstrap/Form'
import './Login.css'


const Login = () => {
  return (
    <>
    <div className='login'>
       <div className='boxs'>
        <h1>DaelahCollectibles</h1>
        <h4>Login.</h4>
        <p>Sign in to your account to continue</p>
        <div className='forms'>
            <div>
                <Form.Label>Username</Form.Label>
                <Form.Control id='input' size='lg' type='text' placeholder='Enter Your Username'/>
            </div>
            <div>
                <Form.Label htmlFor='inputPasswords'>Password</Form.Label>
                <Form.Control id='input' size='lg' type='text' placeholder='Enter Your Password'/>
            </div>
            <a id='links' href="">Forgot your password?</a>
            {/* <button>Log In</button> */}
            <p>Don't have an account? <a id="links" href="/SignUp"><span>Sign Up</span></a></p>
        </div>
       </div>
    </div>
    </>
  )
}

export default Login