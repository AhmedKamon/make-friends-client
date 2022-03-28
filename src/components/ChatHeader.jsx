import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const ChatHeader = ({user}) => {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    let navigate = useNavigate()
    const logout = () =>{
        removeCookie('UserId', cookies.UserId)
        removeCookie('AuthToken', cookies.AuthToken)
        removeCookie('Email', cookies.Email)
        navigate('/')
        
    }
    return (
        <div className='chat-container-header'>
            <div className='profile'>
                <div className='image-container'>
                    <img src={user?.url} alt={user?.first_name} />
                </div>
                <h3>{user?.first_name}</h3>
            </div>
            <i className='logout-icon' onClick={logout} > 
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            </i>
        </div>
    );
};

export default ChatHeader;