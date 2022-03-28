import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Chat from './Chat';
import ChatInput from './ChatInput';

const ChatDisplay = ({user,clickedUser }) => {
    const [userMessages, setUserMessages] = useState(null)
    const [clickedUserMessages, setClickedUserMessages] = useState(null)
const userId  = user?.user_id
const clickedUserId = clickedUser?.user_id

    const getUserMessages = async () =>{
       try {
        const res = await axios.get('http://localhost:8000/messages', {
            params : { userId : userId, correspondingUserId : clickedUserId}
        })
        setUserMessages(res.data)
       } catch (error) {
           console.log(error);
       }
    }
    const getClickedUserMessages = async () =>{
       try {
        const res = await axios.get('http://localhost:8000/messages', {
            params : { userId : clickedUserId, correspondingUserId : userId}
        })
        setClickedUserMessages(res.data)
       } catch (error) {
           console.log(error);
       }
    }
    useEffect(() =>{
       getUserMessages()
       getClickedUserMessages()
    })

    const messages = []
    userMessages?.forEach(message =>{
        const formattedMessage = {}
        formattedMessage['name'] = user?.first_name
        formattedMessage['img'] = user?.url
        formattedMessage['massage'] = message?.message
        formattedMessage['timestamp'] = message?.timestamp
        messages.push(formattedMessage)
    })
    clickedUserMessages?.forEach(message =>{
        const formattedMessage = {}
        formattedMessage['name'] = clickedUser?.first_name
        formattedMessage['img'] = clickedUser?.url
        formattedMessage['massage'] = message?.message
        formattedMessage['timestamp'] = message?.timestamp
        messages.push(formattedMessage)
    })
   const desendingOrderMessages = messages?.sort((a,b) => a.timestamp.localeCompare(b.timestamp))
    return (
        <div>
           <Chat desendingOrderMessages={desendingOrderMessages} />
           <ChatInput user={user} clickedUser={clickedUser} getUsersMessages={getUserMessages} getClickedUserMessages={getClickedUserMessages} />
        </div>
    );
};

export default ChatDisplay;