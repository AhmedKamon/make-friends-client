import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import ChatContainer from '../components/ChatContainer'

const Dashboard = () => {
  const characters = [
    {
      name: 'Richard Hendricks',
      url: 'https://yourmodelmanagement.co.uk/admin/uploads/models/278460589__DSC9180.JPG',
    },
    {
      name: 'Erlich Bachman',
      url: './img/erlich.jpghttps://themumbaicity.com/wp-content/uploads/2020/11/8-3.jpg',
    },
    {
      name: 'Monica Hall',
      url: 'https://themumbaicity.com/wp-content/uploads/2020/11/8-3.jpg',
    },
    {
      name: 'Jared Dunn',
      url: 'https://themumbaicity.com/wp-content/uploads/2020/11/8-3.jpg',
    },
    {
      name: 'Dinesh Chugtai',
      url: 'https://themumbaicity.com/wp-content/uploads/2020/11/8-3.jpg',
    },
  ];

  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
  };

  return (
    <div className="dashboard">
      <ChatContainer/>
      <div className="swiper-container">
        <div className="card-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: 'url(' + character.url + ')' }}
                className="card"
              >
                <h3>{character.name}</h3>
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
