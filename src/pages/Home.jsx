import React, { useState } from 'react';
import AuthModal from '../components/AuthModal';
import Navbar from '../components/Navbar';

const authToken = false;

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handelClick = () => {
    setShowModal(true);
    console.log('clicked', showModal);
  };
  return (
    <div className="overlay">
      <Navbar
        minimal={false}
        authToken={authToken}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div className="home">
        <h1>Start something epic </h1>
        <button className="primary-button" onClick={handelClick}>
          {authToken ? 'SignOut' : 'Create Account'}
        </button>
        {showModal && <AuthModal setShowModal={setShowModal} />}
      </div>
    </div>
  );
};

export default Home;
