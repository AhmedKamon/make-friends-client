import React, { useState } from 'react';

const AuthModal = ({ setShowModal }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confermPassword, setConfermPassword] = useState('')
    const [error, setError] = useState('')
    const handelSubmit = (e) =>{
        e.preventDefault()
    }
  const isSignup = true;

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
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
