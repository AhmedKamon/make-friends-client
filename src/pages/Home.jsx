import React from 'react';
import Navbar from '../components/Navbar';

const authToken = false;
const Home = () => {
  const handelClick = () => {
    console.log('clicked');
  };
  return (
    <>
      <Navbar />
      <div className="home">
        <h1>swip Right ©</h1>
        <button className="primary-button" onClick={handelClick}>
          {authToken ? 'SignOut' : 'Create Account'}
        </button>
      </div>
    </>
  );
};

export default Home;
