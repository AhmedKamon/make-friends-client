import { useState } from 'react';
import Navbar from '../components/Navbar';
import {useCookies} from 'react-cookie'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  let navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [formData, setFormData] = useState({
    user_id: cookies?.UserId,
    first_name: '',
    dob_day: '',
    dob_month: '',
    dob_year: '',
    show_gender: false,
    gender_identity: 'man',
    gender_interest: 'woman',
    email: cookies?.Email,
    url: '',
    about: '',
    matches: [],
  });
  const handelChange = (e) => {
    console.log(e);
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
 

  const handelSubmit = async (e) => {
    e.preventDefault()
    try {
     
     const response = await axios.put('http://localhost:8000/user',{ formData})
     const success =  response.status === 200

     if(success) {
      navigate('/dashboard')
     }else{
       console.log('faid');
     };
     

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar minimal={true} showModal={false} setShowModal={() => {}} />
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>

        <form onSubmit={handelSubmit}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="first_name"
              placeholder="first_name"
              required={true}
              value={formData.first_name}
              onChange={handelChange}
            />

            <label>Birthday</label>
            <div className="multiple-input-container">
              <input
                type="number"
                id="dob-day"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={formData.dob_day}
                onChange={handelChange}
              />
              <input
                type="number"
                id="dob-month"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={formData.dob_month}
                onChange={handelChange}
              />
              <input
                type="number"
                id="dob-year"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={formData.dob_year}
                onChange={handelChange}
              />
            </div>

            <label>Gender</label>
            <div className="multiple-input-container">
              <input
                type="radio"
                id="man-gender-identity"
                name="gender_identity"
                value={'man'}
                onChange={handelChange}
                checked={formData.gender_identity === 'man'}
              />
              <label htmlFor="man-gender-identity">Man</label>
              <input
                type="radio"
                id="woman-gender-identity"
                name="gender_identity"
                value={'woman'}
                onChange={handelChange}
                checked={formData.gender_identity === 'woman'}
              />
              <label htmlFor="woman-gender-identity">Woman</label>
              <input
                type="radio"
                id="more-gender-identity"
                name="gender_identity"
                value={'more'}
                onChange={handelChange}
                checked={formData.gender_identity === 'more'}
              />
              <label htmlFor="more-gender-identity">More</label>
            </div>

            <label htmlFor="show-gender"> Show gender on my profile</label>
            <input
              type="checkbox"
              id="show-gender"
              name="show_gender"
              onChange={handelChange}
              checked={formData.show_gender}
            />
            <label> Show Me</label>
            <div className="multiple-input-container">
              <input
                type="radio"
                id="man-gender-interest"
                name="gender_interest"
                value={'man'}
                onChange={handelChange}
                checked={formData.gender_interest === 'man'}
              />
              <label htmlFor="man-gender-interest">Man</label>
              <input
                type="radio"
                id="woman-gender-interest"
                name="gender_interest"
                value={'woman'}
                onChange={handelChange}
                checked={formData.gender_interest === 'woman'}
              />
              <label htmlFor="woman-gender-interest">Woman</label>
              <input
                type="radio"
                id="everyone-gender-interest"
                name="gender_interest"
                value={'everyone'}
                onChange={handelChange}
                checked={formData.gender_interest === 'everyone'}
              />
              <label htmlFor="everyone-gender-interest">Everyone</label>
            </div>
            <label htmlFor="about">About Me</label>
            <input
              type="text"
              name="about"
              id="about"
              required={true}
              placeholder="i like to code alone"
              value={formData.about}
              onChange={handelChange}
            />
            <input type="submit" className="secondary-button" />
          </section>

          <section>
            <label htmlFor="url">Profile Photo</label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={handelChange}
              required={true}
            />
            <div className="photo-container">
              { formData.url && <img src={formData.url} alt="" />}
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Onboarding;
