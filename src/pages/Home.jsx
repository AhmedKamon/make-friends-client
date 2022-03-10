import React, { useState } from 'react';
import AuthModal from '../components/AuthModal';
import Navbar from '../components/Navbar';

const authToken = false;

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignup, setIsSignup] = useState(true);

  const handelClick = () => {
    setShowModal(true);
    setIsSignup(true)
    
    console.log('clicked', showModal);
  };
  return (
    <div className="overlay">
      <Navbar
        minimal={false}
        authToken={authToken}
        showModal={showModal}
        setShowModal={setShowModal}
        setIsSignup={setIsSignup}
      />
      <div className="home">
        <h1 className='primary-title'>Start something epic </h1>
        <button className="primary-button" onClick={handelClick}>
          {authToken ? 'SignOut' : 'Create Account'}
        </button>
        {showModal && <AuthModal setShowModal={setShowModal} isSignup={isSignup}  />}
      </div>
    </div>
  );
};

export default Home;
