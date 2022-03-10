import useState from 'react';
import Navbar from '../components/Navbar';

const Onboarding = () => {
  const handelSubmit = () => {
      console.log('submited');
  };
  const handelChange = () => {
    console.log('changed');
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
              value={''}
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
                value={''}
                onChange={handelChange}
              />
              <input
                type="number"
                id="dob-month"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={''}
                onChange={handelChange}
              />
              <input
                type="number"
                id="dob-year"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={''}
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
                checked={false}
              />
              <label htmlFor="man-gender-identity">Man</label>
              <input
                type="radio"
                id="woman-gender-identity"
                name="gender_identity"
                value={'woman'}
                onChange={handelChange}
                checked={false}
              />
              <label htmlFor="woman-gender-identity">Woman</label>
              <input
                type="radio"
                id="more-gender-identity"
                name="gender_identity"
                value={'more'}
                onChange={handelChange}
                checked={false}
              />
              <label htmlFor="more-gender-identity">More</label>
            </div>

            <label htmlFor="show-gender"> Show gender on my profile</label>
            <input
                type="checkbox"
                id="show-gender"
                name="show_gender"
                onChange={handelChange}
                checked={false}
              />
              <label > Show Me</label>
              <div className='multiple-input-container'>
              <input
                type="radio"
                id="man-gender-interest"
                name="gender_interest"
                value={'man'}
                onChange={handelChange}
                checked={false}
              />
              <label htmlFor="man-gender-interest">Man</label>
              <input
                type="radio"
                id="woman-gender-interest"
                name="gender_interest"
                value={'woman'}
                onChange={handelChange}
                checked={false}
              />
              <label htmlFor="woman-gender-interest">Woman</label>
              <input
                type="radio"
                id="everyone-gender-interest"
                name="gender_interest"
                value={'everyont'}
                onChange={handelChange}
                checked={false}
              />
              <label htmlFor="more-gender-interest">Everyone</label>
              </div>
              <label htmlFor="about">About Me</label>
              <input type="text" name="about" id="about" required={true} placeholder='i like to code alone' value={''} onChange={handelChange} />
              <input type="submit" className='secondary-button' />
          </section>

          <section>
              <label htmlFor="url">Profile Photo</label>
              <input type="url" name="url" id="url" onChange={handelChange} required={true} />
              <div className='photo-container'>

              </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Onboarding;
