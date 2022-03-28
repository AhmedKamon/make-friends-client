import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
import {useCookies} from 'react-cookie'

const AuthModal = ({ setShowModal, isSignup }) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confermPassword, setConfermPassword] = useState(null)
    const [error, setError] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    let navigate = useNavigate()
   
    

    const handelSubmit = async (e) =>{
        e.preventDefault()
        try {
          if(isSignup && (password !== confermPassword)){
            setError('password need to match')
            return
          }
          // make a post request
         const response = await axios.post(`http://localhost:8000/${isSignup ? 'signup' : 'login'}`, {email,password})
         setCookie('Email',response.data.email)
         setCookie('UserId',response.data.userId)
         setCookie('AuthToken',response.data.token)
         const success = response.status === 201
         if (success && isSignup) navigate('/onboarding')
         if (success && !isSignup) {
           
          navigate('/dashboard')
         }
        } catch (error) {
          console.log(error, 'error in front');
        }
    }

  return (
    <div className="wrapper">
      <div className="auth-modal">
        <div className="close-icon" onClick={() => setShowModal(false)}>
          x
        </div>
        <h2>{isSignup ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
        <p>By clicking Log In, you are agree to our Terms, Learn how we process your data in our Provacy and Cookie Policy </p>
        <form onSubmit={handelSubmit} >
            <input type="email" name='emali' id='emali' placeholder='example@email.com' required={true}
            onChange={(e) => setEmail(e.target.value)} />

            <input type="password" name='password' id='password' placeholder='password' required={true}
            onChange={(e) => setPassword(e.target.value)} />

           { isSignup && <input type="password" name='password-check' id='password-check' placeholder='confirm password' required={true}
            onChange={(e) => setConfermPassword(e.target.value)} />}

            <input className='secondary-button' type="submit" />
            <p>{error}</p>
        </form>
        <hr />
        <h2>GET THE APP</h2>
      </div>
    </div>
  );
};

export default AuthModal;
