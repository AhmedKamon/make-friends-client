import { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import ChatContainer from '../components/ChatContainer'
import axios from 'axios'
import { useCookies } from 'react-cookie';


const Dashboard = () => {
  const [user, setUser] = useState(null)
  const [gendereduser, setGenderedUser] = useState(null)
  const [lastDirection, setLastDirection] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
const UserId = cookies?.UserId





  useEffect(() =>{
    let calcen  = false
    const getUser = async () =>{
      try {
        const res = await axios.get('http://localhost:8000/user', {params:{UserId}})
        setUser(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    const getGenderUser = async () =>{
      console.log(user?.gender_interest);
      try {
        const res = await axios.get('http://localhost:8000/genderedUsers', {params:{gender:user?.gender_interest}})
      setGenderedUser(res.data)
      let calcen = true
      } catch (error) {
        console.log(error);
      }
    }
    getUser()
    getGenderUser()
  }, [calcen,user?.gender_interest,])


  const getUser = async () =>{
    try {
      const res = await axios.get('http://localhost:8000/user', {params:{UserId}})
      setUser(res.data)
    } catch (error) {
      console.log(error);
    }
  }

const updateMaches = async (matchedUserId) =>{
  try {
    await axios.put('http://localhost:8000/addmatch', {UserId, matchedUserId})
    getUser()
  } catch (error) {
    console.log(error);
  }
}

  

  const swiped = (direction, swipedUserId) => {
    if(direction === 'right'){
      updateMaches(swipedUserId)
    }
    setLastDirection(direction);
  };

  const outOfFrame = (first_name) => {
    console.log(first_name + ' left the screen!');
  };

  return (
    <div className="dashboard">
      <ChatContainer user={user}/>
      <div className="swiper-container">
        <div className="card-container">
          { gendereduser && gendereduser.map((character) => (
            <TinderCard

              className="swipe"
              key={character.first_name}
              onSwipe={(dir) => swiped(dir, character.user_id)}
              onCardLeftScreen={() => outOfFrame(character.first_name)}
            >
              <div
                style={{ backgroundImage: 'url(' + character.url + ')' }}
                className="card"
              >
                <h3>{character.first_name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
        <div className='swipe-info'>{lastDirection ? <p>you swiped {lastDirection}</p> : <p/> }</div>
      </div>
    </div>
  );
};

export default Dashboard;
