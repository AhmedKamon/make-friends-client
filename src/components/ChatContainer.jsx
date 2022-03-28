import React, { useState } from 'react';
import ChatHeader from '../components/ChatHeader'
import MatchesDisplay from '../components/MatchesDisplay'
import ChatDisplay from '../components/ChatDisplay'

const ChatContainer = ({user}) => {
    const [clickedUser,setClickeddUser] = useState(null)
   
    return (
        <div className='chat-container'>
            <ChatHeader user={user}/>
            <div>
                <button className='option'  >Matches</button>
                <button className='option' disabled={!clickedUser} >Chat</button>
            </div>
           { !clickedUser && <MatchesDisplay matches={user?.matches} setClickeddUser={setClickeddUser} />  }
            { clickedUser && <ChatDisplay user={user} clickedUser={clickedUser} />}
        </div>
    );
};

export default ChatContainer;