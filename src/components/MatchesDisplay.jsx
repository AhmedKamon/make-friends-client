import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MatchesDisplay = ({ matches, setClickeddUser }) => {
  const [matchesProfile, setMatchesProfile] = useState(null)
  const matchesUserIds = matches?.map(user_id => user_id.user_id)


  useEffect(() => {
    let cancel = false;
    const getMatches = async () => {
      if(matchesUserIds){

        try {
          const res = await axios.get('http://localhost:8000/users', {
            params: { userIds: JSON.stringify( matchesUserIds) }
          })
          setMatchesProfile(res.data)
          return
       
          
        } catch (error) {
          console.log(error)
        }
      }else return
    }
    getMatches().then(() => {
      if (cancel) return;
    });
   
  })

  return <div className='matches-display'>
    {
      matchesProfile?.map((match, _index) =>(
        <div key={_index} className='match-card' onClick={() =>setClickeddUser(match)}>
          <div className='image-container' >
            <img src={match?.url} alt={match?.first_name + ' profile'} />
          </div>
          <h3>{match?.first_name}</h3>
        </div>
      ))
    }
  </div>
}

export default MatchesDisplay
