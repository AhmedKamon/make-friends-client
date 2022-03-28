import axios from 'axios';
import React, { useState } from 'react';

const ChatInput = ({user,clickedUser, getUsersMessages, getClickedUserMessages}) => {
    const [textArea, setTextArea] = useState('')
    const userId = user?.user_id
    const clickedUserId = clickedUser?.user_id

    const addMessage = async () =>{
        const message = {
            timestamp: new Date().toISOString(),
            from_user_id: userId,
            to_user_id:clickedUserId,
            message: textArea,
        }
        try {
            const res  = await axios.post('http://localhost:8000/message', {message})
            getUsersMessages()
            getClickedUserMessages()
            setTextArea('')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='chat-input' >
           <textarea rows="" cols="" value={textArea} onChange={(e)=>setTextArea(e.target.value)}></textarea>
           <button className='secondary-button' onClick={addMessage} >Submit</button>
        </div>
    );
};

export default ChatInput;